import { useContext } from "react"
import {NumberContext} from './context/NumberContextProvider'
import {ProductContext} from './context/ProductContextProvider'

export default function CounterX() {
    let {x,increment,decrement} = useContext(NumberContext)
    let {product} = useContext(ProductContext)
    console.log(product)
  return (
    <>
        <h3>countX is {x}</h3>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>

    </>
  )
}
