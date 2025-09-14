import { InputHTMLAttributes, forwardRef } from 'react'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
}

export const TextInput = forwardRef<HTMLInputElement, Props>(function TextInput({ label, error, className = '', id, ...rest }, ref) {
  const inputId = id || rest.name
  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={inputId} className="block text-base font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <input id={inputId} className={`input ${className}`} ref={ref} {...rest} />
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  )
})



