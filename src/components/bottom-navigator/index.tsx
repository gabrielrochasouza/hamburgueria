import {ContainerBottom} from './style'

import {AiOutlineHome,AiOutlineUser,AiOutlineLock,AiOutlineDollar} from 'react-icons/ai'

export default function BottomNavigator(){

    return(
    <ContainerBottom>
        <ul>
            <li> <AiOutlineHome/> </li>
            <li> <AiOutlineLock/> </li>
            <li> <AiOutlineUser/> </li>
            <li> <AiOutlineDollar/> </li>
        </ul>
    </ContainerBottom>
    )
}