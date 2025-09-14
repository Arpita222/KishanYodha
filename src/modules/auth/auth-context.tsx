import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

type AuthState = {
  phone: string | null
  isVerifying: boolean
  countdownEndAt: number | null
}

type AuthContextType = {
  phone: string | null
  isAuthenticated: boolean
  isVerifying: boolean
  countdownEndAt: number | null
  requestCode: (phone: string) => Promise<void>
  verifyCode: (code: string) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({ phone: null, isVerifying: false, countdownEndAt: null })
  const navigate = useNavigate()

  const requestCode = useCallback(async (phone: string) => {
    // mock request
    setState({ phone, isVerifying: true, countdownEndAt: Date.now() + 60_000 })
    await new Promise(r => setTimeout(r, 600))
    navigate('/verify')
  }, [navigate])

  const verifyCode = useCallback(async (code: string) => {
    await new Promise(r => setTimeout(r, 600))
    const ok = code.replace(/\D/g, '').length >= 4
    if (ok) {
      setState(s => ({ ...s, isVerifying: false, countdownEndAt: null }))
      navigate('/login')
      return true
    }
    return false
  }, [navigate])

  const logout = useCallback(() => {
    setState({ phone: null, isVerifying: false, countdownEndAt: null })
    navigate('/login')
  }, [navigate])

  const value = useMemo<AuthContextType>(() => ({
    phone: state.phone,
    isAuthenticated: false,
    isVerifying: state.isVerifying,
    countdownEndAt: state.countdownEndAt,
    requestCode,
    verifyCode,
    logout,
  }), [state, requestCode, verifyCode, logout])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}






