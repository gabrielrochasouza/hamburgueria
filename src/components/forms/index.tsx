import { Link,useNavigate } from "react-router-dom";
import Button from "../button";
import Input from "../input";
import { ContainerForms } from "./style";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAuth } from "../../provider/auth";
import { useCartProvider } from "../../provider/cart-provider";

interface FormsProps {
  isLogin: boolean;
}
interface DataProps {
  email:string,
  password:string
}

export default function Forms({ isLogin }: FormsProps) {
  const navigate = useNavigate();
  const {cartProducts} = useCartProvider()

  const schemaRegister = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("Email Inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "É necessário no mínimo 6 dígitos"),
    confirm_password: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password"), null], "Senhas tem que ser iguais"),
  });

  const schemaLogin = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email Inválido"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(isLogin ? schemaLogin : schemaRegister),
  });

  const {login,signup} = useAuth()


  return (
    <ContainerForms onSubmit={handleSubmit((data:any) => {
      if(isLogin){
        login(data)
        cartProducts.length ? navigate('/checkout') : navigate('/')
      }else{
        signup({...data,is_adm:false})
        cartProducts.length ? navigate('/checkout') : navigate('/')
      }
      
      } 
    )}>
      {isLogin ? (
        <>
          <h2>Login</h2>
          
          <Input
            error={errors.email}
            register={register}
            name={"email"}
            legend="Email"
            placeholder="Email"
            type="text"
          />
          
          <Input
            error={errors.password}
            register={register}
            name={"password"}
            legend="Senha"
            placeholder="Senha"
            type="password"
          />
          <Button type="submit" isGrey={false}>
            Logar
          </Button>
          <p>Crie sua conta para poder fazer uma compra!</p>
          <Button isGrey={true} onClick={(e) =>{
             e.preventDefault()
             navigate("/register")
          }}>
            Cadastrar
          </Button>
        </>
      ) : (
        <>
          <h2 className="register-title">
            <span>Cadastro</span>
            <Link to={"/login"} className="link">
              Ir para o login
            </Link>
          </h2>
          
          <Input
            error={errors.name}
            register={register}
            name={"name"}
            legend="Nome"
            placeholder="Nome"
            type="text"
          />
          
          <Input
            error={errors.email}
            register={register}
            name={"email"}
            legend="Email"
            placeholder="Email"
            type="text"
          />
          
          <Input
            error={errors.password}
            register={register}
            name={"password"}
            legend="Senha"
            placeholder="Senha"
            type="password"
          />
          
          <Input
            error={errors.confirm_password}
            register={register}
            name={"confirm_password"}
            legend="Confirmar Senha"
            placeholder="Confirmar Senha"
            type="password"
          />
          <Button type="submit" isGrey={false}>
            Cadastrar
          </Button>
        </>
      )}
    </ContainerForms>
  );
}
