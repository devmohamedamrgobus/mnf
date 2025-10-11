import { useState } from "react"

const Counter = ()=>{

    let [x,setX] = useState(0)
    return (<>
        <h3>count is : {x} </h3>
        <button  onClick={()=>setX(++x)} >increment</button>
    </>)
}

export default Counter