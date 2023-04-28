import React, { ReactNode } from "react";
import { api } from "../services/api";

interface LoginProviderProps{
    children: ReactNode;
}


export const LoginContext = React.createContext({})

export const LoginStorage = ({children}: LoginProviderProps) => {
    const [isLogin, setIsLogin] = React.useState(false)
    return(
        <LoginContext.Provider value={isLogin}>
            {children}
        </LoginContext.Provider>
    )
}