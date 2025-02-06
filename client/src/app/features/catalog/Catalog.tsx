import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { Product } from "../../models/product";



export default function Catalog() {
  
const [products, setProducts] = useState<Product[]>([]);


  useEffect (() =>{
  fetch('https://localhost:7106/api/products')
  .then(response => 
    
    {
    if (!response.ok) {
      console.log(response.json())
      throw new Error(`An error occurred: ${response.status}`);
    }
   
    return response.json();
  }
  )
  .then(data => setProducts(data))
  
}, [])


  return (
    <div>
      <ProductList products={products}/>
    </div>
  )
}
