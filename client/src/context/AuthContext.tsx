import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { apiRequest } from '../services/api'

type User = {
  id: string
  email: string
  firstName: string
  lastName: string
  status: string
  role: 'CUSTOMER' | 'ADMIN'
  emailVerifiedAt: string | null
}

type AuthContextValue = {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  refreshUser: () => Promise<User | null>
  clearSession: () => void
}

const AuthContext = createContext<AuthContextValue | undefined>(
  undefined,
)

function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const refreshUser = async (): Promise<User | null> => {
    try {
      const response = await apiRequest<{ user: User }>(
        '/auth/me',
        {
          method: 'GET',
        },
      )

      setUser(response.user)
      return response.user
    } catch {
      setUser(null)
      return null
    }
  }

  const clearSession = () => {
    setUser(null)
  }

  useEffect(() => {
    void refreshUser().finally(() => {
      setIsLoading(false)
    })
  }, [])

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      isLoading,
      refreshUser,
      clearSession,
    }),
    [user, isLoading],
  )

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider')
  }

  return context
}

export default AuthProvider
