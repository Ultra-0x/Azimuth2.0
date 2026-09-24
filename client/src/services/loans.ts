import { apiRequest } from './api'

export type LoanStatus =
  | 'PENDING'
  | 'APPROVED'
  | 'ACTIVE'
  | 'PAID'
  | 'REJECTED'
  | 'DEFAULTED'
  | 'CANCELLED'

export type Loan = {
  id: string
  accountId: string
  amount: string
  interestRate: string
  totalRepayment: string
  amountRepaid: string
  currency: string
  termMonths: number
  status: LoanStatus
  purpose: string | null
  approvedAt: string | null
  disbursedAt: string | null
  dueDate: string | null
  createdAt: string
  updatedAt: string
}

export type LoansResponse = {
  loans: Loan[]
  total: number
}

export type CreateLoanPayload = {
  accountId: string
  amount: number
  interestRate: number
  termMonths: number
  purpose?: string
}

export async function getLoans(
  page = 1,
  limit = 20,
  status?: LoanStatus,
) {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  })

  if (status) {
    params.set('status', status)
  }

  return apiRequest<LoansResponse>(
    `/loans?${params.toString()}`,
    {
      method: 'GET',
    },
  )
}

export async function getLoan(loanId: string) {
  return apiRequest<{ loan: Loan }>(
    `/loans/${loanId}`,
    {
      method: 'GET',
    },
  )
}

export async function createLoan(
  payload: CreateLoanPayload,
) {
  return apiRequest<{ loan: Loan }>(
    '/loans',
    {
      method: 'POST',
      body: JSON.stringify(payload),
    },
  )
}

export async function updateLoanStatus(
  loanId: string,
  status:
    | 'APPROVED'
    | 'REJECTED'
    | 'CANCELLED'
    | 'DEFAULTED',
) {
  return apiRequest<{ loan: Loan }>(
    `/loans/${loanId}/status`,
    {
      method: 'PATCH',
      body: JSON.stringify({
        status,
      }),
    },
  )
}

export async function disburseLoan(
  loanId: string,
  idempotencyKey: string,
) {
  return apiRequest<{
    transaction: {
      id: string
      reference: string
      amount: string
      currency: string
      status: string
      createdAt: string
    }
    loan: Loan
  }>(
    `/loans/${loanId}/disburse`,
    {
      method: 'POST',
      headers: {
        'Idempotency-Key': idempotencyKey,
      },
    },
  )
}

export async function repayLoan(
  loanId: string,
  sourceAccountId: string,
  amount: number,
  idempotencyKey: string,
) {
  return apiRequest<{
    transaction: {
      id: string
      reference: string
      amount: string
      currency: string
      status: string
      createdAt: string
    }
    repayment: {
      id: string
      loanId: string
      transactionId: string
      amount: string
      currency: string
      status: string
      paidAt: string
      createdAt: string
    }
    loan: Loan
    idempotent: boolean
  }>(
    `/loans/${loanId}/repay`,
    {
      method: 'POST',
      headers: {
        'Idempotency-Key': idempotencyKey,
      },
      body: JSON.stringify({
        sourceAccountId,
        amount,
      }),
    },
  )
}
