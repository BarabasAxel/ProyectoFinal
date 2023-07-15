import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Swal from "sweetalert2";
import DeleteIcon from "@mui/icons-material/Delete";
import { red } from "@mui/material/colors";
import { Button, Box } from "@mui/material";
import "./Cart.css";

const CartContainer = () => {
  const { cart, limpiarCarrito, eliminarById, getTotalPrecio } =
    useContext(CartContext);
  let totalPrecio = getTotalPrecio();

  const limpiar = ()=>{
    Swal.fire({
      title: 'Seguro quieres limpiar el carrito?',
      text: "No podras revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, limpiar!'
    }).then((result) => {
      if (result.isConfirmed) {
        limpiarCarrito()
        Swal.fire(
          'Eliminado!',
          'Tu carrito esta limpio',
          'success'
        )
      }
    })
  }

  const eliminar = ({ product }) => {
    Swal.fire({
      title: "Esta seguro que quiere eliminar el producto?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Eliminar",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarById(product.id);
        Swal.fire("Se ha eliminado el producto", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Se cancelo", "", "info");
      }
    });
  };

  const navigate = useNavigate();

  const realizarCompra = () => {
    navigate("/checkout");
  };

  return (
    <div>
      {cart.length === 0 ? (
        <div className="container">
          <div className="cart-container" style={{ color: "black", lineHeight: 4, padding: 2 }} >
            <h1>EL CARRITO ESTA VACIO</h1>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="cart-container" style={{ color: "blue", lineHeight: 1, padding: 1 }} >
            <Box sx={{ overflow: "auto" }}>
              <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 1 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>PRODUCTOS </TableCell>
                        <TableCell align="right">PRECIO</TableCell>
                        <TableCell align="right">CANTIDAD</TableCell>
                        <TableCell align="right">SUBTOTAL</TableCell>
                        <TableCell align="right"></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {cart.map((product) => (
                        <TableRow key={product.id} sx={{ "&:last-child td, &:last-child th": { border: 0 }, }}>
                          <TableCell component="th" scope="row">{product.title}</TableCell>
                          <TableCell align="right">{product.price}</TableCell>
                          <TableCell align="right">{product.quantity}</TableCell>
                          <TableCell align="right">{product.price * product.quantity}</TableCell>
                          <TableCell align="right">
                            <button onClick={() => eliminar({ product })}>
                              <DeleteIcon sx={{ color: red[700] }} />
                            </button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Box>
            <div key={1} style={{ color: "blue", lineHeight: 2, padding: 20, marginLeft: "auto", }} >
              <Button style={{ margin: 10 }} variant="contained" onClick={limpiar} >
                VACIAR CARRITO
              </Button>
              <Button style={{}} variant="contained" onClick={realizarCompra}>
                COMPRAR
              </Button>
            </div>
            <h2>Total: {totalPrecio}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
