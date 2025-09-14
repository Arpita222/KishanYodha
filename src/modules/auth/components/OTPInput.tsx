import { useEffect, useRef } from 'react'

type Props = {
  value: string
  onChange: (value: string) => void
  length?: number
}

export function OTPInput({ value, onChange, length = 6 }: Props) {
  const refs = useRef<Array<HTMLInputElement | null>>([])

  useEffect(() => {
    refs.current = refs.current.slice(0, length)
  }, [length])

  const handleChange = (idx: number, char: string) => {
    const sanitized = char.replace(/\D/g, '').slice(0, 1)
    const next = value.split('')
    next[idx] = sanitized
    const nextValue = next.join('').slice(0, length)
    onChange(nextValue)
    if (sanitized && idx < length - 1) refs.current[idx + 1]?.focus()
  }

  const handleKeyDown = (idx: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !value[idx] && idx > 0) {
      refs.current[idx - 1]?.focus()
    }
  }

  return (
    <div className="flex items-center gap-1 sm:gap-2">
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          ref={(el) => (refs.current[i] = el)}
          className="input w-10 h-10 sm:w-11 sm:h-11 text-center text-lg sm:text-xl"
          inputMode="numeric"
          autoComplete="one-time-code"
          maxLength={1}
          value={value[i] ?? ''}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
        />
      ))}
    </div>
  )
}



