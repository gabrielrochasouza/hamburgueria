import { ContainerInput } from "./style";
import { MdVisibility,MdVisibilityOff } from 'react-icons/md'
import { useState } from "react";
import {InputHTMLAttributes} from 'react'

interface ErrorProp{
  message:string
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  legend?: string;
  placeholder?: string;
  type?: string;
  isGrey?: boolean;
  name:string,
  error?:ErrorProp,
  isCheckout?:boolean
  register:(e:string)=>void
}


export default function Input({
  legend,
  placeholder,
  type,
  isGrey = false,
  register,
  name,
  error,
  isCheckout=false,
  ...rest

}: InputProps) {
  const [visible,setVisible] = useState(false)

  return (
    <ContainerInput isGrey={isGrey}>
      {type==='password' ? (
        <>
          {!!error && <span className="error">*{error.message}</span> }
          <input {...rest} {...register(name)} name={name} placeholder={placeholder} type={visible ? 'text' :'password'} />
          <legend>{legend}</legend>
          <button onClick={(e)=>{
            e.preventDefault()
            setVisible(!visible)
          }}>
            {visible ? <MdVisibility/> :<MdVisibilityOff/>}
          </button>
        </>
      ): isCheckout ?(
        <>
          <input {...rest}  name={name} placeholder={placeholder} type={type} />
          <legend >{legend}</legend>
        </>
      ): (
        <>
          {!!error && <span className="error">*{error.message}</span> }
          <input {...rest} {...register(name)}  name={name} placeholder={placeholder} type={type} />
          <legend >{legend}</legend>
        </>
      )}
    </ContainerInput>
  );
}
