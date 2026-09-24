import {
  useEffect,
  useMemo,
  useState,
  type FormEvent,
} from 'react'
import { Link } from 'react-router-dom'
import {
  getAccounts,
  type Account,
} from '../services/accounts'
import {
  createTransactionAuthChallenge,
} from '../services/auth'
import {
  authenticateTransfer,
  createTransfer,
} from '../services/transfers'
import { useAuth } from '../context/AuthContext'
import '../App.css'

type TransferStep =
  | 'FORM'
  | 'REVIEW'
  | 'AUTHENTICATE'
  | 'SUCCESS'

type TransferMode =
  | 'OWN_ACCOUNT'
  | 'OTHER_CUSTOMER'

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

function formatAccountNumber(accountNumber: string) {
  return `•••• ${accountNumber.slice(-4)}`
}

function formatAccountBalance(account: Account) {
  const symbol =
    account.currency === 'USD'
      ? '$'
      : `${account.currency} `

  return `${symbol}${Number(
    account.balance,
  ).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`
}

function formatMoney(
  amount: number,
  currency = 'USD',
) {
  const symbol =
    currency === 'USD'
      ? '$'
      : `${currency} `

  return `${symbol}${amount.toLocaleString(
    'en-US',
    {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
  )}`
}

function TransfersPage() {
  const { isAuthenticated } = useAuth()

  const [accounts, setAccounts] = useState<Account[]>([])
  const [accountsLoading, setAccountsLoading] =
    useState(true)
  const [accountsError, setAccountsError] =
    useState<string | null>(null)

  const [transferMode, setTransferMode] =
    useState<TransferMode>('OTHER_CUSTOMER')

  const [fromAccountId, setFromAccountId] =
    useState('')

  const [toAccountId, setToAccountId] =
    useState('')

  const [toAccountNumber, setToAccountNumber] =
    useState('')

  const [amount, setAmount] = useState('')
  const [description, setDescription] = useState('')

  const [step, setStep] =
    useState<TransferStep>('FORM')

  const [transferId, setTransferId] =
    useState<string | null>(null)

  const [transferReference, setTransferReference] =
    useState<string | null>(null)

  const [challengeExpiresAt, setChallengeExpiresAt] =
    useState<string | null>(null)

  const [password, setPassword] = useState('')

  const [showPassword, setShowPassword] =
    useState(false)

  const [submitting, setSubmitting] =
    useState(false)

  const [error, setError] =
    useState<string | null>(null)

  useEffect(() => {
    if (!isAuthenticated) {
      setAccountsLoading(false)
      return
    }

    let cancelled = false

    async function loadAccounts() {
      try {
        setAccountsLoading(true)
        setAccountsError(null)

        const response = await getAccounts()

        if (cancelled) {
          return
        }

        const activeAccounts =
          response.accounts.filter(
            (account) =>
              account.status === 'ACTIVE',
          )

        setAccounts(activeAccounts)

        if (activeAccounts.length > 0) {
          const firstAccount =
            activeAccounts[0]

          setFromAccountId(firstAccount.id)

          const firstRecipient =
            activeAccounts.find(
              (account) =>
                account.id !== firstAccount.id,
            )

          setToAccountId(
            firstRecipient?.id ?? '',
          )
        }
      } catch (requestError) {
        if (cancelled) {
          return
        }

        setAccountsError(
          requestError instanceof Error
            ? requestError.message
            : 'Unable to load your accounts.',
        )
      } finally {
        if (!cancelled) {
          setAccountsLoading(false)
        }
      }
    }

    void loadAccounts()

    return () => {
      cancelled = true
    }
  }, [isAuthenticated])

  const selectedAccount = useMemo(
    () =>
      accounts.find(
        (account) =>
          account.id === fromAccountId,
      ) ?? null,
    [accounts, fromAccountId],
  )

  const recipientAccount = useMemo(
    () =>
      accounts.find(
        (account) =>
          account.id === toAccountId,
      ) ?? null,
    [accounts, toAccountId],
  )

  const destinationAccountNumber =
    transferMode === 'OWN_ACCOUNT'
      ? recipientAccount?.accountNumber ?? ''
      : toAccountNumber.trim()

  const maskedDestinationAccount =
    destinationAccountNumber
      ? formatAccountNumber(
          destinationAccountNumber,
        )
      : '—'

  const destinationName =
    transferMode === 'OWN_ACCOUNT'
      ? recipientAccount
        ? getAccountName(recipientAccount.type)
        : 'Select account'
      : 'Azimuth customer'

  const destinationInitial =
    transferMode === 'OWN_ACCOUNT'
      ? recipientAccount
        ? getAccountInitial(
            recipientAccount.type,
          )
        : 'A'
      : 'A'

  const numericAmount = Number(amount)

  const availableBalance = selectedAccount
    ? Number(selectedAccount.balance)
    : 0

  const formattedAmount = useMemo(() => {
    if (
      !Number.isFinite(numericAmount) ||
      numericAmount <= 0
    ) {
      return '$0.00'
    }

    return formatMoney(
      numericAmount,
      selectedAccount?.currency ?? 'USD',
    )
  }, [numericAmount, selectedAccount])

  const canContinue =
    Boolean(selectedAccount) &&
    Number.isFinite(numericAmount) &&
    numericAmount > 0 &&
    numericAmount <= availableBalance &&
    (transferMode === 'OWN_ACCOUNT'
      ? Boolean(recipientAccount) &&
        selectedAccount?.id !==
          recipientAccount?.id &&
        selectedAccount?.currency ===
          recipientAccount?.currency
      : toAccountNumber.trim().length > 0)

  const remainingBalance =
    selectedAccount
      ? availableBalance -
        (Number.isFinite(numericAmount)
          ? numericAmount
          : 0)
      : 0

  const handleReview = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()

    setError(null)

    if (!selectedAccount) {
      setError(
        'Select an account to transfer from.',
      )
      return
    }

    if (
      !Number.isFinite(numericAmount) ||
      numericAmount <= 0
    ) {
      setError(
        'Enter a valid transfer amount.',
      )
      return
    }

    if (
      numericAmount >
      Number(selectedAccount.balance)
    ) {
      setError(
        'The transfer amount exceeds your available balance.',
      )
      return
    }

    if (transferMode === 'OWN_ACCOUNT') {
      if (!recipientAccount) {
        setError(
          'Select a destination account.',
        )
        return
      }

      if (
        selectedAccount.id ===
        recipientAccount.id
      ) {
        setError(
          'The destination account must be different from the source account.',
        )
        return
      }

      if (
        selectedAccount.currency !==
        recipientAccount.currency
      ) {
        setError(
          'Transfers between different currencies are not supported.',
        )
        return
      }
    }

    if (transferMode === 'OTHER_CUSTOMER') {
      const destination =
        toAccountNumber.trim()

      if (!destination) {
        setError(
          'Enter the destination account number.',
        )
        return
      }

      if (
        destination ===
        selectedAccount.accountNumber
      ) {
        setError(
          'The destination account must be different from the source account.',
        )
        return
      }
    }

    setStep('REVIEW')
  }

  const handleCreateTransfer =
    async () => {
      if (!selectedAccount) {
        setError(
          'Select an account to transfer from.',
        )
        return
      }

      const destination =
        destinationAccountNumber

      if (!destination) {
        setError(
          'A destination account is required.',
        )
        return
      }

      if (
        destination ===
        selectedAccount.accountNumber
      ) {
        setError(
          'The destination account must be different from the source account.',
        )
        return
      }

      try {
        setSubmitting(true)
        setError(null)

        const idempotencyKey =
          crypto.randomUUID()

        const response =
          await createTransfer({
            idempotencyKey,
            fromAccountId:
              selectedAccount.id,
            toAccountNumber:
              destination,
            amount,
            currency:
              selectedAccount.currency,
            ...(description.trim()
              ? {
                  description:
                    description.trim(),
                }
              : {}),
          })

        setTransferId(
          response.transfer.id,
        )

        setTransferReference(
          response.transfer.reference,
        )

        setPassword('')
        setChallengeExpiresAt(null)
        setStep('AUTHENTICATE')
      } catch (requestError) {
        setError(
          requestError instanceof Error
            ? requestError.message
            : 'Unable to create this transfer.',
        )
      } finally {
        setSubmitting(false)
      }
    }

  const handleAuthenticate =
    async (
      event: FormEvent<HTMLFormElement>,
    ) => {
      event.preventDefault()

      if (!transferId) {
        setError(
          'This transfer session is no longer available.',
        )
        return
      }

      if (!password) {
        setError(
          'Enter your password to authorize this transfer.',
        )
        return
      }

      try {
        setSubmitting(true)
        setError(null)

        const challengeResponse =
          await createTransactionAuthChallenge(
            transferId,
            password,
          )

        setChallengeExpiresAt(
          challengeResponse.expiresAt,
        )

        await authenticateTransfer(
          transferId,
          {
            challenge:
              challengeResponse.challenge,
          },
        )

        setStep('SUCCESS')
      } catch (requestError) {
        setError(
          requestError instanceof Error
            ? requestError.message
            : 'Transfer authentication failed.',
        )
      } finally {
        setSubmitting(false)
      }
    }

  const resetTransfer = () => {
    setAmount('')
    setDescription('')
    setPassword('')
    setError(null)
    setTransferId(null)
    setTransferReference(null)
    setChallengeExpiresAt(null)
    setToAccountNumber('')
    setTransferMode('OTHER_CUSTOMER')

    if (accounts.length > 1) {
      const firstRecipient =
        accounts.find(
          (account) =>
            account.id !== fromAccountId,
        )

      setToAccountId(
        firstRecipient?.id ?? '',
      )
    } else {
      setToAccountId('')
    }

    setStep('FORM')
  }

  if (accountsLoading) {
    return (
      <div className="page-content transfers-page">
        <div className="premium-panel transfer-state-panel">
          <div className="dashboard-empty-state">
            <span className="dashboard-loader" />

            <div>
              <strong>
                Loading transfer workspace
              </strong>

              <span>
                Retrieving your available accounts.
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (accountsError) {
    return (
      <div className="page-content transfers-page">
        <div className="premium-panel transfer-state-panel">
          <div className="dashboard-empty-state">
            <span className="dashboard-error-icon">
              !
            </span>

            <div>
              <strong>
                Unable to load accounts
              </strong>

              <span>{accountsError}</span>

              <Link
                className="transfer-state-link"
                to="/app/accounts"
              >
                Return to accounts →
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (step === 'SUCCESS') {
    return (
      <div className="page-content transfers-page">
        <section className="transfers-page-header">
          <div>
            <span className="eyebrow">
              TRANSFER COMPLETE
            </span>

            <h1>Money moved successfully.</h1>

            <p>
              Your transfer has been completed
              and recorded in the ledger.
            </p>
          </div>
        </section>

        <section className="transfer-success-command">
          <div className="transfer-success-glow" />

          <div className="transfer-success-icon">
            ✓
          </div>

          <span className="eyebrow">
            COMPLETED
          </span>

          <strong className="transfer-success-amount">
            {formattedAmount}
          </strong>

          <p>
            The funds have been transferred from
            your source account to the destination
            account.
          </p>

          {transferReference && (
            <div className="transfer-success-reference">
              <span>TRANSFER REFERENCE</span>

              <strong>
                {transferReference}
              </strong>
            </div>
          )}

          <div className="transfer-success-route">
            <div>
              <span>FROM</span>

              <strong>
                {selectedAccount
                  ? getAccountName(
                      selectedAccount.type,
                    )
                  : 'Account'}
              </strong>

              <small>
                {selectedAccount
                  ? formatAccountNumber(
                      selectedAccount.accountNumber,
                    )
                  : '—'}
              </small>
            </div>

            <span className="transfer-route-arrow">
              →
            </span>

            <div>
              <span>TO</span>

              <strong>
                {destinationName}
              </strong>

              <small>
                {maskedDestinationAccount}
              </small>
            </div>
          </div>

          <div className="transfer-success-actions">
            <button
              type="button"
              className="primary-dashboard-action"
              onClick={resetTransfer}
            >
              New transfer
              <span>↗</span>
            </button>

            <Link
              className="secondary-dashboard-action"
              to="/app/accounts"
            >
              View accounts
            </Link>
          </div>
        </section>
      </div>
    )
  }

  if (step === 'AUTHENTICATE') {
    return (
      <div className="page-content transfers-page">
        <button
          type="button"
          className="transfer-back-link"
          onClick={() => {
            if (!submitting) {
              setError(null)
              setPassword('')
              setStep('REVIEW')
            }
          }}
          disabled={submitting}
        >
          ← Back to review
        </button>

        <section className="transfers-page-header">
          <div>
            <span className="eyebrow">
              FINAL SECURITY CHECK
            </span>

            <h1>Authorize transfer.</h1>

            <p>
              Confirm your identity before
              Azimuth releases the transfer.
            </p>
          </div>
        </section>

        <div className="transfer-auth-layout">
          <section className="transfer-auth-command">
            <div className="transfer-auth-command-top">
              <span className="transfer-auth-icon">
                ✓
              </span>

              <div>
                <span className="eyebrow">
                  AUTHENTICATION
                </span>

                <strong>
                  Transaction authorization
                </strong>
              </div>
            </div>

            <div className="transfer-auth-amount">
              <span>Transfer amount</span>

              <strong>
                {formattedAmount}
              </strong>
            </div>

            <div className="transfer-auth-route">
              <div>
                <span>FROM</span>

                <strong>
                  {selectedAccount
                    ? getAccountName(
                        selectedAccount.type,
                      )
                    : '—'}
                </strong>

                <small>
                  {selectedAccount
                    ? formatAccountNumber(
                        selectedAccount.accountNumber,
                      )
                    : '—'}
                </small>
              </div>

              <span>→</span>

              <div>
                <span>TO</span>

                <strong>
                  {destinationName}
                </strong>

                <small>
                  {maskedDestinationAccount}
                </small>
              </div>
            </div>

            {transferReference && (
              <div className="transfer-auth-reference">
                <span>REFERENCE</span>

                <strong>
                  {transferReference}
                </strong>
              </div>
            )}
          </section>

          <form
            className="transfer-auth-form"
            onSubmit={handleAuthenticate}
          >
            <div>
              <span className="eyebrow">
                SECURE ACCESS
              </span>

              <h2>Enter your password.</h2>

              <p>
                Your password is used only to
                authorize this transaction.
              </p>
            </div>

            <label className="transfer-auth-field">
              <span>Password</span>

              <div className="transfer-password-input">
                <input
                  type={
                    showPassword
                      ? 'text'
                      : 'password'
                  }
                  value={password}
                  onChange={(event) =>
                    setPassword(
                      event.target.value,
                    )
                  }
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  disabled={submitting}
                  autoFocus
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      (current) => !current,
                    )
                  }
                  disabled={submitting}
                >
                  {showPassword
                    ? 'Hide'
                    : 'Show'}
                </button>
              </div>
            </label>

            {error && (
              <div
                className="transfer-form-error"
                role="alert"
              >
                <strong>
                  Authorization failed
                </strong>

                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              className="transfer-authorize-button"
              disabled={
                submitting ||
                !password
              }
            >
              {submitting
                ? 'Authorizing...'
                : 'Authorize transfer'}

              {!submitting && (
                <span>→</span>
              )}
            </button>

            <div className="transfer-auth-security">
              <span className="status-dot" />

              <div>
                <strong>
                  Protected transaction
                </strong>

                <span>
                  Your authorization challenge is
                  short-lived and can only be used
                  once.
                </span>
              </div>
            </div>

            {challengeExpiresAt && (
              <small className="transfer-challenge-note">
                Challenge issued securely.
              </small>
            )}
          </form>
        </div>
      </div>
    )
  }

  if (step === 'REVIEW') {
    return (
      <div className="page-content transfers-page">
        <button
          type="button"
          className="transfer-back-link"
          onClick={() => {
            setError(null)
            setStep('FORM')
          }}
          disabled={submitting}
        >
          ← Edit transfer
        </button>

        <section className="transfers-page-header">
          <div>
            <span className="eyebrow">
              REVIEW
            </span>

            <h1>Review transfer.</h1>

            <p>
              Check everything carefully before
              creating the transfer.
            </p>
          </div>
        </section>

        <div className="transfer-review-layout-premium">
          <section className="transfer-review-command">
            <span className="eyebrow">
              TRANSFER DETAILS
            </span>

            <strong className="transfer-review-total">
              {formattedAmount}
            </strong>

            <span className="transfer-review-caption">
              Total amount to be transferred
            </span>

            <div className="transfer-review-route">
              <div className="transfer-review-account">
                <span className="transfer-review-account-icon">
                  {selectedAccount
                    ? getAccountInitial(
                        selectedAccount.type,
                      )
                    : 'A'}
                </span>

                <div>
                  <span>FROM</span>

                  <strong>
                    {selectedAccount
                      ? getAccountName(
                          selectedAccount.type,
                        )
                      : '—'}
                  </strong>

                  <small>
                    {selectedAccount
                      ? formatAccountNumber(
                          selectedAccount.accountNumber,
                        )
                      : '—'}
                  </small>
                </div>
              </div>

              <div className="transfer-review-route-line">
                <span>→</span>
              </div>

              <div className="transfer-review-account">
                <span className="transfer-review-account-icon recipient">
                  {destinationInitial}
                </span>

                <div>
                  <span>TO</span>

                  <strong>
                    {destinationName}
                  </strong>

                  <small>
                    {maskedDestinationAccount}
                  </small>
                </div>
              </div>
            </div>

            <div className="transfer-review-meta">
              <div>
                <span>DESTINATION</span>

                <strong>
                  {transferMode ===
                  'OWN_ACCOUNT'
                    ? 'My Azimuth account'
                    : 'Another Azimuth customer'}
                </strong>
              </div>

              <div>
                <span>CURRENCY</span>

                <strong>
                  {selectedAccount?.currency ??
                    'USD'}
                </strong>
              </div>

              <div>
                <span>AVAILABLE AFTER</span>

                <strong>
                  {selectedAccount
                    ? formatMoney(
                        Math.max(
                          0,
                          remainingBalance,
                        ),
                        selectedAccount.currency,
                      )
                    : '—'}
                </strong>
              </div>

              {description.trim() && (
                <div>
                  <span>DESCRIPTION</span>

                  <strong>
                    {description.trim()}
                  </strong>
                </div>
              )}
            </div>
          </section>

          <aside className="transfer-review-security">
            <span className="transfer-security-icon">
              ✓
            </span>

            <span className="eyebrow">
              NEXT STEP
            </span>

            <h2>
              Transaction authentication
            </h2>

            <p>
              After creating this transfer,
              you'll confirm it with your
              Azimuth password.
            </p>

            {error && (
              <div
                className="transfer-form-error"
                role="alert"
              >
                <strong>
                  Transfer creation failed
                </strong>

                <span>{error}</span>
              </div>
            )}

            <button
              type="button"
              className="transfer-authorize-button"
              onClick={() =>
                void handleCreateTransfer()
              }
              disabled={submitting}
            >
              {submitting
                ? 'Creating transfer...'
                : 'Continue to authorization'}

              {!submitting && (
                <span>→</span>
              )}
            </button>

            <div className="transfer-security-note-premium">
              <span className="status-dot" />

              <span>
                Protected by transaction-level
                authentication.
              </span>
            </div>
          </aside>
        </div>
      </div>
    )
  }

  return (
    <div className="page-content transfers-page">
      <section className="transfers-page-header">
        <div>
          <span className="eyebrow">
            PAYMENTS
          </span>

          <h1>Make a transfer.</h1>

          <p>
            Move money securely from your Azimuth
            account.
          </p>
        </div>

        <div className="transfer-header-status">
          <span className="status-dot" />

          <div>
            <strong>Transfer system</strong>

            <span>Operational</span>
          </div>
        </div>
      </section>

      <div className="transfer-layout-premium">
        <form
          className="transfer-form-premium"
          onSubmit={handleReview}
        >
          <div className="transfer-form-heading">
            <div>
              <span className="eyebrow">
                TRANSFER
              </span>

              <h2>Payment details</h2>
            </div>

            <span className="transfer-step-indicator">
              01 / 03
            </span>
          </div>

          <div className="transfer-form-stack">
            <label className="transfer-field-premium">
              <span>
                Transfer destination
              </span>

              <select
                value={transferMode}
                onChange={(event) => {
                  const nextMode =
                    event.target.value as TransferMode

                  setTransferMode(nextMode)
                  setError(null)

                  if (
                    nextMode ===
                    'OWN_ACCOUNT'
                  ) {
                    setToAccountNumber('')

                    const replacement =
                      accounts.find(
                        (account) =>
                          account.id !==
                          fromAccountId,
                      )

                    setToAccountId(
                      replacement?.id ?? '',
                    )
                  } else {
                    setToAccountId('')
                  }
                }}
              >
                <option value="OTHER_CUSTOMER">
                  Other Azimuth customer
                </option>

                <option
                  value="OWN_ACCOUNT"
                  disabled={accounts.length < 2}
                >
                  {accounts.length < 2
                    ? 'My Azimuth accounts — another account required'
                    : 'Between my Azimuth accounts'}
                </option>
              </select>
            </label>

            <div className="transfer-field-premium transfer-destination-info">
              <span>
                {transferMode ===
                'OWN_ACCOUNT'
                  ? 'Internal transfer'
                  : 'Customer transfer'}
              </span>

              <small>
                {transferMode ===
                'OWN_ACCOUNT'
                  ? 'Move money between two active accounts belonging to you.'
                  : 'Send money securely to another Azimuth customer using their account number.'}
              </small>
            </div>

            <label className="transfer-field-premium">
              <span>From account</span>

              <select
                value={fromAccountId}
                onChange={(event) => {
                  const nextFrom =
                    event.target.value

                  setFromAccountId(nextFrom)
                  setError(null)

                  if (
                    nextFrom ===
                    toAccountId
                  ) {
                    const replacement =
                      accounts.find(
                        (account) =>
                          account.id !==
                          nextFrom,
                      )

                    setToAccountId(
                      replacement?.id ?? '',
                    )
                  }
                }}
              >
                {accounts.map(
                  (account) => (
                    <option
                      key={account.id}
                      value={account.id}
                    >
                      {getAccountName(
                        account.type,
                      )}{' '}
                      ·{' '}
                      {formatAccountNumber(
                        account.accountNumber,
                      )}{' '}
                      ·{' '}
                      {formatAccountBalance(
                        account,
                      )}
                    </option>
                  ),
                )}
              </select>
            </label>

            {selectedAccount && (
              <div className="transfer-available-premium">
                <div>
                  <span>
                    AVAILABLE BALANCE
                  </span>

                  <strong>
                    {formatAccountBalance(
                      selectedAccount,
                    )}
                  </strong>
                </div>

                <span className="transfer-available-status">
                  ACTIVE
                </span>
              </div>
            )}

            {transferMode ===
            'OWN_ACCOUNT' ? (
              <label className="transfer-field-premium">
                <span>To account</span>

                <select
                  value={toAccountId}
                  onChange={(event) => {
                    setToAccountId(
                      event.target.value,
                    )
                    setError(null)
                  }}
                >
                  <option value="">
                    Select destination account
                  </option>

                  {accounts
                    .filter(
                      (account) =>
                        account.id !==
                        fromAccountId,
                    )
                    .map((account) => (
                      <option
                        key={account.id}
                        value={account.id}
                      >
                        {getAccountName(
                          account.type,
                        )}{' '}
                        ·{' '}
                        {formatAccountNumber(
                          account.accountNumber,
                        )}
                      </option>
                    ))}
                </select>
              </label>
            ) : (
              <label className="transfer-field-premium">
                <span>
                  Recipient account number
                </span>

                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={64}
                  placeholder="Enter Azimuth account number"
                  value={toAccountNumber}
                  onChange={(event) => {
                    setToAccountNumber(
                      event.target.value,
                    )
                    setError(null)
                  }}
                  autoComplete="off"
                />

                <small>
                  Enter the Azimuth account number
                  belonging to the person you want
                  to pay.
                </small>
              </label>
            )}

            <label className="transfer-field-premium">
              <span>
                Amount
                <em>
                  {selectedAccount?.currency ??
                    'USD'}
                </em>
              </span>

              <div className="transfer-amount-input">
                <span>
                  {selectedAccount?.currency ===
                  'USD'
                    ? '$'
                    : selectedAccount?.currency ??
                      '$'}
                </span>

                <input
                  type="number"
                  inputMode="decimal"
                  min="0.01"
                  step="0.01"
                  placeholder="0.00"
                  value={amount}
                  onChange={(event) => {
                    setAmount(
                      event.target.value,
                    )
                    setError(null)
                  }}
                />
              </div>
            </label>

            <label className="transfer-field-premium">
              <span>
                Description
                <em>OPTIONAL</em>
              </span>

              <textarea
                rows={4}
                maxLength={200}
                placeholder="What is this transfer for?"
                value={description}
                onChange={(event) =>
                  setDescription(
                    event.target.value,
                  )
                }
              />

              <small>
                {description.length}/200
              </small>
            </label>

            {error && (
              <div
                className="transfer-form-error"
                role="alert"
              >
                <strong>
                  Transfer cannot continue
                </strong>

                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              className="transfer-continue-button"
              disabled={!canContinue}
            >
              Continue to review

              <span>→</span>
            </button>
          </div>
        </form>

        <aside className="transfer-summary-premium">
          <div className="transfer-summary-top">
            <span className="eyebrow">
              TRANSFER SUMMARY
            </span>

            <span className="transfer-summary-number">
              01
            </span>
          </div>

          <div className="transfer-summary-amount-premium">
            <span>You are sending</span>

            <strong>
              {formattedAmount}
            </strong>
          </div>

          <div className="transfer-summary-route-premium">
            <div>
              <span>FROM</span>

              <strong>
                {selectedAccount
                  ? getAccountName(
                      selectedAccount.type,
                    )
                  : 'Select account'}
              </strong>

              <small>
                {selectedAccount
                  ? formatAccountNumber(
                      selectedAccount.accountNumber,
                    )
                  : '—'}
              </small>
            </div>

            <div className="transfer-summary-route-arrow">
              ↓
            </div>

            <div>
              <span>TO</span>

              <strong>
                {destinationName}
              </strong>

              <small>
                {maskedDestinationAccount}
              </small>
            </div>
          </div>

          <div className="transfer-summary-divider" />

          <div className="transfer-summary-detail">
            <span>Destination</span>

            <strong>
              {transferMode ===
              'OWN_ACCOUNT'
                ? 'My Azimuth account'
                : 'Another customer'}
            </strong>
          </div>

          <div className="transfer-summary-detail">
            <span>Currency</span>

            <strong>
              {selectedAccount?.currency ??
                'USD'}
            </strong>
          </div>

          <div className="transfer-summary-detail">
            <span>After transfer</span>

            <strong>
              {selectedAccount
                ? formatMoney(
                    Math.max(
                      0,
                      remainingBalance,
                    ),
                    selectedAccount.currency,
                  )
                : '—'}
            </strong>
          </div>

          <div className="transfer-summary-security">
            <span className="transfer-security-shield">
              ✓
            </span>

            <div>
              <strong>
                Secure transfer
              </strong>

              <span>
                Every transfer requires
                transaction-level authentication
                before funds move.
              </span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default TransfersPage