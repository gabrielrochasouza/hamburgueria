import styled from "styled-components";


export const FooterBlock = styled.footer`
    background-color: var(--grey-0);
    color: var(--black);
    padding: 60px 40px 100px;
    margin: 120px 0 0;
    @media (max-width:600px) {
        padding:30px 20px 20px ;
    }
    .footer-container{
        max-width: 1300px;
        margin: 0 auto;
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
        @media (max-width:990px) {
            justify-content: center;
            text-align: center;

            margin: 0 auto;
        }
        @media (max-width:690px) {
            display: initial;

        }
        h4{
            font-size: 18px;
        }
        p{
            font-size: 13px;
        }
        h4,p{
            margin: 16px 0px;
        }
        img{
            margin: 20px 0 0;
            width: 300px;
            @media (max-width:600px) {
                width: 180px;
            }
        }
        .col-info{
        }
        .col{
            max-width: 300px;
            margin: 0 80px 0 0;
            @media (max-width:690px) {
                margin: 0 auto 60px;
            }
        }
        .social-icons{
            display: flex;
            gap: 10px;
            @media (max-width:690px) {
                justify-content: center;
            }
            li{
                cursor: pointer;
                border: 2px solid var(--green);
                border-radius: 50%;
                padding: 8px;
                display:inline-flex;
                justify-content: center;
                align-items: center;
                svg{
                    width: 18px;
                    height: 18px;
                }
                :hover{
                    background-color: var(--green);

                }
            }
        }
    }

`
export const Developed = styled.div`
    text-align: center;
    padding: 10px;
    background-color:var(--grey-100);
    font-size: 12px;
    a{
        text-decoration: none;
        color:var(--green);
        font-weight: bold;
    }
`