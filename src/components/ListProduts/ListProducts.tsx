import { useState } from 'react'
import {shoes} from '../../data/dataOfProdutos'
import styles from "./Listproduct.module.css"
import Card from '../Card/Card'

const data = shoes.reverse().slice(0, 12)

export default function ListProducts() {

  const [product, _setproduct] = useState(data)

  return (
    <div className={styles.products}>
      {product.map((item) => <Card produt={item} key={item.id} />)}
    </div>
  )
}
