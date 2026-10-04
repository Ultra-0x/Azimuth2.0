import { Navigate, Route, Routes } from "react-router-dom";
import CustomerLayout from "./layouts/CustomerLayout";
import DashboardPage from "./pages/DashboardPage";
import AccountsPage from "./pages/AccountsPage";
import AccountDetailPage from "./pages/AccountDetailPage";
import TransfersPage from "./pages/TransfersPage";
import LoginPage from "./pages/LoginPage";
import CardsPage from "./pages/CardsPage";
import SavingsPage from "./pages/SavingsPage";
import LoansPage from "./pages/LoansPage";
import TransactionsPage from "./pages/TransactionsPage";
import SettingsPage from "./pages/SettingsPage";
import SupportPage from "./pages/SupportPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import { useAuth } from "./context/AuthContext";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import LegalPage from "./pages/LegalPage";

function AdminRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isLoading, isAuthenticated } =
    useAuth();

  if (isLoading) {
    return null;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (user?.role !== "ADMIN") {
    return <Navigate to="/app" replace />;
  }

  return children;
}

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<LandingPage />}
      />

      <Route
        path="/privacy"
        element={
          <LegalPage
            title="Privacy policy"
            intro="We handle your personal information carefully and use it to support a secure, transparent banking experience."
            sections={[
              {
                heading: "Information we collect",
                body: [
                  "We collect information necessary to open and maintain your account, including identity details, contact information, financial activity, and account preferences.",
                  "We also collect limited technical information such as device, browser, and usage metadata to help protect your account and improve the service."
                ]
              },
              {
                heading: "How we use it",
                body: [
                  "We use your information to provide core banking services, process transfers, monitor activity for fraud, support account access, and deliver customer support.",
                  "We may also use it to improve our experience and communicate service updates, security notices, and product information when permitted by law."
                ]
              },
              {
                heading: "Your choices",
                body: [
                  "You can update your account information and contact preferences through your account settings. If you need help with a privacy request, contact our support team and we will review it promptly.",
                  "We retain personal data only as long as necessary to operate the service, comply with legal obligations, and protect our customers and systems."
                ]
              }
            ]}
          />
        }
      />

      <Route
        path="/terms"
        element={
          <LegalPage
            title="Terms of service"
            intro="These terms govern your use of the Azimuth banking experience and the financial services available through our platform."
            sections={[
              {
                heading: "Account use",
                body: [
                  "You are responsible for maintaining the confidentiality of your login details and for all activity that occurs under your account.",
                  "You must provide accurate information and use the service in compliance with all applicable laws and regulations."
                ]
              },
              {
                heading: "Service availability",
                body: [
                  "Azimuth works to keep its services available and secure, but access may occasionally be limited by maintenance, outages, or external factors beyond our control.",
                  "We reserve the right to suspend or restrict access where necessary to protect customers, comply with legal obligations, or maintain platform security."
                ]
              },
              {
                heading: "Liability and updates",
                body: [
                  "We provide the service as-is and aim to keep it accurate, secure, and useful. We are not liable for losses caused by fraudulent activity, misuse of an account, or circumstances beyond our reasonable control.",
                  "We may update these terms from time to time, and continued use of the platform after updates means you accept the revised terms."
                ]
              }
            ]}
          />
        }
      />

      <Route
        path="/copyright-policy"
        element={
          <LegalPage
            title="Copyright policy"
            intro="Azimuth respects intellectual property rights and expects our users to do the same."
            sections={[
              {
                heading: "Ownership",
                body: [
                  "All content, branding, product materials, and platform assets used by Azimuth are protected by copyright and other intellectual property laws.",
                  "This includes design elements, written materials, visuals, and digital content created or licensed for use in the Azimuth experience."
                ]
              },
              {
                heading: "Use guidelines",
                body: [
                  "You may not copy, reproduce, redistribute, republish, or commercially exploit Azimuth content without prior written permission unless otherwise stated by law.",
                  "If you believe content on the platform infringes your copyright, please contact us with the relevant details so we can review the concern promptly."
                ]
              },
              {
                heading: "Reporting a claim",
                body: [
                  "A valid notice should include the copyrighted work, the location of the allegedly infringing material, your contact details, and a statement confirming the information is accurate.",
                  "We review valid claims quickly and may remove or restrict access to the disputed material while the inquiry is assessed."
                ]
              }
            ]}
          />
        }
      />

      <Route
        path="/login"
        element={<LoginPage />}
      />

      <Route
        path="/register"
        element={<RegisterPage />}
      />

      {/* CUSTOMER APPLICATION */}
      <Route
        path="/app"
        element={<CustomerLayout />}
      >
        <Route
          index
          element={<DashboardPage />}
        />

        <Route
          path="accounts"
          element={<AccountsPage />}
        />

        <Route
          path="accounts/:id"
          element={<AccountDetailPage />}
        />

        <Route
          path="transfers"
          element={<TransfersPage />}
        />

        <Route
          path="cards"
          element={<CardsPage />}
        />

        <Route
          path="savings"
          element={<SavingsPage />}
        />

        <Route
          path="loans"
          element={<LoansPage />}
        />

        <Route
          path="transactions"
          element={<TransactionsPage />}
        />

        <Route
          path="support"
          element={<SupportPage />}
        />

        <Route
          path="settings"
          element={<SettingsPage />}
        />
      </Route>

      {/* ADMIN APPLICATION */}
      <Route
        path="/admin"
        element={
          <AdminRoute>
            <AdminDashboardPage />
          </AdminRoute>
        }
      />

      <Route
        path="*"
        element={<Navigate to="/login" replace />}
      />
    </Routes>
  );
}

export default App;