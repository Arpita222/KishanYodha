import { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
  loading?: boolean
}

export function Button({ className = '', variant = 'primary', loading = false, children, disabled, ...rest }: Props) {
  const base = variant === 'primary' ? 'btn-primary' : 'btn-secondary'
  return (
    <button
      className={`${base} ${className}`}
      disabled={disabled || loading}
      {...rest}
    >
      {loading && (
        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
        </svg>
      )}
      <span>{children}</span>
    </button>
  )
}



