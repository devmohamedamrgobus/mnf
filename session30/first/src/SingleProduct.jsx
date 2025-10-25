import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const SingleProduct = ()=>{
    let [data,setData]=useState([])
    let {id} = useParams()

    useEffect(()=>{
        getProduct()
    },[])

    function getProduct(){
        axios.get("https://fakestoreapi.com/products/"+id).then((res)=> setData(res.data) )
    }
    return (<>
        <h1> {data.title}</h1>
        <img src={data.image} />
        <p>{data.description}</p>
        <h3>{data.price}</h3>
    </>)
}

export default SingleProduct