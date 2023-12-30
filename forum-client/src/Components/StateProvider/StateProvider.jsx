// const { createContext } = require("react");

import React, { createContext, useContext, useState } from 'react'
export const UserContext = createContext()

export function StateProvider({children}) {
    const [token,setToken]=useState('')
  return (
		<UserContext.Provider value={[token, setToken]}>
			{children}
		</UserContext.Provider>
	);
}

export const useStateValue=()=>useContext(UserContext)
