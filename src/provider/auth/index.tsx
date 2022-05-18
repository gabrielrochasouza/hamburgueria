import { ReactNode,createContext,useContext,useState } from "react";
import {api} from "../../service";
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

interface ProviderProps{
    children:ReactNode
}
interface UserProps{
    name:string,
    email:string,
    is_adm:boolean,
    id:number
}
interface ContextProps{
    token:string,
    user:UserProps    
    login:(dataLogin:DataLoginProp)=>void,
    signup:(dataRegister:DataRegisterProp)=>void,
    logout:()=>void
}
interface DataLoginProp{
    email:string,
    password:string,
}
interface DataRegisterProp{
    name:string,
    email:string,
    password:string,
    is_adm:boolean
}

const AuthContext = createContext<ContextProps>({} as ContextProps)

export const AuthProvider = ({children}:ProviderProps)=>{

    const [user,setUser] = useState<UserProps>( JSON.parse(localStorage.getItem("@user") || 'null' ) || {} as UserProps)
    
    const [token,setToken] = useState( localStorage.getItem("@token") || '' )

    const login = (dataLogin:DataLoginProp)=>{
        api.post('/login',dataLogin)
        .then(res=>{
            setUser(res.data.user)
            setToken(res.data.accessToken)

            setLocal( res.data.accessToken,res.data.user )//armazena no local storage

            toast.success('Login feito com sucesso!')
        }).catch(err=>toast.error('Falha no login'))
    }

    const signup = (dataRegister:DataRegisterProp)=>{
        api.post('/register',dataRegister)
        .then(res=>{
            setUser(res.data.user)
            setToken(res.data.accessToken)

            setLocal( res.data.accessToken,res.data.user )//armazena no local storage

            toast.success('Cadastro realizado com Sucesso!')
        })
        .catch(err=>toast.error('Falha no cadastro'))
    }


    const setLocal = (tokenKey:string,userObj:UserProps)=>{
        localStorage.setItem("@token",tokenKey)
        localStorage.setItem("@user", JSON.stringify(userObj))
    }



    const logout = ()=>{
        localStorage.clear()
        setToken('')
        setUser({} as UserProps)
        toast('Você foi deslogado')

        
    }


    return(
        <AuthContext.Provider value={{token,user,login,signup,logout}}>
            {children}
        </AuthContext.Provider>
    )
} 

export const useAuth = ()=> useContext(AuthContext)