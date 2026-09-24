"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCard = createCard;
exports.getUserCards = getUserCards;
exports.getUserCard = getUserCard;
exports.updateCardStatus = updateCardStatus;
const node_crypto_1 = require("node:crypto");
const prisma_js_1 = require("../../database/prisma.js");
function hashCardNumber(cardNumber) {
    return (0, node_crypto_1.createHash)("sha256")
        .update(cardNumber)
        .digest("hex");
}
function generateCardNumber() {
    const prefix = "5284";
    const randomPart = [
        (0, node_crypto_1.randomInt)(1000, 10000),
        (0, node_crypto_1.randomInt)(1000, 10000),
        (0, node_crypto_1.randomInt)(1000, 10000),
    ].join("");
    const first15 = `${prefix}${randomPart}`.slice(0, 15);
    let sum = 0;
    let shouldDouble = true;
    for (let index = first15.length - 1; index >= 0; index--) {
        let digit = Number(first15[index]);
        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
        shouldDouble = !shouldDouble;
    }
    const checkDigit = (10 - (sum % 10)) % 10;
    return `${first15}${checkDigit}`;
}
function generateExpiryDate() {
    const now = new Date();
    const expiry = new Date(now);
    expiry.setFullYear(expiry.getFullYear() + 4);
    return {
        month: expiry.getMonth() + 1,
        year: expiry.getFullYear(),
    };
}
function isCardExpired(expiryMonth, expiryYear) {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1;
    return (expiryYear < currentYear ||
        (expiryYear === currentYear &&
            expiryMonth < currentMonth));
}
async function createCard(userId, accountId, type) {
    const account = await prisma_js_1.prisma.account.findFirst({
        where: {
            id: accountId,
            userId,
        },
        select: {
            id: true,
            userId: true,
            status: true,
            accountNumber: true,
        },
    });
    if (!account) {
        throw new Error("Account not found.");
    }
    if (account.status !== "ACTIVE") {
        throw new Error("Cards can only be issued for active accounts.");
    }
    const user = await prisma_js_1.prisma.user.findUnique({
        where: {
            id: userId,
        },
        select: {
            firstName: true,
            lastName: true,
        },
    });
    if (!user) {
        throw new Error("User not found.");
    }
    const cardNumber = generateCardNumber();
    const cardNumberHash = hashCardNumber(cardNumber);
    const lastFour = cardNumber.slice(-4);
    const expiry = generateExpiryDate();
    const card = await prisma_js_1.prisma.card.create({
        data: {
            userId,
            accountId,
            type,
            status: "ACTIVE",
            cardNumberHash,
            lastFour,
            expiryMonth: expiry.month,
            expiryYear: expiry.year,
        },
        select: {
            id: true,
            accountId: true,
            type: true,
            status: true,
            lastFour: true,
            expiryMonth: true,
            expiryYear: true,
            frozenAt: true,
            blockedAt: true,
            cancelledAt: true,
            createdAt: true,
            updatedAt: true,
        },
    });
    return {
        card,
        cardNumber,
        cardholderName: `${user.firstName} ${user.lastName}`,
        network: "MASTERCARD",
        accountNumber: account.accountNumber,
    };
}
async function getUserCards(userId) {
    const cards = await prisma_js_1.prisma.card.findMany({
        where: {
            userId,
        },
        select: {
            id: true,
            accountId: true,
            type: true,
            status: true,
            lastFour: true,
            expiryMonth: true,
            expiryYear: true,
            frozenAt: true,
            blockedAt: true,
            cancelledAt: true,
            createdAt: true,
            updatedAt: true,
            account: {
                select: {
                    accountNumber: true,
                },
            },
            user: {
                select: {
                    firstName: true,
                    lastName: true,
                },
            },
        },
        orderBy: {
            createdAt: "desc",
        },
    });
    return cards.map((card) => ({
        id: card.id,
        accountId: card.accountId,
        type: card.type,
        status: card.status,
        lastFour: card.lastFour,
        expiryMonth: card.expiryMonth,
        expiryYear: card.expiryYear,
        frozenAt: card.frozenAt,
        blockedAt: card.blockedAt,
        cancelledAt: card.cancelledAt,
        createdAt: card.createdAt,
        updatedAt: card.updatedAt,
        cardholderName: `${card.user.firstName} ${card.user.lastName}`,
        network: "MASTERCARD",
        accountNumber: card.account.accountNumber,
    }));
}
async function getUserCard(userId, cardId) {
    return prisma_js_1.prisma.card.findFirst({
        where: {
            id: cardId,
            userId,
        },
        select: {
            id: true,
            accountId: true,
            type: true,
            status: true,
            lastFour: true,
            expiryMonth: true,
            expiryYear: true,
            frozenAt: true,
            blockedAt: true,
            cancelledAt: true,
            createdAt: true,
            updatedAt: true,
        },
    });
}
async function updateCardStatus(userId, cardId, status) {
    const card = await prisma_js_1.prisma.card.findFirst({
        where: {
            id: cardId,
            userId,
        },
    });
    if (!card) {
        throw new Error("Card not found.");
    }
    if (status !== "CANCELLED" &&
        isCardExpired(card.expiryMonth, card.expiryYear)) {
        throw new Error("This card has expired and cannot be activated or modified.");
    }
    if (status === card.status) {
        return card;
    }
    const allowedTransitions = {
        ACTIVE: ["FROZEN", "BLOCKED", "CANCELLED"],
        FROZEN: ["ACTIVE", "BLOCKED", "CANCELLED"],
        BLOCKED: [],
        EXPIRED: [],
        CANCELLED: [],
    };
    const allowed = allowedTransitions[card.status] ?? [];
    if (!allowed.includes(status)) {
        throw new Error(`Card cannot transition from ${card.status} to ${status}.`);
    }
    const now = new Date();
    return prisma_js_1.prisma.card.update({
        where: {
            id: card.id,
        },
        data: {
            status,
            frozenAt: status === "FROZEN"
                ? card.frozenAt ?? now
                : status === "ACTIVE"
                    ? null
                    : card.frozenAt,
            blockedAt: status === "BLOCKED"
                ? card.blockedAt ?? now
                : card.blockedAt,
            cancelledAt: status === "CANCELLED"
                ? card.cancelledAt ?? now
                : card.cancelledAt,
        },
        select: {
            id: true,
            accountId: true,
            type: true,
            status: true,
            lastFour: true,
            expiryMonth: true,
            expiryYear: true,
            frozenAt: true,
            blockedAt: true,
            cancelledAt: true,
            createdAt: true,
            updatedAt: true,
        },
    });
}
//# sourceMappingURL=card.service.js.map