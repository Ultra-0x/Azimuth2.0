import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAccounts, type Account } from '../services/accounts'
import { useAuth } from '../context/AuthContext'
import '../App.css'

function getAccountName(type: Account['type']) {
  switch (type) {
    case 'CURRENT':
      return 'Everyday Current'
    case 'SAVINGS':
      return 'Personal Savings'
    case 'FIXED_DEPOSIT':
      return 'Fixed Deposit'
  }
}

function getAccountInitial(type: Account['type']) {
  switch (type) {
    case 'CURRENT':
      return 'C'
    case 'SAVINGS':
      return 'S'
    case 'FIXED_DEPOSIT':
      return 'F'
  }
}

function getAccountTypeLabel(type: Account['type']) {
  switch (type) {
    case 'CURRENT':
      return 'CURRENT ACCOUNT'
    case 'SAVINGS':
      return 'SAVINGS ACCOUNT'
    case 'FIXED_DEPOSIT':
      return 'FIXED DEPOSIT'
  }
}

function getStatusLabel(status: Account['status']) {
  switch (status) {
    case 'ACTIVE':
      return 'Active'
    case 'FROZEN':
      return 'Frozen'
    case 'SUSPENDED':
      return 'Suspended'
    case 'CLOSED':
      return 'Closed'
    default:
      return status
  }
}

function formatBalance(account: Account) {
  const currency =
    account.currency === 'USD'
      ? '$'
      : `${account.currency} `

  return `${currency}${Number(account.balance).toLocaleString(
    'en-US',
    {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
  )}`
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function formatShortAccountNumber(accountNumber: string) {
  return `•••• ${accountNumber.slice(-4)}`
}

function AccountsPage() {
  const { isAuthenticated } = useAuth()

  const [accounts, setAccounts] = useState<Account[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  async function loadAccounts() {
    try {
      setLoading(true)
      setError(null)

      const response = await getAccounts()

      setAccounts(response.accounts)
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : 'Unable to load your accounts.',
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!isAuthenticated) {
      setLoading(false)
      return
    }

    void loadAccounts()
  }, [isAuthenticated])

  const totalBalance = useMemo(
    () =>
      accounts.reduce(
        (total, account) => total + Number(account.balance),
        0,
      ),
    [accounts],
  )

  const activeAccounts = useMemo(
    () =>
      accounts.filter(
        (account) => account.status === 'ACTIVE',
      ).length,
    [accounts],
  )

  const nonActiveAccounts = useMemo(
    () =>
      accounts.filter(
        (account) => account.status !== 'ACTIVE',
      ).length,
    [accounts],
  )

  const savingsBalance = useMemo(
    () =>
      accounts
        .filter((account) => account.type === 'SAVINGS')
        .reduce(
          (total, account) =>
            total + Number(account.balance),
          0,
        ),
    [accounts],
  )

  return (
    <div className="page-content accounts-page premium-accounts-page">
      <section className="dashboard-header premium-dashboard-header accounts-page-header">
        <div>
          <div className="dashboard-date">
            <span className="live-indicator" />
            ACCOUNT MANAGEMENT
          </div>

          <h1>
            Your <span>accounts.</span>
          </h1>

          <p>
            One clear view of your balances, account status,
            and everyday banking relationship with Azimuth.
          </p>
        </div>

        <div className="dashboard-header-actions">
          <Link
            className="secondary-dashboard-action"
            to="/app/transactions"
          >
            View activity
          </Link>

          <Link
            className="primary-dashboard-action"
            to="/app/transfers"
          >
            <span>↗</span>
            New transfer
          </Link>
        </div>
      </section>

      <section className="accounts-command-hero">
        <div className="accounts-command-glow" />

        <div className="accounts-command-main">
          <div className="balance-hero-label">
            <span className="eyebrow">TOTAL PORTFOLIO</span>

            <span className="balance-live">
              <span />
              Live
            </span>
          </div>

          <div className="accounts-total-value">
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

        <div className="accounts-command-divider" />

        <div className="accounts-command-stats">
          <div>
            <span>Total accounts</span>
            <strong>{accounts.length}</strong>
          </div>

          <div>
            <span>Active</span>
            <strong>{activeAccounts}</strong>
          </div>

          <div>
            <span>Savings</span>
            <strong>
              $
              {savingsBalance.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </strong>
          </div>
        </div>

        <div className="accounts-command-footer">
          <span>
            {nonActiveAccounts > 0
              ? `${nonActiveAccounts} account${
                  nonActiveAccounts === 1 ? '' : 's'
                } require attention`
              : 'All accounts operating normally'}
          </span>

          <span className="accounts-command-status">
            <i />
            Banking connection secure
          </span>
        </div>
      </section>

      <section className="accounts-overview-strip">
        <div>
          <span className="eyebrow">PORTFOLIO</span>

          <strong>
            {accounts.length}{' '}
            {accounts.length === 1
              ? 'account'
              : 'accounts'}
          </strong>

          <span>linked to your profile</span>
        </div>

        <div>
          <span className="eyebrow">AVAILABLE</span>

          <strong>
            {activeAccounts} active
          </strong>

          <span>accounts currently operational</span>
        </div>

        <div>
          <span className="eyebrow">BASE CURRENCY</span>

          <strong>USD</strong>

          <span>primary portfolio currency</span>
        </div>
      </section>

      <section className="dashboard-section premium-section accounts-list-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">PORTFOLIO</span>

            <h2>Account portfolio</h2>
          </div>

          {!loading && !error && (
            <span className="section-caption">
              {accounts.length}{' '}
              {accounts.length === 1
                ? 'account'
                : 'accounts'}{' '}
              connected
            </span>
          )}
        </div>

        {loading && (
          <div className="premium-panel accounts-state-panel">
            <div className="dashboard-empty-state">
              <span className="dashboard-loader" />

              <div>
                <strong>Loading accounts</strong>

                <span>
                  Retrieving your latest banking information.
                </span>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="premium-panel accounts-state-panel">
            <div className="dashboard-empty-state">
              <span className="dashboard-error-icon">!</span>

              <div>
                <strong>Unable to load accounts</strong>

                <span>{error}</span>

                <button
                  type="button"
                  className="accounts-retry-button"
                  onClick={() => void loadAccounts()}
                >
                  Try again →
                </button>
              </div>
            </div>
          </div>
        )}

        {!loading && !error && accounts.length === 0 && (
          <div className="premium-panel accounts-state-panel">
            <div className="accounts-empty-premium">
              <div className="accounts-empty-mark">
                A
              </div>

              <div>
                <span className="eyebrow">
                  NO ACCOUNTS
                </span>

                <h3>Your portfolio is empty.</h3>

                <p>
                  There are currently no Azimuth accounts
                  attached to your profile.
                </p>
              </div>
            </div>
          </div>
        )}

        {!loading && !error && accounts.length > 0 && (
          <div className="premium-accounts-list">
            {accounts.map((account, index) => {
              const isActive = account.status === 'ACTIVE'

              return (
                <article
                  className={`premium-account-card ${
                    isActive
                      ? 'premium-account-card-active'
                      : 'premium-account-card-attention'
                  }`}
                  key={account.id}
                >
                  <div className="premium-account-card-top">
                    <div className="premium-account-card-identity">
                      <div
                        className={`premium-account-card-icon ${account.type
                          .toLowerCase()
                          .replace('_', '-')}`}
                      >
                        <span>
                          {getAccountInitial(
                            account.type,
                          )}
                        </span>
                      </div>

                      <div>
                        <span className="eyebrow">
                          {getAccountTypeLabel(
                            account.type,
                          )}
                        </span>

                        <h3>
                          {getAccountName(account.type)}
                        </h3>

                        <span className="premium-account-number">
                          Account{' '}
                          {formatShortAccountNumber(
                            account.accountNumber,
                          )}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`premium-account-status ${account.status.toLowerCase()}`}
                    >
                      <i />

                      {getStatusLabel(account.status)}
                    </div>
                  </div>

                  <div className="premium-account-card-middle">
                    <div className="premium-account-balance">
                      <span>Available balance</span>

                      <strong>
                        {formatBalance(account)}
                      </strong>
                    </div>

                    <div>
                      <span>Currency</span>

                      <strong>
                        {account.currency}
                      </strong>
                    </div>

                    <div>
                      <span>Opened</span>

                      <strong>
                        {formatDate(account.createdAt)}
                      </strong>
                    </div>
                  </div>

                  <div className="premium-account-card-footer">
                    <div>
                      <span className="premium-account-index">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <span>
                        Account ID ·{' '}
                        {account.id.slice(0, 8)}
                      </span>
                    </div>

                    <Link
                      to={`/app/accounts/${account.id}`}
                      className="premium-account-view"
                    >
                      View account
                      <span>↗</span>
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </section>
    </div>
  )
}

export default AccountsPage