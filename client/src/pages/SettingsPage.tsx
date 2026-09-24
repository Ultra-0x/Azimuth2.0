import { useState } from 'react'
import type { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import {
  changePassword,
  logout,
} from '../services/auth'

function SettingsPage() {
  const { user, clearSession } = useAuth()
  const navigate = useNavigate()

  const [currentPassword, setCurrentPassword] =
    useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] =
    useState('')

  const [savingPassword, setSavingPassword] =
    useState(false)
  const [passwordMessage, setPasswordMessage] =
    useState('')
  const [passwordError, setPasswordError] =
    useState('')

  const [showLogoutConfirm, setShowLogoutConfirm] =
    useState(false)
  const [loggingOut, setLoggingOut] = useState(false)
  const [logoutError, setLogoutError] = useState('')

  async function handlePasswordChange(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault()

    setPasswordMessage('')
    setPasswordError('')

    if (newPassword !== confirmPassword) {
      setPasswordError(
        'New passwords do not match.',
      )
      return
    }

    if (newPassword.length < 8) {
      setPasswordError(
        'Your new password must contain at least 8 characters.',
      )
      return
    }

    try {
      setSavingPassword(true)

      await changePassword(
        currentPassword,
        newPassword,
      )

      setCurrentPassword('')
      setNewPassword('')
      setConfirmPassword('')

      setPasswordMessage(
        'Your password has been changed successfully.',
      )
    } catch (error) {
      setPasswordError(
        error instanceof Error
          ? error.message
          : 'Unable to change your password.',
      )
    } finally {
      setSavingPassword(false)
    }
  }

  async function handleLogout() {
    try {
      setLoggingOut(true)
      setLogoutError('')

      await logout()
      clearSession()
      navigate('/login', { replace: true })
    } catch (error) {
      setLogoutError(
        error instanceof Error
          ? error.message
          : 'Unable to sign out securely.',
      )
    } finally {
      setLoggingOut(false)
    }
  }

  if (!user) {
    return (
      <section className="page-state">
        <p>
          Unable to load your account information.
        </p>
      </section>
    )
  }

  return (
    <div className="settings-page">
      <section className="page-section settings-header">
        <div>
          <span className="eyebrow">
            ACCOUNT CONTROL
          </span>

          <h1 className="page-heading">
            Settings
          </h1>

          <p className="page-description">
            Manage your profile, security, and account
            preferences.
          </p>
        </div>

        <div className="settings-status">
          <span className="settings-status-dot" />
          <span>Account active</span>
        </div>
      </section>

      <section className="settings-grid">
        <article className="settings-card">
          <div className="settings-card-header">
            <div>
              <span className="settings-card-kicker">
                PROFILE
              </span>

              <h2>Personal information</h2>
            </div>

            <div className="settings-card-icon">
              {user.firstName.charAt(0)}
              {user.lastName.charAt(0)}
            </div>
          </div>

          <div className="settings-profile">
            <div className="settings-profile-name">
              <strong>
                {user.firstName} {user.lastName}
              </strong>

              <span>{user.email}</span>
            </div>

            <div className="settings-detail-list">
              <div className="settings-detail-row">
                <span>First name</span>
                <strong>{user.firstName}</strong>
              </div>

              <div className="settings-detail-row">
                <span>Last name</span>
                <strong>{user.lastName}</strong>
              </div>

              <div className="settings-detail-row">
                <span>Email address</span>
                <strong>{user.email}</strong>
              </div>

              <div className="settings-detail-row">
                <span>Account status</span>

                <strong className="settings-positive">
                  {user.status}
                </strong>
              </div>
            </div>
          </div>
        </article>

        <article className="settings-card settings-security-card">
          <div className="settings-security-glow" />

          <div className="settings-card-header settings-security-header">
            <div>
              <span className="settings-card-kicker">
                SECURITY
              </span>

              <h2>Password protection</h2>

              <p className="settings-security-intro">
                Keep your Azimuth account protected with a
                strong, private password.
              </p>
            </div>

            <div className="settings-security-lock">
              <span className="settings-lock-ring" />
              <span className="settings-lock-body" />
            </div>
          </div>

          <div className="settings-security-divider">
            <span />
            <small>CHANGE PASSWORD</small>
            <span />
          </div>

          <form
            className="settings-form settings-security-form"
            onSubmit={handlePasswordChange}
          >
            <label className="form-field">
              <span>Current password</span>

              <input
                type="password"
                value={currentPassword}
                onChange={(event) =>
                  setCurrentPassword(
                    event.target.value,
                  )
                }
                placeholder="Enter current password"
                autoComplete="current-password"
                required
              />
            </label>

            <div className="settings-password-row">
              <label className="form-field">
                <span>New password</span>

                <input
                  type="password"
                  value={newPassword}
                  onChange={(event) =>
                    setNewPassword(
                      event.target.value,
                    )
                  }
                  placeholder="At least 8 characters"
                  autoComplete="new-password"
                  required
                />
              </label>

              <label className="form-field">
                <span>Confirm password</span>

                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(event) =>
                    setConfirmPassword(
                      event.target.value,
                    )
                  }
                  placeholder="Repeat new password"
                  autoComplete="new-password"
                  required
                />
              </label>
            </div>

            <div className="settings-security-note">
              <span className="settings-security-note-icon">
                i
              </span>

              <span>
                Use a unique password that you don't use
                for other accounts.
              </span>
            </div>

            {passwordError && (
              <div className="settings-feedback settings-feedback-error">
                {passwordError}
              </div>
            )}

            {passwordMessage && (
              <div className="settings-feedback settings-feedback-success">
                {passwordMessage}
              </div>
            )}

            <div className="settings-security-action">
              <div>
                <strong>Ready to update?</strong>

                <span>
                  Your existing password will stop working
                  immediately.
                </span>
              </div>

              <button
                type="submit"
                className="primary-button"
                disabled={savingPassword}
              >
                {savingPassword
                  ? 'Updating password…'
                  : 'Update password'}

                {!savingPassword && (
                  <span>→</span>
                )}
              </button>
            </div>
          </form>
        </article>

        <article className="settings-card">
          <div className="settings-card-header">
            <div>
              <span className="settings-card-kicker">
                VERIFICATION
              </span>

              <h2>Email security</h2>
            </div>

            <div className="settings-card-icon settings-card-icon-green">
              ✓
            </div>
          </div>

          <div className="settings-verification">
            <div>
              <strong>Email address</strong>
              <span>{user.email}</span>
            </div>

            <span
              className={
                user.emailVerifiedAt
                  ? 'settings-badge settings-badge-success'
                  : 'settings-badge settings-badge-warning'
              }
            >
              {user.emailVerifiedAt
                ? 'Verified'
                : 'Verification required'}
            </span>
          </div>

          <p className="settings-card-description">
            Your verified email address is used for account
            security and important Azimuth notifications.
          </p>
        </article>

        <article className="settings-card">
          <div className="settings-card-header">
            <div>
              <span className="settings-card-kicker">
                PREFERENCES
              </span>

              <h2>Experience</h2>
            </div>

            <div className="settings-card-icon settings-card-icon-muted">
              ◌
            </div>
          </div>

          <div className="settings-preference-list">
            <div className="settings-preference-row">
              <div>
                <strong>Currency display</strong>

                <span>
                  Your banking balances are displayed in
                  USD.
                </span>
              </div>

              <span className="settings-preference-value">
                USD $
              </span>
            </div>

            <div className="settings-preference-row">
              <div>
                <strong>
                  Transaction security
                </strong>

                <span>
                  Sensitive transfers require
                  authentication.
                </span>
              </div>

              <span className="settings-badge settings-badge-success">
                Enabled
              </span>
            </div>

            <div className="settings-preference-row">
              <div>
                <strong>Session security</strong>

                <span>
                  Your authenticated session uses a secure
                  browser cookie.
                </span>
              </div>

              <span className="settings-badge settings-badge-success">
                Active
              </span>
            </div>
          </div>
        </article>

        <article className="settings-card settings-logout-card">
          <div className="settings-logout-glow" />

          <div className="settings-card-header">
            <div>
              <span className="settings-card-kicker">
                SESSION
              </span>

              <h2>Sign out securely</h2>

              <p className="settings-logout-intro">
                End your current Azimuth session on this
                browser.
              </p>
            </div>

            <div className="settings-logout-icon">
              ↗
            </div>
          </div>

          <div className="settings-logout-content">
            <div className="settings-logout-status">
              <span className="settings-status-dot" />

              <div>
                <strong>
                  Session currently active
                </strong>

                <span>
                  Signed in as {user.email}
                </span>
              </div>
            </div>

            <div className="settings-logout-action">
              <div>
                <strong>
                  Leaving your account?
                </strong>

                <span>
                  We'll securely end your authenticated
                  browser session.
                </span>
              </div>

              <button
                type="button"
                className="settings-logout-button"
                onClick={() => {
                  setLogoutError('')
                  setShowLogoutConfirm(true)
                }}
                disabled={loggingOut}
              >
                Sign out
                <span>→</span>
              </button>
            </div>

            {logoutError && (
              <div className="settings-feedback settings-feedback-error">
                {logoutError}
              </div>
            )}
          </div>
        </article>
      </section>

      {showLogoutConfirm && (
        <div
          className="modal-backdrop settings-logout-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (
              event.target === event.currentTarget &&
              !loggingOut
            ) {
              setShowLogoutConfirm(false)
            }
          }}
        >
          <div
            className="modal-card settings-logout-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="logout-title"
          >
            <div className="settings-logout-modal-icon">
              ↗
            </div>

            <div className="modal-header">
              <div>
                <span className="settings-card-kicker">
                  SECURE SESSION
                </span>

                <h2 id="logout-title">
                  Sign out of Azimuth?
                </h2>
              </div>

              <button
                type="button"
                className="modal-close"
                onClick={() =>
                  setShowLogoutConfirm(false)
                }
                disabled={loggingOut}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <p className="settings-logout-modal-copy">
              Your current browser session will be
              securely terminated. You can sign back in
              whenever you're ready.
            </p>

            <div className="settings-logout-modal-session">
              <span>ACTIVE SESSION</span>

              <strong>{user.email}</strong>
            </div>

            <div className="settings-logout-modal-actions">
              <button
                type="button"
                className="secondary-button"
                onClick={() =>
                  setShowLogoutConfirm(false)
                }
                disabled={loggingOut}
              >
                Stay signed in
              </button>

              <button
                type="button"
                className="settings-logout-confirm"
                onClick={() => void handleLogout()}
                disabled={loggingOut}
              >
                {loggingOut
                  ? 'Signing out…'
                  : 'Confirm sign out'}

                {!loggingOut && <span>→</span>}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SettingsPage