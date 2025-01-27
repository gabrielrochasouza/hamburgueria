import { ContainerCart } from "./style";
import {AiOutlineClose,AiOutlineShoppingCart} from 'react-icons/ai'
import { FaTrash } from 'react-icons/fa'
import { useCartProvider } from "../../../provider/cart-provider";
import Button from '../../button'
import { useNavigate } from "react-router-dom";

interface SideCartProp {
    openCloseCart:()=>void
}

export default function SideCart({openCloseCart}:SideCartProp){
    const {cartProducts,addCartProduct,removeAll,removeProduct} = useCartProvider()
    const navigate = useNavigate()
    return(
        <ContainerCart>


            <div className="side-cart">
                <h2>
                    <span>
                    Produtos do Carrinho
                    </span>
                    <button onClick={openCloseCart}>
                    <AiOutlineClose/>
                    </button>
                </h2>
                {cartProducts.length ? (
                    <div className="products">
                        <ul>
                            {cartProducts.map(product=>(
                                <li key={product.id}>
                                    <figure>
                                        <img src={product.img_url} alt={product.name}/>
                                    </figure>
                                    <div>
                                        <p>{product.name}</p>
                                        <div className="qtd-controller">
                                            <span className="btn minus" onClick={()=>removeProduct(product)}>-</span>
                                            <span className="reader">{product.qtd}</span>
                                            <span className="btn plus" onClick={()=>addCartProduct(product)}>+</span>
                                        </div>
                                        <span>R$ {product?.price?.toFixed(2)?.replace('.',',')}</span>
                                    </div>
                                    <button onClick={()=>removeAll(product)}>
                                        <FaTrash/>
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className="total">
                            <div className="total-price">
                                <span>Total:</span>
                                <span>R$ {cartProducts.reduce((acc,product)=>acc+product.price*product.qtd,0).toFixed(2).replace('.',',')}</span>
                            </div>
                            <Button onClick={()=>{
                                openCloseCart()
                                window.scrollTo(0,0)
                                navigate('/checkout')
                            }}>Finalizar Compra</Button>
                        </div>
                    </div>
                ) : (
                    <div className="empty-cart">
                        <AiOutlineShoppingCart/>
                        <p>Seu Carrinho está Vazio</p>
                        <span>Adicione Algo!</span>
                    </div>
                )}

            </div>
        </ContainerCart>
    )
}