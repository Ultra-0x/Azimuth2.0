import { createHash, randomBytes } from "node:crypto";
import { prisma } from "../../database/prisma.js";
import { Prisma } from "../../generated/prisma/client.js";
import type { CreateTransferInput } from "./transfer.schemas.js";

export class TransferError extends Error {
  constructor(
    message: string,
    public readonly code = "TRANSFER_ERROR",
  ) {
    super(message);
    this.name = "TransferError";
  }
}

function generateReference(prefix: string): string {
  return `AZM-${prefix}-${Date.now()}-${randomBytes(5)
    .toString("hex")
    .toUpperCase()}`;
}

function hashChallenge(value: string): string {
  return createHash("sha256").update(value).digest("hex");
}

export async function createTransfer(
  userId: string,
  input: CreateTransferInput,
) {
  const amount = new Prisma.Decimal(input.amount);

  return prisma.$transaction(
    async (tx) => {
      const existingTransfer = await tx.transfer.findUnique({
        where: {
          idempotencyKey: input.idempotencyKey,
        },
      });

      if (existingTransfer) {
        if (existingTransfer.userId !== userId) {
          throw new TransferError(
            "This idempotency key has already been used.",
          );
        }

        const recipient =
          await tx.account.findUnique({
            where: {
              accountNumber: input.toAccountNumber,
            },
            select: {
              id: true,
            },
          });

        if (!recipient) {
          throw new TransferError(
            "The destination account could not be found.",
          );
        }

        const sameRequest =
          existingTransfer.fromAccountId ===
            input.fromAccountId &&
          existingTransfer.toAccountId ===
            recipient.id &&
          existingTransfer.amount.equals(amount) &&
          existingTransfer.description ===
            (input.description ?? null);

        if (!sameRequest) {
          throw new TransferError(
            "This idempotency key has already been used for a different transfer.",
          );
        }

        return {
          transfer: existingTransfer,
          transaction: null,
          replayed: true,
        };
      }

      /*
       * Resolve the recipient's public account number
       * to the internal database account ID.
       *
       * Account IDs never need to be exposed to customers.
       */
      const recipientLookup =
        await tx.account.findUnique({
          where: {
            accountNumber: input.toAccountNumber,
          },
          select: {
            id: true,
          },
        });

      if (!recipientLookup) {
        throw new TransferError(
          "The destination account could not be found.",
        );
      }

      if (
        input.fromAccountId ===
        recipientLookup.id
      ) {
        throw new TransferError(
          "You cannot transfer money to the same account.",
        );
      }

      /*
       * Lock both accounts in deterministic order.
       *
       * This protects the transfer against concurrent
       * balance changes and reduces deadlock risk.
       */
      const accountIds = [
        input.fromAccountId,
        recipientLookup.id,
      ].sort();

      const accounts = await tx.$queryRaw<
        Array<{
          id: string;
          userId: string;
          status: string;
          currency: string;
          balance: Prisma.Decimal;
        }>
      >`
        SELECT
          "id",
          "userId",
          "status",
          "currency",
          "balance"
        FROM "Account"
        WHERE "id" IN (${Prisma.join(accountIds)})
        ORDER BY "id"
        FOR UPDATE
      `;

      if (accounts.length !== 2) {
        throw new TransferError(
          "One or both accounts could not be found.",
        );
      }

      const sender = accounts.find(
        (account) =>
          account.id === input.fromAccountId,
      );

      const recipient = accounts.find(
        (account) =>
          account.id === recipientLookup.id,
      );

      if (!sender || !recipient) {
        throw new TransferError(
          "One or both accounts could not be found.",
        );
      }

      if (sender.userId !== userId) {
        throw new TransferError(
          "You do not have access to the sending account.",
        );
      }

      if (sender.status !== "ACTIVE") {
        throw new TransferError(
          "The sending account is not active.",
        );
      }

      if (recipient.status !== "ACTIVE") {
        throw new TransferError(
          "The recipient account is not active.",
        );
      }

      if (
        sender.currency !==
        recipient.currency
      ) {
        throw new TransferError(
          "Transfers between different currencies are not supported.",
        );
      }

      if (sender.balance.lt(amount)) {
        throw new TransferError(
          "Insufficient funds.",
        );
      }

      const transfer =
        await tx.transfer.create({
          data: {
            reference:
              generateReference("TRF"),
            idempotencyKey:
              input.idempotencyKey,
            userId,
            fromAccountId:
              sender.id,
            toAccountId:
              recipient.id,
            amount,
            currency:
              sender.currency,
            description:
              input.description ??
              null,
            status: "PENDING",
          },
        });

      return {
        transfer,
        transaction: null,
        replayed: false,
      };
    },
    {
      isolationLevel:
        Prisma.TransactionIsolationLevel.Serializable,
    },
  );
}

export async function completeAuthenticatedTransfer(
  userId: string,
  transferId: string,
  challenge: string,
) {
  const challengeHash = hashChallenge(challenge);

  return prisma.$transaction(
    async (tx) => {
      /*
       * Lock the authentication challenge first.
       *
       * This prevents two simultaneous requests from successfully
       * consuming the same challenge.
       */
      const authChallenges = await tx.$queryRaw<
  Array<{
    id: string;
    userId: string;
    transferId: string | null;
    method: "PASSWORD" | "PIN" | "OTP";
    challengeHash: string;
    expiresAt: Date;
    consumedAt: Date | null;
    attempts: number;
    maxAttempts: number;
    createdAt: Date;
  }>
>`
  SELECT
    "id",
    "userId",
    "transferId",
    "method",
    "challengeHash",
    "expiresAt",
    "consumedAt",
    "attempts",
    "maxAttempts",
    "createdAt"
  FROM "TransactionAuthChallenge"
  WHERE "challengeHash" = ${challengeHash}
  FOR UPDATE
`;

const authChallenge = authChallenges[0];

      if (!authChallenge) {
        throw new TransferError(
          "Invalid transaction authentication challenge.",
        );
      }

      if (authChallenge.userId !== userId) {
        throw new TransferError(
          "Invalid transaction authentication challenge.",
        );
      }

      if (authChallenge.transferId !== transferId) {
  throw new TransferError(
    "Invalid transaction authentication challenge.",
  );
}

      if (authChallenge.consumedAt) {
        throw new TransferError(
          "This transaction authentication challenge has already been used.",
        );
      }

      if (authChallenge.expiresAt <= new Date()) {
        throw new TransferError(
          "This transaction authentication challenge has expired.",
        );
      }

      if (
        authChallenge.attempts >=
        authChallenge.maxAttempts
      ) {
        throw new TransferError(
          "This transaction authentication challenge has been locked.",
        );
      }

      /*
       * Lock the transfer itself.
       *
       * A transfer must never be completed twice.
       */
      const transfers = await tx.$queryRaw<
        Array<{
          id: string;
          userId: string;
          fromAccountId: string;
          toAccountId: string;
          amount: Prisma.Decimal;
          currency: string;
          description: string | null;
          status: string;
          reference: string;
        }>
      >`
        SELECT
          "id",
          "userId",
          "fromAccountId",
          "toAccountId",
          "amount",
          "currency",
          "description",
          "status",
          "reference"
        FROM "Transfer"
        WHERE
          "id" = ${transferId}
          AND "userId" = ${userId}
        FOR UPDATE
      `;

      const transfer = transfers[0];

      if (!transfer) {
        throw new TransferError("Transfer not found.");
      }

      if (transfer.status !== "PENDING") {
        throw new TransferError(
          "This transfer has already been processed.",
        );
      }

      /*
       * Lock both accounts in deterministic order.
       *
       * This reduces the possibility of deadlocks when multiple
       * transfers happen simultaneously between the same accounts.
       */
      const accountIds = [
        transfer.fromAccountId,
        transfer.toAccountId,
      ].sort();

      const accounts = await tx.$queryRaw<
        Array<{
          id: string;
          userId: string;
          status: string;
          currency: string;
          balance: Prisma.Decimal;
        }>
      >`
        SELECT
          "id",
          "userId",
          "status",
          "currency",
          "balance"
        FROM "Account"
        WHERE "id" IN (${Prisma.join(accountIds)})
        ORDER BY "id"
        FOR UPDATE
      `;

      if (accounts.length !== 2) {
        throw new TransferError(
          "One or both accounts could not be found.",
        );
      }

      const sender = accounts.find(
        (account) =>
          account.id === transfer.fromAccountId,
      );

      const recipient = accounts.find(
        (account) =>
          account.id === transfer.toAccountId,
      );

      if (!sender || !recipient) {
        throw new TransferError(
          "One or both accounts could not be found.",
        );
      }

      if (sender.userId !== userId) {
        throw new TransferError(
          "You do not have access to the sending account.",
        );
      }

      if (sender.status !== "ACTIVE") {
        throw new TransferError(
          "The sending account is not active.",
        );
      }

      if (recipient.status !== "ACTIVE") {
        throw new TransferError(
          "The recipient account is not active.",
        );
      }

      if (sender.currency !== recipient.currency) {
        throw new TransferError(
          "Transfers between different currencies are not supported.",
        );
      }

      if (sender.currency !== transfer.currency) {
        throw new TransferError(
          "Transfer currency does not match account currency.",
        );
      }

      if (sender.balance.lt(transfer.amount)) {
        throw new TransferError("Insufficient funds.");
      }

      const senderBalanceAfter = sender.balance.sub(
        transfer.amount,
      );

      const recipientBalanceAfter = recipient.balance.add(
        transfer.amount,
      );

      /*
       * Move the money.
       */
      await tx.account.update({
        where: {
          id: sender.id,
        },
        data: {
          balance: senderBalanceAfter,
        },
      });

      await tx.account.update({
        where: {
          id: recipient.id,
        },
        data: {
          balance: recipientBalanceAfter,
        },
      });


      /*
       * Create the immutable financial transaction.
       */
      const transaction = await tx.transaction.create({
        data: {
          reference: generateReference("TXN"),
          type: "TRANSFER",
          status: "COMPLETED",
          amount: transfer.amount,
          currency: transfer.currency,
          description: transfer.description,
          channel: "WEB",
          senderAccountId: sender.id,
          recipientAccountId: recipient.id,
          userId,
          metadata: {
            transferId: transfer.id,
            transferReference: transfer.reference,
          },
        },
      });

      /*
       * Create the double-entry ledger records.
       */
      await tx.ledgerEntry.createMany({
        data: [
          {
            transactionId: transaction.id,
            accountId: sender.id,
            direction: "DEBIT",
            amount: transfer.amount,
            currency: transfer.currency,
            balanceAfter: senderBalanceAfter,
          },
          {
            transactionId: transaction.id,
            accountId: recipient.id,
            direction: "CREDIT",
            amount: transfer.amount,
            currency: transfer.currency,
            balanceAfter: recipientBalanceAfter,
          },
        ],
      });

      /*
       * Mark the transfer as completed.
       */
      await tx.transfer.update({
        where: {
          id: transfer.id,
        },
        data: {
          status: "COMPLETED",
          transactionId: transaction.id,
        },
      });

      /*
       * Consume the authentication challenge LAST.
       *
       * If anything above fails, the entire transaction rolls back,
       * including this challenge consumption.
       */
      await tx.transactionAuthChallenge.update({
        where: {
          id: authChallenge.id,
        },
        data: {
          consumedAt: new Date(),
        },
      });

      return {
        transfer: {
          ...transfer,
          status: "COMPLETED" as const,
          transactionId: transaction.id,
        },
        transaction,
        replayed: false,
      };
    },
    {
      isolationLevel:
        Prisma.TransactionIsolationLevel.Serializable,
    },
  );
}
