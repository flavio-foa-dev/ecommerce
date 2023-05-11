import { usePaymentContext } from '../../context/Payment'
import styles from './Payment.module.css'

export default function Pay() {
  const {pay} = usePaymentContext()
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Payment</h1>
      {pay.type}
    </div>
  )
}
