import { apiRequest } from './api'

export type SavingsGoalStatus =
  | 'ACTIVE'
  | 'COMPLETED'
  | 'PAUSED'
  | 'CANCELLED'

export type SavingsGoal = {
  id: string
  accountId: string
  name: string
  targetAmount: string
  currentAmount: string
  currency: string
  targetDate: string | null
  status: SavingsGoalStatus
  createdAt: string
  updatedAt: string
}

export type SavingsGoalsResponse = {
  goals: SavingsGoal[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export type CreateSavingsGoalPayload = {
  accountId: string
  name: string
  targetAmount: number
  targetDate?: string
}

export type UpdateSavingsGoalPayload = {
  name?: string
  targetAmount?: number
  targetDate?: string | null
}

export async function getSavingsGoals() {
  return apiRequest<SavingsGoalsResponse>(
    '/savings-goals',
    {
      method: 'GET',
    },
  )
}

export async function createSavingsGoal(
  payload: CreateSavingsGoalPayload,
) {
  return apiRequest<{
    message: string
    goal: SavingsGoal
  }>('/savings-goals', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export async function updateSavingsGoal(
  goalId: string,
  payload: UpdateSavingsGoalPayload,
) {
  return apiRequest<{
    message: string
    goal: SavingsGoal
  }>(`/savings-goals/${goalId}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
  })
}

export async function updateSavingsGoalStatus(
  goalId: string,
  status: 'ACTIVE' | 'PAUSED' | 'CANCELLED',
) {
  return apiRequest<{
    message: string
    goal: SavingsGoal
  }>(`/savings-goals/${goalId}/status`, {
    method: 'PATCH',
    body: JSON.stringify({
      status,
    }),
  })
}

export async function contributeToSavingsGoal(
  goalId: string,
  sourceAccountId: string,
  amount: number,
  idempotencyKey: string,
) {
  return apiRequest<{
    message: string
    transaction: {
      id: string
      reference: string
      amount: string
      currency: string
      status: string
      createdAt: string
    }
    contribution: {
      id: string
      goalId: string
      transactionId: string
      amount: string
      currency: string
      createdAt: string
    }
    goal: SavingsGoal
  }>(`/savings-goals/${goalId}/contributions`, {
    method: 'POST',
    headers: {
      'Idempotency-Key': idempotencyKey,
    },
    body: JSON.stringify({
      sourceAccountId,
      amount,
    }),
  })
}