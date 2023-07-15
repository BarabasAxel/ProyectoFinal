import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ItemCount from "../../common/ItemCount/ItemCount";
import "./ProductDetail.css";
import { Grid } from "@mui/material";
const ProductDetail = ({ quantity, productSelected, onAdd }) => {
  
  return (
    <div className="container">
      <div className="productdetails-container">
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Card sx={{ display: "flex"}}>
              <CardMedia component="img" sx={{}} image={productSelected.img} alt={productSelected.title}/>
            </Card>
          </Grid>
          <Grid item xs={12} md={9}>
            <Card sx={{ display: "flex" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">{productSelected.title}</Typography>
                  <Typography variant="subtitle1" color="text.primary" component="div"> $ {productSelected.price}</Typography>
                  <Typography variant="subtitle2" color="text.secondary" component="div">
                    <p>{productSelected.description}</p>
                  </Typography>
                  <Typography variant="subtitle1" color="text.primary" component="div">
                    <ItemCount stock={productSelected.stock} initial={quantity} onAdd={onAdd}/>
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ProductDetail;
