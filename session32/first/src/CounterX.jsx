// import { useContext } from "react"
// import {NumberContext} from './context/NumberContextProvider'
// import {ProductContext} from './context/ProductContextProvider'
import { useDispatch,useSelector } from "react-redux"
import { increment,decrement } from "./redux/counterSlice"
export default function CounterX() {
    // let {x,increment,decrement} = useContext(NumberContext)
    // let {product} = useContext(ProductContext)
    // console.log(product)
    const x = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch()
  return (
    <>
        <h3>countX is {x}</h3>
        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={()=>dispatch(decrement())}>decrement</button>

    </>
  )
}
