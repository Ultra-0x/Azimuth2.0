import { randomBytes } from "node:crypto";
import { Prisma } from "../../generated/prisma/client.js";
import { prisma } from "../../database/prisma.js";
import { env } from "../../config/env.js";

function generateReference(): string {
  return `AZM-DEP-${Date.now()}-${randomBytes(5)
    .toString("hex")
    .toUpperCase()}`;
}

export async function developmentFundAccount(
  accountId: string,
  amountInput: string,
  description = "Development test funding",
) {
  if (env.NODE_ENV === "production") {
    throw new Error(
      "Development funding is disabled in production.",
    );
  }

  const amount = new Prisma.Decimal(amountInput);

  if (amount.lte(0)) {
    throw new Error("Funding amount must be greater than zero.");
  }

  return prisma.$transaction(
    async (tx) => {
      const accounts = await tx.$queryRaw<
        Array<{
          id: string;
          status: string;
          currency: string;
          balance: Prisma.Decimal;
        }>
      >`
        SELECT
          "id",
          "status",
          "currency",
          "balance"
        FROM "Account"
        WHERE "id" = ${accountId}
        FOR UPDATE
      `;

      const account = accounts[0];

      if (!account) {
        throw new Error("Account could not be found.");
      }

      if (account.status !== "ACTIVE") {
        throw new Error("The account is not active.");
      }

      const balanceAfter = account.balance.add(amount);

      await tx.account.update({
        where: {
          id: account.id,
        },
        data: {
          balance: balanceAfter,
        },
      });

      const transaction = await tx.transaction.create({
        data: {
          reference: generateReference(),
          type: "DEPOSIT",
          status: "COMPLETED",
          amount,
          currency: account.currency,
          description,
          channel: "SYSTEM",
          recipientAccountId: account.id,
          metadata: {
            source: "development-funding",
          },
        },
      });

      await tx.ledgerEntry.create({
        data: {
          transactionId: transaction.id,
          accountId: account.id,
          direction: "CREDIT",
          amount,
          currency: account.currency,
          balanceAfter,
        },
      });

      return {
        transaction,
        balanceBefore: account.balance,
        balanceAfter,
      };
    },
    {
      isolationLevel: Prisma.TransactionIsolationLevel.Serializable,
    },
  );
}