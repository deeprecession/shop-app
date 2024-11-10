import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/HomePage.tsx";
import ProductListPage, {
  productListLoader,
} from "./pages/productList/ProductListPage.tsx";
import ProductPage, { productLoader } from "./pages/product/ProductPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    loader: productListLoader,
    element: <ProductListPage />,
  },
  {
    path: "/products/:productId",
    loader: productLoader,
    element: <ProductPage />,
  },
]);
