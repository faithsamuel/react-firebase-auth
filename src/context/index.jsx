import { createContext, useState } from "react";
import {createUserWithEmailAndPassword} from 'firebase/auth';
import auth from "../firebaseConfig";




export const AuthContext = createContext(null);


export default function AuthState({children}){

    const [registerFormData, setRegisterFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    function registerOnSubmit(e) {
        e.preventDefault(); 

        const {email, password} = registerFormData
        return createUserWithEmailAndPassword(auth, email, password)
    }

    return <AuthContext.Provider value={{registerFormData, setRegisterFormData, registerOnSubmit}}>{children}</AuthContext.Provider>
}