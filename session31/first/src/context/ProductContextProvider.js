import axios from "axios"
import { createContext, useEffect, useState } from "react"

export let ProductContext = createContext()


function ProductContextProvider({children}){
    let [product,setProduct] = useState([])

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((res)=> setProduct(res.data))
    },[])

    return <ProductContext.Provider value={{product}}>
        {children}
    </ProductContext.Provider>
}

export default ProductContextProvider