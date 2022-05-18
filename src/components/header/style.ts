import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: var(--grey-0);
    z-index: 40;
    position: sticky;
    width: 100%;
    top: -1px;
    left: 0;
    .space{
        width: 240px;
        transition: all 1s ;
        @media (max-width: 546px) {
            width: 0px;

        }
    }
    .searchActiveLogo{
        @media (max-width: 546px) {
            display: none;
        }
    }
    .searchActiveIcon{
        @media (max-width: 660px) {
            display: none;
        }
    }
    .container{
        min-height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 25px;
        max-width: 1500px;
        margin: 0 auto;
        @media (max-width: 406px) {
            padding: 0 5px 0 10px;
        }
    }

    .nav-list{
        display: flex;
        align-items: center;
        li{
            margin: 0 10px 0 10px;

            position: relative;
            >svg{
                color: var(--grey-4);
                font-size: 21px;
                transition: 1s;
                cursor: pointer;
                :hover{
                    color: var(--black);
                    transition: 1s;
                }
                @media (max-width: 420px) {
                    font-size: 17px;
                }
            }
            .qtd-in-cart{
                background-color: var(--green);
                border-radius: 5px;
                min-width: 15px;
                font-size: 10px;
                height: 15px;
                color: var(--green-btn-text-color);
                position: absolute;
                top: -5px;
                right: -5px;
                padding:2px 3px ;
                cursor: pointer;
                text-align: center;
                font-weight: bold;
            }
        }
        
    }
    
`