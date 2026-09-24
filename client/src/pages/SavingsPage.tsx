import { useEffect, useMemo, useState } from 'react'
import { getAccounts, type Account } from '../services/accounts'
import {
  contributeToSavingsGoal,
  createSavingsGoal,
  getSavingsGoals,
  updateSavingsGoal,
  updateSavingsGoalStatus,
  type SavingsGoal,
} from '../services/savings'

function formatMoney(value: string | number, currency = 'USD') {
  const amount = Number(value)

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 2,
  }).format(amount)
}

function formatDate(value: string | null) {
  if (!value) return 'No target date'

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(value))
}

function formatStatus(status: SavingsGoal['status']) {
  return status.charAt(0) + status.slice(1).toLowerCase()
}

function generateIdempotencyKey() {
  return crypto.randomUUID()
}

function SavingsPage() {
  const [goals, setGoals] = useState<SavingsGoal[]>([])
  const [accounts, setAccounts] = useState<Account[]>([])

  const [loading, setLoading] = useState(true)
  const [actionLoading, setActionLoading] = useState(false)
  const [error, setError] = useState('')

  const [showCreate, setShowCreate] = useState(false)
  const [showContribution, setShowContribution] = useState(false)
  const [showEdit, setShowEdit] = useState(false)

  const [selectedGoal, setSelectedGoal] =
    useState<SavingsGoal | null>(null)

  const [goalName, setGoalName] = useState('')
  const [targetAmount, setTargetAmount] = useState('')
  const [targetDate, setTargetDate] = useState('')

  const [sourceAccountId, setSourceAccountId] = useState('')
  const [contributionAmount, setContributionAmount] =
    useState('')

  async function loadData() {
    try {
      setLoading(true)
      setError('')

      const [goalsResponse, accountsResponse] =
        await Promise.all([
          getSavingsGoals(),
          getAccounts(),
        ])

      setGoals(goalsResponse.goals)
      setAccounts(accountsResponse.accounts)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Unable to load your savings goals.',
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    void loadData()
  }, [])

  const summary = useMemo(() => {
    const totalSaved = goals.reduce(
      (sum, goal) => sum + Number(goal.currentAmount),
      0,
    )

    const totalTarget = goals.reduce(
      (sum, goal) => sum + Number(goal.targetAmount),
      0,
    )

    const activeGoals = goals.filter(
      (goal) => goal.status === 'ACTIVE',
    ).length

    const completedGoals = goals.filter(
      (goal) => goal.status === 'COMPLETED',
    ).length

    const progress =
      totalTarget > 0
        ? Math.min((totalSaved / totalTarget) * 100, 100)
        : 0

    return {
      totalSaved,
      totalTarget,
      activeGoals,
      completedGoals,
      progress,
    }
  }, [goals])

  const activeSavingsAccounts = accounts.filter(
    (account) =>
      account.status === 'ACTIVE' &&
      account.type === 'SAVINGS',
  )

  function resetCreateForm() {
    setGoalName('')
    setTargetAmount('')
    setTargetDate('')
  }

  function resetContributionForm() {
    setSourceAccountId('')
    setContributionAmount('')
  }

  function resetEditForm() {
    setGoalName('')
    setTargetAmount('')
    setTargetDate('')
  }

  async function handleCreateGoal() {
    const amount = Number(targetAmount)

    if (!goalName.trim()) {
      setError('Enter a name for your savings goal.')
      return
    }

    if (!targetAmount || !Number.isFinite(amount) || amount <= 0) {
      setError('Enter a valid target amount.')
      return
    }

    if (activeSavingsAccounts.length === 0) {
      setError('You need an active savings account to create a goal.')
      return
    }

    try {
      setActionLoading(true)
      setError('')

      await createSavingsGoal({
  accountId: activeSavingsAccounts[0].id,
  name: goalName.trim(),
  targetAmount: amount,
  ...(targetDate
    ? { targetDate: new Date(`${targetDate}T00:00:00.000Z`).toISOString() }
    : {}),
})

      setShowCreate(false)
      resetCreateForm()

      await loadData()
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Unable to create the savings goal.',
      )
    } finally {
      setActionLoading(false)
    }
  }

  function openContribution(goal: SavingsGoal) {
    setSelectedGoal(goal)
    resetContributionForm()
    setError('')
    setShowContribution(true)
  }

  async function handleContribution() {
    if (!selectedGoal) return

    const amount = Number(contributionAmount)

    if (!sourceAccountId) {
      setError('Select an account to contribute from.')
      return
    }

    if (
      !contributionAmount ||
      !Number.isFinite(amount) ||
      amount <= 0
    ) {
      setError('Enter a valid contribution amount.')
      return
    }

    try {
      setActionLoading(true)
      setError('')

      await contributeToSavingsGoal(
        selectedGoal.id,
        sourceAccountId,
        amount,
        generateIdempotencyKey(),
      )

      setShowContribution(false)
      setSelectedGoal(null)
      resetContributionForm()

      await loadData()
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Unable to process the contribution.',
      )
    } finally {
      setActionLoading(false)
    }
  }

  function openEdit(goal: SavingsGoal) {
    setSelectedGoal(goal)
    setGoalName(goal.name)
    setTargetAmount(goal.targetAmount)
    setTargetDate(
      goal.targetDate
        ? goal.targetDate.slice(0, 10)
        : '',
    )
    setError('')
    setShowEdit(true)
  }

  async function handleEdit() {
    if (!selectedGoal) return

    const amount = Number(targetAmount)

    if (!goalName.trim()) {
      setError('Enter a name for your savings goal.')
      return
    }

    if (!targetAmount || !Number.isFinite(amount) || amount <= 0) {
      setError('Enter a valid target amount.')
      return
    }

    if (
      amount <= Number(selectedGoal.currentAmount)
    ) {
      setError(
        'Target amount must be greater than the amount already saved.',
      )
      return
    }

    try {
      setActionLoading(true)
      setError('')

      await updateSavingsGoal(
        selectedGoal.id,
        {
          name: goalName.trim(),
          targetAmount: amount,
          targetDate: targetDate
  ? new Date(`${targetDate}T00:00:00.000Z`).toISOString()
  : null,
        },
      )

      setShowEdit(false)
      setSelectedGoal(null)
      resetEditForm()

      await loadData()
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Unable to update the savings goal.',
      )
    } finally {
      setActionLoading(false)
    }
  }

  async function handleStatusChange(
    goal: SavingsGoal,
    status: 'ACTIVE' | 'PAUSED' | 'CANCELLED',
  ) {
    try {
      setActionLoading(true)
      setError('')

      const response = await updateSavingsGoalStatus(
        goal.id,
        status,
      )

      setGoals((current) =>
        current.map((item) =>
          item.id === goal.id ? response.goal : item,
        ),
      )
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Unable to update the savings goal.',
      )
    } finally {
      setActionLoading(false)
    }
  }

  return (
    <section className="page-section savings-page">
      <div className="page-heading">
        <div>
          <span className="eyebrow">SAVINGS</span>

          <h1>Build toward what matters.</h1>

          <p>
            Set goals, track your progress, and move money
            intentionally.
          </p>
        </div>

        <button
          type="button"
          className="primary-button"
          disabled={activeSavingsAccounts.length === 0}
          onClick={() => {
            setError('')
            resetCreateForm()
            setShowCreate(true)
          }}
        >
          + New goal
        </button>
      </div>

      {error && (
        <div className="page-error" role="alert">
          {error}
        </div>
      )}

      {loading ? (
        <div className="page-state">
          <span>Loading your savings...</span>
        </div>
      ) : (
        <>
          <div className="savings-summary-grid">
            <article className="savings-summary-card savings-summary-primary">
              <span className="eyebrow">TOTAL SAVED</span>

              <strong>
                {formatMoney(summary.totalSaved)}
              </strong>

              <div className="savings-summary-progress">
                <div>
                  <span>
                    {summary.progress.toFixed(0)}% of target
                  </span>

                  <span>
                    {formatMoney(summary.totalTarget)}
                  </span>
                </div>

                <div className="savings-progress-track">
                  <div
                    className="savings-progress-fill"
                    style={{
                      width: `${summary.progress}%`,
                    }}
                  />
                </div>
              </div>
            </article>

            <article className="savings-summary-card">
              <span className="eyebrow">ACTIVE GOALS</span>

              <strong>{summary.activeGoals}</strong>

              <p>Goals currently accepting contributions.</p>
            </article>

            <article className="savings-summary-card">
              <span className="eyebrow">COMPLETED</span>

              <strong>{summary.completedGoals}</strong>

              <p>Targets you've successfully reached.</p>
            </article>
          </div>

          {goals.length === 0 ? (
            <div className="empty-state-card savings-empty-state">
              <span className="eyebrow">YOUR NEXT MILESTONE</span>

              <h2>Give your money a destination.</h2>

              <p>
                Create your first savings goal and turn a
                financial intention into something measurable.
              </p>

              <button
                type="button"
                className="primary-button"
                disabled={activeSavingsAccounts.length === 0}
                onClick={() => {
                  setError('')
                  resetCreateForm()
                  setShowCreate(true)
                }}
              >
                Create your first goal
              </button>
            </div>
          ) : (
            <div className="savings-goals-grid">
              {goals.map((goal) => {
                const current = Number(goal.currentAmount)
                const target = Number(goal.targetAmount)

                const progress =
                  target > 0
                    ? Math.min(
                        (current / target) * 100,
                        100,
                      )
                    : 0

                const linkedAccount = accounts.find(
                  (account) =>
                    account.id === goal.accountId,
                )

                return (
                  <article
                    key={goal.id}
                    className={`savings-goal-card savings-goal-${goal.status.toLowerCase()}`}
                  >
                    <div className="savings-goal-header">
                      <div>
                        <span className="eyebrow">
                          SAVINGS GOAL
                        </span>

                        <h2>{goal.name}</h2>
                      </div>

                      <span className="savings-status">
                        {formatStatus(goal.status)}
                      </span>
                    </div>

                    <div className="savings-goal-amounts">
                      <div>
                        <span>Saved</span>

                        <strong>
                          {formatMoney(
                            goal.currentAmount,
                            goal.currency,
                          )}
                        </strong>
                      </div>

                      <div>
                        <span>Target</span>

                        <strong>
                          {formatMoney(
                            goal.targetAmount,
                            goal.currency,
                          )}
                        </strong>
                      </div>
                    </div>

                    <div className="savings-goal-progress">
                      <div className="savings-progress-track">
                        <div
                          className="savings-progress-fill"
                          style={{
                            width: `${progress}%`,
                          }}
                        />
                      </div>

                      <div className="savings-progress-meta">
                        <span>
                          {progress.toFixed(0)}% complete
                        </span>

                        <span>
                          {formatMoney(
                            Math.max(target - current, 0),
                            goal.currency,
                          )}{' '}
                          remaining
                        </span>
                      </div>
                    </div>

                    <div className="savings-goal-meta">
                      <div>
                        <span>Target date</span>

                        <strong>
                          {formatDate(goal.targetDate)}
                        </strong>
                      </div>

                      <div>
                        <span>Linked account</span>

                        <strong>
                          {linkedAccount
                            ? `•••• ${linkedAccount.accountNumber.slice(-4)}`
                            : 'Unavailable'}
                        </strong>
                      </div>
                    </div>

                    {goal.status !== 'COMPLETED' &&
                      goal.status !== 'CANCELLED' && (
                        <div className="savings-goal-actions">
                          <button
                            type="button"
                            disabled={actionLoading}
                            onClick={() =>
                              openContribution(goal)
                            }
                          >
                            Contribute
                          </button>

                          <button
                            type="button"
                            disabled={actionLoading}
                            onClick={() => openEdit(goal)}
                          >
                            Edit
                          </button>

                          {goal.status === 'ACTIVE' ? (
                            <button
                              type="button"
                              disabled={actionLoading}
                              onClick={() =>
                                void handleStatusChange(
                                  goal,
                                  'PAUSED',
                                )
                              }
                            >
                              Pause
                            </button>
                          ) : (
                            <button
                              type="button"
                              disabled={actionLoading}
                              onClick={() =>
                                void handleStatusChange(
                                  goal,
                                  'ACTIVE',
                                )
                              }
                            >
                              Resume
                            </button>
                          )}

                          <button
                            type="button"
                            className="danger-action"
                            disabled={actionLoading}
                            onClick={() =>
                              void handleStatusChange(
                                goal,
                                'CANCELLED',
                              )
                            }
                          >
                            Cancel
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
          className="modal-backdrop"
          onClick={() => setShowCreate(false)}
        >
          <div
            className="modal-card"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <div className="modal-header">
              <div>
                <span className="eyebrow">NEW GOAL</span>
                <h2>Create a savings goal</h2>
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

            <label className="form-field">
              <span>Goal name</span>

              <input
                value={goalName}
                onChange={(event) =>
                  setGoalName(event.target.value)
                }
                placeholder="e.g. New laptop"
              />
            </label>

            <label className="form-field">
              <span>Target amount</span>

              <input
                type="number"
                min="0"
                step="0.01"
                value={targetAmount}
                onChange={(event) =>
                  setTargetAmount(event.target.value)
                }
                placeholder="5000"
              />
            </label>

            <label className="form-field">
              <span>Target date</span>

              <input
                type="date"
                value={targetDate}
                onChange={(event) =>
                  setTargetDate(event.target.value)
                }
              />
            </label>

            <div className="form-field">
              <span>Linked savings account</span>

              <div className="savings-account-preview">
                {activeSavingsAccounts[0] ? (
                  <>
                    <strong>
                      {activeSavingsAccounts[0].type}
                    </strong>

                    <span>
                      ••••{' '}
                      {activeSavingsAccounts[0].accountNumber.slice(
                        -4,
                      )}
                    </span>
                  </>
                ) : (
                  <span>
                    No active savings account available.
                  </span>
                )}
              </div>
            </div>

            <div className="modal-actions">
              <button
                type="button"
                className="secondary-button"
                onClick={() => setShowCreate(false)}
              >
                Cancel
              </button>

              <button
                type="button"
                className="primary-button"
                disabled={actionLoading}
                onClick={() =>
                  void handleCreateGoal()
                }
              >
                {actionLoading
                  ? 'Creating...'
                  : 'Create goal'}
              </button>
            </div>
          </div>
        </div>
      )}

      {showContribution && selectedGoal && (
        <div
          className="modal-backdrop"
          onClick={() => {
            setShowContribution(false)
            setSelectedGoal(null)
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
                  CONTRIBUTION
                </span>

                <h2>{selectedGoal.name}</h2>
              </div>

              <button
                type="button"
                className="modal-close"
                onClick={() => {
                  setShowContribution(false)
                  setSelectedGoal(null)
                }}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <label className="form-field">
  <span>Source account</span>

  <select
    value={sourceAccountId}
    onChange={(event) =>
      setSourceAccountId(event.target.value)
    }
  >
    <option value="">
      Select an account
    </option>

    {accounts
      .filter(
        (account) =>
          account.status === 'ACTIVE' &&
          account.id !== selectedGoal.accountId,
      )
      .map((account) => (
        <option
          key={account.id}
          value={account.id}
        >
          {account.type} •••• {account.accountNumber.slice(-4)} — $
          {Number(account.balance).toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </option>
      ))}
  </select>

  {accounts.filter(
    (account) =>
      account.status === 'ACTIVE' &&
      account.id !== selectedGoal.accountId,
  ).length === 0 && (
    <small className="form-help">
      No other active account is available for this contribution.
    </small>
  )}
</label>

            <label className="form-field">
              <span>Contribution amount</span>

              <input
                type="number"
                min="0"
                step="0.01"
                value={contributionAmount}
                onChange={(event) =>
                  setContributionAmount(
                    event.target.value,
                  )
                }
                placeholder="250"
              />
            </label>

            <p className="savings-modal-note">
              The contribution will move funds from the
              selected account into the account linked to
              this savings goal.
            </p>

            <div className="modal-actions">
              <button
                type="button"
                className="secondary-button"
                onClick={() => {
                  setShowContribution(false)
                  setSelectedGoal(null)
                }}
              >
                Cancel
              </button>

              <button
                type="button"
                className="primary-button"
                disabled={actionLoading}
                onClick={() =>
                  void handleContribution()
                }
              >
                {actionLoading
                  ? 'Processing...'
                  : 'Contribute'}
              </button>
            </div>
          </div>
        </div>
      )}

      {showEdit && selectedGoal && (
        <div
          className="modal-backdrop"
          onClick={() => {
            setShowEdit(false)
            setSelectedGoal(null)
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
                  EDIT GOAL
                </span>

                <h2>Update your goal</h2>
              </div>

              <button
                type="button"
                className="modal-close"
                onClick={() => {
                  setShowEdit(false)
                  setSelectedGoal(null)
                }}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <label className="form-field">
              <span>Goal name</span>

              <input
                value={goalName}
                onChange={(event) =>
                  setGoalName(event.target.value)
                }
              />
            </label>

            <label className="form-field">
              <span>Target amount</span>

              <input
                type="number"
                min="0"
                step="0.01"
                value={targetAmount}
                onChange={(event) =>
                  setTargetAmount(event.target.value)
                }
              />
            </label>

            <label className="form-field">
              <span>Target date</span>

              <input
                type="date"
                value={targetDate}
                onChange={(event) =>
                  setTargetDate(event.target.value)
                }
              />
            </label>

            <div className="modal-actions">
              <button
                type="button"
                className="secondary-button"
                onClick={() => {
                  setShowEdit(false)
                  setSelectedGoal(null)
                }}
              >
                Cancel
              </button>

              <button
                type="button"
                className="primary-button"
                disabled={actionLoading}
                onClick={() =>
                  void handleEdit()
                }
              >
                {actionLoading
                  ? 'Saving...'
                  : 'Save changes'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default SavingsPage