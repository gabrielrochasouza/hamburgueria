import { Navigate } from "react-router-dom";
import Forms from "../../components/forms";
import LogoKenzieBurger from "../../components/logoBurgerKenzie";
import { useAuth } from "../../provider/auth";
import { ContainerRegister } from "./style";

export default function Register(){
    const {token} = useAuth()
    if(token){
        return <Navigate to={'/'}/>
    }
    return(
        <ContainerRegister>
            <LogoKenzieBurger/>
            <div className="form" >
                <Forms isLogin={false}/>
            </div>
        </ContainerRegister>
    )
}