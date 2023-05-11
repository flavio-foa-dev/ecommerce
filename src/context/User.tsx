import { ReactNode, createContext, useState } from 'react';
import { redirect } from 'react-router-dom';
import {v4 as uuid} from 'uuid'

export const ContextUsers = createContext<object| undefined>(undefined)
ContextUsers.displayName = "Users"

type Children = {
  children: ReactNode
}

const users = [
  {
    id: uuid(),
    fullName: "Flavio Andrade",
    email: "foa@foa.com",
    password: "123456",
    adress: "Rua new city 07 UK",
  }
]

export default function  ProviderUsers({children}: Children) {
  const [userNotFound, setUserNotFoud] = useState(false)
  const [cadastro, setCadastrar] = useState("login")


  const [user, setUser] = useState(
    {
      id: uuid(),
      fullName: "",
      email: "",
      password: "",
      adress: "",
    }
  )

  function hendleFormCadastro(action: string){
    setCadastrar(action)
  }


  function validationUser(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    const userExist = users.find((item : any) => (
      item.email === user.email && item.password === user.password))

    console.log(userExist,"usuario existe no cadastro")
    !userExist ? setUserNotFoud(true) : setUserNotFoud(false)

    if(userExist){
      console.log(" eu existo")
      redirect("/");

    }

  }



  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const createUser = (e:any) => {
    e.preventDefault();
    if (user.adress && user.email && user.fullName && user.password) {
      users.push(user)
    }
    setCadastrar("login")
    console.log(users, ' todod os users')
  };



  const value = {
    user,
    setUser,
    handleChange,
    createUser,
    validationUser,
    userNotFound,
    cadastro,
    hendleFormCadastro
   }
  return (
    <ContextUsers.Provider value={value}>
      {children}
    </ContextUsers.Provider>
  );
}



