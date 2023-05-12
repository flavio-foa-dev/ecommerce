import {ReactNode, createContext, useContext, useState} from 'react'
import { typePay } from '../data/dataPay'

export const PaymentContext = createContext<object| undefined>(undefined)

type Children = {
  children: ReactNode
}

export function  ProviderPayment ({children}:Children) {
  const [pay, setPay] = useState(typePay)

  const value = {pay, setPay}
  return (
    <PaymentContext.Provider value={value}>
      {children}
    </PaymentContext.Provider>
  )
}

export const usePaymentContext = () => {
  const {pay, setpay} = useContext<any>(PaymentContext)

  return {
    pay,
    setpay,
  }

}