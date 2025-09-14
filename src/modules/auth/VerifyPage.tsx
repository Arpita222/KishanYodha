import { useEffect, useMemo, useState } from 'react'
import { OTPInput } from './components/OTPInput'
import { Button } from './components/Button'
import { useAuth } from './auth-context'
import { Link } from 'react-router-dom'

function useCountdown(target: number | null) {
  const [now, setNow] = useState(Date.now())
  useEffect(() => {
    if (!target) return
    const id = setInterval(() => setNow(Date.now()), 250)
    return () => clearInterval(id)
  }, [target])
  return Math.max(0, (target ?? 0) - now)
}

export function VerifyPage() {
  const { phone, countdownEndAt, requestCode, verifyCode } = useAuth()
  const [otp, setOtp] = useState('')
  const [loading, setLoading] = useState(false)
  const msLeft = useCountdown(countdownEndAt)
  const canResend = msLeft <= 0
  const mmss = useMemo(() => {
    const s = Math.ceil(msLeft / 1000)
    const m = Math.floor(s / 60).toString().padStart(2, '0')
    const ss = (s % 60).toString().padStart(2, '0')
    return `${m}:${ss}`
  }, [msLeft])

  const onResend = async () => {
    if (!phone) return
    setLoading(true)
    try { await requestCode(phone) } finally { setLoading(false) }
  }

  const onVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try { await verifyCode(otp) } finally { setLoading(false) }
  }

  return (
    <form onSubmit={onVerify} className="space-y-4 sm:space-y-5">
      <div>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Verify your phone</h1>
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">Code sent to {phone ?? 'your number'}</p>
      </div>
      <div className="flex justify-center">
        <OTPInput value={otp} onChange={setOtp} length={6} />
      </div>
      <Button type="submit" className="w-full" loading={loading}>Verify</Button>
      <div className="text-sm sm:text-base text-gray-500 text-center">
        {canResend ? (
          <button type="button" onClick={onResend} className="text-emerald-700 dark:text-emerald-400 font-medium">Resend code</button>
        ) : (
          <span>Resend in {mmss}</span>
        )}
      </div>
      <p className="text-xs sm:text-sm text-center"><Link to="/login" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">Use a different number</Link></p>
    </form>
  )
}



