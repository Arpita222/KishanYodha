import { Outlet } from 'react-router-dom'
import { AuthProvider } from './modules/auth/auth-context'

export function WithAuthProvider() {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  )
}






