import Form from "../components/pages/Form/Form.jsx";
import CartContainer from "../components/pages/cart/CartContainer";
import CheckOutContainer from "../components/pages/checkout/CheckOutContainer";
import ProductDetailContainer from "../components/pages/productDetail/ProductDetailContainer";
import ProductsListContainer from "../components/pages/productList/ProductsListContainer";

export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: ProductsListContainer,
  },
  {
    id: "categories",
    path: "/categoryName/:categoryName",
    Element: ProductsListContainer,
  },
  {
    id: "productDetail",
    path: "/productDetail/:id",
    Element: ProductDetailContainer,
  },
  {
    id: "cart",
    path: "/carrito",
    Element: CartContainer,
  },
  {
    id: "form",
    path: "/form",
    Element: Form,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckOutContainer,
  },
];
