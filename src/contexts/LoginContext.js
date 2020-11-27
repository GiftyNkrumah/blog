import React, {createContext, useState} from 'react'

export const LoginContext = createContext() 

export default function LoginContextProvider (props) {
    const [isLogged, setLogged] = useState(false)
    
    return (
        <LoginContext.Provider value={{isLogged, setLogged}}>
            {props.children}
        </LoginContext.Provider>
    )
}