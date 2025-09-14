import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { AuthLayout } from './modules/auth/AuthLayout'
import { LoginPage } from './modules/auth/LoginPage'
import { SignupPage } from './modules/auth/SignupPage'
import { VerifyPage } from './modules/auth/VerifyPage'
import { WithAuthProvider } from './WithAuthProvider'

const router = createBrowserRouter([
  {
    path: '/',
    element: <WithAuthProvider />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          { index: true, element: <LoginPage /> },
          { path: 'login', element: <LoginPage /> },
          { path: 'signup', element: <SignupPage /> },
          { path: 'verify', element: <VerifyPage /> },
        ],
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)


