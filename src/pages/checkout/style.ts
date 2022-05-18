import styled from 'styled-components'

export const ContainerCheckout = styled.div`
    margin: 50px 0;
    h1{
        margin: 0px 0 50px;
        text-align: center;
        position: relative;
        ::after{
            content: '';
            position: absolute;
            width: 6%;
            height: 3px;
            background-color: var(--green);
            bottom: -20px;
            right: 47%;
        }
    }
    .empty{
        text-align: center;
        margin: 60px auto 60px;
        width: 250px;
        height: 250px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border: 2px solid var(--black);
        border-radius: 50%;
        svg{
            width: 80px;
            height: 80px;
        }
        p{
            font-size: 12px;
        }
    }
    ul{
        margin: 0px 0 0px ;
        li{
            position: relative;
            cursor: pointer;
            margin: 15px 0 0;
            display: flex;
            >div{
                margin: 0px 0px 0 20px;
                >button{
                    position: absolute;
                    top: 20px;
                    right: -20px;
                    background-color: var(--green); 
                    color: #fff;
                    border-radius: 10px;
                    padding: 8px;
      
                }
            }
            img{
                border-radius: 10px;
                width: 100px;
                height: 80px;
                object-fit: cover;
            }
            span{
                color: var(--green);
            }
        }
    }
    .checkout-block{
        margin: 60px auto 10px;
        max-width: 1400px;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        gap: 2%;
        justify-content: center;
    }
    .col{
        border-radius: 5px;
        padding: 40px 40px 23px;
        background-color: var(--grey-0);
        min-width: 425px;
        @media (max-width: 445px) {
            min-width: 100%;
            padding: 40px 24px 23px;
        }
    }
    .col-left{
        flex-basis: 48%;

    }
    .total{
        display: flex;
        justify-content: space-between;
        margin: 10px 0;
        color: var(--green);
        font-weight: bold;
    }
    .col-right{
        flex-basis: 38%;
        position: sticky;
        top: 89px;
    }
    h1{
        text-align: center;
    }
    select{
        margin: 20px 0 10px;
        width: 100%;
        padding: 20px;
        border-radius: 10px;
        background-color: var(--grey-100);
        border: 0;
        color: var(--black);
        font-size: 16px;
        outline: 0;
    }
`