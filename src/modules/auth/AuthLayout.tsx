import { Outlet, NavLink } from 'react-router-dom'
import { Logo } from './components/Logo'

export function AuthLayout() {
  return (
    <div className="min-h-full relative">
      <div className="absolute inset-x-0 top-0 h-48 sm:h-56 md:h-64 overflow-hidden">
        <img src="/src/assets/fields.svg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-60 sm:opacity-70 dark:opacity-50 mix-blend-multiply" />
        <div className="absolute -inset-x-10 -top-20 h-64 sm:h-72 md:h-80 bg-gradient-to-b from-emerald-700/40 via-emerald-600/25 to-transparent dark:from-emerald-900/60 dark:via-emerald-800/40" />
        <div className="absolute left-4 sm:left-10 top-4 sm:top-6 h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-emerald-400/25 dark:bg-emerald-800/30 blur-3xl" />
        <div className="absolute right-4 sm:right-8 top-6 sm:top-10 h-20 w-20 sm:h-28 sm:w-28 rounded-full bg-emerald-600/25 dark:bg-emerald-900/30 blur-2xl" />
      </div>
      <div className="relative flex items-start justify-center p-3 sm:p-4 md:p-6">
        <div className="w-full max-w-sm sm:max-w-md mt-6 sm:mt-8 md:mt-12">
          <div className="flex flex-col items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <Logo />
            <div className="flex items-center gap-1 sm:gap-2">
              <NavLink 
                to="/login" 
                className={({isActive})=> 
                  isActive 
                    ? 'px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-semibold text-base sm:text-lg transition-colors' 
                    : 'px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 text-base sm:text-lg transition-colors'
                }
              >
                Login
              </NavLink>
              <NavLink 
                to="/signup" 
                className={({isActive})=> 
                  isActive 
                    ? 'px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-semibold text-base sm:text-lg transition-colors' 
                    : 'px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 text-base sm:text-lg transition-colors'
                }
              >
                Sign up
              </NavLink>
            </div>
          </div>
          <div className="card p-3 sm:p-4 md:p-6">
            <Outlet />
          </div>
          <p className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400 px-2">By continuing, you agree to our Terms and Privacy Policy.</p>
        </div>
      </div>
    </div>
  )
}


