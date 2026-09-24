import { prisma } from "../../database/prisma.js";

export class CustomerError extends Error {
  constructor(
    message: string,
    public readonly code: string,
  ) {
    super(message);
    this.name = "CustomerError";
  }
}

export async function getCustomerProfile(
  userId: string,
) {
  return prisma.user.findUnique({
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

export async function updateCustomerProfile(
  userId: string,
  data: {
    firstName?: string;
    lastName?: string;
    phone?: string | null;
  },
) {
  const customer = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      status: true,
    },
  });

  if (!customer) {
    throw new CustomerError(
      "Customer profile could not be found.",
      "CUSTOMER_NOT_FOUND",
    );
  }

  if (customer.status === "CLOSED") {
    throw new CustomerError(
      "A closed customer account cannot be updated.",
      "ACCOUNT_CLOSED",
    );
  }

  if (customer.status === "LOCKED") {
    throw new CustomerError(
      "A locked customer account cannot be updated.",
      "ACCOUNT_LOCKED",
    );
  }

  return prisma.user.update({
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