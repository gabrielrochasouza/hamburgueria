import styled from "styled-components";

interface PropInput {
    isGrey:boolean
}

export const ContainerInput = styled.fieldset`
    height: 60px;
    display: flex;
    align-items: center;
    background-color: ${(prop:PropInput)=> prop.isGrey ? 'var(--grey-100)' :'var(--grey-0)' };
    margin: 20px 0;
    border-radius: 10px;
    border: 2px solid var(--grey-0);
    position: relative;
    .error{
        position: absolute;
        top: -12px;
        right: 0;
        color: red;
        font-size: 9px;
    }
    button{
        border-radius: 50%;
        background-color: var(--grey-0);
        display: flex;
        justify-content: center;
        align-items: center;
        border:2px solid var(--green);
        margin: 0 15px 0 0;
        width: 52px ;
        height: 44px;
        svg{
            font-size: 23px;
            color: var(--black);
        }
        :hover{
            background-color: var(--green);
        }

    }
    :focus{
        border: 2px solid var(--black);
    }
    .hidden{
        display: none;
    }
    .input-btn{
        width: 100%;
        color: var(--white);
        background-color: var(--green);
        border-radius: 8px;
        font-weight: 600;
        font-size: 16px;
        height: 60px;
        :hover{
            background-color: var(--green-hover);
        }
    }
    .input-btn-grey{
        background-color: var(--grey-0);
        font-size: 16px;
        font-weight: bold;
        color: var(--black);
        height: 60px;
        :hover{
            background-color: var(--black);
            color: var(--white);
        }
    }
    input{
        border-radius: 0px;
        width: 100%;
        height: 40px;
        padding: 0 10px 0 20px;
        font-size: 18px;
        background-color: transparent;
        color: var(--black);
    }
    /* Chrome, Safari, Edge, Opera */
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active{
        border: 0 !important;
        -webkit-box-shadow: 0 0 0 30px var(--grey-100) inset !important;
    }
    /*Change text in autofill textbox*/
    input:-webkit-autofill{
        -webkit-text-fill-color: var(--black) !important;
    }


    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }
    :focus-within{
        border: 2px solid var(--black);
        background-color: var(--white);
        input{
            
        }
        legend{
            display: initial;
            animation: 500ms fadeUp;
        }
    }
    legend{
        display: none;
        color: var(--black);
        margin: 0 0 0 20px;
        line-height: 0;
        background-color: var(--white);
        position: relative;
        z-index: 10;
        padding:2px 5px;

    }
    @keyframes fadeUp {
        from{
            opacity: 0;
            transform: translateY(10px);
        }
        to{
            opacity: 1;
            transform: translateY(0px);

        }
    }
`