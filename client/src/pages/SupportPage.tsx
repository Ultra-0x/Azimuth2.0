import {
  useEffect,
  useMemo,
  useState,
} from 'react'
import type { FormEvent } from 'react'
import { useAuth } from '../context/AuthContext'
import {
  addSupportMessage,
  createSupportTicket,
  getSupportTicket,
  getSupportTickets,
  markSupportMessagesAsRead,
  type SupportMessage,
  type SupportPriority,
  type SupportTicket,
} from '../services/support'

const PAGE_SIZE = 20

const categories = [
  'Account',
  'Cards',
  'Transfers',
  'Transactions',
  'Savings',
  'Loans',
  'Security',
  'Other',
]

const priorities: SupportPriority[] = [
  'LOW',
  'MEDIUM',
  'HIGH',
  'URGENT',
]

function formatDate(value: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
  }).format(new Date(value))
}

function formatTime(value: string) {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date(value))
}

function getStatusLabel(status: SupportTicket['status']) {
  switch (status) {
    case 'IN_PROGRESS':
      return 'In progress'
    case 'WAITING_FOR_CUSTOMER':
      return 'Awaiting reply'
    default:
      return status
        .replace('_', ' ')
        .toLowerCase()
        .replace(/^\w/, (letter) => letter.toUpperCase())
  }
}

function getPriorityLabel(priority: SupportPriority) {
  return priority.charAt(0) + priority.slice(1).toLowerCase()
}

function getTicketPreview(ticket: SupportTicket) {
  return `${ticket.category} · ${getPriorityLabel(ticket.priority)} priority`
}

export default function SupportPage() {
  const { user } = useAuth()

  const [tickets, setTickets] = useState<SupportTicket[]>([])
  const [selectedTicket, setSelectedTicket] =
    useState<SupportTicket | null>(null)
  const [messages, setMessages] = useState<SupportMessage[]>([])

  const [loading, setLoading] = useState(true)
  const [loadingConversation, setLoadingConversation] =
    useState(false)

  const [error, setError] = useState('')
  const [conversationError, setConversationError] =
    useState('')

  const [reply, setReply] = useState('')
  const [sendingReply, setSendingReply] = useState(false)

  const [showCreateModal, setShowCreateModal] =
    useState(false)
  const [creatingTicket, setCreatingTicket] =
    useState(false)
  const [createError, setCreateError] = useState('')

  const [subject, setSubject] = useState('')
  const [category, setCategory] =
    useState('Account')
  const [priority, setPriority] =
    useState<SupportPriority>('MEDIUM')
  const [initialMessage, setInitialMessage] =
    useState('')

  const openCount = useMemo(
    () =>
      tickets.filter(
        (ticket) => ticket.status !== 'CLOSED',
      ).length,
    [tickets],
  )

  const closedCount = useMemo(
    () =>
      tickets.filter(
        (ticket) => ticket.status === 'CLOSED',
      ).length,
    [tickets],
  )

  async function loadTickets() {
    try {
      setLoading(true)
      setError('')

      const response = await getSupportTickets(
        1,
        PAGE_SIZE,
      )

      setTickets(response.tickets)

      if (
        selectedTicket &&
        !response.tickets.some(
          (ticket) =>
            ticket.id === selectedTicket.id,
        )
      ) {
        setSelectedTicket(null)
        setMessages([])
      }
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : 'Unable to load support requests.',
      )
    } finally {
      setLoading(false)
    }
  }

  async function openTicket(ticket: SupportTicket) {
    try {
      setSelectedTicket(ticket)
      setLoadingConversation(true)
      setConversationError('')
      setMessages([])

      const response =
        await getSupportTicket(ticket.id)

      setSelectedTicket(response.ticket)
      setMessages(response.messages)

      await markSupportMessagesAsRead(ticket.id)
    } catch (requestError) {
      setConversationError(
        requestError instanceof Error
          ? requestError.message
          : 'Unable to load this support request.',
      )
    } finally {
      setLoadingConversation(false)
    }
  }

  async function handleCreateTicket(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault()

    if (
      !subject.trim() ||
      !initialMessage.trim()
    ) {
      setCreateError(
        'Please complete the request details.',
      )
      return
    }

    try {
      setCreatingTicket(true)
      setCreateError('')

      const response =
        await createSupportTicket({
          subject: subject.trim(),
          category,
          priority,
          message: initialMessage.trim(),
        })

      setTickets((current) => [
        response.ticket,
        ...current,
      ])

      setSubject('')
      setCategory('Account')
      setPriority('MEDIUM')
      setInitialMessage('')
      setShowCreateModal(false)

      await openTicket(response.ticket)
    } catch (requestError) {
      setCreateError(
        requestError instanceof Error
          ? requestError.message
          : 'Unable to create your support request.',
      )
    } finally {
      setCreatingTicket(false)
    }
  }

  async function handleReply(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault()

    if (
      !selectedTicket ||
      !reply.trim() ||
      sendingReply
    ) {
      return
    }

    try {
      setSendingReply(true)
      setConversationError('')

      const response = await addSupportMessage(
        selectedTicket.id,
        reply.trim(),
      )

      setMessages((current) => [
        ...current,
        response.message,
      ])

      setReply('')

      setTickets((current) =>
        current.map((ticket) =>
          ticket.id === selectedTicket.id
            ? {
                ...ticket,
                status: 'OPEN',
                updatedAt:
                  response.message.createdAt,
              }
            : ticket,
        ),
      )

      setSelectedTicket((current) =>
        current
          ? {
              ...current,
              status: 'OPEN',
              updatedAt:
                response.message.createdAt,
            }
          : current,
      )
    } catch (requestError) {
      setConversationError(
        requestError instanceof Error
          ? requestError.message
          : 'Unable to send your reply.',
      )
    } finally {
      setSendingReply(false)
    }
  }

  function closeModal() {
    if (creatingTicket) return

    setShowCreateModal(false)
    setCreateError('')
  }

  useEffect(() => {
    void loadTickets()
  }, [])

  return (
    <section className="page-section support-page">
      <header className="support-hero">
        <div className="support-hero-copy">
          <div className="support-hero-eyebrow">
            <span className="support-live-dot" />
            AZIMUTH CARE
          </div>

          <h1>Support, without the friction.</h1>

          <p>
            Securely connect with the Azimuth team
            whenever you need assistance with your
            account.
          </p>
        </div>

        <button
          type="button"
          className="support-create-button"
          onClick={() => setShowCreateModal(true)}
        >
          <span className="support-create-icon">
            +
          </span>

          <span>
            <strong>New request</strong>
            <small>
              Contact Azimuth Support
            </small>
          </span>

          <span className="support-create-arrow">
            ↗
          </span>
        </button>
      </header>

      <div className="support-metrics">
        <article className="support-metric support-metric-primary">
          <div className="support-metric-top">
            <span>OPEN</span>
            <span className="support-metric-indicator" />
          </div>

          <strong>{openCount}</strong>

          <p>Active requests</p>
        </article>

        <article className="support-metric">
          <div className="support-metric-top">
            <span>TOTAL</span>
          </div>

          <strong>{tickets.length}</strong>

          <p>All requests</p>
        </article>

        <article className="support-metric">
          <div className="support-metric-top">
            <span>CLOSED</span>
          </div>

          <strong>{closedCount}</strong>

          <p>Resolved requests</p>
        </article>

        <article className="support-channel-card">
          <div className="support-channel-mark">
            <span />
          </div>

          <div>
            <span className="support-channel-label">
              SUPPORT CHANNEL
            </span>

            <strong>Secure inbox</strong>

            <small>
              Private support messaging
            </small>
          </div>

          <span className="support-channel-lock">
            ⌁
          </span>
        </article>
      </div>

      {error && (
        <div className="page-error">
          {error}
        </div>
      )}

      <div className="support-workspace">
        <aside className="support-inbox">
          <div className="support-inbox-header">
            <div>
              <span className="support-section-kicker">
                YOUR REQUESTS
              </span>

              <div className="support-inbox-title-row">
                <h2>Support inbox</h2>

                <span className="support-inbox-count">
                  {tickets.length}
                </span>
              </div>
            </div>

            <span className="support-inbox-status">
              <i />
              SECURE
            </span>
          </div>

          {loading ? (
            <div className="support-ticket-list">
              {Array.from({ length: 5 }).map(
                (_, index) => (
                  <div
                    className="support-ticket-skeleton"
                    key={index}
                  >
                    <span />
                    <span />
                    <span />
                  </div>
                ),
              )}
            </div>
          ) : tickets.length > 0 ? (
            <div className="support-ticket-list">
              {tickets.map((ticket) => (
                <button
                  key={ticket.id}
                  type="button"
                  className={`support-ticket ${
                    selectedTicket?.id === ticket.id
                      ? 'active'
                      : ''
                  }`}
                  onClick={() =>
                    void openTicket(ticket)
                  }
                >
                  <div className="support-ticket-top">
                    <span className="support-ticket-subject">
                      {ticket.subject}
                    </span>

                    <span className="support-ticket-date">
                      {formatDate(
                        ticket.updatedAt,
                      )}
                    </span>
                  </div>

                  <div className="support-ticket-preview">
                    {getTicketPreview(ticket)}
                  </div>

                  <div className="support-ticket-meta">
                    <span
                      className={`support-badge support-badge-${ticket.status.toLowerCase()}`}
                    >
                      {getStatusLabel(
                        ticket.status,
                      )}
                    </span>

                    <span
                      className={`support-badge support-badge-${ticket.priority.toLowerCase()}`}
                    >
                      {getPriorityLabel(
                        ticket.priority,
                      )}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="support-inbox-empty">
              <div className="support-empty-orbit">
                <div className="support-empty-core">
                  ?
                </div>
              </div>

              <span className="support-empty-kicker">
                YOUR INBOX IS CLEAR
              </span>

              <h3>No support requests</h3>

              <p>
                Need assistance with your Azimuth
                account? Start a secure conversation
                with our support team.
              </p>

              <button
                type="button"
                className="support-empty-button"
                onClick={() =>
                  setShowCreateModal(true)
                }
              >
                <span>Start a request</span>
                <span>↗</span>
              </button>
            </div>
          )}
        </aside>

        <section className="support-conversation">
          {selectedTicket ? (
            <>
              <header className="support-conversation-header">
                <div className="support-conversation-title">
                  <span className="support-section-kicker">
                    SUPPORT REQUEST
                  </span>

                  <h2>
                    {selectedTicket.subject}
                  </h2>

                  <p>
                    {selectedTicket.category}
                    {' · '}
                    Opened{' '}
                    {formatDate(
                      selectedTicket.createdAt,
                    )}
                  </p>
                </div>

                <div className="support-conversation-meta">
                  <span
                    className={`support-badge support-badge-${selectedTicket.status.toLowerCase()}`}
                  >
                    {getStatusLabel(
                      selectedTicket.status,
                    )}
                  </span>

                  <span
                    className={`support-badge support-badge-${selectedTicket.priority.toLowerCase()}`}
                  >
                    {getPriorityLabel(
                      selectedTicket.priority,
                    )}
                  </span>
                </div>
              </header>

              {conversationError && (
                <div className="page-error">
                  {conversationError}
                </div>
              )}

              <div className="support-messages">
                {loadingConversation ? (
                  <div className="support-conversation-loading">
                    <div />
                    <span>
                      Loading conversation
                    </span>
                  </div>
                ) : messages.length > 0 ? (
                  messages.map((message) => {
                    const isUser =
                      message.userId === user?.id

                    return (
                      <div
                        className={`support-message ${
                          isUser
                            ? 'support-message-user'
                            : 'support-message-agent'
                        }`}
                        key={message.id}
                      >
                        {!isUser && (
                          <div className="support-message-avatar">
                            AZ
                          </div>
                        )}

                        <div className="support-message-content">
                          <div className="support-message-bubble">
                            {message.message}
                          </div>

                          <span className="support-message-author">
                            {isUser
                              ? 'You'
                              : 'Azimuth Support'}
                            {' · '}
                            {formatTime(
                              message.createdAt,
                            )}
                          </span>
                        </div>

                        {isUser && (
                          <div className="support-message-avatar">
                            YOU
                          </div>
                        )}
                      </div>
                    )
                  })
                ) : (
                  <div className="support-conversation-loading">
                    <span>
                      No messages yet.
                    </span>
                  </div>
                )}
              </div>

              {selectedTicket.status ===
              'CLOSED' ? (
                <div className="support-composer">
                  <div className="support-closed-notice">
                    This support request is closed.
                    Create a new request if you need
                    further assistance.
                  </div>
                </div>
              ) : (
                <div className="support-composer">
                  <form
                    className="support-composer-form"
                    onSubmit={handleReply}
                  >
                    <textarea
                      value={reply}
                      onChange={(event) =>
                        setReply(
                          event.target.value,
                        )
                      }
                      placeholder="Write a secure reply…"
                      rows={2}
                      maxLength={5000}
                    />

                    <button
                      type="submit"
                      className="primary-button"
                      disabled={
                        sendingReply ||
                        !reply.trim()
                      }
                    >
                      {sendingReply
                        ? 'Sending…'
                        : 'Send'}
                      {!sendingReply && (
                        <span>→</span>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </>
          ) : (
            <div className="support-conversation-empty">
              <div className="support-conversation-mark">
                <div className="support-mark-ring support-mark-ring-one" />
                <div className="support-mark-ring support-mark-ring-two" />

                <div className="support-mark-center">
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <span className="support-conversation-kicker">
                AZIMUTH CARE
              </span>

              <h2>How can we help?</h2>

              <p>
                Select a request from your inbox to
                continue the conversation, or start
                a new secure support request.
              </p>

              <button
                type="button"
                className="support-conversation-button"
                onClick={() =>
                  setShowCreateModal(true)
                }
              >
                <span>Start a new request</span>
                <span>→</span>
              </button>
            </div>
          )}
        </section>
      </div>

      {showCreateModal && (
        <div
          className="modal-backdrop support-modal-backdrop"
          onMouseDown={(event) => {
            if (
              event.target === event.currentTarget
            ) {
              closeModal()
            }
          }}
        >
          <div className="modal-card support-modal">
            <div className="support-modal-orbit">
              <span />
              <span />
              <span />
            </div>

            <header className="support-modal-header">
              <div className="support-modal-heading">
                <div className="support-modal-mark">
                  <span className="support-modal-mark-core" />
                  <span className="support-modal-mark-line" />
                </div>

                <div>
                  <span className="support-modal-kicker">
                    AZIMUTH CARE
                  </span>

                  <h2>
                    Start a support request
                  </h2>

                  <p>
                    Tell us what you need help with.
                    Your conversation stays inside
                    your secure support inbox.
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="support-modal-close"
                onClick={closeModal}
                disabled={creatingTicket}
                aria-label="Close support request"
              >
                <span />
                <span />
              </button>
            </header>

            <div className="support-modal-rule">
              <span />
              <small>NEW REQUEST</small>
              <span />
            </div>

            <form
              className="support-modal-form"
              onSubmit={handleCreateTicket}
            >
              <div className="support-modal-field">
                <div className="support-modal-field-label">
                  <span className="support-modal-field-index">
                    01
                  </span>

                  <label htmlFor="support-subject">
                    Subject
                  </label>
                </div>

                <input
                  id="support-subject"
                  type="text"
                  value={subject}
                  onChange={(event) =>
                    setSubject(
                      event.target.value,
                    )
                  }
                  placeholder="What can we help with?"
                  maxLength={200}
                  required
                />
              </div>

              <div className="support-form-row support-modal-select-row">
                <div className="support-modal-field">
                  <div className="support-modal-field-label">
                    <span className="support-modal-field-index">
                      02
                    </span>

                    <label htmlFor="support-category">
                      Category
                    </label>
                  </div>

                  <div className="support-select-wrap">
                    <select
                      id="support-category"
                      value={category}
                      onChange={(event) =>
                        setCategory(
                          event.target.value,
                        )
                      }
                    >
                      {categories.map((item) => (
                        <option
                          key={item}
                          value={item}
                        >
                          {item}
                        </option>
                      ))}
                    </select>

                    <span className="support-select-arrow">
                      ↓
                    </span>
                  </div>
                </div>

                <div className="support-modal-field">
                  <div className="support-modal-field-label">
                    <span className="support-modal-field-index">
                      03
                    </span>

                    <label htmlFor="support-priority">
                      Priority
                    </label>
                  </div>

                  <div className="support-select-wrap">
                    <select
                      id="support-priority"
                      value={priority}
                      onChange={(event) =>
                        setPriority(
                          event.target
                            .value as SupportPriority,
                        )
                      }
                    >
                      {priorities.map((item) => (
                        <option
                          key={item}
                          value={item}
                        >
                          {getPriorityLabel(
                            item,
                          )}
                        </option>
                      ))}
                    </select>

                    <span className="support-select-arrow">
                      ↓
                    </span>
                  </div>
                </div>
              </div>

              <div className="support-modal-field support-modal-message-field">
                <div className="support-modal-field-label">
                  <span className="support-modal-field-index">
                    04
                  </span>

                  <label htmlFor="support-message">
                    Message
                  </label>

                  <span className="support-modal-field-hint">
                    {initialMessage.length}/5000
                  </span>
                </div>

                <textarea
                  id="support-message"
                  value={initialMessage}
                  onChange={(event) =>
                    setInitialMessage(
                      event.target.value,
                    )
                  }
                  placeholder="Describe what you need help with…"
                  rows={5}
                  maxLength={5000}
                  required
                />
              </div>

              {createError && (
                <div className="settings-feedback settings-feedback-error">
                  {createError}
                </div>
              )}

              <div className="support-modal-security">
                <div className="support-modal-security-icon">
                  <span />
                </div>

                <div>
                  <strong>
                    Private support channel
                  </strong>

                  <span>
                    Your request is visible only to
                    you and authorized Azimuth support
                    staff.
                  </span>
                </div>

                <span className="support-modal-security-status">
                  SECURE
                </span>
              </div>

              <footer className="support-modal-footer">
                <button
                  type="button"
                  className="support-modal-cancel"
                  onClick={closeModal}
                  disabled={creatingTicket}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="support-modal-submit"
                  disabled={creatingTicket}
                >
                  <span className="support-modal-submit-label">
                    {creatingTicket
                      ? 'Creating request…'
                      : 'Create request'}
                  </span>

                  {!creatingTicket && (
                    <span className="support-modal-submit-arrow">
                      ↗
                    </span>
                  )}
                </button>
              </footer>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}