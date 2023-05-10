
import styles from "./styles.module.css"
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { ShoppingCart } from "@phosphor-icons/react";
import { useContext } from "react";
import { CartContext } from "../../context/Cart";

export default function Header() {
  const {cartLength} = useContext<any>(CartContext)

  return (
    <div className={styles.container_header}>

        <Link to='/'>
          <img src={logo} alt="logo" className={styles.header_logo}/>
        </Link>

        <div className={styles.cart}>
          <Link to='/checkout' className={styles.header_link}><ShoppingCart size={25} color="#fff" />Meu carrinho</Link >
          {cartLength>0 && <span className={styles.item_cart}> {cartLength }</span>}
        </div>

    </div>
  )
};
