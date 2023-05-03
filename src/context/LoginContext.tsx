import React, { ReactNode } from "react";
import { api } from "../services/api";

interface LoginProviderProps{
    children: ReactNode;
}
interface LoginContext {
    isLogin: boolean;
    setIsLogin: (isLogin: boolean) => void;
    name: string;
    setName: (name: string) => void;
  }

export const LoginContext = React.createContext<LoginContext>({} as LoginContext)

export const LoginStorage = ({children}: LoginProviderProps) => {
    const [isLogin, setIsLogin] = React.useState(false)
    const [name, setName] = React.useState('')
    React.useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token){
            setIsLogin(true)
        }
    }, [])
    return(
        <LoginContext.Provider value={{isLogin, setIsLogin, name, setName}}>
            {children}
        </LoginContext.Provider>
    )
}