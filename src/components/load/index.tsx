import { AiOutlineLoading } from "react-icons/ai";
import { Loading } from "./style";

export default function Load(){

    return(
        <Loading>
            <AiOutlineLoading/>
            <p>Carregando...</p>
        </Loading>
    )
}