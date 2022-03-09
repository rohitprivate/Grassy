import React, { createContext, useState } from "react";
import auth from "@react-native-firebase/auth"
import { User } from "../types";

interface IAuthContext {
    user: User | null
    setUser:(user:User)=>void 
    login:((email:string,password:string)=>void)
}
interface IAuthProviderProps {
    children:Element
}
export const AuthContext = createContext<IAuthContext>({} as IAuthContext);
export const AuthProvider = ({ children }:IAuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const login = async (email: string, password: string) => {
        try {
            auth().signInWithEmailAndPassword(email, password)
        } catch (err) {
            console.log(err)
        }
    }
    return <AuthContext.Provider
        value={{
            user,
            setUser,
            login
        }}
    >
        {children}
    </AuthContext.Provider>
}