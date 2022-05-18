import styled from "styled-components";

export const ContainerBottom = styled.nav`
    @media (min-width:430px) {
        display: none;
    }
    position: fixed;
    bottom: 8px;
    left: 2%;
    width: 96%;
    min-height: 55px;
    background-color: var(--green);
    color: var(--white);
    border-radius: 15px;

    ul{
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 55px;
        li{
            height: 55px;
        
            display: flex;
            align-items: center;
            svg{
                font-size: 25px;
                cursor: pointer;
                color: var(--green-btn-text-color);
            }
        }
    }
`