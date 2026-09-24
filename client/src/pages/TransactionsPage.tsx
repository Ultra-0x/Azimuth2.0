import { useEffect, useMemo, useState } from 'react'
import {
  getTransaction,
  getTransactions,
  type Transaction,
  type TransactionDetail,
  type TransactionStatus,
  type TransactionType,
} from '../services/transactions'

function formatMoney(amount: string, currency: string) {
  const value = Number(amount)

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date(value))
}

function formatType(type: TransactionType) {
  return type
    .toLowerCase()
    .split('_')
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1),
    )
    .join(' ')
}

function formatStatus(status: TransactionStatus) {
  return (
    status.charAt(0) +
    status.slice(1).toLowerCase()
  )
}

function getTransactionDirection(
  transaction: Transaction,
) {
  if (
    transaction.type === 'DEPOSIT' ||
    transaction.type === 'REFUND' ||
    transaction.type === 'INTEREST' ||
    transaction.type === 'LOAN_DISBURSEMENT'
  ) {
    return 'credit'
  }

  if (
    transaction.type === 'WITHDRAWAL' ||
    transaction.type === 'PAYMENT' ||
    transaction.type === 'FEE' ||
    transaction.type === 'LOAN_REPAYMENT'
  ) {
    return 'debit'
  }

  return transaction.senderAccountId
    ? 'debit'
    : 'credit'
}

function getTransactionIcon(
  transaction: Transaction,
) {
  switch (transaction.type) {
    case 'DEPOSIT':
      return '↓'

    case 'WITHDRAWAL':
      return '↑'

    case 'TRANSFER':
      return '↔'

    case 'PAYMENT':
      return '◈'

    case 'REFUND':
      return '↩'

    case 'FEE':
      return '−'

    case 'INTEREST':
      return '%'

    case 'LOAN_DISBURSEMENT':
      return '＋'

    case 'LOAN_REPAYMENT':
      return '−'

    default:
      return '•'
  }
}

function getTransactionTitle(
  transaction: Transaction,
) {
  if (transaction.description?.trim()) {
    return transaction.description
  }

  return formatType(transaction.type)
}

function TransactionRow({
  transaction,
  onOpen,
}: {
  transaction: Transaction
  onOpen: (transaction: Transaction) => void
}) {
  const direction = getTransactionDirection(
    transaction,
  )

  return (
    <button
      type="button"
      className="transaction-row"
      onClick={() => onOpen(transaction)}
    >
      <span
        className={`transaction-icon transaction-icon-${direction}`}
      >
        {getTransactionIcon(transaction)}
      </span>

      <span className="transaction-main">
        <strong>
          {getTransactionTitle(transaction)}
        </strong>

        <small>
          {transaction.reference}
        </small>
      </span>

      <span className="transaction-channel">
        {transaction.channel.replace('_', ' ')}
      </span>

      <span
        className={`transaction-amount transaction-amount-${direction}`}
      >
        {direction === 'debit' ? '−' : '+'}
        {formatMoney(
          transaction.amount,
          transaction.currency,
        )}
      </span>

      <span
        className={`transaction-status transaction-status-${transaction.status.toLowerCase()}`}
      >
        {formatStatus(transaction.status)}
      </span>

      <span className="transaction-date">
        {formatDate(transaction.createdAt)}
      </span>

      <span className="transaction-row-arrow">
        →
      </span>
    </button>
  )
}

function TransactionDetailModal({
  transaction,
  onClose,
}: {
  transaction: TransactionDetail
  onClose: () => void
}) {
  const direction =
    getTransactionDirection(transaction)

  return (
    <div
      className="modal-backdrop transaction-detail-backdrop"
      onClick={onClose}
    >
      <div
        className="transaction-detail-modal"
        onClick={(event) =>
          event.stopPropagation()
        }
      >
        <div className="transaction-detail-top">
          <div>
            <span className="eyebrow">
              TRANSACTION DETAIL
            </span>

            <h2>
              {getTransactionTitle(transaction)}
            </h2>
          </div>

          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div
          className={`transaction-detail-hero transaction-detail-hero-${direction}`}
        >
          <span>
            {direction === 'debit'
              ? 'Debit'
              : 'Credit'}
          </span>

          <strong>
            {direction === 'debit'
              ? '−'
              : '+'}
            {formatMoney(
              transaction.amount,
              transaction.currency,
            )}
          </strong>

          <small>
            {formatStatus(transaction.status)}
          </small>
        </div>

        <div className="transaction-detail-grid">
          <div>
            <span>Reference</span>
            <strong>
              {transaction.reference}
            </strong>
          </div>

          <div>
            <span>Type</span>
            <strong>
              {formatType(transaction.type)}
            </strong>
          </div>

          <div>
            <span>Channel</span>
            <strong>
              {transaction.channel.replace(
                '_',
                ' ',
              )}
            </strong>
          </div>

          <div>
            <span>Date</span>
            <strong>
              {formatDate(
                transaction.createdAt,
              )}
            </strong>
          </div>
        </div>

        {transaction.ledgerEntries.length > 0 && (
          <div className="transaction-ledger">
            <div className="transaction-detail-section-title">
              <span>ACCOUNT ACTIVITY</span>
            </div>

            {transaction.ledgerEntries.map(
              (entry) => (
                <div
                  className="transaction-ledger-row"
                  key={entry.id}
                >
                  <div>
                    <strong>
                      {entry.direction ===
                      'DEBIT'
                        ? 'Debit'
                        : 'Credit'}
                    </strong>

                    <small>
                      Balance after transaction
                    </small>
                  </div>

                  <div>
                    <strong>
                      {formatMoney(
                        entry.amount,
                        entry.currency,
                      )}
                    </strong>

                    <small>
                      {formatMoney(
                        entry.balanceAfter,
                        entry.currency,
                      )}{' '}
                      balance
                    </small>
                  </div>
                </div>
              ),
            )}
          </div>
        )}

        <div className="transaction-detail-footer">
          <span>
            Transaction ID
          </span>

          <code>{transaction.id}</code>
        </div>
      </div>
    </div>
  )
}

function TransactionsPage() {
  const [transactions, setTransactions] =
    useState<Transaction[]>([])

  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] =
    useState(1)
  const [total, setTotal] = useState(0)

  const [type, setType] =
    useState<TransactionType | ''>('')
  const [status, setStatus] =
    useState<TransactionStatus | ''>('')

  const [search, setSearch] = useState('')

  const [loading, setLoading] =
    useState(true)
  const [error, setError] =
    useState<string | null>(null)

  const [selectedTransaction, setSelectedTransaction] =
    useState<TransactionDetail | null>(null)

  const [detailLoading, setDetailLoading] =
    useState(false)

  useEffect(() => {
    let cancelled = false

    async function loadTransactions() {
      setLoading(true)
      setError(null)

      try {
        const response =
          await getTransactions({
            page,
            limit: 20,
            ...(type ? { type } : {}),
            ...(status ? { status } : {}),
          })

        if (cancelled) return

        setTransactions(response.transactions)
        setTotal(response.pagination.total)
        setTotalPages(
          response.pagination.totalPages,
        )
      } catch (requestError) {
        if (cancelled) return

        setError(
          requestError instanceof Error
            ? requestError.message
            : 'Unable to load transactions.',
        )
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    void loadTransactions()

    return () => {
      cancelled = true
    }
  }, [page, type, status])

  const filteredTransactions = useMemo(() => {
    const query = search.trim().toLowerCase()

    if (!query) {
      return transactions
    }

    return transactions.filter(
      (transaction) =>
        transaction.reference
          .toLowerCase()
          .includes(query) ||
        transaction.description
          ?.toLowerCase()
          .includes(query) ||
        transaction.type
          .toLowerCase()
          .includes(query),
    )
  }, [transactions, search])

  const credits = useMemo(
    () =>
      transactions
        .filter(
          (transaction) =>
            getTransactionDirection(
              transaction,
            ) === 'credit',
        )
        .reduce(
          (totalAmount, transaction) =>
            totalAmount +
            Number(transaction.amount),
          0,
        ),
    [transactions],
  )

  const debits = useMemo(
    () =>
      transactions
        .filter(
          (transaction) =>
            getTransactionDirection(
              transaction,
            ) === 'debit',
        )
        .reduce(
          (totalAmount, transaction) =>
            totalAmount +
            Number(transaction.amount),
          0,
        ),
    [transactions],
  )

  async function openTransaction(
    transaction: Transaction,
  ) {
    setDetailLoading(true)

    try {
      const response =
        await getTransaction(
          transaction.id,
        )

      setSelectedTransaction(
        response.transaction,
      )
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : 'Unable to load transaction details.',
      )
    } finally {
      setDetailLoading(false)
    }
  }

  function resetFilters() {
    setSearch('')
    setType('')
    setStatus('')
    setPage(1)
  }

  return (
    <section className="page-section transactions-page">
      <div className="page-heading transactions-heading">
        <div>
          <span className="eyebrow">
            AZIMUTH ACTIVITY
          </span>

          <h1>Transactions</h1>

          <p>
            Every movement across your Azimuth
            accounts in one place.
          </p>
        </div>

        <div className="transaction-heading-count">
          <strong>{total}</strong>
          <span>transactions</span>
        </div>
      </div>

      <div className="transaction-summary-grid">
        <div className="transaction-summary-card">
          <span>ALL ACTIVITY</span>
          <strong>{total}</strong>
          <small>
            Recorded transactions
          </small>
        </div>

        <div className="transaction-summary-card transaction-summary-credit">
          <span>CREDITS</span>
          <strong>
            {formatMoney(
              credits.toFixed(2),
              'USD',
            )}
          </strong>
          <small>
            Current page activity
          </small>
        </div>

        <div className="transaction-summary-card transaction-summary-debit">
          <span>DEBITS</span>
          <strong>
            {formatMoney(
              debits.toFixed(2),
              'USD',
            )}
          </strong>
          <small>
            Current page activity
          </small>
        </div>
      </div>

      <div className="transaction-toolbar">
        <div className="transaction-search">
          <span>⌕</span>

          <input
            type="search"
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            placeholder="Search reference or description..."
          />
        </div>

        <select
          value={type}
          onChange={(event) => {
            setType(
              event.target.value as
                | TransactionType
                | '',
            )
            setPage(1)
          }}
        >
          <option value="">
            All transaction types
          </option>

          <option value="DEPOSIT">
            Deposits
          </option>

          <option value="WITHDRAWAL">
            Withdrawals
          </option>

          <option value="TRANSFER">
            Transfers
          </option>

          <option value="PAYMENT">
            Payments
          </option>

          <option value="REFUND">
            Refunds
          </option>

          <option value="FEE">
            Fees
          </option>

          <option value="INTEREST">
            Interest
          </option>

          <option value="LOAN_DISBURSEMENT">
            Loan disbursements
          </option>

          <option value="LOAN_REPAYMENT">
            Loan repayments
          </option>
        </select>

        <select
          value={status}
          onChange={(event) => {
            setStatus(
              event.target.value as
                | TransactionStatus
                | '',
            )
            setPage(1)
          }}
        >
          <option value="">
            All statuses
          </option>

          <option value="COMPLETED">
            Completed
          </option>

          <option value="PENDING">
            Pending
          </option>

          <option value="PROCESSING">
            Processing
          </option>

          <option value="FAILED">
            Failed
          </option>

          <option value="REVERSED">
            Reversed
          </option>

          <option value="CANCELLED">
            Cancelled
          </option>
        </select>

        {(search || type || status) && (
          <button
            type="button"
            className="transaction-reset"
            onClick={resetFilters}
          >
            Reset
          </button>
        )}
      </div>

      <div className="transaction-table-card">
        <div className="transaction-table-header">
          <span>Activity</span>
          <span>Channel</span>
          <span>Amount</span>
          <span>Status</span>
          <span>Date</span>
          <span />
        </div>

        {loading ? (
          <div className="transaction-loading">
            <div className="transaction-loader" />
            <span>
              Loading transaction activity...
            </span>
          </div>
        ) : error ? (
          <div className="page-error">
            <strong>
              Unable to load transactions
            </strong>

            <p>{error}</p>
          </div>
        ) : filteredTransactions.length ===
          0 ? (
          <div className="transaction-empty">
            <div className="transaction-empty-mark">
              ↔
            </div>

            <strong>
              No transactions found
            </strong>

            <p>
              {search || type || status
                ? 'Try changing your filters.'
                : 'Your account activity will appear here once transactions are recorded.'}
            </p>

            {(search || type || status) && (
              <button
                type="button"
                className="secondary-button"
                onClick={resetFilters}
              >
                Clear filters
              </button>
            )}
          </div>
        ) : (
          filteredTransactions.map(
            (transaction) => (
              <TransactionRow
                key={transaction.id}
                transaction={transaction}
                onOpen={openTransaction}
              />
            ),
          )
        )}
      </div>

      {!loading &&
        filteredTransactions.length > 0 && (
          <div className="transaction-pagination">
            <span>
              Page {page} of {totalPages}
            </span>

            <div>
              <button
                type="button"
                disabled={page <= 1}
                onClick={() =>
                  setPage((current) =>
                    Math.max(1, current - 1),
                  )
                }
              >
                ← Previous
              </button>

              <button
                type="button"
                disabled={
                  page >= totalPages
                }
                onClick={() =>
                  setPage((current) =>
                    Math.min(
                      totalPages,
                      current + 1,
                    ),
                  )
                }
              >
                Next →
              </button>
            </div>
          </div>
        )}

      {selectedTransaction && (
        <TransactionDetailModal
          transaction={
            selectedTransaction
          }
          onClose={() =>
            setSelectedTransaction(null)
          }
        />
      )}

      {detailLoading && (
        <div className="transaction-detail-loading">
          Loading details...
        </div>
      )}
    </section>
  )
}

export default TransactionsPage