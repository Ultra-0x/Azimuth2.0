import { apiRequest } from './api'

export type Transfer = {
  id: string
  reference: string
  idempotencyKey: string
  userId: string
  fromAccountId: string
  toAccountId: string
  amount: string
  currency: string
  description: string | null
  status:
    | 'PENDING'
    | 'PROCESSING'
    | 'COMPLETED'
    | 'FAILED'
    | 'REVERSED'
    | 'CANCELLED'
  transactionId: string | null
  createdAt: string
  updatedAt: string
}

export type CreateTransferPayload = {
  idempotencyKey: string
  fromAccountId: string
  toAccountNumber: string
  amount: string
  currency: string
  description?: string
}

export type CreateTransferResponse = {
  transfer: Transfer
}

export type AuthenticateTransferPayload = {
  challenge: string
}

export type AuthenticateTransferResponse = {
  transfer: Transfer
}

export type CreateTransactionAuthPayload = {
  transferId: string
  password: string
}

export type CreateTransactionAuthResponse = {
  challenge: string
  expiresAt: string
}

export async function createTransfer(
  payload: CreateTransferPayload,
) {
  return apiRequest<CreateTransferResponse>('/transfers', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export async function createTransactionAuthChallenge(
  payload: CreateTransactionAuthPayload,
) {
  return apiRequest<CreateTransactionAuthResponse>(
    '/auth/transaction-auth/challenge',
    {
      method: 'POST',
      body: JSON.stringify(payload),
    },
  )
}

export async function authenticateTransfer(
  transferId: string,
  payload: AuthenticateTransferPayload,
) {
  return apiRequest<AuthenticateTransferResponse>(
    `/transfers/${transferId}/authenticate`,
    {
      method: 'POST',
      body: JSON.stringify(payload),
    },
  )
}
