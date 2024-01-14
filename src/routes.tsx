import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from '@/pages/_layouts/app'
import { Dashboard } from '@/pages/app/dashboard'
import { SignIn } from '@/pages/auth/signIn'

import { AuthLayout } from './pages/_layouts/auth'
import { Orders } from './pages/app/orders.tsx/orders'
import { SignUp } from './pages/auth/signUp'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/orders',
        element: <Orders />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
    ],
  },
])
