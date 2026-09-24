import { apiRequest } from "./api";

export type AdminAccount = {
  id: string;
  accountNumber: string;
  type: string;
  status: string;
  currency: string;
  balance: string | number;
};

export type AdminUser = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string | null;
  status: string;
  role: "CUSTOMER" | "ADMIN";
  emailVerifiedAt: string | null;
  createdAt: string;
  updatedAt: string;
  accounts: AdminAccount[];
};

export type AdminOverview = {
  statistics: {
    users: number;
    activeUsers: number;
    accounts: number;
    activeAccounts: number;
    loans: number;
    pendingLoans: number;
    openTickets: number;
  };
  recentTransactions: AdminTransaction[];
};

export type AdminLoanStatus =
  | "PENDING"
  | "APPROVED"
  | "ACTIVE"
  | "PAID"
  | "REJECTED"
  | "DEFAULTED"
  | "CANCELLED";

export type AdminLoan = {
  id: string;
  userId: string;
  accountId: string;
  amount: string | number;
  interestRate: string | number;
  totalRepayment: string | number;
  amountRepaid: string | number;
  currency: string;
  termMonths: number;
  status: AdminLoanStatus;
  purpose: string | null;
  approvedAt: string | null;
  disbursedAt: string | null;
  dueDate: string | null;
  createdAt: string;
  updatedAt: string;
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
  };
  account: {
    id: string;
    accountNumber: string;
    currency: string;
    status: string;
  };
};

export type AdminTransaction = {
  id: string;
  reference: string;
  type: string;
  status: string;
  amount: string | number;
  currency: string;
  description: string | null;
  channel: string;
  senderAccountId: string | null;
  recipientAccountId: string | null;
  userId: string | null;
  createdAt: string;
};

export async function getAdminOverview() {
  return apiRequest<AdminOverview>("/admin/overview", {
    method: "GET",
  });
}

export async function getAdminUsers(
  page = 1,
  limit = 100,
  status?: "ACTIVE" | "SUSPENDED" | "LOCKED" | "CLOSED",
) {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });

  if (status) {
    params.set("status", status);
  }

  return apiRequest<{
    users: AdminUser[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  }>(`/admin/users?${params.toString()}`, {
    method: "GET",
  });
}

export async function getAdminLoans(
  page = 1,
  limit = 20,
  status?: AdminLoanStatus,
) {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });

  if (status) {
    params.set("status", status);
  }

  return apiRequest<{
    loans: AdminLoan[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  }>(`/admin/loans?${params.toString()}`, {
    method: "GET",
  });
}

export async function approveAdminLoan(loanId: string) {
  return apiRequest<{
    message: string;
    loan: AdminLoan;
  }>(`/admin/loans/${loanId}/status`, {
    method: "PATCH",
    body: JSON.stringify({
      status: "APPROVED",
    }),
  });
}

export async function rejectAdminLoan(loanId: string) {
  return apiRequest<{
    message: string;
    loan: AdminLoan;
  }>(`/admin/loans/${loanId}/status`, {
    method: "PATCH",
    body: JSON.stringify({
      status: "REJECTED",
    }),
  });
}

export async function disburseAdminLoan(
  loanId: string,
  idempotencyKey: string,
) {
  return apiRequest<{
    message: string;
    transaction: AdminTransaction;
  }>(`/admin/loans/${loanId}/disburse`, {
    method: "POST",
    body: JSON.stringify({
      idempotencyKey,
    }),
  });
}

export async function createAdminTransfer(input: {
  toAccountId: string;
  amount: number;
  currency?: string;
  description?: string;
  idempotencyKey: string;
  fromAccountId?: string;
}) {
  return apiRequest<{
    message: string;
    transaction: AdminTransaction;
  }>("/admin/transfers", {
    method: "POST",
    body: JSON.stringify({
      ...input,
      currency: input.currency ?? "USD",
    }),
  });
}

export async function getAdminTransactions(
  page = 1,
  limit = 20,
) {
  return apiRequest<{
    transactions: AdminTransaction[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  }>(
    `/admin/transactions?page=${page}&limit=${limit}`,
    {
      method: "GET",
    },
  );
}