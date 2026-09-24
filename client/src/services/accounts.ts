import { apiRequest } from './api'

export type Account = {
  id: string
  accountNumber: string
  type: 'SAVINGS' | 'CURRENT' | 'FIXED_DEPOSIT'
  status: 'ACTIVE' | 'FROZEN' | 'SUSPENDED' | 'CLOSED'
  currency: string
  balance: string
  createdAt: string
  updatedAt: string
}

type AccountsResponse = {
  accounts: Account[]
}

export async function getAccounts() {
  return apiRequest<AccountsResponse>('/accounts', {
    method: 'GET',
  })
}

