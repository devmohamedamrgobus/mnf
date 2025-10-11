import axios from "axios"
import { useState } from "react"
const Products = ()=>{
    let [productsData,setProductsData] = useState([])


    function getproducts(){
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>setProductsData(res.data))
    }

    return (<>
     <button onClick={getproducts}>get products</button>
    <section className="container">
        <div className="row">
            {productsData.map((p)=> <div className="card col-md-3">
            <img src={p.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{p.title}</h5>
                <a href="#" className="btn btn-primary">{p.price}</a>
            </div>
            </div> )}
        </div>
    </section>
    </>)
}

export default Products