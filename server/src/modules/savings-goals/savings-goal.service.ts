import { randomUUID } from "node:crypto";
import { prisma } from "../../database/prisma.js";
import {
  Prisma,
  type SavingsGoalStatus,
} from "../../generated/prisma/client.js";

export interface SavingsGoalListFilters {
  status?: SavingsGoalStatus;
}

const savingsGoalSelect = {
  id: true,
  accountId: true,
  name: true,
  targetAmount: true,
  currentAmount: true,
  currency: true,
  targetDate: true,
  status: true,
  createdAt: true,
  updatedAt: true,
} as const;

export async function createSavingsGoal(
  userId: string,
  accountId: string,
  name: string,
  targetAmount: number,
  targetDate?: string,
) {
  const account = await prisma.account.findFirst({
    where: {
      id: accountId,
      userId,
    },
    select: {
      id: true,
      type: true,
      status: true,
      currency: true,
    },
  });

  if (!account) {
    throw new Error("Account not found.");
  }

  if (account.type !== "SAVINGS") {
    throw new Error(
      "Savings goals can only be linked to savings accounts.",
    );
  }

  if (account.status !== "ACTIVE") {
    throw new Error(
      "The savings account must be active.",
    );
  }

  const goal = await prisma.savingsGoal.create({
    data: {
      userId,
      accountId,
      name,
      targetAmount,
      currency: account.currency,
      ...(targetDate !== undefined
        ? {
            targetDate: new Date(targetDate),
          }
        : {}),
    },
    select: savingsGoalSelect,
  });

  return goal;
}

export async function getSavingsGoals(
  userId: string,
  page: number,
  limit: number,
  filters: SavingsGoalListFilters = {},
) {
  const skip = (page - 1) * limit;

  const where = {
    userId,
    ...(filters.status !== undefined
      ? {
          status: filters.status,
        }
      : {}),
  };

  const [goals, total] = await prisma.$transaction([
    prisma.savingsGoal.findMany({
      where,
      select: savingsGoalSelect,
      orderBy: {
        createdAt: "desc",
      },
      skip,
      take: limit,
    }),

    prisma.savingsGoal.count({
      where,
    }),
  ]);

  return {
    goals,
    total,
  };
}

export async function getSavingsGoal(
  userId: string,
  goalId: string,
) {
  return prisma.savingsGoal.findFirst({
    where: {
      id: goalId,
      userId,
    },
    select: savingsGoalSelect,
  });
}

export async function updateSavingsGoal(
  userId: string,
  goalId: string,
  data: {
    name?: string;
    targetAmount?: number;
    targetDate?: string | null;
  },
) {
  const goal = await prisma.savingsGoal.findFirst({
    where: {
      id: goalId,
      userId,
    },
    select: {
      id: true,
      currentAmount: true,
      status: true,
    },
  });

  if (!goal) {
    throw new Error("Savings goal not found.");
  }

  if (
    goal.status === "COMPLETED" ||
    goal.status === "CANCELLED"
  ) {
    throw new Error(
      "This savings goal cannot be updated.",
    );
  }

  if (
    data.targetAmount !== undefined &&
    new Prisma.Decimal(data.targetAmount).lessThanOrEqualTo(
      goal.currentAmount,
    )
  ) {
    throw new Error(
      "Target amount must be greater than the current saved amount.",
    );
  }

  return prisma.savingsGoal.update({
    where: {
      id: goal.id,
    },
    data: {
      ...(data.name !== undefined
        ? {
            name: data.name,
          }
        : {}),

      ...(data.targetAmount !== undefined
        ? {
            targetAmount: data.targetAmount,
          }
        : {}),

      ...(data.targetDate !== undefined
        ? {
            targetDate:
              data.targetDate === null
                ? null
                : new Date(data.targetDate),
          }
        : {}),
    },
    select: savingsGoalSelect,
  });
}

export async function updateSavingsGoalStatus(
  userId: string,
  goalId: string,
  status: Extract<
    SavingsGoalStatus,
    "ACTIVE" | "PAUSED" | "CANCELLED"
  >,
) {
  const goal = await prisma.savingsGoal.findFirst({
    where: {
      id: goalId,
      userId,
    },
    select: {
      id: true,
      status: true,
    },
  });

  if (!goal) {
    throw new Error("Savings goal not found.");
  }

  if (goal.status === "COMPLETED") {
    throw new Error(
      "A completed savings goal cannot be changed.",
    );
  }

  if (
    goal.status === "CANCELLED" &&
    status !== "CANCELLED"
  ) {
    throw new Error(
      "A cancelled savings goal cannot be resumed.",
    );
  }

  return prisma.savingsGoal.update({
    where: {
      id: goal.id,
    },
    data: {
      status,
    },
    select: savingsGoalSelect,
  });
}

export async function contributeToSavingsGoal(
  userId: string,
  goalId: string,
  sourceAccountId: string,
  amount: number,
  idempotencyKey: string,
) {
  if (amount <= 0) {
    throw new Error(
      "Contribution amount must be greater than zero.",
    );
  }

  return prisma.$transaction(
    async (tx) => {
      const existingTransaction =
        await tx.transaction.findUnique({
          where: {
            idempotencyKey,
          },
          select: {
            id: true,
            savingsGoalContribution: {
              select: {
                id: true,
                goalId: true,
                amount: true,
                currency: true,
                createdAt: true,
              },
            },
          },
        });

      if (existingTransaction) {
        if (
          existingTransaction.savingsGoalContribution &&
          existingTransaction.savingsGoalContribution.goalId ===
            goalId
        ) {
          return {
            transactionId: existingTransaction.id,
            contribution:
              existingTransaction.savingsGoalContribution,
            idempotent: true,
          };
        }

        throw new Error(
          "This idempotency key has already been used.",
        );
      }

      const goal = await tx.savingsGoal.findFirst({
        where: {
          id: goalId,
          userId,
        },
        select: {
          id: true,
          accountId: true,
          targetAmount: true,
          currentAmount: true,
          currency: true,
          status: true,
        },
      });

      if (!goal) {
        throw new Error("Savings goal not found.");
      }

      if (goal.status !== "ACTIVE") {
        throw new Error(
          "Only active savings goals can receive contributions.",
        );
      }

      const sourceAccount =
        await tx.account.findFirst({
          where: {
            id: sourceAccountId,
            userId,
          },
          select: {
            id: true,
            type: true,
            status: true,
            currency: true,
            balance: true,
          },
        });

      if (!sourceAccount) {
        throw new Error("Source account not found.");
      }

      if (sourceAccount.status !== "ACTIVE") {
        throw new Error(
          "The source account must be active.",
        );
      }

      if (
        sourceAccount.currency !== goal.currency
      ) {
        throw new Error(
          "Source account and savings goal currencies must match.",
        );
      }

      if (sourceAccount.id === goal.accountId) {
        throw new Error(
          "The source account cannot be the savings goal account.",
        );
      }

      const contributionAmount =
        new Prisma.Decimal(amount);

      if (
        sourceAccount.balance.lessThan(
          contributionAmount,
        )
      ) {
        throw new Error(
          "Insufficient funds.",
        );
      }

      const sourceLocked =
        await tx.$queryRaw<
          Array<{
            id: string;
            balance: Prisma.Decimal;
          }>
        >`
          SELECT id, balance
          FROM "Account"
          WHERE id = ${sourceAccount.id}
          FOR UPDATE
        `;

      const goalAccountLocked =
        await tx.$queryRaw<
          Array<{
            id: string;
            balance: Prisma.Decimal;
          }>
        >`
          SELECT id, balance
          FROM "Account"
          WHERE id = ${goal.accountId}
          FOR UPDATE
        `;

      if (
        sourceLocked.length === 0 ||
        goalAccountLocked.length === 0
      ) {
        throw new Error(
          "Unable to lock the required accounts.",
        );
      }

      const lockedSourceBalance =
      sourceLocked[0]!.balance;

      if (
        lockedSourceBalance.lessThan(
          contributionAmount,
        )
      ) {
        throw new Error(
          "Insufficient funds.",
        );
      }

      const lockedGoalBalance =
        goalAccountLocked[0]!.balance;

      const newSourceBalance =
        lockedSourceBalance.minus(
          contributionAmount,
        );

      const newGoalAccountBalance =
        lockedGoalBalance.plus(
          contributionAmount,
        );

      const newGoalAmount =
        goal.currentAmount.plus(
          contributionAmount,
        );

      const transaction =
        await tx.transaction.create({
          data: {
            reference: `SG-${randomUUID()}`,
            idempotencyKey,
            type: "TRANSFER",
            status: "COMPLETED",
            amount: contributionAmount,
            currency: goal.currency,
            description: "Savings goal contribution",
            channel: "INTERNAL",
            userId,
            senderAccountId: sourceAccount.id,
            recipientAccountId: goal.accountId,
          },
          select: {
            id: true,
            reference: true,
            amount: true,
            currency: true,
            status: true,
            createdAt: true,
          },
        });

      await tx.account.update({
        where: {
          id: sourceAccount.id,
        },
        data: {
          balance: newSourceBalance,
        },
      });

      await tx.account.update({
        where: {
          id: goal.accountId,
        },
        data: {
          balance: newGoalAccountBalance,
        },
      });

      await tx.ledgerEntry.createMany({
        data: [
          {
            transactionId: transaction.id,
            accountId: sourceAccount.id,
            direction: "DEBIT",
            amount: contributionAmount,
            currency: goal.currency,
            balanceAfter: newSourceBalance,
          },
          {
            transactionId: transaction.id,
            accountId: goal.accountId,
            direction: "CREDIT",
            amount: contributionAmount,
            currency: goal.currency,
            balanceAfter: newGoalAccountBalance,
          },
        ],
      });

      const newStatus =
        newGoalAmount.greaterThanOrEqualTo(
          goal.targetAmount,
        )
          ? "COMPLETED"
          : "ACTIVE";

      const updatedGoal =
        await tx.savingsGoal.update({
          where: {
            id: goal.id,
          },
          data: {
            currentAmount: newGoalAmount,
            status: newStatus,
          },
          select: savingsGoalSelect,
        });

      const contribution =
        await tx.savingsGoalContribution.create({
          data: {
            goalId: goal.id,
            transactionId: transaction.id,
            amount: contributionAmount,
            currency: goal.currency,
          },
          select: {
            id: true,
            goalId: true,
            transactionId: true,
            amount: true,
            currency: true,
            createdAt: true,
          },
        });

      return {
        transaction,
        contribution,
        goal: updatedGoal,
        idempotent: false,
      };
    },
    {
      isolationLevel:
        Prisma.TransactionIsolationLevel.Serializable,
    },
  );
}