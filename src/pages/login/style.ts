import styled from 'styled-components'

export const ContainerLogin = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap-reverse;
    div:nth-child(1){
        animation: fadeInRight 1.5s;
    }
    div:nth-child(2){
        animation: fadeInLeft 1.5s;
    }
    @media (max-width:650px ) {
        margin: 10px auto 70px;
        
    }
    .form{
        margin: 15px 0 25px;
        border-radius: 10px;
        padding: 26px 24px 5px;
        border: 2px solid var(--grey-100);
        width: 500px;
        @media (max-width: 380px) {
            padding: 26px 15px 25px;
            width: 93%;
        }
        @media (max-width:425px) {
            div:nth-child(1){
                animation: fadeIn 1.5s;
            }
            div:nth-child(2){
                animation: fadeIn 1.5s;
            }
        }
        @media (max-width:650px ) {
            margin: 20px auto 40px;
        }
    }
`