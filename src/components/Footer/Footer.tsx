import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer_container}>
      <p>
        Todos os direitos reservados Flavio-foa &copy; {new Date().getFullYear()}
      </p>
    </footer>
  )
}
