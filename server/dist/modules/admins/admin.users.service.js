"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdminUsers = getAdminUsers;
exports.updateAdminUserStatus = updateAdminUserStatus;
const prisma_js_1 = require("../../database/prisma.js");
const userSelect = {
    id: true,
    email: true,
    firstName: true,
    lastName: true,
    phone: true,
    status: true,
    role: true,
    emailVerifiedAt: true,
    createdAt: true,
    updatedAt: true,
    accounts: {
        select: {
            id: true,
            accountNumber: true,
            type: true,
            status: true,
            currency: true,
            balance: true,
        },
        orderBy: {
            createdAt: "asc",
        },
    },
};
async function getAdminUsers(page, limit, status) {
    const skip = (page - 1) * limit;
    const where = status
        ? { status }
        : {};
    const [users, total] = await prisma_js_1.prisma.$transaction([
        prisma_js_1.prisma.user.findMany({
            where,
            select: userSelect,
            orderBy: {
                createdAt: "desc",
            },
            skip,
            take: limit,
        }),
        prisma_js_1.prisma.user.count({
            where,
        }),
    ]);
    return {
        users,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
    };
}
async function updateAdminUserStatus(userId, status) {
    const user = await prisma_js_1.prisma.user.findUnique({
        where: {
            id: userId,
        },
        select: {
            id: true,
            role: true,
        },
    });
    if (!user) {
        throw new Error("User not found.");
    }
    if (user.role === "ADMIN") {
        throw new Error("Admin accounts cannot be modified through customer status management.");
    }
    return prisma_js_1.prisma.user.update({
        where: {
            id: userId,
        },
        data: {
            status,
        },
        select: userSelect,
    });
}
//# sourceMappingURL=admin.users.service.js.map