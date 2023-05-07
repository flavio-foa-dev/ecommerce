
import styles from "./styles.module.css"
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
  let isPlural = 0 < 2 ? 'item' : 'itens';
  return (
    <div className={styles.container_header}>
        <Link to='/'>
          <img src={logo} alt="logo" className={styles.header_image}/>
        </Link>
          <div className="cart">
        <Link to='/home' className={styles.header_link}>Meu carrinho</Link >
        <span> 0 {isPlural} </span>
        </div>
    </div>
  )
};
