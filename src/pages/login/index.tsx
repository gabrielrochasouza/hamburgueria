import Forms from "../../components/forms";
import LogoKenzieBurger from "../../components/logoBurgerKenzie";
import { useAuth } from "../../provider/auth";
import { ContainerLogin } from "./style";
import {Navigate} from 'react-router-dom'

export default function Login(){
    const {token} = useAuth()
    if(token){
        return <Navigate to={'/'}/>
    }
    return(
        <ContainerLogin>
            <div className="form" >
                <Forms isLogin={true}/>
            </div>
            <LogoKenzieBurger/>
        </ContainerLogin>
    )
}