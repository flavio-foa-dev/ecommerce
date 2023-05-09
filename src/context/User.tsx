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

  const [user, setUser] = useState(
    {
      id: uuid(),
      fullName: "",
      email: "",
      password: "",
      adress: "",
    }
  )

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
  };

  const value = {user, setUser, handleChange, createUser }
  return (
    <ContextUsers.Provider value={value}>
      {children}
    </ContextUsers.Provider>
  );
}

