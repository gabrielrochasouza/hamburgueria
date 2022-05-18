import { ReactNode,ButtonHTMLAttributes } from "react";
import { Btn } from "./style";


interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children:ReactNode,
    isGrey?:boolean,

}

export default function Button({children,isGrey=false,...rest}:BtnProps){

    return(
        <Btn {...rest} isGrey={isGrey}>
            {children}
        </Btn>
    )
}