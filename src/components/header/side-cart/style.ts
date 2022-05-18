import styled from "styled-components";

export const ContainerCart = styled.div`
  background-color: rgba(0,0,0,0.35);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  //animation: 1500ms fadeIn;

  .side-cart {
    width: 100%;
    z-index: 10;
    max-width: 295px;
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    background-color: var(--grey-0);
    //transition: 1s all;
    animation: 1s slideright;
    color:var(--black);


    .products{
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 90%;
      ul{
        flex-basis: 90%;
        overflow-y: auto;
      }
      li{
        margin: 10px 0;
        display: flex;
        cursor: pointer;
        figure{
          flex-basis: 20%;
          img{
            width: 50px;
            height: 40px;
            object-fit: cover;
            border-radius: 8px;
          }
        }
        >button{
          flex-basis: 12%;
          background-color: var(--white);
          border-radius: 50%;
          cursor: pointer;
          height: 27px;
          padding: 4px;
    
          svg{
            width: 12px;
            height:12px;
            color: var(--grey-4);
          }
        }
        >div{
          flex-basis: 70%;
          max-width: 180px;
          p{
            font-size: 13px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
          span{
            font-size: 11px;
            color: var(--green);
            font-weight: bold;
          }
        }
      }
      .total{
        flex-basis: 10%;
        .total-price{
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 11px;
          margin: 10px 0;
          span{
            :nth-child(2){
              font-weight: bold;
            }

          }
          
        }
      }
    }


    .qtd-controller{
      display: inline-block;
      margin: 0 6px 0 0;
      .btn{
        background-color: var(--grey-0);
        font-size: 12px;
        width: 13px;
        height: 13px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--grey-4);
        padding: 1px;
        border-radius:50% ;
        background-color: var(--white);
        cursor: pointer;
        :hover{
          background-color: var(--grey-100);

        }
      }
      .reader{
        font-size: 11px;
        padding: 2px 5px;
      }
      .minus{
        color: blue;
      }
      .plus{
        color: red;
      }
    }


    h2 {
      font-weight: 400;
      padding: 0px 19px;
      font-size: 13px;
      color: var(--black);
      background-color: var(--white);
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        display: inline-block;
        padding: 22px 0;
        border-bottom: 1px solid var(--black);
      }
      svg{
          font-size: 13px;
          cursor: pointer;
          color:var(--black);
      }
      button{
          background-color: transparent;
      }
    }

    .empty-cart{
        text-align: center;
        margin: 70px 0 0;
        svg{
            font-size: 50px;
            font-weight: 300;
        }
        p{
            margin: 15px 0 0;
            font-size: 11px;
            font-weight: 700;
        }
        span{
            font-size: 10px;
        }
    }
  }
  @keyframes slideright {
      from{
        //opacity: 0;
        right: -100%;
      }
      to{
        //opacity: 1;
        right: 0;
      }
  }
  @keyframes hide {
      from{
        opacity: 0;
      }
      to{
        opacity: 0;
      }
  }
`;
