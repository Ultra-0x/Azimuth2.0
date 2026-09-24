"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTransactionAuthChallenge = createTransactionAuthChallenge;
exports.deleteExpiredTransactionAuthChallenges = deleteExpiredTransactionAuthChallenges;
const node_crypto_1 = require("node:crypto");
const argon2_1 = __importDefault(require("argon2"));
const prisma_js_1 = require("../../database/prisma.js");
const CHALLENGE_DURATION_MS = 5 * 60 * 1000;
function hashChallenge(value) {
    return (0, node_crypto_1.createHash)("sha256")
        .update(value)
        .digest("hex");
}
async function createTransactionAuthChallenge(userId, transferId, password) {
    const user = await prisma_js_1.prisma.user.findUnique({
        where: { id: userId },
    });
    if (!user) {
        throw new Error("User not found.");
    }
    const transfer = await prisma_js_1.prisma.transfer.findFirst({
        where: {
            id: transferId,
            userId,
        },
    });
    if (!transfer) {
        throw new Error("Transfer not found.");
    }
    if (transfer.status !== "PENDING") {
        throw new Error("This transfer cannot be authenticated.");
    }
    const validPassword = await argon2_1.default.verify(user.passwordHash, password);
    if (!validPassword) {
        throw new Error("Transaction authentication failed.");
    }
    const challenge = (0, node_crypto_1.randomBytes)(32).toString("hex");
    const expiresAt = new Date(Date.now() + CHALLENGE_DURATION_MS);
    await prisma_js_1.prisma.$transaction(async (tx) => {
        await tx.transactionAuthChallenge.updateMany({
            where: {
                userId,
                transferId,
                consumedAt: null,
                expiresAt: {
                    gt: new Date(),
                },
            },
            data: {
                consumedAt: new Date(),
            },
        });
        await tx.transactionAuthChallenge.create({
            data: {
                userId,
                transferId,
                method: "PASSWORD",
                challengeHash: hashChallenge(challenge),
                expiresAt,
            },
        });
    });
    return {
        challenge,
        expiresAt,
    };
}
async function deleteExpiredTransactionAuthChallenges() {
    return prisma_js_1.prisma.transactionAuthChallenge.deleteMany({
        where: {
            OR: [
                {
                    expiresAt: {
                        lte: new Date(),
                    },
                },
                {
                    consumedAt: {
                        not: null,
                    },
                },
            ],
        },
    });
}
//# sourceMappingURL=transaction-auth.service.js.map