import {ReactNode, createContext, useState} from 'react'

export const CartContext = createContext({})

type Children = {
  children: ReactNode
}

export function providerCart({children}:Children){
const [cart, setCart] = useState()

const value = { cart, setCart }
  return(
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}