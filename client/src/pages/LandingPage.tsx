import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  function goTo(path: string) {
    setMenuOpen(false);
    navigate(path);
  }

  function scrollToSection(id: string) {
    setMenuOpen(false);

    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  return (
    <main className="landing-page">
      <header className="landing-header">
        <button
          className="landing-brand"
          onClick={() => navigate("/")}
          type="button"
        >
          <span className="landing-brand-mark">A</span>

          <span>
            <strong>AZIMUTH</strong>
            <small>2.0 BANKING</small>
          </span>
        </button>

        <nav className="landing-nav">
          <button
            type="button"
            onClick={() => navigate("/")}
          >
            Personal
          </button>

          <button
            type="button"
            onClick={() => navigate("/login")}
          >
            Sign in
          </button>

          <button
            className="landing-nav-cta"
            type="button"
            onClick={() => navigate("/register")}
          >
            Open account
          </button>

          <button
            className={`landing-menu-button ${
              menuOpen ? "is-open" : ""
            }`}
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span />
            <span />
          </button>
        </nav>
      </header>

      {menuOpen && (
        <div
          className="landing-menu-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Azimuth navigation menu"
        >
          <button
            className="landing-menu-backdrop"
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />

          <aside className="landing-menu-panel">
            <div className="landing-menu-panel-top">
              <div>
                <span className="landing-eyebrow">
                  AZIMUTH 2.0
                </span>

                <h2>
                  Banking,
                  <br />
                  <em>reconsidered.</em>
                </h2>
              </div>

              <button
                className="landing-menu-close"
                type="button"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <span />
                <span />
              </button>
            </div>

            <div className="landing-menu-actions">
              <button
                type="button"
                onClick={() => goTo("/login")}
              >
                <span>
                  <small>01</small>
                  Sign in
                </span>
                <strong>↗</strong>
              </button>

              <button
                type="button"
                onClick={() => goTo("/register")}
              >
                <span>
                  <small>02</small>
                  Open an account
                </span>
                <strong>↗</strong>
              </button>
            </div>

            <div className="landing-menu-divider" />

            <div className="landing-menu-links">
              <span className="landing-menu-label">
                EXPLORE
              </span>

              <button
                type="button"
                onClick={() => scrollToSection("accounts")}
              >
                <span>Accounts</span>
                <small>01</small>
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("transfers")}
              >
                <span>Transfers</span>
                <small>02</small>
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("savings")}
              >
                <span>Savings</span>
                <small>03</small>
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("cards")}
              >
                <span>Cards</span>
                <small>04</small>
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("security")}
              >
                <span>Security</span>
                <small>05</small>
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("support")}
              >
                <span>Support</span>
                <small>06</small>
              </button>
            </div>

            <div className="landing-menu-footer">
              <span>
                Secure banking.
                <br />
                Built around you.
              </span>

              <button
                type="button"
                onClick={() => goTo("/register")}
              >
                Get started <strong>↗</strong>
              </button>
            </div>
          </aside>
        </div>
      )}

      <section className="landing-hero">
        <div className="landing-hero-copy">
          <span className="landing-eyebrow">
            THE NEW AZIMUTH
          </span>

          <h1>
            Banking that moves
            <br />
            <em>with you.</em>
          </h1>

          <p>
            A modern banking experience built around
            clarity, control and the way you actually
            manage your money.
          </p>

          <div className="landing-hero-actions">
            <button
              className="landing-primary-button"
              type="button"
              onClick={() => navigate("/register")}
            >
              Open an account
              <span>↗</span>
            </button>

            <button
              className="landing-secondary-button"
              type="button"
              onClick={() => navigate("/login")}
            >
              Sign in
            </button>
          </div>

          <div className="landing-trust-row">
            <span>
              <i />
              Secure banking
            </span>

            <span>
              <i />
              Real-time control
            </span>

            <span>
              <i />
              Built for you
            </span>
          </div>
        </div>

        <div className="landing-hero-visual">
          <div className="landing-orbit landing-orbit-one" />
          <div className="landing-orbit landing-orbit-two" />

          <div className="landing-bank-card">
            <div className="landing-card-top">
              <span>AZIMUTH</span>
              <span>2.0</span>
            </div>

            <div className="landing-card-balance">
              <small>AVAILABLE BALANCE</small>
              <strong>$24,850.40</strong>
            </div>

            <div className="landing-card-bottom">
              <span>•••• 4821</span>
              <span>USD</span>
            </div>
          </div>

          <div className="landing-floating-card landing-floating-balance">
            <small>TOTAL BALANCE</small>
            <strong>$24,850.40</strong>
            <span>+4.82% this month</span>
          </div>

          <div className="landing-floating-card landing-floating-transfer">
            <span className="landing-transfer-icon">↗</span>

            <div>
              <strong>Transfer complete</strong>
              <small>$1,250.00 · Today</small>
            </div>
          </div>
        </div>
      </section>

      <section className="landing-intro">
        <div>
          <span className="landing-eyebrow">
            ONE BANKING EXPERIENCE
          </span>

          <h2>
            Everything you need.
            <br />
            Nothing you don't.
          </h2>
        </div>

        <p>
          From everyday spending to long-term goals,
          Azimuth brings your financial life together
          in one beautifully considered experience.
        </p>
      </section>

      <section className="landing-features">
        <article
          id="accounts"
          className="landing-feature-card landing-feature-large"
        >
          <span className="landing-feature-number">
            01
          </span>

          <div>
            <span className="landing-feature-icon">
              ◌
            </span>

            <h3>Accounts</h3>

            <p>
              See your money clearly. Manage your
              accounts, balances and activity from
              one place.
            </p>
          </div>

          <span className="landing-feature-arrow">
            ↗
          </span>
        </article>

        <article
          id="transfers"
          className="landing-feature-card"
        >
          <span className="landing-feature-number">
            02
          </span>

          <div>
            <span className="landing-feature-icon">
              ↗
            </span>

            <h3>Transfers</h3>

            <p>
              Move money with confidence and keep
              every transaction visible.
            </p>
          </div>

          <span className="landing-feature-arrow">
            ↗
          </span>
        </article>

        <article
          id="savings"
          className="landing-feature-card"
        >
          <span className="landing-feature-number">
            03
          </span>

          <div>
            <span className="landing-feature-icon">
              ◇
            </span>

            <h3>Savings</h3>

            <p>
              Turn intentions into goals and track
              your progress as you grow.
            </p>
          </div>

          <span className="landing-feature-arrow">
            ↗
          </span>
        </article>

        <article
          id="cards"
          className="landing-feature-card"
        >
          <span className="landing-feature-number">
            04
          </span>

          <div>
            <span className="landing-feature-icon">
              □
            </span>

            <h3>Cards</h3>

            <p>
              Keep your cards under control with
              simple, immediate account access.
            </p>
          </div>

          <span className="landing-feature-arrow">
            ↗
          </span>
        </article>
      </section>

      <section className="landing-dashboard-section">
        <div className="landing-dashboard-copy">
          <span className="landing-eyebrow">
            YOUR MONEY / YOUR VIEW
          </span>

          <h2>
            Financial clarity,
            <br />
            without the noise.
          </h2>

          <p>
            Your dashboard gives you a focused view
            of your financial world, from balances and
            transactions to savings and transfers.
          </p>

          <button
            className="landing-text-button"
            type="button"
            onClick={() => navigate("/register")}
          >
            Start banking
            <span>→</span>
          </button>
        </div>

        <div className="landing-dashboard-preview">
          <div className="landing-preview-header">
            <div>
              <small>GOOD MORNING</small>
              <strong>Welcome back</strong>
            </div>

            <span className="landing-preview-avatar">
              U
            </span>
          </div>

          <div className="landing-preview-balance">
            <small>Total balance</small>
            <strong>$24,850.40</strong>
            <span>+ $1,140.20 this month</span>
          </div>

          <div className="landing-preview-accounts">
            <div>
              <small>EVERYDAY</small>
              <strong>$8,250.00</strong>
            </div>

            <div>
              <small>SAVINGS</small>
              <strong>$12,400.40</strong>
            </div>

            <div>
              <small>OTHER</small>
              <strong>$4,200.00</strong>
            </div>
          </div>

          <div className="landing-preview-transactions">
            <div className="landing-preview-section-title">
              <span>Recent activity</span>
              <small>View all</small>
            </div>

            <div className="landing-preview-transaction">
              <span className="landing-preview-transaction-icon">
                ↗
              </span>

              <div>
                <strong>Transfer</strong>
                <small>Today · 10:42 AM</small>
              </div>

              <strong>−$250.00</strong>
            </div>

            <div className="landing-preview-transaction">
              <span className="landing-preview-transaction-icon">
                +
              </span>

              <div>
                <strong>Deposit</strong>
                <small>Yesterday · 4:18 PM</small>
              </div>

              <strong>+$1,500.00</strong>
            </div>
          </div>
        </div>
      </section>

      <section
        id="security"
        className="landing-security"
      >
        <div>
          <span className="landing-eyebrow">
            SECURITY FIRST
          </span>

          <h2>
            Built to give you
            <br />
            confidence.
          </h2>
        </div>

        <div className="landing-security-grid">
          <div>
            <strong>01</strong>
            <h3>Protected access</h3>
            <p>
              Secure authentication and protected
              sessions keep access to your account
              under control.
            </p>
          </div>

          <div>
            <strong>02</strong>
            <h3>Transaction control</h3>
            <p>
              Sensitive financial actions can require
              additional authorization before completion.
            </p>
          </div>

          <div>
            <strong>03</strong>
            <h3>Account visibility</h3>
            <p>
              Keep track of your balances, transactions
              and financial activity in one place.
            </p>
          </div>
        </div>
      </section>

      <section
        id="support"
        className="landing-final-cta"
      >
        <span className="landing-eyebrow">
          AZIMUTH 2.0
        </span>

        <h2>
          Your money deserves
          <br />
          a better experience.
        </h2>

        <button
          className="landing-primary-button"
          type="button"
          onClick={() => navigate("/register")}
        >
          Open your account
          <span>↗</span>
        </button>
      </section>

      <footer className="landing-footer">
        <div className="landing-footer-brand">
          <span className="landing-brand-mark">
            A
          </span>

          <div>
            <strong>AZIMUTH</strong>
            <small>2.0 BANKING</small>
          </div>
        </div>

        <div className="landing-footer-links">
          <button
            type="button"
            onClick={() => navigate("/")}
          >
            Personal
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("security")}
          >
            Security
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("support")}
          >
            Support
          </button>

          <button type="button">
            Privacy
          </button>

          <button type="button">
            Terms
          </button>
        </div>

        <span className="landing-footer-copy">
          © 2026 Azimuth. All rights reserved.
        </span>
      </footer>
    </main>
  );
}