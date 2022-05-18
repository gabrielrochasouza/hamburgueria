import {createGlobalStyle} from 'styled-components'

interface ThemeProps{
    grey0:string,
    grey4:string,
    grey100:string,
    black:string,
    green:string,
    greenHover:string,
    white:string,
    primaryTextColor:string,
    secundaryTextColor:string,
    greenBtnTextColor:string,
    btnTextGrey:string,
    backgroundTransparent:string,
}

interface Props{
    theme:ThemeProps
}



export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
        transition: all 0.5s  ;
    }
    html,#root,body{
        min-height: 100%;
    }
    figcaption{
        display: none;
    }
    button,img,input[type=submit]{
        cursor: pointer;
        border: 0;
    }
    input{
        border: 0;
        outline: 0;
    }
    ul,li{
        list-style: none;
    }
    body{
        color: var(--black);
        font-family: 'Inter', sans-serif;

        background-color: var(--white);
    }

    :root{
        --grey-0: ${(props:Props)=>props.theme.grey0};
        --grey-4: ${(props:Props)=>props.theme.grey4};
        --grey-100: ${(props:Props)=>props.theme.grey100};
        --black: ${(props:Props)=>props.theme.black};
        --green: ${(props:Props)=>props.theme.green};
        --green-hover: ${(props:Props)=>props.theme.greenHover};
        --white: ${(props:Props)=>props.theme.white};
        --primary-text-color: ${(props:Props)=>props.theme.primaryTextColor};
        --secundary-text-color: ${(props:Props)=>props.theme.secundaryTextColor};
        --green-btn-text-color: ${(props:Props)=>props.theme.greenBtnTextColor};
        --btn-text-grey: ${(props:Props)=>props.theme.btnTextGrey};
        --background-transparent: ${(props:Props)=>props.theme.backgroundTransparent}
    }  


    @keyframes fadeIn {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }

    @keyframes fadeInRight {
        from{
            opacity: 0;
            transform: translateX(80px);

        }
        to{
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes fadeInLeft {
        from{
            opacity: 0;
            transform: translateX(-80px);

        }
        to{
            transform: translateX(0);
            opacity: 1;
        }
    }

` 





/*Normal
--grey-0:#f5f5f5;
--grey-4:#BDBDBD;
--grey-100:#E0E0E0;
--black:#222;
--green:#27AE60;
--green-hover:#93D7AF;
--white:#fff;
--primary-text-color:#333;
--secundary-text-color:#828282;
--green-btn-text-color:#fff;
--btn-text-grey:#999 
*/


/* Reverse
--grey-0: #0c0c0c;
--grey-4: #BDBDBD;
--grey-100: #383838;
--black: #ececec;
--green: #27AE60;
--green-hover: #93D7AF;
--white: #000000;
--primary-text-color: #e8e8e8;
--secundary-text-color: #aeaeae;
--green-btn-text-color: #fff;
--btn-text-grey: #999;
*/