import { useContext } from 'react'
import styles from './Cadastro.module.css'
import { ContextUsers } from '../../context/User'


export default function Cadastrar() {
	const {user, handleChange, createUser} = useContext<any>(ContextUsers)
  return (
    <div className={styles.form_container}>
			<p className={styles.title}>Cadastrar</p>
			<form className={styles.form} onSubmit={createUser}>

				<div className={styles.input_group}>
					<label htmlFor="fullName">Username</label>
					<input
						type="text"
						name="fullName"
						id="fullName"
						placeholder="Digite seu nome:"
						value={user.fullName}
						onChange={handleChange}
					/>
				</div>

				<div className={styles.input_group}>
					<label htmlFor="email">Email</label>
					<input
						type="text"
						name="email"
						id="email"
						value={user.email}
						placeholder="Digite o seu e-mail"
						onChange={handleChange}
					/>
				</div>

				<div className={styles.input_group}>
					<label htmlFor="adress">Adress</label>
					<input
						type="text"
						name="adress"
						id="adress"
						value={user.adress}
						onChange={handleChange}
						placeholder="Digite o seu endereco"
					/>
				</div>

				<div className={styles.input_group}>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						onChange={handleChange}
						value={user.password}
						placeholder="Digite sua senha"/>
				 </div>
				 <button
				   className={styles.cad}
					 disabled={!user.adress && !user.email && !user.fullName && !user.password}

				 >
				 Cadastrar</button>
			</form>
    </div>
  )
}
