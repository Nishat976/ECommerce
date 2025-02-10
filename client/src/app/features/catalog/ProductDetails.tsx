import { useParams } from "react-router-dom";
import { Button, Divider, Grid2, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@mui/material";
import { useFetchProductDetailsQuery } from "./catalogAPI";



export default function ProductDetails() {

  // const [product,setProduct] = useState<Product | null>(null);
const {id} = useParams();

// useEffect( () =>{
//   fetch(`https://localhost:7106/api/products/${id}`)
//   .then(response => response.json())
//   .then(data => setProduct(data))
//   .catch(error => console.error(error));
// }, [id])

const {data:product ,isLoading} = useFetchProductDetailsQuery(id ? +id: 0);

if(!product || isLoading) return <div>Loading...</div>

const productDetails = [
  {lable:'Name',value:product.name},
  {lable:'Description',value:product.description},
  {lable:'Brand',value:product.brand},
  {lable:'Quantity',value:product.quantityInStock},
  {lable:'Type',value:product.type},
 
]

  return (
    

    <Grid2 container spacing={6} maxWidth='lg' sx={{mx:'auto'}}>
      <Grid2 size={6}>
        <img src={product?.pictureUrl} alt={product.name} style={{width:'100%'}}></img>
      </Grid2>
      <Grid2 size={6}>
        <Typography>{product.name}</Typography>
        <Divider sx={{mb:2}}></Divider>
        <Typography

                sx={{color:'secondary.main'}}
                variant="h4"
            >${(product.price/100).toFixed(2)}
            </Typography>
            <TableContainer sx={{ '& td':{fontSize:'1rem'}}}>
              <Table>
                <TableBody>
                  {productDetails.map((detail,index) =>
                      <TableRow key={index}>
                          <TableCell sx={{fontWeight:'bold'}}>{detail.lable}</TableCell>
                          <TableCell>{detail.value}</TableCell>
                      </TableRow>
                )}
                  
                </TableBody>
              </Table>
            </TableContainer>
            <Grid2 container spacing={2} marginTop={3}>
              <Grid2 size={6}>
              <TextField
              variant="outlined"
              type="number"
              label="Quantity in Basket"
              fullWidth
              defaultValue={1}
              >
              </TextField>
              </Grid2>
              <Grid2 size={6}>
              <Button
              sx={{height:"55px"}}
              variant="contained"
              fullWidth
              defaultValue={1}
              color="primary"
              size="large"
              >Add to Basket</Button>
             </Grid2>
            </Grid2>
      </Grid2>
    </Grid2>
    
  )
}