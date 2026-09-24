import { apiRequest } from './api'

export type Card = {
  id: string
  accountId: string
  type: 'VIRTUAL' | 'PHYSICAL'
  status: 'ACTIVE' | 'FROZEN' | 'BLOCKED' | 'EXPIRED' | 'CANCELLED'
  lastFour: string
  expiryMonth: number
  expiryYear: number
  frozenAt: string | null
  blockedAt: string | null
  cancelledAt: string | null
  createdAt: string
  updatedAt: string
  cardholderName: string
  network: 'MASTERCARD'
  accountNumber: string
}

export async function getCards() {
  return apiRequest<{ cards: Card[] }>('/cards', {
    method: 'GET',
  })
}

export async function createCard(
  accountId: string,
  type: 'VIRTUAL' | 'PHYSICAL',
) {
  return apiRequest<{
    message: string
    card: Card
    cardNumber: string
    cardholderName: string
    network: 'MASTERCARD'
    accountNumber: string
  }>('/cards', {
    method: 'POST',
    body: JSON.stringify({
      accountId,
      type,
    }),
  })
}

export async function updateCardStatus(
  cardId: string,
  status: Card['status'],
) {
  return apiRequest<{ message: string; card: Card }>(
    `/cards/${cardId}/status`,
    {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    },
  )
}