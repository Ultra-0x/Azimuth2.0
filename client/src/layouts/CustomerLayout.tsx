import { useState } from 'react'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const navigation = [
  {
    label: 'Overview',
    path: '/app',
    icon: '◈',
  },
  {
    label: 'Accounts',
    path: '/app/accounts',
    icon: '▣',
  },
  {
    label: 'Transfers',
    path: '/app/transfers',
    icon: '↗',
  },
  {
    label: 'Cards',
    path: '/app/cards',
    icon: '◇',
  },
  {
    label: 'Savings',
    path: '/app/savings',
    icon: '◎',
  },
  {
    label: 'Loans',
    path: '/app/loans',
    icon: '↘',
  },
  {
    label: 'Transactions',
    path: '/app/transactions',
    icon: '≡',
  },
]

const secondaryNavigation = [
  {
    label: 'Support',
    path: '/app/support',
    icon: '?',
  },
  {
    label: 'Settings',
    path: '/app/settings',
    icon: '⚙',
  },
]

function CustomerLayout() {
  const location = useLocation()
  const navigate = useNavigate()
  const { user } = useAuth()

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const firstName = user?.firstName || 'User'
  const lastName = user?.lastName || ''
  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase()

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <div className="app-shell premium-app-shell">
      {/* MOBILE OVERLAY */}

      {mobileMenuOpen && (
        <button
          type="button"
          className="mobile-nav-overlay"
          aria-label="Close navigation"
          onClick={closeMobileMenu}
        />
      )}

      {/* SIDEBAR */}

      <aside
        className={`app-sidebar premium-sidebar ${
          mobileMenuOpen ? 'mobile-open' : ''
        }`}
      >
        <div className="sidebar-inner">
          {/* BRAND */}

          <div className="premium-brand">
  <button
    type="button"
    className="premium-brand-home"
    onClick={() => {
      closeMobileMenu()
      navigate('/')
    }}
    aria-label="Go to Azimuth home"
  >
    <div className="premium-brand-mark">
      <span>A</span>
    </div>

    <div className="premium-brand-copy">
      <strong>AZIMUTH</strong>
      <span>PRIVATE BANKING</span>
    </div>
  </button>

  <button
    type="button"
    className="mobile-close-button"
    onClick={closeMobileMenu}
    aria-label="Close navigation"
  >
    Ã—
  </button>
</div>

          {/* PRIMARY NAVIGATION */}

          <div className="sidebar-section">
            <span className="sidebar-section-label">
              Banking
            </span>

            <nav
              className="sidebar-nav premium-sidebar-nav"
              aria-label="Customer navigation"
            >
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/app'}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `premium-sidebar-link ${
                      isActive ? 'active' : ''
                    }`
                  }
                >
                  <span className="sidebar-link-icon">
                    {item.icon}
                  </span>

                  <span className="sidebar-link-label">
                    {item.label}
                  </span>

                  {item.path === '/app/transfers' && (
                    <span className="sidebar-link-badge">
                      NEW
                    </span>
                  )}

                  <span className="sidebar-link-arrow">
                    →
                  </span>
                </NavLink>
              ))}
            </nav>
          </div>

          {/* SECONDARY */}

          <div className="sidebar-section sidebar-secondary-section">
            <span className="sidebar-section-label">
              Assistance
            </span>

            <nav
              className="sidebar-nav premium-sidebar-nav"
              aria-label="Account navigation"
            >
              {secondaryNavigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `premium-sidebar-link ${
                      isActive ? 'active' : ''
                    }`
                  }
                >
                  <span className="sidebar-link-icon">
                    {item.icon}
                  </span>

                  <span className="sidebar-link-label">
                    {item.label}
                  </span>

                  <span className="sidebar-link-arrow">
                    →
                  </span>
                </NavLink>
              ))}
            </nav>
          </div>

          {/* SECURITY */}

          <div className="sidebar-security-card">
            <div className="sidebar-security-card">
              <div className="sidebar-security-top">
                <span className="sidebar-security-icon">
                  ✓
                </span>

                <span className="sidebar-security-live">
                  SECURE
                </span>
              </div>

              <strong>Protected banking</strong>

              <span>
                Your Azimuth session is securely authenticated.
              </span>
            </div>

            <div className="sidebar-version-row">
              <span>AZIMUTH</span>
              <span>2.0.0</span>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN */}

      <div className="app-main premium-app-main">
        {/* TOPBAR */}

        <header className="app-topbar premium-topbar">
          <div className="topbar-left">
            <button
              type="button"
              className="mobile-menu-button"
              onClick={() =>
                setMobileMenuOpen((current) => !current)
              }
              aria-label="Open navigation"
              aria-expanded={mobileMenuOpen}
            >
              <span />
              <span />
              <span />
            </button>

            <div className="premium-breadcrumb">
              <span>AZIMUTH</span>
              <i>/</i>
              <strong>
                {location.pathname === '/app'
                  ? 'Overview'
                  : location.pathname
                      .split('/')
                      .filter(Boolean)
                      .pop()
                      ?.replace(/-/g, ' ')
                      .replace(/\b\w/g, (letter) =>
                        letter.toUpperCase(),
                      )}
              </strong>
            </div>
          </div>

          <div className="topbar-actions premium-topbar-actions">
            {/* SEARCH */}

            <button
              type="button"
              className="premium-search-button"
              aria-label="Search"
            >
              <span className="premium-search-icon">
                ⌕
              </span>

              <span className="premium-search-text">
                Search
              </span>

              <span className="premium-search-shortcut">
                /
              </span>
            </button>

            {/* NOTIFICATIONS */}

            <button
              type="button"
              className="premium-notification-button"
              aria-label="Notifications"
            >
              <span>◌</span>
              <i />
            </button>

            {/* PROFILE */}

            <button
              type="button"
              className="premium-profile-button"
            >
              <span className="premium-profile-avatar">
                {initials}
              </span>

              <span className="premium-profile-copy">
                <strong>
                  {firstName} {lastName}
                </strong>

                <span>Personal banking</span>
              </span>

              <span className="premium-profile-chevron">
                ↓
              </span>
            </button>
          </div>
        </header>

        {/* CONTENT */}

        <main className="app-content premium-app-content">
          <Outlet />
        </main>

        {/* MOBILE BOTTOM NAV */}

        <nav
          className="mobile-bottom-nav"
          aria-label="Mobile navigation"
        >
          {navigation.slice(0, 5).map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/app'}
              className={({ isActive }) =>
                `mobile-bottom-link ${
                  isActive ? 'active' : ''
                }`
              }
            >
              <span>{item.icon}</span>
              <small>{item.label}</small>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default CustomerLayout