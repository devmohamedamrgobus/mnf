import { useContext } from "react"
import {NumberContext} from './context/NumberContextProvider'

export default function CounterY() {
        let {x,increment,decrement} = useContext(NumberContext)

  return (
    <>
        <h3>countY is {x}</h3>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>

    </>
  )
}
