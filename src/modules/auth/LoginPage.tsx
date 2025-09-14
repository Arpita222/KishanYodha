import { useState } from 'react'
import { PhoneInput } from './components/PhoneInput'
import { Button } from './components/Button'
import { useAuth } from './auth-context'
import { Link } from 'react-router-dom'

export function LoginPage() {
  const { requestCode } = useAuth()
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try { await requestCode(phone) } finally { setLoading(false) }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 sm:space-y-5">
      <div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Welcome back</h1>
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">Login with your phone number</p>
      </div>
      <PhoneInput label="Phone number" value={phone} onChange={(e)=> setPhone((e.target as HTMLInputElement).value)} />
      <Button type="submit" className="w-full" loading={loading}>Send code</Button>
      <p className="text-sm sm:text-base text-gray-500 text-center">No account? <Link to="/signup" className="text-emerald-700 dark:text-emerald-400 font-medium">Sign up</Link></p>
    </form>
  )
}



