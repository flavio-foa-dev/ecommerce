import {ReactNode, createContext, useContext, useState} from 'react'
import {shoes} from '../data/dataOfProdutos'

export const CartContext = createContext<object| undefined>(undefined)
CartContext.displayName = "Cart"

type Children = {
  children: ReactNode
}

export function ProviderCart({children}:Children){
const [cart, setCart] = useState<any[]>([])

let cartLength = cart.length

async function addcart(id:any){
  let produt = shoes.find((item:any) =>item.id === id)
  if(produt) {
     setCart((item) => {
      return [...item, produt]
     })
  }

  console.log(id)
  console.log(cart)

}

const value = { cart, setCart, addcart, cartLength }
  return(
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = ()=> {
  const {cart, setCart} = useContext<any>(CartContext)

  return {
    cart,
    setCart
  }
}