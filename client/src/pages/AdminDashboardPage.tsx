import {
  useEffect,
  useMemo,
  useState,
  type FormEvent,
} from "react";
import { useNavigate } from "react-router-dom";
import {
  approveAdminLoan,
  createAdminTransfer,
  disburseAdminLoan,
  getAdminLoans,
  getAdminOverview,
  getAdminUsers,
  rejectAdminLoan,
  type AdminLoan,
  type AdminOverview,
  type AdminUser,
} from "../services/admin";

type AdminTab =
  | "overview"
  | "loans"
  | "transfers";

function formatMoney(
  amount: string | number,
  currency = "USD",
) {
  const value =
    typeof amount === "string"
      ? Number(amount)
      : amount;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(value);
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function maskAccountNumber(accountNumber: string) {
  if (accountNumber.length <= 4) {
    return accountNumber;
  }

  return `•••• ${accountNumber.slice(-4)}`;
}

export default function AdminDashboardPage() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] =
    useState<AdminTab>("overview");

  const [overview, setOverview] =
    useState<AdminOverview | null>(null);

  const [loans, setLoans] =
    useState<AdminLoan[]>([]);

  const [users, setUsers] =
    useState<AdminUser[]>([]);

  const [loadingOverview, setLoadingOverview] =
    useState(true);

  const [loadingLoans, setLoadingLoans] =
    useState(false);

  const [loadingUsers, setLoadingUsers] =
    useState(false);

  const [actionId, setActionId] =
    useState<string | null>(null);

  const [message, setMessage] =
    useState("");

  const [error, setError] =
    useState("");

  const [selectedUserId, setSelectedUserId] =
    useState("");

  const [selectedAccountId, setSelectedAccountId] =
    useState("");

  const [transferAmount, setTransferAmount] =
    useState("");

  const [transferDescription, setTransferDescription] =
    useState("");

  const [transferLoading, setTransferLoading] =
    useState(false);

  async function loadOverview() {
    try {
      setLoadingOverview(true);
      setError("");

      const data = await getAdminOverview();

      setOverview(data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to load admin overview.",
      );
    } finally {
      setLoadingOverview(false);
    }
  }

  async function loadLoans() {
    try {
      setLoadingLoans(true);
      setError("");

      const data = await getAdminLoans(
        1,
        50,
      );

      setLoans(data.loans);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to load loans.",
      );
    } finally {
      setLoadingLoans(false);
    }
  }

  async function loadUsers() {
    try {
      setLoadingUsers(true);
      setError("");

      const data = await getAdminUsers(
        1,
        100,
        "ACTIVE",
      );

      setUsers(
        data.users.filter(
          (user) => user.role === "CUSTOMER",
        ),
      );
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to load customers.",
      );
    } finally {
      setLoadingUsers(false);
    }
  }

  useEffect(() => {
    void loadOverview();
  }, []);

  useEffect(() => {
    if (
      activeTab === "loans" ||
      activeTab === "overview"
    ) {
      void loadLoans();
    }
  }, [activeTab]);

  useEffect(() => {
    if (activeTab === "transfers") {
      void loadUsers();
    }
  }, [activeTab]);

  const pendingLoans = useMemo(
    () =>
      loans.filter(
        (loan) => loan.status === "PENDING",
      ),
    [loans],
  );

  const selectedUser = useMemo(
    () =>
      users.find(
        (user) => user.id === selectedUserId,
      ) ?? null,
    [users, selectedUserId],
  );

  const availableAccounts = useMemo(
    () =>
      selectedUser?.accounts.filter(
        (account) =>
          account.status === "ACTIVE",
      ) ?? [],
    [selectedUser],
  );

  const selectedAccount = useMemo(
    () =>
      availableAccounts.find(
        (account) =>
          account.id === selectedAccountId,
      ) ?? null,
    [availableAccounts, selectedAccountId],
  );

  async function handleApprove(
    loanId: string,
  ) {
    try {
      setActionId(loanId);
      setError("");
      setMessage("");

      await approveAdminLoan(loanId);

      setMessage(
        "Loan approved successfully.",
      );

      await loadLoans();
      await loadOverview();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to approve loan.",
      );
    } finally {
      setActionId(null);
    }
  }

  async function handleReject(
    loanId: string,
  ) {
    try {
      setActionId(loanId);
      setError("");
      setMessage("");

      await rejectAdminLoan(loanId);

      setMessage(
        "Loan rejected successfully.",
      );

      await loadLoans();
      await loadOverview();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to reject loan.",
      );
    } finally {
      setActionId(null);
    }
  }

  async function handleDisburse(
    loanId: string,
  ) {
    try {
      setActionId(loanId);
      setError("");
      setMessage("");

      await disburseAdminLoan(
        loanId,
        `admin-loan-${loanId}-${Date.now()}`,
      );

      setMessage(
        "Loan disbursed successfully.",
      );

      await loadLoans();
      await loadOverview();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to disburse loan.",
      );
    } finally {
      setActionId(null);
    }
  }

  function handleUserChange(
    userId: string,
  ) {
    setSelectedUserId(userId);
    setSelectedAccountId("");
    setError("");
    setMessage("");
  }

  function handleAccountChange(
    accountId: string,
  ) {
    setSelectedAccountId(accountId);
    setError("");
    setMessage("");
  }

  async function handleSystemTransfer(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const amount = Number(
      transferAmount,
    );

    if (!selectedUser) {
      setError(
        "Select a customer first.",
      );
      return;
    }

    if (!selectedAccount) {
      setError(
        "Select an active customer account.",
      );
      return;
    }

    if (
      !Number.isFinite(amount) ||
      amount <= 0
    ) {
      setError(
        "Enter a valid transfer amount.",
      );
      return;
    }

    if (
      selectedAccount.currency !== "USD"
    ) {
      setError(
        "This administrative transfer currently supports USD accounts only.",
      );
      return;
    }

    try {
      setTransferLoading(true);
      setError("");
      setMessage("");

      await createAdminTransfer({
        toAccountId: selectedAccount.id,
        amount,
        currency: selectedAccount.currency,
        description:
          transferDescription.trim() ||
          "Administrative system credit",
        idempotencyKey:
          `admin-system-${selectedAccount.id}-${Date.now()}-${crypto.randomUUID()}`,
      });

      setSelectedUserId("");
      setSelectedAccountId("");
      setTransferAmount("");
      setTransferDescription("");

      setMessage(
        `System-funded transfer of ${formatMoney(
          amount,
          selectedAccount.currency,
        )} sent successfully to ${selectedUser.firstName} ${selectedUser.lastName}.`,
      );

      await loadOverview();
      await loadUsers();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to complete transfer.",
      );
    } finally {
      setTransferLoading(false);
    }
  }

  function renderOverview() {
    if (loadingOverview) {
      return (
        <div className="admin-loading">
          Loading administrative overview…
        </div>
      );
    }

    if (!overview) {
      return (
        <div className="admin-empty">
          No overview data available.
        </div>
      );
    }

    const metrics = [
      {
        label: "Total users",
        value: overview.statistics.users,
        detail: `${overview.statistics.activeUsers} active`,
      },
      {
        label: "Accounts",
        value: overview.statistics.accounts,
        detail: `${overview.statistics.activeAccounts} active`,
      },
      {
        label: "Loans",
        value: overview.statistics.loans,
        detail: `${overview.statistics.pendingLoans} pending`,
      },
      {
        label: "Open support",
        value: overview.statistics.openTickets,
        detail: "Requires attention",
      },
    ];

    return (
      <>
        <div className="admin-metric-grid">
          {metrics.map((metric) => (
            <article
              className="admin-metric-card"
              key={metric.label}
            >
              <span>{metric.label}</span>

              <strong>
                {metric.value.toLocaleString()}
              </strong>

              <small>{metric.detail}</small>
            </article>
          ))}
        </div>

        <section className="admin-panel">
          <div className="admin-panel-heading">
            <div>
              <span className="admin-eyebrow">
                OPERATIONS
              </span>

              <h2>
                Administrative control
              </h2>
            </div>

            <span className="admin-live-indicator">
              LIVE
            </span>
          </div>

          <div className="admin-operation-grid">
            <button
              className="admin-operation-card"
              onClick={() =>
                setActiveTab("loans")
              }
            >
              <span>Loan operations</span>
              <strong>
                {pendingLoans.length}
              </strong>
              <small>
                Pending decisions
              </small>
            </button>

            <button
              className="admin-operation-card"
              onClick={() =>
                setActiveTab("transfers")
              }
            >
              <span>System transfers</span>
              <strong>+</strong>
              <small>
                Credit a customer account
              </small>
            </button>

            <button
              className="admin-operation-card"
              onClick={() =>
                navigate("/app/support")
              }
            >
              <span>Support</span>
              <strong>
                {overview.statistics.openTickets}
              </strong>
              <small>
                Open customer tickets
              </small>
            </button>
          </div>
        </section>
      </>
    );
  }

  function renderLoans() {
    return (
      <section className="admin-panel">
        <div className="admin-panel-heading">
          <div>
            <span className="admin-eyebrow">
              CREDIT OPERATIONS
            </span>

            <h2>Loan approvals</h2>

            <p>
              Review, approve, reject and
              disburse customer loans.
            </p>
          </div>

          <button
            className="admin-refresh-button"
            onClick={() =>
              void loadLoans()
            }
            disabled={loadingLoans}
          >
            {loadingLoans
              ? "Refreshing…"
              : "Refresh"}
          </button>
        </div>

        {loadingLoans ? (
          <div className="admin-loading">
            Loading loans…
          </div>
        ) : loans.length === 0 ? (
          <div className="admin-empty">
            No loans found.
          </div>
        ) : (
          <div className="admin-loan-list">
            {loans.map((loan) => (
              <article
                className="admin-loan-row"
                key={loan.id}
              >
                <div className="admin-loan-main">
                  <div>
                    <strong>
                      {loan.user.firstName}{" "}
                      {loan.user.lastName}
                    </strong>

                    <span>
                      {loan.user.email}
                    </span>
                  </div>

                  <div>
                    <strong>
                      {formatMoney(
                        loan.amount,
                        loan.currency,
                      )}
                    </strong>

                    <span>
                      {loan.termMonths} months
                    </span>
                  </div>

                  <div>
                    <strong>
                      {loan.status}
                    </strong>

                    <span>
                      {formatDate(
                        loan.createdAt,
                      )}
                    </span>
                  </div>
                </div>

                <div className="admin-loan-actions">
                  {loan.status ===
                    "PENDING" && (
                    <>
                      <button
                        className="admin-danger-button"
                        disabled={
                          actionId === loan.id
                        }
                        onClick={() =>
                          void handleReject(
                            loan.id,
                          )
                        }
                      >
                        Reject
                      </button>

                      <button
                        className="admin-primary-button"
                        disabled={
                          actionId === loan.id
                        }
                        onClick={() =>
                          void handleApprove(
                            loan.id,
                          )
                        }
                      >
                        {actionId === loan.id
                          ? "Processing…"
                          : "Approve"}
                      </button>
                    </>
                  )}

                  {loan.status ===
                    "APPROVED" && (
                    <button
                      className="admin-primary-button"
                      disabled={
                        actionId === loan.id
                      }
                      onClick={() =>
                        void handleDisburse(
                          loan.id,
                        )
                      }
                    >
                      {actionId === loan.id
                        ? "Disbursing…"
                        : "Disburse"}
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    );
  }

  function renderTransfers() {
    return (
      <section className="admin-panel admin-transfer-panel">
        <div className="admin-panel-heading">
          <div>
            <span className="admin-eyebrow">
              SYSTEM FUNDING
            </span>

            <h2>
              Administrative transfer
            </h2>

            <p>
              Send funds directly to any active
              customer account.
            </p>
          </div>

          <button
            className="admin-refresh-button"
            onClick={() =>
              void loadUsers()
            }
            disabled={loadingUsers}
          >
            {loadingUsers
              ? "Refreshing…"
              : "Refresh customers"}
          </button>
        </div>

        <form
          className="admin-transfer-form"
          onSubmit={handleSystemTransfer}
        >
          <label>
            <span>
              Customer
            </span>

            <select
              value={selectedUserId}
              onChange={(event) =>
                handleUserChange(
                  event.target.value,
                )
              }
              disabled={
                loadingUsers ||
                transferLoading
              }
            >
              <option value="">
                {loadingUsers
                  ? "Loading customers…"
                  : "Select a customer"}
              </option>

              {users.map((user) => (
                <option
                  key={user.id}
                  value={user.id}
                >
                  {user.firstName}{" "}
                  {user.lastName} —{" "}
                  {user.email}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span>
              Account
            </span>

            <select
              value={selectedAccountId}
              onChange={(event) =>
                handleAccountChange(
                  event.target.value,
                )
              }
              disabled={
                !selectedUser ||
                availableAccounts.length ===
                  0 ||
                transferLoading
              }
            >
              <option value="">
                {!selectedUser
                  ? "Select a customer first"
                  : availableAccounts.length ===
                      0
                    ? "No active accounts"
                    : "Select an account"}
              </option>

              {availableAccounts.map(
                (account) => (
                  <option
                    key={account.id}
                    value={account.id}
                  >
                    {account.type} —{" "}
                    {maskAccountNumber(
                      account.accountNumber,
                    )}{" "}
                    —{" "}
                    {formatMoney(
                      account.balance,
                      account.currency,
                    )}
                  </option>
                ),
              )}
            </select>
          </label>

          {selectedAccount && (
            <div className="admin-transfer-note">
              <strong>
                DESTINATION
              </strong>

              <span>
                {selectedUser?.firstName}{" "}
                {selectedUser?.lastName} ·{" "}
                {selectedAccount.type} ·{" "}
                {maskAccountNumber(
                  selectedAccount.accountNumber,
                )}
              </span>
            </div>
          )}

          <label>
            <span>
              Amount
            </span>

            <input
              type="number"
              min="0.01"
              step="0.01"
              value={transferAmount}
              onChange={(event) =>
                setTransferAmount(
                  event.target.value,
                )
              }
              placeholder="0.00"
              disabled={transferLoading}
            />
          </label>

          <label>
            <span>
              Description
            </span>

            <input
              value={transferDescription}
              onChange={(event) =>
                setTransferDescription(
                  event.target.value,
                )
              }
              placeholder="Administrative credit"
              disabled={transferLoading}
            />
          </label>

          <div className="admin-transfer-note">
            <strong>
              SYSTEM-FUNDED
            </strong>

            <span>
              This operation credits the selected
              customer's account directly. It
              does not use an administrator's
              personal account balance.
            </span>
          </div>

          <button
            type="submit"
            className="admin-primary-button admin-submit-button"
            disabled={
              transferLoading ||
              loadingUsers ||
              !selectedUser ||
              !selectedAccount
            }
          >
            {transferLoading
              ? "Processing…"
              : "Send money"}
          </button>
        </form>
      </section>
    );
  }

  return (
    <main className="admin-page">
      <header className="admin-header">
        <div>
          <span className="admin-eyebrow">
            AZIMUTH 2.0 / ADMINISTRATION
          </span>

          <h1>
            Command Center
          </h1>

          <p>
            Monitor customers, credit operations
            and financial activity.
          </p>
        </div>

        <button
          className="admin-back-button"
          onClick={() =>
            navigate("/app")
          }
        >
          Customer view
        </button>
      </header>

      <nav className="admin-tabs">
        <button
          className={
            activeTab === "overview"
              ? "active"
              : ""
          }
          onClick={() =>
            setActiveTab("overview")
          }
        >
          Overview
        </button>

        <button
          className={
            activeTab === "loans"
              ? "active"
              : ""
          }
          onClick={() =>
            setActiveTab("loans")
          }
        >
          Loans
        </button>

        <button
          className={
            activeTab === "transfers"
              ? "active"
              : ""
          }
          onClick={() =>
            setActiveTab("transfers")
          }
        >
          Transfers
        </button>
      </nav>

      {message && (
        <div className="admin-success">
          {message}
        </div>
      )}

      {error && (
        <div className="admin-error">
          {error}
        </div>
      )}

      {activeTab === "overview" &&
        renderOverview()}

      {activeTab === "loans" &&
        renderLoans()}

      {activeTab === "transfers" &&
        renderTransfers()}
    </main>
  );
}