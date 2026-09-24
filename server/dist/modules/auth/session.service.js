"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSession = createSession;
exports.getSession = getSession;
exports.revokeSession = revokeSession;
exports.deleteExpiredSessions = deleteExpiredSessions;
const node_crypto_1 = require("node:crypto");
const prisma_js_1 = require("../../database/prisma.js");
const SESSION_DURATION_MS = 1000 * 60 * 60 * 24 * 7;
function hashToken(token) {
    return (0, node_crypto_1.createHash)("sha256")
        .update(token)
        .digest("hex");
}
async function createSession(userId, metadata) {
    const token = (0, node_crypto_1.randomBytes)(32).toString("hex");
    const tokenHash = hashToken(token);
    const expiresAt = new Date(Date.now() + SESSION_DURATION_MS);
    const session = await prisma_js_1.prisma.session.create({
        data: {
            userId,
            tokenHash,
            expiresAt,
            ipAddress: metadata?.ipAddress ?? null,
            userAgent: metadata?.userAgent ?? null,
        },
    });
    return {
        token,
        sessionId: session.id,
        expiresAt: session.expiresAt,
    };
}
async function getSession(token) {
    const tokenHash = hashToken(token);
    const session = await prisma_js_1.prisma.session.findUnique({
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
async function revokeSession(token) {
    const tokenHash = hashToken(token);
    await prisma_js_1.prisma.session.updateMany({
        where: {
            tokenHash,
            revokedAt: null,
        },
        data: {
            revokedAt: new Date(),
        },
    });
}
async function deleteExpiredSessions() {
    return prisma_js_1.prisma.session.deleteMany({
        where: {
            expiresAt: {
                lte: new Date(),
            },
        },
    });
}
//# sourceMappingURL=session.service.js.map