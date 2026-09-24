"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerError = void 0;
exports.getCustomerProfile = getCustomerProfile;
exports.updateCustomerProfile = updateCustomerProfile;
const prisma_js_1 = require("../../database/prisma.js");
class CustomerError extends Error {
    code;
    constructor(message, code) {
        super(message);
        this.code = code;
        this.name = "CustomerError";
    }
}
exports.CustomerError = CustomerError;
async function getCustomerProfile(userId) {
    return prisma_js_1.prisma.user.findUnique({
        where: {
            id: userId,
        },
        select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
            phone: true,
            status: true,
            emailVerifiedAt: true,
            createdAt: true,
            updatedAt: true,
        },
    });
}
async function updateCustomerProfile(userId, data) {
    const customer = await prisma_js_1.prisma.user.findUnique({
        where: {
            id: userId,
        },
        select: {
            id: true,
            status: true,
        },
    });
    if (!customer) {
        throw new CustomerError("Customer profile could not be found.", "CUSTOMER_NOT_FOUND");
    }
    if (customer.status === "CLOSED") {
        throw new CustomerError("A closed customer account cannot be updated.", "ACCOUNT_CLOSED");
    }
    if (customer.status === "LOCKED") {
        throw new CustomerError("A locked customer account cannot be updated.", "ACCOUNT_LOCKED");
    }
    return prisma_js_1.prisma.user.update({
        where: {
            id: userId,
        },
        data,
        select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
            phone: true,
            status: true,
            emailVerifiedAt: true,
            createdAt: true,
            updatedAt: true,
        },
    });
}
//# sourceMappingURL=customer.service.js.map