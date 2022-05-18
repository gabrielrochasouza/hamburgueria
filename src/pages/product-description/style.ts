import styled from 'styled-components'

export const Container = styled.div`
    margin: 70px auto;
    max-width: 1400px;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    height: 100%;
    overflow-x: hidden;
    @media (max-width:943px) {
            margin: 0 auto 70px;
            padding: 0;
    }
    .go-back{
        padding: 8px 50px;
        color: var(--green);
        font-weight: bold;
        background-color: transparent;
        :hover{
            background-color: var(--green);
            border-color:var(--green) ;
            color: var(--black);
        }
    }
    figure{
        margin:20px 10px 0 0 ;
        @media (max-width:943px) {
            margin: 0;
        }
        .img-box{
            width: 350px;
            height: 350px;
            overflow: hidden;
            border-radius: 30px;
            border: 3px solid var(--green);
            img{
                border-radius: 10px;
                width: 100%;
                height: 100%;
                object-fit: cover;
                :hover{
                    transform: scale(1.4);
                }
            }
            @media (max-width:943px) {
                margin: 0;
                padding: 0;
                width: 100vw;
                border-radius: 0;
                border: 0;
                img{
                    border-radius: 0;
                }
            }
            @media (max-width:643px) {
                height: 250px;
            }
        }
    }
    >div{
        max-width: 500px;
        padding: 20px 0px 0 20px;
        h1{
            padding: 0 10px 0 0;
            font-size: 45px;
            position: relative;
            margin: 0 0 40px 0;
            @media (max-width:430px) {
                font-size: 28px;
            }
            ::before{
                content: '';
                height: 3px;
                width: 100px;
                background-color: var(--green);
                position: absolute;
                bottom: -20px;
            }
        }
        
        p{
            padding: 0 10px 0 0;
            margin: 10px 0 10px;
            font-size: 15px;
            font-weight: 300;
            line-height: 1.4rem;
            @media (max-width:430px) {
                font-size: 15px;
            }
            span{
                font-weight: bold;
                color: var(--green);
            }
        }
        .category{
            font-weight: bold;
        }
        .add{
            margin:10px 10px 0 0;
        }
        button{
            padding: 12px 17px;
            border-radius: 10px;
            margin:10px 0px 0 0;
            background-color: var(--green);
            font-weight: 500;
            font-size: 18px;
            border: 3px solid var(--green);
            color: var(--green-btn-text-color);
            :hover{
                border: 3px solid #000;
                background-color:#000;
            }
            @media (max-width:943px) {
                padding: 8px 10px;
            }
            @media (max-width:543px) {
                font-size: 12px;

            }
        }   
        .add{
        }
        .checkout{
            background-color: transparent;
            color: var(--green);
            font-weight: bold;
            :hover{
                color: var(--black);
                background-color:var(--green);
                border-color: var(--green);
            }
        }

    }
    li{
        cursor: pointer;
        margin:  20px 0;
        display: flex;
        figure{
            margin: 0 20px 0 0;
            img{
                border-radius: 15px;
                width: 120px;
                height: 80px;
                object-fit: cover;
                border: 2px solid var(--green);
            }
        }
        h3{
            font-size: 24px;
            max-width: 190px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            @media (max-width:430px) {
                font-size: 18px;
            }
            @media (max-width: 700px) {
                
            }
        }
        p{
            line-height: 1rem;
            padding:0 ;
            margin: 0;
            font-size: 15px;
            span{
                font-size: 15px;

            }
        }
    }
`