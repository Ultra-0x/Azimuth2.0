import "dotenv/config";
import { Prisma } from "../src/generated/prisma/client.js";
import { prisma } from "../src/database/prisma.js";

const email = process.argv[2];
const amountInput = process.argv[3];

if (!email || !amountInput) {
  console.error(
    "Usage: npx tsx scripts/dev-fund-account.ts <email> <amount>",
  );
  process.exit(1);
}

if (process.env.NODE_ENV === "production") {
  console.error("This development funding script cannot run in production.");
  process.exit(1);
}

const amount = new Prisma.Decimal(amountInput);

if (amount.lte(0)) {
  console.error("Funding amount must be greater than zero.");
  process.exit(1);
}

async function main() {
  const user = await prisma.user.findUnique({
    where: {
      email: email.toLowerCase(),
    },
    include: {
      accounts: {
        where: {
          type: "SAVINGS",
          status: "ACTIVE",
        },
        orderBy: {
          createdAt: "asc",
        },
        take: 1,
      },
    },
  });

  if (!user) {
    throw new Error("User not found.");
  }

  const account = user.accounts[0];

  if (!account) {
    throw new Error("No active savings account found for this user.");
  }

  const result = await prisma.$transaction(async (tx) => {
    const lockedAccounts = await tx.$queryRaw<
      Array<{
        id: string;
        balance: Prisma.Decimal;
      }>
    >`
      SELECT
        "id",
        "balance"
      FROM "Account"
      WHERE "id" = ${account.id}
      FOR UPDATE
    `;

    if (lockedAccounts.length !== 1) {
      throw new Error("Unable to lock the account.");
    }

    const reference = `AZM-DEV-${Date.now()}-${Math.random()
      .toString(36)
      .slice(2, 8)
      .toUpperCase()}`;

    await tx.account.update({
      where: {
        id: account.id,
      },
      data: {
        balance: {
          increment: amount,
        },
      },
    });

    const transaction = await tx.transaction.create({
      data: {
        reference,
        type: "DEPOSIT",
        status: "COMPLETED",
        amount,
        currency: account.currency,
        description: "Development funding",
        channel: "SYSTEM",
        recipientAccountId: account.id,
        userId: user.id,
        metadata: {
          source: "development_script",
          environment: process.env.NODE_ENV ?? "development",
        },
      },
    });

    return {
      transaction,
      previousBalance: lockedAccounts[0].balance,
      newBalance: lockedAccounts[0].balance.add(amount),
    };
  });

  console.log("Development funding successful.");
  console.log(`User: ${user.email}`);
  console.log(`Account: ${account.accountNumber}`);
  console.log(`Amount: $${amount.toFixed(2)}`);
  console.log(
    `Previous balance: $${result.previousBalance.toFixed(2)}`,
  );
  console.log(
    `New balance: $${result.newBalance.toFixed(2)}`,
  );
  console.log(`Transaction: ${result.transaction.reference}`);
}

main()
  .catch((error) => {
    console.error(
      error instanceof Error ? error.message : error,
    );
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });