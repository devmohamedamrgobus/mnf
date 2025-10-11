import axios from "axios"
import { useState } from "react"

const Data = ()=>{
    let [users,setUsers] = useState([])
    function getData() {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=> setUsers(res.data))
    }

    return (<>
        <button onClick={()=>getData()}>click here</button>

        <ul>
            { users.map((user)=> <li>{user.name}</li> ) }
        </ul>
        
    </>)
}

export default Data