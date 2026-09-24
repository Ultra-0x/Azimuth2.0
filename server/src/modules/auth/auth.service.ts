import argon2 from "argon2";
import { createHash, randomBytes } from "node:crypto";
import { prisma } from "../../database/prisma.js";
import { createSession } from "./session.service.js";
import type { LoginInput, RegisterInput } from "./auth.schemas.js";

const MAX_FAILED_ATTEMPTS = 5;
const LOCKOUT_DURATION_MS = 15 * 60 * 1000;
const EMAIL_VERIFICATION_DURATION_MS = 24 * 60 * 60 * 1000;

function generateAccountNumber(): string {
  const timestamp = Date.now().toString().slice(-8);
  const random = Math.floor(1000 + Math.random() * 9000);

  return `${timestamp}${random}`;
}

function hashToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

function generateVerificationToken() {
  const token = randomBytes(32).toString("hex");

  return {
    token,
    tokenHash: hashToken(token),
  };
}

export async function registerUser(input: RegisterInput) {
  const email = input.email.toLowerCase();

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error("An account with this email already exists.");
  }

  const passwordHash = await argon2.hash(input.password);

  const verification = generateVerificationToken();

  const user = await prisma.$transaction(async (tx) => {
    const createdUser = await tx.user.create({
      data: {
        email,
        passwordHash,
        firstName: input.firstName,
        lastName: input.lastName,
        phone: input.phone ?? null,

        emailVerificationTokenHash: verification.tokenHash,
        emailVerificationExpiresAt: new Date(
          Date.now() + EMAIL_VERIFICATION_DURATION_MS,
        ),

        passwordChangedAt: new Date(),
      },
    });

    await tx.account.create({
      data: {
        userId: createdUser.id,
        accountNumber: generateAccountNumber(),
        type: "SAVINGS",
        currency: "USD",
        balance: 0,
      },
    });

    return createdUser;
  });

  /*
   * Development only:
   * In production this token should be delivered through an email provider.
   */
  if (process.env.NODE_ENV !== "production") {
    console.log(
      `[DEV] Email verification token for ${user.email}: ${verification.token}`,
    );
  }

  return {
    id: user.id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    phone: user.phone,
    status: user.status,
    emailVerified: false,
    createdAt: user.createdAt,
  };
}

export async function loginUser(
  input: LoginInput,
  metadata?: {
    ipAddress?: string;
    userAgent?: string;
  },
) {
  const email = input.email.toLowerCase();

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error("Invalid email or password.");
  }

  if (user.status !== "ACTIVE") {
    throw new Error("This account is not available for login.");
  }

  if (!user.emailVerifiedAt) {
  throw new Error("Email verification is required before login.");
}

  if (user.lockedUntil && user.lockedUntil > new Date()) {
    throw new Error(
      "Too many failed login attempts. Please try again later.",
    );
  }

  if (user.lockedUntil && user.lockedUntil <= new Date()) {
    await prisma.user.update({
      where: { id: user.id },
      data: {
        failedLoginAttempts: 0,
        lockedUntil: null,
      },
    });
  }

  const passwordValid = await argon2.verify(
    user.passwordHash,
    input.password,
  );

  if (!passwordValid) {
    const failedAttempts = user.failedLoginAttempts + 1;

    const shouldLock = failedAttempts >= MAX_FAILED_ATTEMPTS;

    await prisma.user.update({
      where: { id: user.id },
      data: {
        failedLoginAttempts: shouldLock ? 0 : failedAttempts,
        lockedUntil: shouldLock
          ? new Date(Date.now() + LOCKOUT_DURATION_MS)
          : null,
      },
    });

    throw new Error("Invalid email or password.");
  }

  const session = await createSession(user.id, metadata);

  await prisma.user.update({
    where: { id: user.id },
    data: {
      failedLoginAttempts: 0,
      lockedUntil: null,
    },
  });

  return {
    session,
    user: {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
      status: user.status,
      emailVerifiedAt: user.emailVerifiedAt,
      createdAt: user.createdAt,
    },
  };
}

export async function changePassword(
  userId: string,
  currentPassword: string,
  newPassword: string,
) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    throw new Error("User not found.");
  }

  const valid = await argon2.verify(
    user.passwordHash,
    currentPassword,
  );

  if (!valid) {
    throw new Error("Current password is incorrect.");
  }

  if (currentPassword === newPassword) {
    throw new Error(
      "New password must be different from your current password.",
    );
  }

  const passwordHash = await argon2.hash(newPassword);

  await prisma.$transaction(async (tx) => {
    await tx.user.update({
      where: { id: userId },
      data: {
        passwordHash,
        passwordChangedAt: new Date(),
      },
    });

    /*
     * Password changes invalidate all existing sessions.
     * The current session will be recreated by the controller.
     */
    await tx.session.updateMany({
      where: {
        userId,
        revokedAt: null,
      },
      data: {
        revokedAt: new Date(),
      },
    });
  });
}

export async function verifyEmail(token: string) {
  const tokenHash = hashToken(token);

  const user = await prisma.user.findUnique({
    where: {
      emailVerificationTokenHash: tokenHash,
    },
  });

  if (!user) {
    throw new Error("Invalid or expired verification token.");
  }

  if (
    !user.emailVerificationExpiresAt ||
    user.emailVerificationExpiresAt <= new Date()
  ) {
    throw new Error("Invalid or expired verification token.");
  }

  await prisma.user.update({
    where: { id: user.id },
    data: {
      emailVerifiedAt: new Date(),
      emailVerificationTokenHash: null,
      emailVerificationExpiresAt: null,
    },
  });
}