import {HeaderContainer} from './style'
import logo from '../../assets/svg/logo-preta.svg'
import logoBranca from '../../assets/svg/logo-branca.svg'
import {FaShoppingCart,FaSignInAlt,FaSearch} from 'react-icons/fa'
import {AiOutlineLogout} from 'react-icons/ai'
import Input from './input'
import { useState } from 'react'

import SideCart from './side-cart'

import { Link, useNavigate,useLocation } from 'react-router-dom'

import { useCartProvider } from '../../provider/cart-provider'
import { useTheme } from '../../provider/LightDark'

import {MdDarkMode,MdLightMode} from 'react-icons/md'
import { useAuth } from '../../provider/auth'


export default function Header(){
    const [searchActive,setSearchActive] = useState(false)
    
    const [cartOpen, setCartOpen] = useState(false)
    
    const {token,logout} = useAuth()

    const navigate = useNavigate()

    const {cartProducts} = useCartProvider()
    
    const {lightTheme,changeTheme} = useTheme()

    const openCloseCart = ()=>{
        setCartOpen(!cartOpen)
    }

    const location = useLocation()

    if(location.pathname==="/login" || location.pathname==='/register'){
         return(<></>)
    }

 return(
     <HeaderContainer >
         <div className='container'>

            <figure onClick={()=>{
                window.scrollTo(0,0)
                navigate('/')
               
            }} className={searchActive ? 'searchActiveLogo' : ''}>
                <Link to={'/'}>
                <img src={lightTheme? logo : logoBranca} alt='Logo da Hamburgueria'/>
                </Link>
                <figcaption>Logo Hamburgueria Kenzie</figcaption>
            </figure>

            <div>
                <nav>
                    <ul className='nav-list'>
                        {
                            searchActive ? (
                                <li>
                                    <Input setSearchActive={setSearchActive}/>
                                </li>
                            ) : (
                                <li>
                                    <FaSearch onClick={()=>setSearchActive(true)}/>
                                </li>
                            )
                        }
                        <li className={searchActive ? 'searchActiveIcon' : ''} onClick={()=>changeTheme()}>
                            {lightTheme ? <MdDarkMode/> : <MdLightMode/>}
                        </li>
                        <li className={searchActive ? 'searchActiveIcon' : ''} onClick={()=>openCloseCart()}>
                            <FaShoppingCart />
                            <div className='qtd-in-cart'>{cartProducts.reduce((acc,product)=>acc+product.qtd,0)}</div>
                        </li>

                        {
                            !token ? (
                                <li onClick={()=>{
                                    window.scrollTo(0,0)
                                    navigate('/login')
                                }} className={searchActive ? 'searchActiveIcon' : ''}>
                                    <FaSignInAlt />
                                </li>
                            ) : (
                                <li onClick={()=>{
                                    logout()
                                }} className={searchActive ? 'searchActiveIcon' : ''}>
                                    <AiOutlineLogout />
                                </li>
                            )
                        }


                        {
                            cartOpen && (
                                <>
                                    <li className={cartOpen ? 'space' : ''}></li>
                                    <SideCart openCloseCart={openCloseCart} />
                                </>
                            ) 
                        }
                    </ul>
                </nav>
            </div>
         </div>
     </HeaderContainer>
 )   
}