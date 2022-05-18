import styled from "styled-components";

export const Card = styled.li`
    width: 300px;
    height: 346px;
    border-radius: 5px;
    border: 2px solid var(--grey-100);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    animation: fadeUp 1s;
    :hover{
        border: 2px solid var(--green);
        transform: scale(1.05);
    }
    figure{
        width: 296px;
        height: 150px;
        background-color: var(--grey-0);
        border-radius: 8px 8px 0 0;
        img{
            border-radius: 3px 3px 0 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .content{
        padding: 26px 19px 23px 21px;
        h2,p,span{
            display: block;
            padding: 5px 0;
        }
        h2{
            color: var(--primary-text-color);
            font-weight: 700;
            font-size: 18px;
            line-height: 24px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
        p{
            color: var(--secundary-text-color);
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
        }
        span{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 24px;
            color: var(--green);
        }
        button{
            background-color: var(--green);
            color: var(--green-btn-text-color);
            padding: 11.5px 20px;
            border-radius: 8px;
            font-weight: 600;
            font-size: 14px;
            :hover{
                background-color: var(--green-hover);
            }
        }
        
    }
    @keyframes fadeUp {
        from{
            opacity: 0;
            transform: translateY(40px);
        }
        to{
            opacity: 1;
            transform: translateY(0px);

        }
    }
`