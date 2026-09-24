import { useEffect, useMemo, useState } from 'react'
import {
  createCard,
  getCards,
  updateCardStatus,
  type Card,
} from '../services/cards'
import { getAccounts, type Account } from '../services/accounts'

function formatExpiry(month: number, year: number) {
  return `${String(month).padStart(2, '0')}/${String(year).slice(-2)}`
}

function formatCardStatus(status: Card['status']) {
  switch (status) {
    case 'ACTIVE':
      return 'Active'
    case 'FROZEN':
      return 'Frozen'
    case 'BLOCKED':
      return 'Blocked'
    case 'EXPIRED':
      return 'Expired'
    case 'CANCELLED':
      return 'Cancelled'
    default:
      return status
  }
}

function formatAccountNumber(accountNumber: string) {
  return `•••• ${accountNumber.slice(-4)}`
}

function getAccountName(account: Account) {
  if (account.type === 'CURRENT') return 'Everyday Current'
  if (account.type === 'SAVINGS') return 'Personal Savings'
  return 'Fixed Deposit'
}

function CardsPage() {
  const [cards, setCards] = useState<Card[]>([])
  const [accounts, setAccounts] = useState<Account[]>([])

  const [loading, setLoading] = useState(true)
  const [actionLoading, setActionLoading] = useState(false)

  const [error, setError] = useState('')
  const [showCreate, setShowCreate] = useState(false)
  const [newCardNumber, setNewCardNumber] = useState('')

  const [selectedAccount, setSelectedAccount] = useState('')
  const [cardType, setCardType] = useState<
    'VIRTUAL' | 'PHYSICAL'
  >('VIRTUAL')

  async function loadCards() {
    try {
      setLoading(true)
      setError('')

      const [cardsResponse, accountsResponse] =
        await Promise.all([
          getCards(),
          getAccounts(),
        ])

      setCards(cardsResponse.cards)
      setAccounts(accountsResponse.accounts)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Unable to load your cards.',
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    void loadCards()
  }, [])

  const activeCards = useMemo(
    () =>
      cards.filter((card) => card.status === 'ACTIVE')
        .length,
    [cards],
  )

  const frozenCards = useMemo(
    () =>
      cards.filter((card) => card.status === 'FROZEN')
        .length,
    [cards],
  )

  const virtualCards = useMemo(
    () =>
      cards.filter((card) => card.type === 'VIRTUAL')
        .length,
    [cards],
  )

  async function handleCreateCard() {
    if (!selectedAccount) {
      setError('Select an account for the new card.')
      return
    }

    try {
      setActionLoading(true)
      setError('')

      const response = await createCard(
        selectedAccount,
        cardType,
      )

      setNewCardNumber(response.cardNumber)
      setShowCreate(false)
      setSelectedAccount('')

      await loadCards()
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Unable to create the card.',
      )
    } finally {
      setActionLoading(false)
    }
  }

  async function handleStatusChange(
    cardId: string,
    status: 'ACTIVE' | 'FROZEN' | 'CANCELLED',
  ) {
    try {
      setActionLoading(true)
      setError('')

      const response = await updateCardStatus(
        cardId,
        status,
      )

      setCards((current) =>
        current.map((card) =>
          card.id === cardId ? response.card : card,
        ),
      )
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Unable to update the card.',
      )
    } finally {
      setActionLoading(false)
    }
  }

  function openCreateModal() {
    setError('')
    setSelectedAccount('')
    setCardType('VIRTUAL')
    setShowCreate(true)
  }

  return (
    <section className="page-section cards-page premium-cards-page">
      <header className="cards-hero">
        <div className="cards-hero-copy">
          <div className="cards-hero-kicker">
            <span className="cards-hero-dot" />
            AZIMUTH CARD VAULT
          </div>

          <h1>Cards, designed around you.</h1>

          <p>
            Manage your Azimuth cards, control their status,
            and keep every payment surface under your control.
          </p>
        </div>

        <button
          type="button"
          className="cards-new-button"
          onClick={openCreateModal}
        >
          <span className="cards-new-button-icon">+</span>

          <span>
            <strong>New card</strong>
            <small>Create a virtual or physical card</small>
          </span>

          <span className="cards-new-button-arrow">↗</span>
        </button>
      </header>

      <div className="cards-metrics">
        <article className="cards-metric cards-metric-primary">
          <span>ACTIVE CARDS</span>

          <strong>{activeCards}</strong>

          <small>
            {cards.length === 1
              ? '1 card in your vault'
              : `${cards.length} cards in your vault`}
          </small>
        </article>

        <article className="cards-metric">
          <span>VIRTUAL</span>

          <strong>{virtualCards}</strong>

          <small>Digital payment access</small>
        </article>

        <article className="cards-metric">
          <span>FROZEN</span>

          <strong>{frozenCards}</strong>

          <small>Temporarily unavailable</small>
        </article>

        <article className="cards-security-card">
          <div className="cards-security-mark">
            <span />
          </div>

          <div>
            <span>PAYMENT SECURITY</span>

            <strong>Control is yours</strong>

            <small>
              Freeze or cancel cards instantly
            </small>
          </div>

          <span className="cards-security-status">
            SECURE
          </span>
        </article>
      </div>

      {error && (
        <div className="page-error" role="alert">
          {error}
        </div>
      )}

      <div className="cards-section-heading">
        <div>
          <span className="eyebrow">YOUR WALLET</span>

          <h2>Card collection</h2>
        </div>

        <span>
          {cards.length > 0
            ? `${cards.length} ${
                cards.length === 1 ? 'card' : 'cards'
              }`
            : 'No cards yet'}
        </span>
      </div>

      {loading ? (
        <div className="cards-loading-grid">
          {Array.from({ length: 2 }).map((_, index) => (
            <div
              className="cards-loading-card"
              key={index}
            >
              <span />
              <span />
              <span />
              <span />
            </div>
          ))}
        </div>
      ) : cards.length === 0 ? (
        <div className="cards-empty">
          <div className="cards-empty-visual">
            <div className="cards-empty-card">
              <div className="cards-empty-chip" />
              <div className="cards-empty-line" />
              <div className="cards-empty-line short" />
            </div>
          </div>

          <div className="cards-empty-copy">
            <span className="eyebrow">YOUR WALLET IS CLEAR</span>

            <h2>Your first Azimuth card starts here.</h2>

            <p>
              Create a virtual or physical card and connect it
              to one of your active accounts.
            </p>

            <button
              type="button"
              className="primary-button"
              onClick={openCreateModal}
            >
              Create your first card
              <span>→</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="premium-cards-grid">
          {cards.map((card) => {

            return (
              <article
                key={card.id}
                className={`premium-bank-card premium-bank-card-${card.status.toLowerCase()} premium-bank-card-${card.type.toLowerCase()}`}
              >
                <div className="premium-bank-card-aura" />

                <div className="premium-bank-card-noise" />

                <div className="premium-bank-card-content">
                  <div className="premium-bank-card-header">
                    <div className="premium-card-brand">
                      <span className="premium-card-brand-mark">
                        A
                      </span>

                      <span>AZIMUTH</span>
                    </div>

                    <div className="premium-card-header-right">
                      <span>
                        {card.type === 'VIRTUAL'
                          ? 'VIRTUAL'
                          : 'PHYSICAL'}
                      </span>

                      <strong>MC</strong>
                    </div>
                  </div>

                  <div className="premium-card-center">
                    <div className="premium-card-chip">
                      <span />
                      <span />
                      <span />
                    </div>

                    <div
                      className="premium-card-contactless"
                      aria-hidden="true"
                    >
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>

                  <div className="premium-card-number">
                    <span>••••</span>
                    <span>••••</span>
                    <span>••••</span>
                    <strong>{card.lastFour}</strong>
                  </div>

                  <div className="premium-card-footer">
                    <div>
                      <small>CARDHOLDER</small>

                      <strong>
                        {card.cardholderName.toUpperCase()}
                      </strong>
                    </div>

                    <div>
                      <small>VALID THRU</small>

                      <strong>
                        {formatExpiry(
                          card.expiryMonth,
                          card.expiryYear,
                        )}
                      </strong>
                    </div>

                    <div>
                      <small>TYPE</small>

                      <strong>
                        {card.type === 'VIRTUAL'
                          ? 'DIGITAL'
                          : 'PHYSICAL'}
                      </strong>
                    </div>
                  </div>

                  <div className="premium-card-bottom">
                    <span>
                      {formatCardStatus(card.status)}
                    </span>

                    <strong>MASTERCARD</strong>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      )}

      {!loading && cards.length > 0 && (
        <div className="cards-management-grid">
          {cards.map((card, index) => (
            <article
              className="cards-management-card"
              key={card.id}
            >
              <div className="cards-management-top">
                <div>
                  <span className="cards-management-index">
                    0{index + 1}
                  </span>

                  <div>
                    <strong>
                      {card.type === 'VIRTUAL'
                        ? 'Virtual card'
                        : 'Physical card'}
                    </strong>

                    <small>
                      {formatAccountNumber(
                        card.accountNumber,
                      )}
                    </small>
                  </div>
                </div>

                <span
                  className={`cards-status-pill cards-status-${card.status.toLowerCase()}`}
                >
                  <i />
                  {formatCardStatus(card.status)}
                </span>
              </div>

              <div className="cards-management-details">
                <div>
                  <span>ACCOUNT</span>

                  <strong>
                    {formatAccountNumber(
                      card.accountNumber,
                    )}
                  </strong>
                </div>

                <div>
                  <span>VALID THRU</span>

                  <strong>
                    {formatExpiry(
                      card.expiryMonth,
                      card.expiryYear,
                    )}
                  </strong>
                </div>

                <div>
                  <span>NETWORK</span>

                  <strong>MASTERCARD</strong>
                </div>
              </div>

              <div className="cards-management-actions">
                {card.status === 'ACTIVE' && (
                  <button
                    type="button"
                    disabled={actionLoading}
                    onClick={() =>
                      void handleStatusChange(
                        card.id,
                        'FROZEN',
                      )
                    }
                  >
                    Freeze card
                  </button>
                )}

                {card.status === 'FROZEN' && (
                  <button
                    type="button"
                    disabled={actionLoading}
                    onClick={() =>
                      void handleStatusChange(
                        card.id,
                        'ACTIVE',
                      )
                    }
                  >
                    Unfreeze card
                  </button>
                )}

                {(card.status === 'ACTIVE' ||
                  card.status === 'FROZEN') && (
                  <button
                    type="button"
                    className="danger"
                    disabled={actionLoading}
                    onClick={() =>
                      void handleStatusChange(
                        card.id,
                        'CANCELLED',
                      )
                    }
                  >
                    Cancel card
                  </button>
                )}

                {(card.status === 'CANCELLED' ||
                  card.status === 'EXPIRED' ||
                  card.status === 'BLOCKED') && (
                  <span className="cards-management-locked">
                    This card can no longer be used.
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      )}

      {showCreate && (
        <div
          className="modal-backdrop cards-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              if (!actionLoading) {
                setShowCreate(false)
              }
            }
          }}
        >
          <div className="modal-card cards-create-modal">
            <div className="cards-modal-orbit">
              <span />
              <span />
              <span />
            </div>

            <header className="cards-modal-header">
              <div>
                <span className="cards-modal-kicker">
                  NEW CARD
                </span>

                <h2>Create your card.</h2>

                <p>
                  Choose the account and card type you want
                  to connect to your Azimuth wallet.
                </p>
              </div>

              <button
                type="button"
                className="cards-modal-close"
                onClick={() => setShowCreate(false)}
                disabled={actionLoading}
                aria-label="Close"
              >
                <span />
                <span />
              </button>
            </header>

            <div className="cards-modal-rule">
              <span />
              <small>CARD CONFIGURATION</small>
              <span />
            </div>

            <div className="cards-modal-form">
              <label className="cards-modal-field">
                <span>
                  <i>01</i>
                  Funding account
                </span>

                <div className="cards-modal-select">
                  <select
                    value={selectedAccount}
                    onChange={(event) =>
                      setSelectedAccount(
                        event.target.value,
                      )
                    }
                  >
                    <option value="">
                      Select an active account
                    </option>

                    {accounts
                      .filter(
                        (account) =>
                          account.status === 'ACTIVE',
                      )
                      .map((account) => (
                        <option
                          key={account.id}
                          value={account.id}
                        >
                          {getAccountName(account)} ·{' '}
                          {formatAccountNumber(
                            account.accountNumber,
                          )}
                        </option>
                      ))}
                  </select>

                  <span>↓</span>
                </div>
              </label>

              <div className="cards-modal-field">
                <span>
                  <i>02</i>
                  Card type
                </span>

                <div className="cards-type-picker">
                  <button
                    type="button"
                    className={
                      cardType === 'VIRTUAL'
                        ? 'active'
                        : ''
                    }
                    onClick={() =>
                      setCardType('VIRTUAL')
                    }
                  >
                    <strong>Virtual</strong>

                    <small>
                      Instant digital card
                    </small>

                    <span>01</span>
                  </button>

                  <button
                    type="button"
                    className={
                      cardType === 'PHYSICAL'
                        ? 'active'
                        : ''
                    }
                    onClick={() =>
                      setCardType('PHYSICAL')
                    }
                  >
                    <strong>Physical</strong>

                    <small>
                      Traditional payment card
                    </small>

                    <span>02</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="cards-modal-note">
              <div className="cards-modal-note-mark">
                i
              </div>

              <div>
                <strong>Secure card creation</strong>

                <span>
                  Your full card number will only be shown
                  once after successful creation.
                </span>
              </div>

              <span>SECURE</span>
            </div>

            <footer className="cards-modal-footer">
              <button
                type="button"
                className="cards-modal-cancel"
                onClick={() => setShowCreate(false)}
                disabled={actionLoading}
              >
                Cancel
              </button>

              <button
                type="button"
                className="cards-modal-submit"
                disabled={
                  actionLoading || !selectedAccount
                }
                onClick={() =>
                  void handleCreateCard()
                }
              >
                {actionLoading
                  ? 'Creating card…'
                  : 'Create card'}

                {!actionLoading && <span>↗</span>}
              </button>
            </footer>
          </div>
        </div>
      )}

      {newCardNumber && (
        <div
          className="modal-backdrop cards-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setNewCardNumber('')
            }
          }}
        >
          <div className="modal-card cards-reveal-modal">
            <div className="cards-reveal-signal">
              <span />
              <span />
              <span />
            </div>

            <header className="cards-reveal-header">
              <span className="cards-modal-kicker">
                CARD CREATED
              </span>

              <h2>Your card is ready.</h2>

              <p>
                This is the only time your full card number
                will be displayed. Store it securely.
              </p>
            </header>

            <div className="cards-reveal-number">
              <span>FULL CARD NUMBER</span>

              <strong>{newCardNumber}</strong>
            </div>

            <div className="cards-reveal-warning">
              <span>!</span>

              <p>
                Never share your full card number, PIN, or
                security credentials with anyone.
              </p>
            </div>

            <div className="cards-reveal-actions">
              <button
                type="button"
                className="secondary-button"
                onClick={() =>
                  void navigator.clipboard.writeText(
                    newCardNumber,
                  )
                }
              >
                Copy number
              </button>

              <button
                type="button"
                className="primary-button"
                onClick={() => setNewCardNumber('')}
              >
                Done
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default CardsPage