import { Component, useEffect, useState } from "react";
import "./product.css";
import { getList } from "../services/api_service";

export default function productList(){
    useEffect(()=>{
        fetchList();

    }

    ,[]);

type product={
    id:number;
    name:string;
    price:string;
}
const [products,setProducts]=useState<product[]>([]);

 const fetchList=async ()=> {
    try{
    const res=await getList();
   
    if(!res.error){
        setProducts(res);
        console.log("List :",res);
    }
     }catch(Error){
        console.error("List Error");
    };
}
    return(
    <div className="product-page">
    <h2>Product List</h2>
     <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            {/* <img src={product.image} alt={product.name} /> */}
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
      </div>
    );
    
}

