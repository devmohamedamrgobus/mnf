import axios from "axios"
import { useEffect, useState } from "react"
import Card from "./Card"
const Products = ()=>{
    let [data,setData]=useState([])
    useEffect(()=>{
        getProducts()
    },[])
    function getProducts(){
        axios.get("https://fakestoreapi.com/products").then((res)=>{setData(res.data)})
    }
    return (<>
        <section className="container">
            <div className="row">
                {data.map((p)=> <Card title={p.title} price={p.price} image={p.image} id={p.id} /> )}
            </div>
        </section>
    </>)
}
export default Products