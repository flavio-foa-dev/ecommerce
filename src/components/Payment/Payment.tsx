import { useContext } from 'react'
import { usePaymentContext } from '../../context/Payment'
import styles from './Payment.module.css'
import { ContextUsers } from '../../context/User'

export default function Pay() {
  const {pay} = usePaymentContext()
  const {userExist} = useContext<any>(ContextUsers)
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Payment</h1>
      {pay.type}
      {userExist ? userExist.fullName : "eu"}
      {userExist && userExist.adress }




    </div>
  )
}
