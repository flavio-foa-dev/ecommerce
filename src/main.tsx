import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routers/routes'
import ProviderUsers from './context/User'
import './index.css'
import { ProviderCart } from './context/Cart'
import { ProviderPayment } from './context/Payment'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProviderUsers>
    <ProviderCart>
    <ProviderPayment>

      <RouterProvider router={router} />

    </ProviderPayment>
    </ProviderCart>
    </ProviderUsers>

  </React.StrictMode>,
)
