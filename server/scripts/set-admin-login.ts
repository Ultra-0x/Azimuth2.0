import argon2 from "argon2";
import { prisma } from "../src/database/prisma.js";

async function main() {
  const email = "odunukan@azimuth.com";
  const password = "Odunukan";

  const passwordHash = await argon2.hash(password);

  const existing = await prisma.user.findFirst({
    where: {
      OR: [{ email }, { email: "Odunukan@azimuth.com" }],
    },
  });

  if (existing) {
    await prisma.user.update({
      where: { id: existing.id },
      data: {
        email,
        passwordHash,
        firstName: existing.firstName || "Odunukan",
        lastName: existing.lastName || "Admin",
        status: "ACTIVE",
        role: "ADMIN",
        emailVerifiedAt: new Date(),
        failedLoginAttempts: 0,
        lockedUntil: null,
      },
    });

    console.log("Updated admin user:", email);
    return;
  }

  const user = await prisma.user.create({
    data: {
      email,
      passwordHash,
      firstName: "Odunukan",
      lastName: "Admin",
      status: "ACTIVE",
      role: "ADMIN",
      emailVerifiedAt: new Date(),
    },
  });

  console.log("Created admin user:", user.email);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
