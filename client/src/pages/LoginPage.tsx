import { useState } from 'react'
import type { FormEvent } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { login } from '../services/auth'
import { useAuth } from '../context/AuthContext'

function LoginPage() {
  const navigate = useNavigate()
  const { user, isAuthenticated, isLoading, refreshUser } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  if (isLoading) {
    return (
      <main className="auth-page">
        <div className="auth-loading">Loading Azimuth...</div>
      </main>
    )
  }

  if (isAuthenticated) {
    return (
      <Navigate
        to={user?.role === 'ADMIN' ? '/admin' : '/app'}
        replace
      />
    )
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (isSubmitting) {
      return
    }

    setError(null)
    setIsSubmitting(true)

    try {
      await login({
        email: email.trim(),
        password,
      })

      const authUser = await refreshUser()
      navigate(authUser?.role === 'ADMIN' ? '/admin' : '/app', {
        replace: true,
      })
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : 'Unable to sign you in.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="auth-page">
      <div className="auth-shell">
        <section className="auth-brand-panel">
          <div className="auth-brand">
            <div className="brand-mark">A</div>

            <div>
              <strong>AZIMUTH</strong>
              <span>PRIVATE BANKING</span>
            </div>
          </div>

          <div className="auth-brand-content">
            <span className="eyebrow">AZIMUTH 2.0</span>

            <h1>
              Banking built around
              <span> your world.</span>
            </h1>

            <p>
              Securely manage your accounts, move money, and stay
              connected to your financial life.
            </p>
          </div>

          <div className="auth-security">
            <span className="status-dot" />

            <div>
              <strong>Protected banking environment</strong>
              <span>Secure session authentication</span>
            </div>
          </div>
        </section>

        <section className="auth-form-panel">
          <div className="auth-form-wrap">
            <div className="auth-form-heading">
              <span className="eyebrow">WELCOME BACK</span>

              <h2>Sign in to Azimuth</h2>

              <p>
                Enter your credentials to access your banking
                dashboard.
              </p>
            </div>

            <form className="auth-form" onSubmit={handleSubmit}>
              {error && (
                <div className="auth-error" role="alert">
                  <strong>Sign in failed</strong>
                  <span>{error}</span>
                </div>
              )}

              <label className="auth-field">
                <span>Email address</span>

                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  disabled={isSubmitting}
                />
              </label>

              <label className="auth-field">
                <span>Password</span>

                <div className="password-field">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(event) =>
                      setPassword(event.target.value)
                    }
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                    disabled={isSubmitting}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((current) => !current)
                    }
                    disabled={isSubmitting}
                    aria-label={
                      showPassword
                        ? 'Hide password'
                        : 'Show password'
                    }
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </label>

              <div className="auth-form-meta">
                <span>Secure sign-in</span>
                <span>Session protected</span>
              </div>

              <button
                type="submit"
                className="auth-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Signing in...' : 'Sign in'}
                {!isSubmitting && <span>↗</span>}
              </button>
            </form>

            <p className="auth-footer">
              Your session is protected using secure,
              HTTP-only authentication.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default LoginPage
