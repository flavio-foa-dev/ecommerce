
import styles from "./styles.module.css"
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { ShoppingCart } from "@phosphor-icons/react";

export default function Header() {
  let cartLength = 8;
  return (
    <div className={styles.container_header}>

        <Link to='/'>
          <img src={logo} alt="logo" className={styles.header_logo}/>
        </Link>

        <div className={styles.cart}>
          <Link to='/checkout' className={styles.header_link}><ShoppingCart size={25} color="#fff" />Meu carrinho</Link >
          <span className={styles.item_cart}> {cartLength }</span>
        </div>

    </div>
  )
};
