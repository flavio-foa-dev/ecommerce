import { useState } from 'react'
import {shoes} from '../../data/dataOfProdutos'
import styles from "./Listproduct.module.css"
import Card from '../Card/Card'

const data = shoes.reverse()

export default function ListProducts() {

  const [product, _setproduct] = useState(data)

  function addCart(id:any){
    console.log(id)
  }

  return (
    <div className={styles.products}>
      {product.map((item) => <Card produt={item} key={item.id} addCart={addCart}/>)}
    </div>
  )
}
