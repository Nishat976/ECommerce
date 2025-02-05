import { Product } from "../../models/product";
import ProductList from "./ProductList";

type Props ={
  products : Product[];
}

export default function Catalog({products}:Props) {

  return (
    <div>
      <ProductList products={products}/>
    </div>
  )
}
