import {createContext,useContext,ReactNode,useState} from 'react'


interface ProviderProps{
    children:ReactNode
}
interface ContextProps{
    lightTheme:boolean,
    changeTheme:()=>void
}

const LightDarkContext = createContext<ContextProps>({} as ContextProps)

export const LightDarkProvider = ({children}:ProviderProps)=>{

    const currentTheme = localStorage.getItem('@CurrentTheme') || ''  
    

    const [lightTheme,setLightTheme] = useState(currentTheme==='true' ? true : false )

    const changeTheme = ()=>{
        setLightTheme(!lightTheme)
        localStorage.setItem('@CurrentTheme',JSON.stringify( !lightTheme ) )
    }

    return(
        <LightDarkContext.Provider value={{lightTheme,changeTheme}}>
            {children}
        </LightDarkContext.Provider>
    )
}

export const useTheme = ()=>useContext(LightDarkContext)