import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { apiRequest } from '../services/api'
import { useAuth } from '../context/AuthContext'
import '../App.css'

type Account = {
  id: string
  accountNumber: string
  type: 'SAVINGS' | 'CURRENT' | 'FIXED_DEPOSIT'
  status: 'ACTIVE' | 'FROZEN' | 'SUSPENDED' | 'CLOSED'
  currency: string
  balance: string
  createdAt: string
  updatedAt: string
}

type AccountResponse = {
  account: Account
}

type AccountTransaction = {
  id: string
  reference: string
  type: string
  status: string
  amount: string
  currency: string
  description: string | null
  channel: string
  createdAt: string
}

type TransactionsResponse = {
  transactions: AccountTransaction[]
  pagination?: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

function AccountDetailPage() {
  const { id } = useParams()
  const { isAuthenticated } = useAuth()

  const [account, setAccount] = useState<Account | null>(null)
  const [transactions, setTransactions] = useState<
    AccountTransaction[]
  >([])

  const [loading, setLoading] = useState(true)
  const [transactionsLoading, setTransactionsLoading] =
    useState(true)

  const [error, setError] = useState<string | null>(null)
  const [transactionsError, setTransactionsError] =
    useState<string | null>(null)

  useEffect(() => {
    if (!isAuthenticated || !id) {
      setLoading(false)
      setTransactionsLoading(false)
      return
    }

    let cancelled = false

    async function loadAccount(accountId: string) {
      try {
        setLoading(true)
        setError(null)

        const response = await apiRequest<AccountResponse>(
          `/accounts/${accountId}`,
          {
            method: 'GET',
          },
        )

        if (cancelled) return

        setAccount(response.account)
      } catch (requestError) {
        if (cancelled) return

        setError(
          requestError instanceof Error
            ? requestError.message
            : 'Unable to load this account.',
        )
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    async function loadTransactions(accountId: string) {
      try {
        setTransactionsLoading(true)
        setTransactionsError(null)

        const response =
          await apiRequest<TransactionsResponse>(
            `/accounts/${accountId}/transactions?page=1&limit=20`,
            {
              method: 'GET',
            },
          )

        if (cancelled) return

        setTransactions(response.transactions)
      } catch (requestError) {
        if (cancelled) return

        setTransactionsError(
          requestError instanceof Error
            ? requestError.message
            : 'Unable to load account transactions.',
        )
      } finally {
        if (!cancelled) {
          setTransactionsLoading(false)
        }
      }
    }

    void loadAccount(id)
    void loadTransactions(id)

    return () => {
      cancelled = true
    }
  }, [isAuthenticated, id])

  const getAccountName = (type: Account['type']) => {
    switch (type) {
      case 'CURRENT':
        return 'Everyday Current'
      case 'SAVINGS':
        return 'Personal Savings'
      case 'FIXED_DEPOSIT':
        return 'Fixed Deposit'
    }
  }

  const getAccountTypeLabel = (type: Account['type']) => {
    switch (type) {
      case 'CURRENT':
        return 'CURRENT ACCOUNT'
      case 'SAVINGS':
        return 'SAVINGS ACCOUNT'
      case 'FIXED_DEPOSIT':
        return 'FIXED DEPOSIT'
    }
  }

  const getAccountInitial = (type: Account['type']) => {
    switch (type) {
      case 'CURRENT':
        return 'C'
      case 'SAVINGS':
        return 'S'
      case 'FIXED_DEPOSIT':
        return 'F'
    }
  }

  const formatBalance = (
    amount: string,
    currency: string,
  ) => {
    const symbol =
      currency === 'USD' ? '$' : `${currency} `

    return `${symbol}${Number(amount).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`
  }

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })

  const isIncoming = (transaction: AccountTransaction) =>
    transaction.type === 'DEPOSIT' ||
    transaction.type === 'REFUND' ||
    transaction.type === 'INTEREST' ||
    transaction.type === 'LOAN_DISBURSEMENT'

  const formatTransactionAmount = (
    transaction: AccountTransaction,
  ) => {
    const incoming = isIncoming(transaction)
    const prefix = incoming ? '+' : '−'

    const currency =
      transaction.currency === 'USD'
        ? '$'
        : `${transaction.currency} `

    return `${prefix}${currency}${Math.abs(
      Number(transaction.amount),
    ).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`
  }

  const getTransactionIcon = (
    transaction: AccountTransaction,
  ) => {
    if (transaction.type === 'DEPOSIT') return '↓'
    if (transaction.type === 'REFUND') return '↩'
    if (transaction.type === 'INTEREST') return '✦'
    if (transaction.type === 'LOAN_DISBURSEMENT') return '↘'
    if (transaction.type === 'TRANSFER') return '↗'
    if (transaction.type === 'PAYMENT') return '◇'
    if (transaction.type === 'WITHDRAWAL') return '↑'

    return '•'
  }

  const getTransactionName = (
    transaction: AccountTransaction,
  ) =>
    transaction.description ||
    transaction.type
      .toLowerCase()
      .replaceAll('_', ' ')
      .replace(/\b\w/g, (letter) =>
        letter.toUpperCase(),
      )

  const transactionSummary = useMemo(() => {
    const incoming = transactions
      .filter(isIncoming)
      .reduce(
        (total, transaction) =>
          total + Math.abs(Number(transaction.amount)),
        0,
      )

    const outgoing = transactions
      .filter(
        (transaction) => !isIncoming(transaction),
      )
      .reduce(
        (total, transaction) =>
          total + Math.abs(Number(transaction.amount)),
        0,
      )

    return {
      incoming,
      outgoing,
      count: transactions.length,
    }
  }, [transactions])

  if (loading) {
    return (
      <div className="page-content account-detail-page">
        <div className="account-detail-loading">
          <div className="account-detail-loading-top">
            <span className="account-detail-skeleton back" />
          </div>

          <div className="account-detail-skeleton hero" />

          <div className="account-detail-loading-grid">
            <span />
            <span />
            <span />
          </div>

          <div className="account-detail-skeleton ledger" />
        </div>
      </div>
    )
  }

  if (error || !account) {
    return (
      <div className="page-content account-detail-page">
        <Link
          className="account-detail-back"
          to="/app/accounts"
        >
          <span>←</span>
          Back to accounts
        </Link>

        <div className="account-detail-error">
          <div className="account-detail-error-mark">
            !
          </div>

          <div>
            <span className="eyebrow">
              ACCOUNT ACCESS
            </span>

            <h1>Unable to load account</h1>

            <p>
              {error ??
                'This account could not be found or is no longer available.'}
            </p>

            <Link
              className="primary-dashboard-action"
              to="/app/accounts"
            >
              Return to accounts
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="page-content account-detail-page">
      <div className="account-detail-topbar">
        <Link
          className="account-detail-back"
          to="/app/accounts"
        >
          <span>←</span>
          Accounts
        </Link>

        <div className="account-detail-breadcrumb">
          <span>Portfolio</span>
          <i>/</i>
          <strong>
            {getAccountName(account.type)}
          </strong>
        </div>
      </div>

      <section className="account-detail-header-premium">
        <div className="account-detail-identity">
          <div
            className={`account-detail-icon ${account.type
              .toLowerCase()
              .replace('_', '-')}`}
          >
            {getAccountInitial(account.type)}
          </div>

          <div className="account-detail-identity-copy">
            <div className="dashboard-date">
              <span className="live-indicator" />
              {getAccountTypeLabel(account.type)}
            </div>

            <h1>{getAccountName(account.type)}</h1>

            <p>
              Account <span>••••</span>{' '}
              {account.accountNumber.slice(-4)}
            </p>
          </div>
        </div>

        <div className="account-detail-header-actions">
          <Link
            className="secondary-dashboard-action"
            to="/app/accounts"
          >
            All accounts
          </Link>

          <Link
            className="primary-dashboard-action"
            to="/app/transfers"
          >
            <span>↗</span>
            Transfer
          </Link>
        </div>
      </section>

      <section className="account-balance-command">
        <div className="account-balance-glow" />

        <div className="account-balance-command-grid">
          <div className="account-balance-main">
            <div className="balance-hero-label">
              <span className="eyebrow">
                AVAILABLE BALANCE
              </span>

              <span className="balance-live">
                <span />
                Live balance
              </span>
            </div>

            <div className="account-detail-balance">
              {formatBalance(
                account.balance,
                account.currency,
              )}
            </div>

            <p>
              Available funds in your{' '}
              {getAccountName(
                account.type,
              ).toLowerCase()}
            </p>
          </div>

          <div className="account-balance-status">
            <div
              className={`account-detail-status ${account.status.toLowerCase()}`}
            >
              <i />

              {account.status === 'ACTIVE'
                ? 'Account active'
                : account.status}
            </div>

            <span>
              Updated {formatDate(account.updatedAt)}
            </span>
          </div>
        </div>

        <div className="account-balance-footer">
          <span>
            <small>OPENED</small>
            {formatDate(account.createdAt)}
          </span>

          <span>
            <small>CURRENCY</small>
            {account.currency}
          </span>

          <span>
            <small>ACCOUNT</small>
            •••• {account.accountNumber.slice(-4)}
          </span>
        </div>
      </section>

      <section className="account-detail-stat-grid">
        <div className="account-detail-stat-card">
          <span className="eyebrow">
            ACCOUNT NUMBER
          </span>

          <strong>
            •••• {account.accountNumber.slice(-4)}
          </strong>

          <small>
            Protected account identifier
          </small>
        </div>

        <div className="account-detail-stat-card">
          <span className="eyebrow">
            ACCOUNT TYPE
          </span>

          <strong>
            {account.type.replace('_', ' ')}
          </strong>

          <small>
            Azimuth banking product
          </small>
        </div>

        <div className="account-detail-stat-card">
          <span className="eyebrow">CURRENCY</span>

          <strong>{account.currency}</strong>

          <small>
            Primary account currency
          </small>
        </div>

        <div className="account-detail-stat-card">
          <span className="eyebrow">STATUS</span>

          <strong>{account.status}</strong>

          <small>
            {account.status === 'ACTIVE'
              ? 'Available for banking activity'
              : 'Review account status'}
          </small>
        </div>
      </section>

      <section className="account-detail-activity-overview">
        <div>
          <span className="eyebrow">
            ACTIVITY SNAPSHOT
          </span>

          <h2>Account movement</h2>

          <p>
            A compact view of the latest activity on this
            account.
          </p>
        </div>

        <div className="account-detail-movement-grid">
          <div>
            <span>Incoming</span>

            <strong className="incoming">
              +
              {formatBalance(
                transactionSummary.incoming.toFixed(2),
                account.currency,
              )}
            </strong>
          </div>

          <div>
            <span>Outgoing</span>

            <strong>
              −
              {formatBalance(
                transactionSummary.outgoing.toFixed(2),
                account.currency,
              )}
            </strong>
          </div>

          <div>
            <span>Transactions</span>

            <strong>
              {transactionSummary.count}
            </strong>
          </div>
        </div>
      </section>

      <section className="account-activity-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              ACCOUNT LEDGER
            </span>

            <h2>Recent activity</h2>

            <p className="account-activity-subtitle">
              The latest transactions associated with this
              account.
            </p>
          </div>

          <div className="account-activity-heading-meta">
            {!transactionsLoading &&
              !transactionsError && (
                <span>
                  {transactions.length}{' '}
                  {transactions.length === 1
                    ? 'transaction'
                    : 'transactions'}
                </span>
              )}

            <Link to="/app/transactions">
              View all →
            </Link>
          </div>
        </div>

        <div className="premium-panel account-transactions-panel">
          {transactionsLoading && (
            <div className="account-transaction-list">
              {Array.from({ length: 5 }).map(
                (_, index) => (
                  <div
                    className="account-transaction-skeleton"
                    key={index}
                  >
                    <span />
                    <div>
                      <i />
                      <b />
                    </div>
                    <em />
                  </div>
                ),
              )}
            </div>
          )}

          {transactionsError && (
            <div className="account-transaction-state">
              <span className="dashboard-error-icon">
                !
              </span>

              <div>
                <strong>
                  Unable to load transactions
                </strong>

                <span>{transactionsError}</span>
              </div>
            </div>
          )}

          {!transactionsLoading &&
            !transactionsError &&
            transactions.length === 0 && (
              <div className="account-transaction-state">
                <span className="account-empty-transaction-mark">
                  —
                </span>

                <div>
                  <strong>
                    No transactions yet
                  </strong>

                  <span>
                    Activity for this account will appear
                    here once your first transaction is
                    completed.
                  </span>
                </div>

                <Link
                  className="secondary-dashboard-action"
                  to="/app/transfers"
                >
                  Make a transfer
                </Link>
              </div>
            )}

          {!transactionsLoading &&
            !transactionsError &&
            transactions.length > 0 && (
              <div className="account-transaction-list">
                {transactions.map((transaction) => {
                  const incoming =
                    isIncoming(transaction)

                  return (
                    <div
                      className="account-transaction-row"
                      key={transaction.id}
                    >
                      <div
                        className={`account-transaction-icon ${
                          incoming
                            ? 'incoming'
                            : 'outgoing'
                        }`}
                      >
                        {getTransactionIcon(transaction)}
                      </div>

                      <div className="account-transaction-info">
                        <strong>
                          {getTransactionName(
                            transaction,
                          )}
                        </strong>

                        <span>
                          {formatDate(
                            transaction.createdAt,
                          )}

                          <i>·</i>

                          {transaction.channel.replace(
                            '_',
                            ' ',
                          )}

                          <i>·</i>

                          {transaction.status}
                        </span>
                      </div>

                      <div className="account-transaction-reference">
                        <span>REFERENCE</span>

                        <strong>
                          {transaction.reference}
                        </strong>
                      </div>

                      <strong
                        className={`account-transaction-amount ${
                          incoming ? 'incoming' : ''
                        }`}
                      >
                        {formatTransactionAmount(
                          transaction,
                        )}
                      </strong>
                    </div>
                  )
                })}
              </div>
            )}
        </div>
      </section>
    </div>
  )
}

export default AccountDetailPage