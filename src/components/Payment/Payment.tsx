import { useContext } from 'react'
import { usePaymentContext } from '../../context/Payment'
import styles from './Payment.module.css'
import { ContextUsers } from '../../context/User'
import { CartContext } from '../../context/Cart'

export default function Pay() {
  const {pay} = usePaymentContext()
  const {userExist} = useContext<any>(ContextUsers)
  const {ValueTotal, cart} = useContext<any>(CartContext)

  return (
    <div className={styles.pay_container}>

      <div className={styles.container_product}>
      {cart.map((item:any)=>{
        return <div key={item.id} className={styles.card_product}>
          <img src={item.img} alt={item.description} className={styles.card_img}/>
          <div className={styles.container_description}>
            <p >{item.description} </p>
            <span>R$ {item.price}  </span>
            <span>Qtd: {item.qtd}</span>
          </div>
        </div>
      })}
      </div>

        <ul className={styles.container_ul}>
          <li className={styles.group_li}>
            <h2 className={styles.title}>Resumo da compra</h2>
          </li>
          <li className={styles.group_li}>
            <select name="" id="" className={styles.group_li_select}>
              <option value="">Forma de Pagamento</option>
              {pay.map((item:any) => {
                return <option key={item.id} value={item.type}>{item.type}</option>
              })}
            </select>
          </li>
          <li className={styles.group_li}>
            <span>Total R$ {ValueTotal.toFixed(2)}</span>
          </li>
          <li className={styles.group_li}>
            <span>
              Nome: {userExist && userExist.fullName}
            </span>
          </li>
          <li className={styles.group_li}>
            <span>
              Endereco: {userExist && userExist.adress }
            </span>
          </li>
          <li className={styles.group_li_btn} onClick={()=> window.location.href = "/"}>
              Finalizar comprar
          </li>
        </ul>
    </div>
  )
}
