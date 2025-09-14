import { forwardRef, InputHTMLAttributes, useMemo, useState } from 'react'

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'inputMode' | 'pattern'> & {
  label?: string
  error?: string
  defaultCountryCode?: string
}

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 15)
  return digits
}

export const PhoneInput = forwardRef<HTMLInputElement, Props>(function PhoneInput({ label, error, className = '', defaultCountryCode = '+91', value, onChange, ...rest }, ref) {
  const [cc, setCc] = useState(defaultCountryCode)
  const composedValue = useMemo(() => `${cc} ${String(value ?? '').toString()}`.trim(), [cc, value])

  return (
    <div className="space-y-1.5">
      {label && (
        <label className="block text-base font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <div className="grid grid-cols-[4rem_1fr] sm:grid-cols-[5rem_1fr] gap-2">
        <select
          aria-label="Country code"
          className="input px-1 sm:px-2 text-sm sm:text-base"
          value={cc}
          onChange={(e)=> setCc(e.target.value)}
        >
          <option value="+91">🇮🇳 +91</option>
          <option value="+254">🇰🇪 +254</option>
          <option value="+234">🇳🇬 +234</option>
          <option value="+27">🇿🇦 +27</option>
          <option value="+1">🇺🇸 +1</option>
          <option value="+44">🇬🇧 +44</option>
        </select>
        <input
          ref={ref}
          className={`input ${className}`}
          type="tel"
          inputMode="numeric"
          autoComplete="tel"
          placeholder="Phone number"
          value={String(value ?? '')}
          onChange={(e)=> {
            const formatted = formatPhone(e.target.value)
            const synthetic = { ...e, target: { ...e.target, value: formatted } }
            // @ts-ignore - we are shaping synthetic event
            onChange?.(synthetic)
          }}
          {...rest}
        />
      </div>
      <p className="text-sm text-gray-500">We'll send an OTP to {composedValue || cc}</p>
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  )
})



