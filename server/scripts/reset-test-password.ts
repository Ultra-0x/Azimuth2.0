import "dotenv/config";
import argon2 from "argon2";
import { prisma } from "../src/database/prisma.js";

async function main() {
  const email = "test@azimuth.com";
  const newPassword = "AzimuthTest@2026!";

  const passwordHash = await argon2.hash(newPassword);

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error(`User not found: ${email}`);
  }

  await prisma.$transaction(async (tx) => {
    await tx.user.update({
      where: { id: user.id },
      data: {
        passwordHash,
        passwordChangedAt: new Date(),
        failedLoginAttempts: 0,
        lockedUntil: null,
      },
    });

    await tx.session.updateMany({
      where: {
        userId: user.id,
        revokedAt: null,
      },
      data: {
        revokedAt: new Date(),
      },
    });
  });

  console.log(`Password reset successfully for ${email}`);
  console.log(`New development password: ${newPassword}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });