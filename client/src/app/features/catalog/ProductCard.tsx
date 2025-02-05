import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Product } from "../../models/product";

type Props={
    products:Product;
}

export default function ProductCard({products}:Props) {
  return (
    <Card elevation={3} sx={{width:280,borderRadius:4,display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
        <CardMedia
        sx={{height:240,backgroundSize:"cover"}}
            image={products.pictureUrl}
            title={products.name}
        />
        <CardContent>
            <Typography
                gutterBottom
                sx={{textTransform:'uppercase'}}
                variant="subtitle2"
            >{products.name}
            </Typography>
            <Typography

                sx={{color:'secondary.main'}}
                variant="h6"
            >${(products.price/100).toFixed(2)}
            </Typography>
            <CardActions
                sx={{justifyContent:'space-between'}}
            >
                <Button>Add to Cart</Button>
                <Button>View</Button>
            </CardActions>
            
        </CardContent>


    </Card>
  )
}