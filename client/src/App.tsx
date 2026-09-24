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