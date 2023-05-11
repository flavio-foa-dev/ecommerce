
import { useContext } from "react"
import LoginComponent from "../components/Login/LoginComponent"
import Cadastrar from "../components/Cadastro/Cadastro"
import { ContextUsers } from "../context/User"


export default function Login() {
  const {cadastro,  hendleFormCadastro} = useContext<any>(ContextUsers)


  return (
    <>
      { cadastro === "login" && <LoginComponent fnCadastar={hendleFormCadastro}/>
        || <Cadastrar />}
    </>
  )
}
