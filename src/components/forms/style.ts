import styled from "styled-components";

export const ContainerForms = styled.form`
    
    h2{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        color: var(--primary-text-color);
    }
    p{
        text-align: center;
        margin: 20px auto;
        max-width: 320px;
        color: var(--secundary-text-color);
        
    }
    .error{
        line-height: 1px;
        color: red;
    }
    .register-title{
        display: flex;
        justify-content: space-between;
        a{
            text-decoration: underline;
            color: var(--secundary-text-color);
            font-size: 14px;
            align-items: center;
            font-weight: 400;
            cursor: pointer;
        }
    }
`