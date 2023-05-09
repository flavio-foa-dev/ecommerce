
import { useState } from "react"
import LoginComponent from "../components/Login/LoginComponent"
import Cadastrar from "../components/Cadastro/Cadastro"

export default function Login() {
  const [cadastro, setCadastrar] = useState("login")

  function getFormCad(){
    setCadastrar("cadastrar")
  }

  return (
    <>
      { cadastro === "login" && <LoginComponent fnCadastar={getFormCad}/> || <Cadastrar />}


        {cadastro}
    </>

  )
}
