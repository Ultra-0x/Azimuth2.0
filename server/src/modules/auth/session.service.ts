import {
  createHash,
  randomBytes,
} from "node:crypto";
import { prisma } from "../../database/prisma.js";

const SESSION_DURATION_MS =
  1000 * 60 * 60 * 24 * 7;

function hashToken(token: string): string {
  return createHash("sha256")
    .update(token)
    .digest("hex");
}

export async function createSession(
  userId: string,
  metadata?: {
    ipAddress?: string;
    userAgent?: string;
  },
) {
  const token = randomBytes(32).toString("hex");
  const tokenHash = hashToken(token);

  const expiresAt = new Date(
    Date.now() + SESSION_DURATION_MS,
  );

  const session = await prisma.session.create({
    data: {
      userId,
      tokenHash,
      expiresAt,
      ipAddress:
        metadata?.ipAddress ?? null,
      userAgent:
        metadata?.userAgent ?? null,
    },
  });

  return {
    token,
    sessionId: session.id,
    expiresAt: session.expiresAt,
  };
}

export async function getSession(token: string) {
  const tokenHash = hashToken(token);

  const session = await prisma.session.findUnique({
    where: { tokenHash },
    include: {
      user: true,
    },
  });

  if (!session) {
    return null;
  }

  if (session.revokedAt) {
    return null;
  }

  if (session.expiresAt <= new Date()) {
    return null;
  }

  if (session.user.status !== "ACTIVE") {
    return null;
  }

  return session;
}

export async function revokeSession(
  token: string,
) {
  const tokenHash = hashToken(token);

  await prisma.session.updateMany({
    where: {
      tokenHash,
      revokedAt: null,
    },
    data: {
      revokedAt: new Date(),
    },
  });
}

export async function deleteExpiredSessions() {
  return prisma.session.deleteMany({
    where: {
      expiresAt: {
        lte: new Date(),
      },
    },
  });
}