import { ReactNode, createContext, useState } from 'react';

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

  const userExist = users.find((item : any) => (
    item.email === user.email && item.password === user.password))

  function validationUser(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    !userExist ? setUserNotFoud(true)
     : setUserNotFoud(false)
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
    console.log(users, ' todos os users')
  };



  const value = {
    user,
    setUser,
    handleChange,
    createUser,
    validationUser,
    userNotFound,
    cadastro,
    hendleFormCadastro,
    userExist,
   }
  return (
    <ContextUsers.Provider value={value}>
      {children}
    </ContextUsers.Provider>
  );
}



