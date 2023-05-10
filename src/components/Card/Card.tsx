import { ShoppingCart } from '@phosphor-icons/react'
import styles from './card.module.css'
import { CartContext } from '../../context/Cart'
import { useContext } from 'react'


export default function Card({produt}:any) {
  const {addcart} = useContext<any>(CartContext)

  return (
    <div className={styles.card}>
    <img src={produt.img} alt="img" className={styles.card_img}/>
      <p className={styles.card_title}>{produt.description}</p>
      <span className={styles.card_span}>R$ {produt.price}</span>
      <button
        className={styles.card_button}
        onClick={()=> addcart(produt.id)}
        >
          Compar <ShoppingCart size={25} color="#fff" /></button>
      </div>
  )
}
