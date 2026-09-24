import { apiRequest } from './api'

export type SupportPriority =
  | 'LOW'
  | 'MEDIUM'
  | 'HIGH'
  | 'URGENT'

export type SupportTicketStatus =
  | 'OPEN'
  | 'IN_PROGRESS'
  | 'WAITING_FOR_CUSTOMER'
  | 'CLOSED'

export type SupportTicket = {
  id: string
  subject: string
  category: string
  priority: SupportPriority
  status: SupportTicketStatus
  createdAt: string
  updatedAt: string
}

export type SupportMessage = {
  id: string
  ticketId: string
  userId: string
  message: string
  readAt: string | null
  createdAt: string
}

export type SupportTicketsResponse = {
  tickets: SupportTicket[]
  total: number
}

export type SupportTicketDetail = {
  ticket: SupportTicket
  messages: SupportMessage[]
}

export async function getSupportTickets(
  page = 1,
  limit = 20,
) {
  return apiRequest<SupportTicketsResponse>(
    `/support?page=${page}&limit=${limit}`,
    {
      method: 'GET',
    },
  )
}

export async function getSupportTicket(
  ticketId: string,
) {
  return apiRequest<SupportTicketDetail>(
    `/support/${ticketId}`,
    {
      method: 'GET',
    },
  )
}

export async function createSupportTicket(payload: {
  subject: string
  category: string
  priority: SupportPriority
  message: string
}) {
  return apiRequest<{
    ticket: SupportTicket
    message: SupportMessage
  }>('/support', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export async function addSupportMessage(
  ticketId: string,
  message: string,
) {
  return apiRequest<{
    message: SupportMessage
  }>(`/support/${ticketId}/messages`, {
    method: 'POST',
    body: JSON.stringify({
      message,
    }),
  })
}

export async function markSupportMessagesAsRead(
  ticketId: string,
) {
  return apiRequest<{
    updated: number
  }>(`/support/${ticketId}/messages/read`, {
    method: 'PATCH',
  })
}