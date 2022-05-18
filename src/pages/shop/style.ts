import styled from "styled-components";

export const ContainerShop = styled.div`
    margin: 0px auto 0px;
    max-width: 1400px;
    .capa{
        min-height: 430px;
        z-index: 30;
        @media (max-width:768px) {
            display: none;
        }
        video{
            position: absolute;
            top: 80px;
            left: 0;
            width: 100%;
            height: 400px;
            object-fit: cover;
            z-index: 10;
            source{
                width: 100%;
                height: 100%;
            }
        }
        .background{
            position: absolute;
            top: 80px;
            left: 0;
            width: 100%;
            height: 400px;
            z-index: 20;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--background-transparent);
        }
            img{
                width: 460px;
                animation-delay: 1s;
                animation: fadeIn 2s;
            }
    }
    ul{
        gap: 15px;
        padding: 0 20px 20px;
        margin: 10px 0 30px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        @media (max-width: 450px) {
            padding: 0 0 0 0px;
            
        }
    }
    h3{
        color: var(--black);
    }
    section{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        max-width: 850px;
        margin: 0 auto 50px;
        align-items: center;
        padding: 20px 0;
        @media (max-width:768px) {
            display: none;
        }
        .box-info{
            width: 185px;
            height: 120px;
            border-radius: 10px;
            padding: 0 20px;
            border: 2px solid var(--grey-100);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            :hover{
                border: 2px solid var(--green);
            }
            h3{
                font-size: 14px;
            }
            p{
                color: var(--secundary-text-color);
                text-align:center;
                font-weight: 600;
                font-size: 9px;
                margin: 5px 0 0 0;
            }
            .box-icon{
                border: 2px solid var(--green);
                border-radius: 50%;
                display: flex;
                width: 35px;
                height: 35px;
                margin: 0 0 10px 0;
                justify-content: center;
                align-items: center;
                svg{
                    color: var(--green);
                    width: 60%;
                }
            }
        }
    }
    @keyframes fadeIn {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;

        }
    }
    @keyframes rotation {
        from{
            transform: rotate(0);
        }
        to{
            transform: rotate(360deg);
        }
    }
`
