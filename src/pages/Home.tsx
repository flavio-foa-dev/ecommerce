import { useContext } from "react"
import {ContextUsers} from '../context/users'
import ListProducts from "../components/ListProduts/ListProducts"




function Home() {
  const {nome, setNome} = useContext(ContextUsers)
  return (
    <>
      <ListProducts />
      <p className="">
        Click on the Vite and React logos to learn more
        {nome}
        <button onClick={() => setNome(" Figuereedo Torres")}>Nome</button>
      </p>
    </>
  )
}

export default Home
