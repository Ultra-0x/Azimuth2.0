import { apiRequest } from './api'

export type TransactionType =
  | 'DEPOSIT'
  | 'WITHDRAWAL'
  | 'TRANSFER'
  | 'PAYMENT'
  | 'REFUND'
  | 'FEE'
  | 'INTEREST'
  | 'LOAN_DISBURSEMENT'
  | 'LOAN_REPAYMENT'

export type TransactionStatus =
  | 'PENDING'
  | 'PROCESSING'
  | 'COMPLETED'
  | 'FAILED'
  | 'REVERSED'
  | 'CANCELLED'

export type TransactionChannel =
  | 'INTERNAL'
  | 'BANK_TRANSFER'
  | 'CARD'
  | 'ATM'
  | 'MOBILE'
  | 'WEB'
  | 'SYSTEM'

export type LedgerEntry = {
  id: string
  accountId: string
  direction: 'DEBIT' | 'CREDIT'
  amount: string
  currency: string
  balanceAfter: string
  createdAt: string
}

export type Transaction = {
  id: string
  reference: string
  type: TransactionType
  status: TransactionStatus
  amount: string
  currency: string
  description: string | null
  channel: TransactionChannel
  cardId: string | null
  senderAccountId: string | null
  recipientAccountId: string | null
  createdAt: string
  updatedAt: string
}

export type TransactionDetail = Transaction & {
  ledgerEntries: LedgerEntry[]
}

export type TransactionFilters = {
  page?: number
  limit?: number
  type?: TransactionType
  status?: TransactionStatus
  from?: string
  to?: string
}

export type TransactionsResponse = {
  transactions: Transaction[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export async function getTransactions(
  filters: TransactionFilters = {},
) {
  const params = new URLSearchParams()

  params.set('page', String(filters.page ?? 1))
  params.set('limit', String(filters.limit ?? 20))

  if (filters.type) {
    params.set('type', filters.type)
  }

  if (filters.status) {
    params.set('status', filters.status)
  }

  if (filters.from) {
    params.set('from', filters.from)
  }

  if (filters.to) {
    params.set('to', filters.to)
  }

  return apiRequest<TransactionsResponse>(
    `/transactions?${params.toString()}`,
    {
      method: 'GET',
    },
  )
}

export async function getTransaction(
  transactionId: string,
) {
  return apiRequest<{
    transaction: TransactionDetail
  }>(`/transactions/${transactionId}`, {
    method: 'GET',
  })
}