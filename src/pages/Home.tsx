import { useContext } from "react"
import {ContextUsers} from '../context/users'




function Home() {
  const {nome, setNome} = useContext(ContextUsers)
  return (
    <>
      <p className="">
        Click on the Vite and React logos to learn more
        {nome}
        <button onClick={() => setNome(" Figuereedo Torres")}>Nome</button>
      </p>
    </>
  )
}

export default Home
