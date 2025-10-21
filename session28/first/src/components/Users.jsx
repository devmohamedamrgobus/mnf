import axios from "axios";
import { useEffect, useState } from "react";
const Users = ()=>{
    useEffect(()=>{
        getUsersData()
        console.log("useEffect")
    },[])
    let [usersData,setUsersData] = useState([])

    function getUsersData(){
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=> setUsersData(res.data) )
    }

    return (<>
        <h1>user component</h1>
        <ul>
            {usersData.map((user)=> <li>{user.name}</li>)}
        </ul>
    </>)
}

export default Users;