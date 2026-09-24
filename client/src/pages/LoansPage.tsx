import { useEffect, useMemo, useState } from 'react'
import { getAccounts, type Account } from '../services/accounts'
import {
  createLoan,
  getLoans,
  repayLoan,
  type Loan,
} from '../services/loans'

function formatMoney(
  value: string | number,
  currency = 'USD',
) {
  const amount = Number(value)

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 2,
  }).format(amount)
}

function formatDate(value: string | null) {
  if (!value) return '—'

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(value))
}

function formatStatus(status: Loan['status']) {
  return (
    status.charAt(0) +
    status.slice(1).toLowerCase()
  )
}

function generateIdempotencyKey() {
  return crypto.randomUUID()
}

function LoansPage() {
  const [loans, setLoans] = useState<Loan[]>([])
  const [accounts, setAccounts] = useState<Account[]>([])

  const [loading, setLoading] = useState(true)
  const [actionLoading, setActionLoading] =
    useState(false)
  const [error, setError] = useState('')

  const [showCreate, setShowCreate] =
    useState(false)
  const [showRepayment, setShowRepayment] =
    useState(false)

  const [selectedLoan, setSelectedLoan] =
    useState<Loan | null>(null)

  const [loanAmount, setLoanAmount] =
    useState('')
  const [interestRate, setInterestRate] =
    useState('10')
  const [termMonths, setTermMonths] =
    useState('12')
  const [purpose, setPurpose] = useState('')
  const [loanAccountId, setLoanAccountId] =
    useState('')

  const [repaymentAccountId, setRepaymentAccountId] =
    useState('')
  const [repaymentAmount, setRepaymentAmount] =
    useState('')

  async function loadData() {
    try {
      setLoading(true)
      setError('')

      const [loansResponse, accountsResponse] =
        await Promise.all([
          getLoans(),
          getAccounts(),
        ])

      setLoans(loansResponse.loans)
      setAccounts(accountsResponse.accounts)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Unable to load your loans.',
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    void loadData()
  }, [])

  const summary = useMemo(() => {
    const outstanding = loans
      .filter(
        (loan) =>
          loan.status === 'ACTIVE',
      )
      .reduce(
        (sum, loan) =>
          sum +
          Math.max(
            Number(loan.totalRepayment) -
              Number(loan.amountRepaid),
            0,
          ),
        0,
      )

    const borrowed = loans.reduce(
      (sum, loan) =>
        sum + Number(loan.amount),
      0,
    )

    const activeLoans = loans.filter(
      (loan) => loan.status === 'ACTIVE',
    ).length

    const pendingLoans = loans.filter(
      (loan) => loan.status === 'PENDING',
    ).length

    return {
      outstanding,
      borrowed,
      activeLoans,
      pendingLoans,
    }
  }, [loans])

  const activeAccounts = accounts.filter(
    (account) =>
      account.status === 'ACTIVE',
  )

  function resetCreateForm() {
    setLoanAmount('')
    setInterestRate('10')
    setTermMonths('12')
    setPurpose('')
    setLoanAccountId('')
  }

  function resetRepaymentForm() {
    setRepaymentAccountId('')
    setRepaymentAmount('')
  }

  async function handleCreateLoan() {
    const amount = Number(loanAmount)
    const rate = Number(interestRate)
    const term = Number(termMonths)

    if (!loanAccountId) {
      setError(
        'Select the account where the loan should be deposited.',
      )
      return
    }

    if (
      !loanAmount ||
      !Number.isFinite(amount) ||
      amount <= 0
    ) {
      setError(
        'Enter a valid loan amount.',
      )
      return
    }

    if (
      !Number.isFinite(rate) ||
      rate < 0 ||
      rate > 100
    ) {
      setError(
        'Interest rate must be between 0% and 100%.',
      )
      return
    }

    if (
      !Number.isInteger(term) ||
      term < 1 ||
      term > 120
    ) {
      setError(
        'Loan term must be between 1 and 120 months.',
      )
      return
    }

    try {
      setActionLoading(true)
      setError('')

      const response = await createLoan({
        accountId: loanAccountId,
        amount,
        interestRate: rate,
        termMonths: term,
        ...(purpose.trim()
          ? { purpose: purpose.trim() }
          : {}),
      })

      setLoans((current) => [
        response.loan,
        ...current,
      ])

      setShowCreate(false)
      resetCreateForm()
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Unable to submit the loan application.',
      )
    } finally {
      setActionLoading(false)
    }
  }

  function openRepayment(loan: Loan) {
    setSelectedLoan(loan)
    resetRepaymentForm()
    setError('')
    setShowRepayment(true)
  }

  async function handleRepayment() {
    if (!selectedLoan) return

    const amount = Number(
      repaymentAmount,
    )

    const remaining =
      Number(selectedLoan.totalRepayment) -
      Number(selectedLoan.amountRepaid)

    if (!repaymentAccountId) {
      setError(
        'Select the account to repay from.',
      )
      return
    }

    if (
      !repaymentAmount ||
      !Number.isFinite(amount) ||
      amount <= 0
    ) {
      setError(
        'Enter a valid repayment amount.',
      )
      return
    }

    if (amount > remaining) {
      setError(
        `Maximum repayment is ${formatMoney(
          remaining,
          selectedLoan.currency,
        )}.`,
      )
      return
    }

    try {
      setActionLoading(true)
      setError('')

      const response = await repayLoan(
        selectedLoan.id,
        repaymentAccountId,
        amount,
        generateIdempotencyKey(),
      )

      setLoans((current) =>
        current.map((loan) =>
          loan.id === selectedLoan.id
            ? response.loan
            : loan,
        ),
      )

      setShowRepayment(false)
      setSelectedLoan(null)
      resetRepaymentForm()
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Unable to process the repayment.',
      )
    } finally {
      setActionLoading(false)
    }
  }

  return (
    <section className="page-section loans-page">
      <div className="page-heading">
        <div>
          <span className="eyebrow">
            LENDING
          </span>

          <h1>Loans that move with you.</h1>

          <p>
            Apply for funding, track your balance,
            and manage repayments from one place.
          </p>
        </div>

        <button
          type="button"
          className="primary-button"
          disabled={activeAccounts.length === 0}
          onClick={() => {
            setError('')
            resetCreateForm()
            setShowCreate(true)
          }}
        >
          + Apply for a loan
        </button>
      </div>

      {error && (
        <div
          className="page-error"
          role="alert"
        >
          {error}
        </div>
      )}

      {loading ? (
        <div className="page-state">
          <span>
            Loading your loans...
          </span>
        </div>
      ) : (
        <>
          <div className="loans-summary-grid">
            <article className="loans-summary-card loans-summary-primary">
              <span className="eyebrow">
                OUTSTANDING
              </span>

              <strong>
                {formatMoney(
                  summary.outstanding,
                )}
              </strong>

              <p>
                Remaining repayment balance
                across active loans.
              </p>
            </article>

            <article className="loans-summary-card">
              <span className="eyebrow">
                TOTAL BORROWED
              </span>

              <strong>
                {formatMoney(
                  summary.borrowed,
                )}
              </strong>

              <p>
                Principal amount across
                your loan applications.
              </p>
            </article>

            <article className="loans-summary-card">
              <span className="eyebrow">
                ACTIVE
              </span>

              <strong>
                {summary.activeLoans}
              </strong>

              <p>
                Loans currently being
                repaid.
              </p>
            </article>

            <article className="loans-summary-card">
              <span className="eyebrow">
                PENDING
              </span>

              <strong>
                {summary.pendingLoans}
              </strong>

              <p>
                Applications awaiting
                approval.
              </p>
            </article>
          </div>

          {loans.length === 0 ? (
            <div className="empty-state-card loans-empty-state">
              <span className="eyebrow">
                YOUR LENDING PROFILE
              </span>

              <h2>
                Nothing borrowed yet.
              </h2>

              <p>
                When you need funding,
                submit an application and
                track the entire journey
                here.
              </p>

              <button
                type="button"
                className="primary-button"
                disabled={
                  activeAccounts.length === 0
                }
                onClick={() => {
                  setError('')
                  resetCreateForm()
                  setShowCreate(true)
                }}
              >
                Start a loan application
              </button>
            </div>
          ) : (
            <div className="loans-list">
              {loans.map((loan) => {
                const total =
                  Number(
                    loan.totalRepayment,
                  )

                const repaid =
                  Number(
                    loan.amountRepaid,
                  )

                const remaining =
                  Math.max(
                    total - repaid,
                    0,
                  )

                const progress =
                  total > 0
                    ? Math.min(
                        (repaid / total) *
                          100,
                        100,
                      )
                    : 0

                const linkedAccount =
                  accounts.find(
                    (account) =>
                      account.id ===
                      loan.accountId,
                  )

                return (
                  <article
                    key={loan.id}
                    className={`loan-card loan-card-${loan.status.toLowerCase()}`}
                  >
                    <div className="loan-card-main">
                      <div className="loan-card-header">
                        <div>
                          <span className="eyebrow">
                            LOAN
                          </span>

                          <h2>
                            {loan.purpose ||
                              'Personal financing'}
                          </h2>
                        </div>

                        <span className="loan-status">
                          {formatStatus(
                            loan.status,
                          )}
                        </span>
                      </div>

                      <div className="loan-amount-row">
                        <div>
                          <span>
                            Principal
                          </span>

                          <strong>
                            {formatMoney(
                              loan.amount,
                              loan.currency,
                            )}
                          </strong>
                        </div>

                        <div>
                          <span>
                            Total repayment
                          </span>

                          <strong>
                            {formatMoney(
                              loan.totalRepayment,
                              loan.currency,
                            )}
                          </strong>
                        </div>

                        <div>
                          <span>
                            Interest
                          </span>

                          <strong>
                            {Number(
                              loan.interestRate,
                            ).toFixed(2)}
                            %
                          </strong>
                        </div>
                      </div>

                      <div className="loan-progress-section">
                        <div className="loan-progress-track">
                          <div
                            className="loan-progress-fill"
                            style={{
                              width: `${progress}%`,
                            }}
                          />
                        </div>

                        <div className="loan-progress-meta">
                          <span>
                            {progress.toFixed(
                              0,
                            )}
                            % repaid
                          </span>

                          <span>
                            {formatMoney(
                              remaining,
                              loan.currency,
                            )}{' '}
                            remaining
                          </span>
                        </div>
                      </div>

                      <div className="loan-meta-grid">
                        <div>
                          <span>
                            Term
                          </span>

                          <strong>
                            {loan.termMonths}{' '}
                            months
                          </strong>
                        </div>

                        <div>
                          <span>
                            Account
                          </span>

                          <strong>
                            {linkedAccount
                              ? `•••• ${linkedAccount.accountNumber.slice(
                                  -4,
                                )}`
                              : 'Unavailable'}
                          </strong>
                        </div>

                        <div>
                          <span>
                            Due date
                          </span>

                          <strong>
                            {formatDate(
                              loan.dueDate,
                            )}
                          </strong>
                        </div>

                        <div>
                          <span>
                            Applied
                          </span>

                          <strong>
                            {formatDate(
                              loan.createdAt,
                            )}
                          </strong>
                        </div>
                      </div>
                    </div>

                    {loan.status ===
                      'ACTIVE' && (
                      <div className="loan-card-actions">
                        <button
                          type="button"
                          disabled={
                            actionLoading
                          }
                          onClick={() =>
                            openRepayment(
                              loan,
                            )
                          }
                        >
                          Make repayment
                        </button>
                      </div>
                    )}
                  </article>
                )
              })}
            </div>
          )}
        </>
      )}

      {showCreate && (
  <div
    className="modal-backdrop loan-application-backdrop"
    onClick={() => setShowCreate(false)}
  >
    <div
      className="loan-application-modal"
      onClick={(event) => event.stopPropagation()}
    >
      <div className="loan-application-topline">
        <div className="loan-application-mark">
          <span>AZ</span>
        </div>

        <div>
          <span className="eyebrow">AZIMUTH LENDING</span>
          <p>Secure financing application</p>
        </div>

        <button
          type="button"
          className="modal-close"
          onClick={() => setShowCreate(false)}
          aria-label="Close"
        >
          ×
        </button>
      </div>

      <div className="loan-application-heading">
        <div>
          <h2>Apply for a loan</h2>
          <p>
            Tell us how much you need and we'll prepare your
            repayment structure.
          </p>
        </div>

        <div className="loan-application-step">
          <span>01</span>
          <small>APPLICATION</small>
        </div>
      </div>

      <div className="loan-application-form">
        <div className="loan-field-section">
          <div className="loan-section-label">
            <span className="loan-section-number">01</span>
            <div>
              <strong>Funding destination</strong>
              <small>Where should the funds be deposited?</small>
            </div>
          </div>

          <label className="loan-premium-field">
            <span>Deposit account</span>

            <div className="loan-input-shell">
              <span className="loan-input-icon">◈</span>

              <select
                value={loanAccountId}
                onChange={(event) =>
                  setLoanAccountId(event.target.value)
                }
              >
                <option value="">Select an account</option>

                {activeAccounts.map((account) => (
                  <option key={account.id} value={account.id}>
                    {account.type} ••••{' '}
                    {account.accountNumber.slice(-4)}
                  </option>
                ))}
              </select>
            </div>
          </label>
        </div>

        <div className="loan-field-section">
          <div className="loan-section-label">
            <span className="loan-section-number">02</span>
            <div>
              <strong>Loan structure</strong>
              <small>Configure your preferred financing terms.</small>
            </div>
          </div>

          <label className="loan-premium-field loan-amount-field">
            <span>Loan amount</span>

            <div className="loan-input-shell loan-money-shell">
              <span className="loan-currency-symbol">$</span>

              <input
                type="number"
                min="0"
                step="0.01"
                value={loanAmount}
                onChange={(event) =>
                  setLoanAmount(event.target.value)
                }
                placeholder="5,000"
              />

              <span className="loan-input-suffix">USD</span>
            </div>
          </label>

          <div className="loan-terms-grid">
            <label className="loan-premium-field">
              <span>Interest rate</span>

              <div className="loan-input-shell">
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="0.01"
                  value={interestRate}
                  onChange={(event) =>
                    setInterestRate(event.target.value)
                  }
                />

                <span className="loan-input-suffix">%</span>
              </div>
            </label>

            <label className="loan-premium-field">
              <span>Repayment term</span>

              <div className="loan-input-shell">
                <select
                  value={termMonths}
                  onChange={(event) =>
                    setTermMonths(event.target.value)
                  }
                >
                  {[6, 12, 18, 24, 36, 48, 60].map(
                    (months) => (
                      <option key={months} value={months}>
                        {months} months
                      </option>
                    ),
                  )}
                </select>
              </div>
            </label>
          </div>
        </div>

        <div className="loan-field-section">
          <div className="loan-section-label">
            <span className="loan-section-number">03</span>
            <div>
              <strong>Purpose</strong>
              <small>Help us understand your financing need.</small>
            </div>
          </div>

          <label className="loan-premium-field">
            <span>What is this loan for?</span>

            <div className="loan-textarea-shell">
              <textarea
                value={purpose}
                onChange={(event) =>
                  setPurpose(event.target.value)
                }
                maxLength={500}
                rows={3}
                placeholder="e.g. Equipment, education, business expansion..."
              />

              <span className="loan-character-count">
                {purpose.length}/500
              </span>
            </div>
          </label>
        </div>
      </div>

      <div className="loan-repayment-preview">
        <div className="loan-preview-glow" />

        <div className="loan-preview-heading">
          <div>
            <span className="eyebrow">ESTIMATED REPAYMENT</span>
            <p>Based on the terms you've entered.</p>
          </div>

          <span className="loan-preview-status">
            <i />
            Estimated
          </span>
        </div>

        <div className="loan-preview-main">
          <strong>
            {loanAmount
              ? formatMoney(
                  Number(loanAmount) *
                    (1 + Number(interestRate) / 100),
                )
              : '$0.00'}
          </strong>

          <span>total repayment</span>
        </div>

        <div className="loan-preview-breakdown">
          <div>
            <span>Principal</span>
            <strong>
              {loanAmount
                ? formatMoney(Number(loanAmount))
                : '$0.00'}
            </strong>
          </div>

          <div>
            <span>Interest</span>
            <strong>
              {loanAmount
                ? formatMoney(
                    Number(loanAmount) *
                      (Number(interestRate) / 100),
                  )
                : '$0.00'}
            </strong>
          </div>

          <div>
            <span>Term</span>
            <strong>{termMonths} months</strong>
          </div>
        </div>
      </div>

      <div className="loan-application-footer">
        <div className="loan-security-note">
          <span className="loan-security-icon">✓</span>

          <div>
            <strong>Secure application</strong>
            <small>
              Your financial information is encrypted and
              protected.
            </small>
          </div>
        </div>

        <div className="loan-application-actions">
          <button
            type="button"
            className="secondary-button"
            onClick={() => setShowCreate(false)}
          >
            Cancel
          </button>

          <button
            type="button"
            className="primary-button loan-submit-button"
            disabled={actionLoading}
            onClick={() => void handleCreateLoan()}
          >
            {actionLoading ? (
              'Submitting...'
            ) : (
              <>
                Submit application
                <span>→</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  </div>
)}

      {showRepayment &&
        selectedLoan && (
          <div
            className="modal-backdrop"
            onClick={() => {
              setShowRepayment(false)
              setSelectedLoan(null)
            }}
          >
            <div
              className="modal-card"
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              <div className="modal-header">
                <div>
                  <span className="eyebrow">
                    REPAYMENT
                  </span>

                  <h2>
                    Make a repayment
                  </h2>
                </div>

                <button
                  type="button"
                  className="modal-close"
                  onClick={() => {
                    setShowRepayment(
                      false,
                    )
                    setSelectedLoan(
                      null,
                    )
                  }}
                  aria-label="Close"
                >
                  ×
                </button>
              </div>

              <div className="loan-repayment-summary">
                <div>
                  <span>
                    Remaining
                  </span>

                  <strong>
                    {formatMoney(
                      Math.max(
                        Number(
                          selectedLoan.totalRepayment,
                        ) -
                          Number(
                            selectedLoan.amountRepaid,
                          ),
                        0,
                      ),
                      selectedLoan.currency,
                    )}
                  </strong>
                </div>

                <div>
                  <span>
                    Repaid
                  </span>

                  <strong>
                    {formatMoney(
                      selectedLoan.amountRepaid,
                      selectedLoan.currency,
                    )}
                  </strong>
                </div>
              </div>

              <label className="form-field">
                <span>
                  Source account
                </span>

                <select
                  value={
                    repaymentAccountId
                  }
                  onChange={(event) =>
                    setRepaymentAccountId(
                      event.target.value,
                    )
                  }
                >
                  <option value="">
                    Select an account
                  </option>

                  {activeAccounts.map(
                    (account) => (
                      <option
                        key={account.id}
                        value={account.id}
                      >
                        {account.type} ••••{' '}
                        {account.accountNumber.slice(
                          -4,
                        )}
                      </option>
                    ),
                  )}
                </select>
              </label>

              <label className="form-field">
                <span>
                  Repayment amount
                </span>

                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={
                    repaymentAmount
                  }
                  onChange={(event) =>
                    setRepaymentAmount(
                      event.target.value,
                    )
                  }
                  placeholder="500"
                />
              </label>

              <p className="loan-modal-note">
                Repayments are deducted
                immediately from the
                selected active account.
              </p>

              <div className="modal-actions">
                <button
                  type="button"
                  className="secondary-button"
                  onClick={() => {
                    setShowRepayment(
                      false,
                    )
                    setSelectedLoan(
                      null,
                    )
                  }}
                >
                  Cancel
                </button>

                <button
                  type="button"
                  className="primary-button"
                  disabled={
                    actionLoading
                  }
                  onClick={() =>
                    void handleRepayment()
                  }
                >
                  {actionLoading
                    ? 'Processing...'
                    : 'Make repayment'}
                </button>
              </div>
            </div>
          </div>
        )}
    </section>
  )
}

export default LoansPage
