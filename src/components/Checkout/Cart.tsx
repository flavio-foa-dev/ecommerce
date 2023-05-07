import styles from "./cart.module.css"
const cartProduct = [{
  img:"www",
  id:1,
  description:"muito confortavel",
  price:100,
  qtd:10

}]

export default function Cart() {

  const ValueTotal = cartProduct.reduce((acc, item) => acc + item.price * item.qtd, 0)
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
            {cartProduct.map((item) => {
              return(
              <tr>
                <td><img src={item.img} alt={item.description}/> </td>
                <td><div className={styles.descricao}>{item.description}</div> <div className={styles.descricao}>{item.price}</div> </td>
                <td >{item.qtd}</td>
                <td >{item.qtd * item.price}</td>
              </tr>
              )
            })}
          </tbody>
          <tfoot>
            <tr>
              <th scope="row"><button className={styles.btn_finalizar}>FINALIZAR PEDIDO</button></th>
              <td></td>
              <td></td>
              <td className={styles.td_price}><div className={styles.product_total}>TOTAL</div> <div className={styles.total_price}> R$ {ValueTotal}</div></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  )
}
