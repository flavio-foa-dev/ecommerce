import { ReactNode, createContext, useState } from 'react';

export const ContextUsers = createContext<object| undefined>(undefined)
ContextUsers.displayName = "Users"

type Children = {
  children: ReactNode
}



export default function  ProviderUsers({children}: Children) {
  const [nome, setNome] = useState(" flavio")

  const value = {nome, setNome}

  return (
    <ContextUsers.Provider value={value}>
      {children}
    </ContextUsers.Provider>
  );
}

