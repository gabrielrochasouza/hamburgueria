import { useCartProvider } from "../../provider/cart-provider";
import { ContainerCheckout } from "./style";
import { FaTrash } from "react-icons/fa";
import Button from "../../components/button";
import Input from "../../components/input";
import { useForm } from "react-hook-form";
import { cepMask, telMask, numberMask } from "../../masks";
import { useState } from "react";
import { api, cepApi } from "../../service";
import toast from "react-hot-toast";
import { useAuth } from "../../provider/auth";
import { Navigate, useNavigate } from "react-router-dom";

import {AiOutlineShoppingCart} from 'react-icons/ai'



export default function Checkout() {
  const { cartProducts, emptyCart } = useCartProvider();
  const { register } = useForm();
  const { removeAll } = useCartProvider();

  const checkoutMemory = JSON.parse(localStorage.getItem("@checkoutMemory") || 'null') || {} 


  const [cep, setCep] = useState(checkoutMemory?.cep || ""); //obrigatorio
  const [tel, setTel] = useState(checkoutMemory?.tel || ""); //obrigatorio
  const [name, setName] = useState(checkoutMemory?.name || ""); //obrigatorio
  const [rua, setRua] = useState(checkoutMemory?.rua || ""); //obrigatorio
  const [bairro, setBairro] = useState(checkoutMemory?.bairro || ""); //obrigatorio
  const [cidade, setCidade] = useState(checkoutMemory?.cidade || ""); //obrigatorio
  const [estado, setEstado] = useState(checkoutMemory?.estado || ""); //obrigatorio
  const [typeOfPayment, setTypeOfPayment] = useState(checkoutMemory?.typeOfPayment || ""); //obrigatorio

  const [info, setInfo] = useState(checkoutMemory.info || "");
  const [complemento, setComplemento] = useState(checkoutMemory.complemento || "");
  const [change, setChange] = useState(checkoutMemory.change || "");

  const navigate =useNavigate()
  const { token, user } = useAuth();

  const verifyIfFieldsAreFilled = () => {
    if (
      cep.length === 9 &&
      (tel.length === 14 || tel.length === 13) &&
      name &&
      rua &&
      bairro &&
      cidade &&
      estado &&
      typeOfPayment !== "Selecione o tipo de pagamento" &&
      typeOfPayment
    ) {
      if (
        typeOfPayment === "Dinheiro na Entrega (necessita de troco)" &&
        !change
      ) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  };


  if(cartProducts.length===0){
    return <Navigate to={'/'}/>
  }

  return (
    <ContainerCheckout>
      <h1>Finalize sua compra</h1>
      <div className="checkout-block">
        <div className="col col-left">
          <h2>Informação de Contato</h2>
          <Input
            isCheckout={true}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            isGrey={true}
            legend="Nome"
            placeholder="Nome"
            name="name"
            register={register}
          />
          <Input
            isCheckout={true}
            value={tel}
            onChange={(e) => {
              setTel(telMask(e.target.value));
            }}
            isGrey={true}
            legend="Whatsapp"
            placeholder="Informe seu Whatsapp"
            name="tel"
            register={register}
          />
          <h2>Informe seu Endereço</h2>

          <Input
            isCheckout={true}
            value={cep}
            onChange={(e) => {
              setCep(cepMask(e.target.value));
              if (cepMask(e.target.value).length === 9) {
                cepApi
                  .get(`${cepMask(e.target.value).replace("-", "")}/json`)
                  .then((res) => {
                    if (res.data.erro) {
                      toast.error("CEP inválido");
                    } else {
                      setBairro(res.data.bairro);
                      setCidade(res.data.localidade);
                      setEstado(res.data.uf);
                    }
                  })
                  .catch((err) => toast.error("CEP inválido"));
              }
            }}
            isGrey={true}
            legend="CEP"
            placeholder="*Informe seu CEP"
            name="cep"
            register={register}
          />

          <Input
            value={rua}
            onChange={(e) => {
              setRua(e.target.value);
            }}
            isCheckout={true}
            isGrey={true}
            legend="Rua"
            placeholder="*Informe sua rua"
            name="rua"
            register={register}
          />
          <Input
            value={complemento}
            onChange={(e) => {
              setComplemento(e.target.value);
            }}
            isCheckout={true}
            isGrey={true}
            legend="Complemento"
            placeholder="Complemento ex: casa, apartamento..."
            name="complemento"
            register={register}
          />
          <Input
            value={bairro}
            isCheckout={true}
            isGrey={true}
            legend="Bairro"
            placeholder="*Bairro"
            name="bairro"
            register={register}
          />
          <Input
            value={cidade}
            isCheckout={true}
            isGrey={true}
            legend="Cidade"
            placeholder="*Cidade"
            name="cidade"
            register={register}
          />
          <Input
            value={estado}
            isCheckout={true}
            isGrey={true}
            legend="Estado"
            placeholder="*Estado"
            name="estado"
            register={register}
          />

          <h2>Tipo de pagamento</h2>

          <select
            onChange={(e) => {
              setTypeOfPayment(e.target.value)
            }}
            value={typeOfPayment}
            name="Selecione"
            id=""
          >
            <option value="Selecione o tipo de pagamento">
              Selecione o tipo de pagamento
            </option>
            <option value="Dinheiro na Entrega (necessita de troco)">
              Dinheiro na Entrega (necessita de troco)
            </option>
            <option value="Dinheiro na Entrega (não precisa de troco)">
              Dinheiro na Entrega (não precisa de troco)
            </option>
            <option value="Pagamento no cartão na entrega">
              Pagamento no cartão na entrega
            </option>
          </select>

          {typeOfPayment === "Dinheiro na Entrega (necessita de troco)" && (
            <Input
              isCheckout={true}
              isGrey={true}
              legend="Troco para quanto?"
              placeholder="Troco para quanto?"
              name="change"
              register={register}
              type="number"
              onChange={(e) => {
                setChange(e.target.value);
              }}
              value={change}
            />
          )}

          <h2>Informações extras</h2>
          <Input
            value={info}
            isCheckout={true}
            isGrey={true}
            legend="Informações extras"
            placeholder="Ex: hamburguer sem cebola..."
            name="info"
            onChange={(e) => {
              setInfo(e.target.value);
            }}
            register={register}
          />
        </div>

        <div className="col col-right">
          <h2>Seu pedido:</h2>
          {cartProducts.length ? (
            <ul>
              {cartProducts.map((product) => (
                <li key={product.id}>
                  <figure>
                    <img alt={product.name} src={product.img_url} />
                    <figcaption>{product.name}</figcaption>
                  </figure>
                  <div>
                    <h3>{product.name}</h3>
                    <p>
                      <span>
                        R$ {product.price.toFixed(2).replace(".", ",")}
                      </span>
                    </p>
                    <p>Quantidade: {product.qtd}</p>

                    <button onClick={() => removeAll(product)}>
                      <FaTrash />
                    </button>
                  </div>
                </li>
              ))}
              <div className="total">
                <p>Quantidade Total:</p>
                <p>
                  {cartProducts.reduce((acc, product) => acc + product.qtd, 0)}
                </p>
              </div>
              <div className="total">
                <p>Valor Total:</p>
                <p>
                  R$
                  {cartProducts
                    .reduce(
                      (acc, product) => acc + product.price * product.qtd,
                      0
                    )
                    .toFixed(2)
                    .replace(".", ",")}
                </p>
              </div>
              <Button isGrey={!verifyIfFieldsAreFilled()} onClick={() => {
                const request = {
                  name,
                  tel,
                  cep,
                  rua,
                  complemento,
                  bairro,
                  cidade,
                  estado,
                  typeOfPayment,
                  change,
                  info  
                }

                localStorage.setItem('@checkoutMemory',JSON.stringify(request))

                if(verifyIfFieldsAreFilled()===false || !token){
                  toast('Login é necessário para comprar')
                  navigate('/login')
                  window.scrollTo(0,0)
                }else{
                  api.post('/order',request,{
                    headers:{authorization:`Bearer ${token}`}
                  }).then(res=>{
                    toast.success('Pedido feito com sucesso')
                    emptyCart()

                  }).catch(err=>{
                    toast.error('Ocorreu um erro')
                  })
                }
              }}>
                Finalizar Pedido
              </Button>
            </ul>
          ) : (
            <>
              <div className="empty">
                <AiOutlineShoppingCart/>
                <h4>Seu Carrinho está vazio!</h4>
                <p>Volte e adicione algo</p>
              </div>
              <Button onClick={()=>{
                navigate('/')
                window.scrollTo(0,0)
                
              }}>Voltar</Button>
            </>
          )}
        </div>
      </div>
    </ContainerCheckout>
  );
}
