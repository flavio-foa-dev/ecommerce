import {ReactNode, createContext, useContext, useState} from 'react'
import {shoes} from '../data/dataOfProdutos'

export const CartContext = createContext<object| undefined>(undefined)
CartContext.displayName = "Cart"

type Children = {
  children: ReactNode
}

export function ProviderCart({children}:Children){
const [cart, setCart] = useState<any[]>([])

const cartLength = cart.reduce((acc, item) => acc + item.qtd, 0)


async function addcart(id:any){
  let produt = shoes.find((item:any) =>item.id === id)
  if(produt) {
    const hasCartItem = cart.some((item:any) => item.id === produt?.id)
    if (!hasCartItem) {
      produt.qtd = 1
      return setCart((item) => [...item, produt,]);
    }
    setCart(cart.map((item:any) => {
      if (item.id === produt?.id) {
        item.qtd += 1
      }
      return item
    }))
  }
}


function handleCartQtd(id:number, quantity:number){

  const produto = cart.find(item => item.id === id)
  const hasQuantity = produto.qtd === 1
  if(hasQuantity && quantity === -1){
    return setCart(cart.filter((item)=> item.id !== id))
  }

  setCart(cart.map((item)=> {
    if (item.id === id){
      if(item.qtd > 0){
        item.qtd += quantity
      }
    }
    return item
  }))
}

const value = { cart, setCart, addcart, handleCartQtd, cartLength }
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