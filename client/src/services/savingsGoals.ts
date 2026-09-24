import { apiRequest } from './api'

export type SavingsGoal = {
  id: string
  name: string
  targetAmount: string
  currentAmount: string
  currency: string
  targetDate: string | null
  status: 'ACTIVE' | 'COMPLETED' | 'PAUSED' | 'CANCELLED'
  createdAt: string
  updatedAt: string
}

type SavingsGoalsResponse = {
  goals: SavingsGoal[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export async function getSavingsGoals() {
  return apiRequest<SavingsGoalsResponse>('/savings-goals', {
    method: 'GET',
  })
}
