import styled from "styled-components";

export const ContainerLogo = styled.div`
    margin: 30px;
    @media (max-width: 380px) {
        margin: 30px auto;

    }
    max-width: 450px;
    .logo-fig{
        margin: 40px;
        img{
            width: 243px;
        }
    }

    .box{
        width: 377px;
        height: 95px;
        padding: 13px 26px 16px 15px;
        display: flex;
        border-radius: 5px;
        border: 2px solid var(--grey-100);
        align-items: center;
        @media (max-width: 380px) {
            width: 90%;
            padding: 13px 5px 13px 13px;
            margin: 20px auto;
            p{
                font-size: 11px;
            }
        }
        figure{
            flex-basis: 20%;
            max-width: 60px;
            width: 60px;
            height: 60px;
            border-radius: 8px;
            background-color: rgba(39, 174, 96, 0.1);
            margin: 0 10px 0 0;
            display: flex;
            align-items: center;
            justify-content: center;
            svg{
                color: var(--green);
            }
        }
        p{
            flex-basis: 80%;
            padding: 0 0 0 10px;
            color: var(--secundary-text-color);
            strong{
                color: var(--primary-text-color);
            }
        }
    }
`