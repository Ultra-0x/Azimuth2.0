import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAccounts, type Account } from '../services/accounts'
import {
  getTransactions,
  type Transaction,
} from '../services/transactions'
import {
  getSavingsGoals,
  type SavingsGoal,
} from '../services/savingsGoals'
import { useAuth } from '../context/AuthContext'
import '../App.css'

function DashboardPage() {
  const { isAuthenticated, user } = useAuth()

  const [accounts, setAccounts] = useState<Account[]>([])
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [savingsGoals, setSavingsGoals] = useState<SavingsGoal[]>([])

  const [accountsLoading, setAccountsLoading] = useState(true)
  const [transactionsLoading, setTransactionsLoading] = useState(true)
  const [savingsGoalsLoading, setSavingsGoalsLoading] = useState(true)

  const [accountsError, setAccountsError] = useState<string | null>(null)
  const [transactionsError, setTransactionsError] =
    useState<string | null>(null)
  const [savingsGoalsError, setSavingsGoalsError] =
    useState<string | null>(null)

  useEffect(() => {
    if (!isAuthenticated) {
      setAccountsLoading(false)
      setTransactionsLoading(false)
      setSavingsGoalsLoading(false)
      return
    }

    let cancelled = false

    async function loadAccounts() {
      try {
        setAccountsLoading(true)
        setAccountsError(null)

        const response = await getAccounts()

        if (cancelled) return

        setAccounts(response.accounts)
      } catch (error) {
        if (cancelled) return

        setAccountsError(
          error instanceof Error
            ? error.message
            : 'Unable to load accounts.',
        )
      } finally {
        if (!cancelled) {
          setAccountsLoading(false)
        }
      }
    }

    async function loadTransactions() {
      try {
        setTransactionsLoading(true)
        setTransactionsError(null)

        const response = await getTransactions({
          page: 1,
          limit: 8,
        })

        if (cancelled) return

        setTransactions(response.transactions)
      } catch (error) {
        if (cancelled) return

        setTransactionsError(
          error instanceof Error
            ? error.message
            : 'Unable to load recent transactions.',
        )
      } finally {
        if (!cancelled) {
          setTransactionsLoading(false)
        }
      }
    }

    async function loadSavingsGoals() {
      try {
        setSavingsGoalsLoading(true)
        setSavingsGoalsError(null)

        const response = await getSavingsGoals()

        if (cancelled) return

        setSavingsGoals(response.goals)
      } catch (error) {
        if (cancelled) return

        setSavingsGoalsError(
          error instanceof Error
            ? error.message
            : 'Unable to load savings goals.',
        )
      } finally {
        if (!cancelled) {
          setSavingsGoalsLoading(false)
        }
      }
    }

    void loadAccounts()
    void loadTransactions()
    void loadSavingsGoals()

    return () => {
      cancelled = true
    }
  }, [isAuthenticated])

  const totalBalance = useMemo(
    () =>
      accounts.reduce(
        (total, account) => total + Number(account.balance),
        0,
      ),
    [accounts],
  )

  const activeAccounts = accounts.filter(
    (account) => account.status === 'ACTIVE',
  ).length

  const firstName = user?.firstName || 'there'

  const formattedDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  const formatMoney = (amount: string | number, currency = 'USD') => {
    const symbol = currency === 'USD' ? '$' : `${currency} `

    return `${symbol}${Number(amount).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`
  }

  const isIncomingTransaction = (transaction: Transaction) =>
    transaction.type === 'DEPOSIT' ||
    transaction.type === 'REFUND' ||
    transaction.type === 'INTEREST' ||
    transaction.type === 'LOAN_DISBURSEMENT'

  const getTransactionIcon = (transaction: Transaction) => {
    if (transaction.type === 'DEPOSIT') return '↓'
    if (transaction.type === 'REFUND') return '↩'
    if (transaction.type === 'INTEREST') return '✦'
    if (transaction.type === 'LOAN_DISBURSEMENT') return '↘'
    if (transaction.type === 'TRANSFER') return '↗'
    if (transaction.type === 'PAYMENT') return '◇'
    if (transaction.type === 'WITHDRAWAL') return '↑'
    return '•'
  }

  const getTransactionDescription = (transaction: Transaction) =>
    transaction.description ||
    transaction.type
      .toLowerCase()
      .replaceAll('_', ' ')
      .replace(/\b\w/g, (letter) => letter.toUpperCase())

  const formatTransactionAmount = (transaction: Transaction) => {
    const incoming = isIncomingTransaction(transaction)
    const prefix = incoming ? '+' : '−'

    return `${prefix}${formatMoney(
      Math.abs(Number(transaction.amount)),
      transaction.currency,
    )}`
  }

  const getGoalProgress = (goal: SavingsGoal) => {
    const target = Number(goal.targetAmount)
    const current = Number(goal.currentAmount)

    if (target <= 0) return 0

    return Math.min(
      100,
      Math.max(0, (current / target) * 100),
    )
  }

  const getAccountName = (account: Account) => {
    if (account.type === 'CURRENT') return 'Everyday Current'
    if (account.type === 'SAVINGS') return 'Personal Savings'
    return 'Fixed Deposit'
  }

  return (
    <div className="page-content dashboard-page">
      {/* HEADER */}

      <section className="dashboard-header premium-dashboard-header">
        <div>
          <div className="dashboard-date">
            <span className="live-indicator" />
            {formattedDate}
          </div>

          <h1>
            Good afternoon,{' '}
            <span>{firstName}.</span>
          </h1>

          <p>
            Your financial position, accounts and activity —
            all in one place.
          </p>
        </div>

        <div className="dashboard-header-actions">
          <Link
            className="secondary-dashboard-action"
            to="/app/accounts"
          >
            View accounts
          </Link>

          <Link
            className="primary-dashboard-action"
            to="/app/transfers"
          >
            <span>+</span>
            New transfer
          </Link>
        </div>
      </section>

      {/* BALANCE HERO */}

      <section className="dashboard-balance-hero">
        <div className="balance-hero-glow" />

        <div className="balance-hero-main">
          <div className="balance-hero-label">
            <span className="eyebrow">TOTAL PORTFOLIO</span>

            <span className="balance-live">
              <span />
              Live
            </span>
          </div>

          <div className="balance-hero-value">
            <span>$</span>
            {totalBalance.toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>

          <p>
            Combined balance across your Azimuth accounts
          </p>
        </div>

        <div className="balance-hero-divider" />

        <div className="balance-hero-stats">
          <div className="balance-stat">
            <span>Active accounts</span>
            <strong>{activeAccounts}</strong>
          </div>

          <div className="balance-stat">
            <span>Currency</span>
            <strong>USD</strong>
          </div>

          <div className="balance-stat">
            <span>Account status</span>
            <strong className="status-positive">
              Protected
            </strong>
          </div>
        </div>

        <div className="balance-hero-footer">
          <span>Portfolio overview</span>

          <Link to="/app/accounts">
            Manage accounts
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* QUICK ACTIONS */}

      <section className="dashboard-section premium-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">SHORTCUTS</span>
            <h2>Move money</h2>
          </div>

          <span className="section-caption">
            Frequently used actions
          </span>
        </div>

        <div className="premium-quick-actions">
          <Link
            className="premium-quick-action"
            to="/app/transfers"
          >
            <span className="premium-action-number">01</span>

            <span className="premium-action-icon transfer">
              ↗
            </span>

            <span className="premium-action-copy">
              <strong>Transfer</strong>
              <small>Move money between accounts</small>
            </span>

            <span className="premium-action-arrow">→</span>
          </Link>

          <Link
            className="premium-quick-action"
            to="/app/accounts"
          >
            <span className="premium-action-number">02</span>

            <span className="premium-action-icon deposit">
              ↓
            </span>

            <span className="premium-action-copy">
              <strong>Deposit</strong>
              <small>Add funds to your account</small>
            </span>

            <span className="premium-action-arrow">→</span>
          </Link>

          <Link
            className="premium-quick-action"
            to="/app/accounts"
          >
            <span className="premium-action-number">03</span>

            <span className="premium-action-icon withdraw">
              ↑
            </span>

            <span className="premium-action-copy">
              <strong>Withdraw</strong>
              <small>Access available funds</small>
            </span>

            <span className="premium-action-arrow">→</span>
          </Link>

          <Link
            className="premium-quick-action"
            to="/app/cards"
          >
            <span className="premium-action-number">04</span>

            <span className="premium-action-icon card">
              ◇
            </span>

            <span className="premium-action-copy">
              <strong>Cards</strong>
              <small>Manage your payment cards</small>
            </span>

            <span className="premium-action-arrow">→</span>
          </Link>
        </div>
      </section>

      {/* MAIN DATA GRID */}

      <div className="dashboard-main-grid">
        {/* ACCOUNTS */}

        <section className="dashboard-panel premium-panel">
          <div className="panel-header premium-panel-header">
            <div>
              <span className="eyebrow">PORTFOLIO</span>
              <h2>Your accounts</h2>
            </div>

            <Link
              className="panel-header-action"
              to="/app/accounts"
            >
              View all
              <span>→</span>
            </Link>
          </div>

          <div className="premium-account-list">
            {accountsLoading && (
              <div className="dashboard-empty-state">
                <span className="dashboard-loader" />
                <div>
                  <strong>Loading accounts</strong>
                  <span>
                    Retrieving your banking information
                  </span>
                </div>
              </div>
            )}

            {accountsError && (
              <div className="dashboard-empty-state">
                <span className="dashboard-error-icon">!</span>
                <div>
                  <strong>Unable to load accounts</strong>
                  <span>{accountsError}</span>
                </div>
              </div>
            )}

            {!accountsLoading &&
              !accountsError &&
              accounts.length === 0 && (
                <div className="dashboard-empty-state">
                  <span className="dashboard-empty-icon">—</span>
                  <div>
                    <strong>No accounts found</strong>
                    <span>
                      Your Azimuth accounts will appear here.
                    </span>
                  </div>
                </div>
              )}

            {!accountsLoading &&
              !accountsError &&
              accounts.map((account, index) => (
                <Link
                  to={`/app/accounts/${account.id}`}
                  className="premium-account-row"
                  key={account.id}
                >
                  <div className="account-row-index">
                    0{index + 1}
                  </div>

                  <div
                    className={`premium-account-icon ${account.type
                      .toLowerCase()
                      .replace('_', '-')}`}
                  >
                    {account.type === 'CURRENT'
                      ? 'C'
                      : account.type === 'SAVINGS'
                        ? 'S'
                        : 'F'}
                  </div>

                  <div className="premium-account-info">
                    <strong>{getAccountName(account)}</strong>

                    <span>
                      •••• {account.accountNumber.slice(-4)}
                    </span>
                  </div>

                  <div className="premium-account-meta">
                    <span>{account.status}</span>
                    <strong>
                      {formatMoney(
                        account.balance,
                        account.currency,
                      )}
                    </strong>
                  </div>

                  <span className="premium-row-arrow">↗</span>
                </Link>
              ))}
          </div>
        </section>

        {/* TRANSACTIONS */}

        <section className="dashboard-panel premium-panel">
          <div className="panel-header premium-panel-header">
            <div>
              <span className="eyebrow">ACTIVITY</span>
              <h2>Recent transactions</h2>
            </div>

            <Link
              className="panel-header-action"
              to="/app/transactions"
            >
              View all
              <span>→</span>
            </Link>
          </div>

          <div className="premium-transaction-list">
            {transactionsLoading && (
              <div className="dashboard-empty-state">
                <span className="dashboard-loader" />
                <div>
                  <strong>Loading activity</strong>
                  <span>
                    Retrieving recent transactions
                  </span>
                </div>
              </div>
            )}

            {transactionsError && (
              <div className="dashboard-empty-state">
                <span className="dashboard-error-icon">!</span>
                <div>
                  <strong>Unable to load activity</strong>
                  <span>{transactionsError}</span>
                </div>
              </div>
            )}

            {!transactionsLoading &&
              !transactionsError &&
              transactions.length === 0 && (
                <div className="dashboard-empty-state">
                  <span className="dashboard-empty-icon">—</span>
                  <div>
                    <strong>No transactions yet</strong>
                    <span>
                      Your recent activity will appear here.
                    </span>
                  </div>
                </div>
              )}

            {!transactionsLoading &&
              !transactionsError &&
              transactions.map((transaction) => {
                const incoming =
                  isIncomingTransaction(transaction)

                return (
                  <div
                    className="premium-transaction-row"
                    key={transaction.id}
                  >
                    <div
                      className={`premium-transaction-icon ${
                        incoming ? 'incoming' : 'outgoing'
                      }`}
                    >
                      {getTransactionIcon(transaction)}
                    </div>

                    <div className="premium-transaction-info">
                      <strong>
                        {getTransactionDescription(transaction)}
                      </strong>

                      <span>
                        {new Date(
                          transaction.createdAt,
                        ).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                        <i>·</i>
                        {transaction.status}
                      </span>
                    </div>

                    <strong
                      className={`premium-transaction-amount ${
                        incoming ? 'incoming' : ''
                      }`}
                    >
                      {formatTransactionAmount(transaction)}
                    </strong>
                  </div>
                )
              })}
          </div>
        </section>
      </div>

      {/* LOWER GRID */}

      <div className="dashboard-lower-grid">
        {/* SAVINGS */}

        <section className="dashboard-panel premium-panel">
          <div className="panel-header premium-panel-header">
            <div>
              <span className="eyebrow">PLANNING</span>
              <h2>Savings goals</h2>
            </div>

            <Link
              className="panel-header-action"
              to="/app/savings"
            >
              Manage
              <span>→</span>
            </Link>
          </div>

          <div className="premium-goal-list">
            {savingsGoalsLoading && (
              <div className="dashboard-empty-state">
                <span className="dashboard-loader" />
                <div>
                  <strong>Loading goals</strong>
                  <span>
                    Retrieving your savings plans
                  </span>
                </div>
              </div>
            )}

            {savingsGoalsError && (
              <div className="dashboard-empty-state">
                <span className="dashboard-error-icon">!</span>
                <div>
                  <strong>Unable to load goals</strong>
                  <span>{savingsGoalsError}</span>
                </div>
              </div>
            )}

            {!savingsGoalsLoading &&
              !savingsGoalsError &&
              savingsGoals.length === 0 && (
                <div className="premium-no-goals">
                  <div className="goal-empty-mark">◉</div>

                  <div>
                    <strong>
                      Start building towards something.
                    </strong>

                    <span>
                      Create a savings goal and track your
                      progress from here.
                    </span>
                  </div>

                  <Link to="/app/savings">
                    Create goal →
                  </Link>
                </div>
              )}

            {!savingsGoalsLoading &&
              !savingsGoalsError &&
              savingsGoals.map((goal) => {
                const progress = getGoalProgress(goal)
                const remaining = Math.max(
                  0,
                  Number(goal.targetAmount) -
                    Number(goal.currentAmount),
                )

                return (
                  <div className="premium-goal-row" key={goal.id}>
                    <div className="premium-goal-top">
                      <div>
                        <strong>{goal.name}</strong>

                        <span>
                          {formatMoney(
                            goal.currentAmount,
                            goal.currency,
                          )}{' '}
                          saved
                        </span>
                      </div>

                      <strong>
                        {Math.round(progress)}%
                      </strong>
                    </div>

                    <div className="premium-progress-track">
                      <div
                        className="premium-progress-fill"
                        style={{
                          width: `${progress}%`,
                        }}
                      />
                    </div>

                    <div className="premium-goal-bottom">
                      <span>
                        {formatMoney(
                          remaining,
                          goal.currency,
                        )}{' '}
                        remaining
                      </span>

                      <span>
                        Target{' '}
                        {goal.targetDate
                          ? new Date(
                              goal.targetDate,
                            ).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })
                          : 'No date'}
                      </span>
                    </div>
                  </div>
                )
              })}
          </div>
        </section>

        {/* SECURITY */}

        <section className="dashboard-panel premium-panel security-command-panel">
          <div className="panel-header premium-panel-header">
            <div>
              <span className="eyebrow">PROTECTION</span>
              <h2>Security center</h2>
            </div>

            <span className="security-live-badge">
              ACTIVE
            </span>
          </div>

          <div className="security-command">
            <div className="security-command-mark">
              <span>✓</span>
            </div>

            <div>
              <strong>
                Your banking environment is protected.
              </strong>

              <p>
                Your session is authenticated and your
                account security controls are active.
              </p>
            </div>
          </div>

          <div className="security-command-list">
            <div>
              <span>
                <i />
                Account status
              </span>

              <strong>Active</strong>
            </div>

            <div>
              <span>
                <i />
                Session authentication
              </span>

              <strong>Protected</strong>
            </div>

            <div>
              <span>
                <i />
                Banking connection
              </span>

              <strong>Secure</strong>
            </div>
          </div>

          <Link
            className="security-command-link"
            to="/app/settings"
          >
            Review security settings
            <span>→</span>
          </Link>
        </section>
      </div>
    </div>
  )
}

export default DashboardPage