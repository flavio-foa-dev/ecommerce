import { useContext } from "react"
import {ContextUsers} from '../context/users'

export default function Login() {
  const {nome, setNome} = useContext(ContextUsers)

  return (
    <div>
      <h1>Login {nome}</h1>
      <button onClick={() => setNome(" Figuereedo Torres")}>Nome</button>

    </div>

  )
}
