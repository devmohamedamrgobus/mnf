import { useState } from "react"

function Home(){
    let [data,setData] = useState(["red","green","blue"])
    return (<>

        
        <h1>Home component</h1>
        <br />

        { data.map((value)=> <li>{value}</li> ) }

    </>)
}


export default Home