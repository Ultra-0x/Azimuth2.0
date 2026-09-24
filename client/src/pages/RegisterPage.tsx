import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { apiRequest } from '../services/api'

function RegisterPage() {
  const navigate = useNavigate()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (isSubmitting) {
      return
    }

    setError(null)
    setSuccess(null)

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.')
      return
    }

    setIsSubmitting(true)

    try {
      await apiRequest<{
        message: string
      }>('/auth/register', {
        method: 'POST',
        body: JSON.stringify({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim(),
          phone: phone.trim() || undefined,
          password,
        }),
      })

      setSuccess(
        'Your account has been created. Please check your email to verify your account.',
      )

      setTimeout(() => {
        navigate('/login', { replace: true })
      }, 1800)
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : 'Unable to create your account.',
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
              Start your banking
              <span> journey.</span>
            </h1>

            <p>
              Open your Azimuth account and experience a
              clearer, more intentional way to manage your money.
            </p>
          </div>

          <div className="auth-security">
            <span className="status-dot" />

            <div>
              <strong>Protected banking environment</strong>
              <span>Secure account registration</span>
            </div>
          </div>
        </section>

        <section className="auth-form-panel">
          <div className="auth-form-wrap">
            <div className="auth-form-heading">
              <span className="eyebrow">GET STARTED</span>

              <h2>Create your account</h2>

              <p>
                Tell us a little about yourself to get started
                with Azimuth.
              </p>
            </div>

            <form className="auth-form" onSubmit={handleSubmit}>
              {error && (
                <div className="auth-error" role="alert">
                  <strong>Registration failed</strong>
                  <span>{error}</span>
                </div>
              )}

              {success && (
                <div className="auth-success" role="status">
                  <strong>Account created</strong>
                  <span>{success}</span>
                </div>
              )}

              <div className="auth-form-row">
                <label className="auth-field">
                  <span>First name</span>

                  <input
                    type="text"
                    value={firstName}
                    onChange={(event) =>
                      setFirstName(event.target.value)
                    }
                    placeholder="First name"
                    autoComplete="given-name"
                    required
                    disabled={isSubmitting}
                  />
                </label>

                <label className="auth-field">
                  <span>Last name</span>

                  <input
                    type="text"
                    value={lastName}
                    onChange={(event) =>
                      setLastName(event.target.value)
                    }
                    placeholder="Last name"
                    autoComplete="family-name"
                    required
                    disabled={isSubmitting}
                  />
                </label>
              </div>

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
                <span>Phone number <small>Optional</small></span>

                <input
                  type="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="+1 000 000 0000"
                  autoComplete="tel"
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
                    placeholder="Create a secure password"
                    autoComplete="new-password"
                    minLength={8}
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

              <label className="auth-field">
                <span>Confirm password</span>

                <input
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(event) =>
                    setConfirmPassword(event.target.value)
                  }
                  placeholder="Repeat your password"
                  autoComplete="new-password"
                  minLength={8}
                  required
                  disabled={isSubmitting}
                />
              </label>

              <div className="auth-form-meta">
                <span>Secure registration</span>
                <span>Protected session</span>
              </div>

              <button
                type="submit"
                className="auth-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Creating account...' : 'Create account'}
                {!isSubmitting && <span>↗</span>}
              </button>
            </form>

            <p className="auth-footer">
              Already have an Azimuth account?{' '}
              <Link to="/login">Sign in</Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default RegisterPage