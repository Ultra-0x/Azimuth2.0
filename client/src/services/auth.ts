import { apiRequest } from './api'

export type LoginPayload = {
  email: string
  password: string
}

export type AuthUser = {
  id: string
  email: string
  firstName: string
  lastName: string
  status: string
  role: "CUSTOMER" | "ADMIN"
  emailVerifiedAt: string | null
}

export type LoginResponse = {
  message: string
  user: AuthUser
}

export type TransactionAuthChallengeResponse = {
  challenge: string
  expiresAt: string
}

export async function login(payload: LoginPayload) {
  return apiRequest<LoginResponse>('/auth/login', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export async function logout() {
  return apiRequest<{ message: string }>('/auth/logout', {
    method: 'POST',
  })
}

export async function createTransactionAuthChallenge(
  transferId: string,
  password: string,
) {
  return apiRequest<TransactionAuthChallengeResponse>(
    '/auth/transaction-auth/challenge',
    {
      method: 'POST',
      body: JSON.stringify({
        transferId,
        password,
      }),
    },
  )
}

export async function changePassword(
  currentPassword: string,
  newPassword: string,
) {
  return apiRequest<{ message: string }>('/auth/change-password', {
    method: 'POST',
    body: JSON.stringify({
      currentPassword,
      newPassword,
    }),
  })
}