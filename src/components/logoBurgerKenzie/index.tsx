import { ContainerLogo } from "./style";
import {FiShoppingBag} from 'react-icons/fi'
import logo from '../../assets/svg/logo-preta.svg'
import logoBranca from '../../assets/svg/logo-branca.svg'
import { Link } from "react-router-dom";
import { useTheme } from "../../provider/LightDark";

export default function LogoKenzieBurger(){
    const {lightTheme} = useTheme()
    return(
        <ContainerLogo>
            <figure className="logo-fig">
                <Link to={'/'}>
                <img src={lightTheme ? logo : logoBranca} alt="Logo Kenzie Burger"/>
                </Link>
            </figure>

            <div className="box">
                <figure>

                    <FiShoppingBag/>
                </figure>
                <p>
                    A vida é como um sanduíche, é preciso
                    recheá-la com os <strong>melhores </strong>
                    ingredientes.
                </p>
            </div>
        </ContainerLogo>
    )
}