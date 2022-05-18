import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:365px;
    height: 60px;
    border: 3px solid var(--grey-100);
    border-radius: 8px;
    padding:10px 10px 10px 3px;
    background-color: var(--white);
    animation: 500ms slideLeft;
    :focus-within{
        border: 3px solid var(--black);

    }
    @media (max-width:395px) {
        width: 98%;
        animation: 500ms slideLeft2;
    }

    .search-btn{
        width: 53px;
        height: 40px;
        background-color: var(--green);
        border-radius: 8px;
        animation: 4s fadeIn none;
        transition: 1s;
        svg{
            color: white;
            font-size: 14px ;
        }
        :hover{
            transition: 1s;
            background-color: var(--green-hover);
        }
    }
    .close-btn{
        margin: 0 5px 0 0;
        background-color: var(--white);
        svg{
            font-size: 16px;
            transition: 1s ease;
            color: var(--grey-4);
            :hover{
                transition: 1s ease;
                color: var(--black);
            }
        }
    }
    input{
        flex-basis: 78%;
        animation: 4s fadeIn none;
        font-size: 16px;
        height: 100%;
        padding: 0 0 0 8px;
        color: var(--black);
        background-color: transparent;
        ::placeholder{
            color: var(--grey-100);
        }
        outline: 0;
        :focus{
            
        }
        @media (max-width:395px) {
            flex-basis: 100%
        }
    }
    
    @keyframes slideLeft {
        from{
            width: 0;
        }
        to{
            width: 365px;
        }
    }
    @keyframes slideLeft2 {
        from{
            width: 0;
        }
        to{
            width: 98%;
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

`