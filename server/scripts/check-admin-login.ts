import argon2 from "argon2";
import { prisma } from "../src/database/prisma.js";

async function main() {
  const email = "odunukan@azimuth.com";
  const password = "Odunukan";

  const user = await prisma.user.findUnique({
    where: { email },
  });

  console.log("userFound:", Boolean(user));
  console.log("storedEmail:", user?.email ?? "null");
  console.log("storedRole:", user?.role ?? "null");
  console.log("status:", user?.status ?? "null");
  console.log("emailVerified:", user?.emailVerifiedAt ?? "null");

  if (user) {
    const valid = await argon2.verify(user.passwordHash, password);
    console.log("passwordValid:", valid);
  }

  await prisma.$disconnect();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
