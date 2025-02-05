import { Box } from "@mui/material";
import { Product } from "../../models/product"
import ProductCard from "./ProductCard";

type Props={
    products: Product[];
}


export default function ProductList({products}:Props) {

    return (
      <Box sx={{display:'flex',flexWrap:'wrap',gap:3,justifyContent:'space-between'}}>
          {products.map((products) => (
            <ProductCard key={products.id} products={products}></ProductCard>
           
          ))}
       </Box>
    )
  }