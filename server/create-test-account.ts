import { prisma } from "./src/database/prisma.js";

async function main() {
  const user = await prisma.user.findUnique({
    where: {
      email: "test@azimuth.com",
    },
    select: {
      id: true,
    },
  });

  if (!user) {
    throw new Error("User not found.");
  }

  const account = await prisma.account.create({
    data: {
      userId: user.id,
      accountNumber: `17${Date.now()}`,
      type: "CURRENT",
      status: "ACTIVE",
      currency: "USD",
      balance: 0,
    },
  });

  console.log("Created account:", account);
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  })