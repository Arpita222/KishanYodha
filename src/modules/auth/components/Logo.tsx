export function Logo() {
  return (
    <div className="flex items-center gap-2 sm:gap-3 select-none">
      <svg className="h-8 w-8 sm:h-9 sm:w-9 text-emerald-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2c.9 0 1.64.62 1.86 1.47l.5 1.9c.1.36.38.64.74.74l1.9.5A2 2 0 0 1 18.5 9l-1.43 1.43c-.26.26-.37.64-.3 1l.37 1.94a2 2 0 0 1-2.42 2.34l-1.96-.39a1 1 0 0 0-.96.27L9.5 18.5A2 2 0 0 1 6 17.5V6a4 4 0 0 1 4-4h2Z"/>
      </svg>
      <div className="text-center sm:text-left">
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">Farmers Connect</p>
        <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300">Join Our Farming Community</p>
        <p className="text-xs sm:text-sm md:text-base text-gray-500 dark:text-gray-400">Create your account to access our services</p>
      </div>
    </div>
  )
}


