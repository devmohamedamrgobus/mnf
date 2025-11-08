import { createContext, useState } from "react";


export const NumberContext = createContext() 

function NumberContextProvider({children}){
    let [x,setX] = useState(0)

    function increment(){
        setX(++x)
    }

    function decrement(){
        setX(--x)
    }

    return <NumberContext.Provider value={{x,increment,decrement}}>
        {children}
    </NumberContext.Provider>
}

export default NumberContextProvider