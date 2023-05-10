import { useContext } from "react"
import { CartContext } from "../../context/Cart"
import styles from "./cart.module.css"
import { Minus, Plus } from "@phosphor-icons/react"
import { Link } from "react-router-dom"




export default function Cart() {
  const {cart, handleCartQtd} = useContext<any>(CartContext)


  const ValueTotal = cart.reduce((acc:number, item:any) => acc + item.price * item.qtd, 0)
  return (
    <>
      <div className={styles.cart_container}>
        <table>
          <thead>
            <tr>
              <th ></th>
              <th >PRODUTO</th>
              <th >QTD</th>
              <th >PRECO</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item:any) => {
              return(
              <tr>
                <td><img src={item.img} alt={item.description}/> </td>
                <td><div className={styles.descricao}>{item.description}</div> <div className={styles.descricao}>{item.price}</div> </td>
                <td className={styles.table_qtd}>
                  <Plus className={styles.btn_plus_minus} onClick={() => handleCartQtd(item.id, 1)} size={18} color="green" />
                  {item.qtd}
                  <Minus className={styles.btn_plus_minus} onClick={() => handleCartQtd(item.id, -1)} size={18} color="red" />
                </td>
                <td >R$ {(item.qtd * item.price).toFixed(2)}</td>
              </tr>
              )
            })}
          </tbody>
          <tfoot>
            <tr>
              <th scope="row">
                <Link to="/payment" style={{textDecoration: 'none'}}>
                  <button className={styles.btn_finalizar}>
                    FINALIZAR PEDIDO
                  </button>
                </Link>
              </th>
              <td></td>
              <td></td>
              <td className={styles.td_price}><div className={styles.product_total}>TOTAL</div> <div className={styles.total_price}> R$ {ValueTotal.toFixed(2)}</div></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  )
}
