// import { useContext } from "react"
// import {NumberContext} from './context/NumberContextProvider'
import { useDispatch,useSelector } from "react-redux"
import { increment,decrement } from "./redux/counterSlice"

export default function CounterY() {
        // let {x,increment,decrement} = useContext(NumberContext)
    const x = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch()

  return (
    <>
        <h3>countY is {x}</h3>
        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={()=>dispatch(decrement())}>decrement</button>

    </>
  )
}
