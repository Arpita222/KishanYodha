import { InputHTMLAttributes, forwardRef } from 'react'

type Option = {
  value: string
  label: string
  description?: string
}

type Props = {
  label?: string
  options: Option[]
  value: string
  onChange: (value: string) => void
  error?: string
  className?: string
}

export const RadioGroup = forwardRef<HTMLDivElement, Props>(function RadioGroup({ 
  label, 
  options, 
  value, 
  onChange, 
  error, 
  className = '' 
}, ref) {
  return (
    <div className={`space-y-1.5 ${className}`} ref={ref}>
      {label && (
        <label className="block text-base font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option.value} className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
            <input
              type="radio"
              name="userType"
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e.target.value)}
              className="mt-0.5 h-4 w-4 text-emerald-600 border-gray-300 focus:ring-emerald-500"
            />
            <div className="flex-1">
              <div className="text-base font-medium text-gray-900 dark:text-gray-100">{option.label}</div>
              {option.description && (
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{option.description}</div>
              )}
            </div>
          </label>
        ))}
      </div>
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  )
})
