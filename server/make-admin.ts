import { prisma } from "./src/database/prisma.js";

async function main() {
  const email = process.argv[2]?.trim().toLowerCase();

  if (!email) {
    console.error("Usage: npx tsx make-admin.ts <email>");
    process.exit(1);
  }

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      role: true,
    },
  });

  if (!user) {
    console.error(`No user found with email: ${email}`);
    return;
  }

  if (user.role === "ADMIN") {
    console.log(`${user.email} is already an ADMIN.`);
    return;
  }

  const updatedUser = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      role: "ADMIN",
    },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      role: true,
    },
  });

  console.log("Admin role granted:");
  console.log(updatedUser);
}

main()
  .catch((error) => {
    console.error("Failed to grant admin role:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });