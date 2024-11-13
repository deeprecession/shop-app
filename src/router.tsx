import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/HomePage.tsx";
import { productListLoader } from "./pages/productList/productListLoader.tsx";
import ProductPage from "./pages/product/ProductPage.tsx";
import ProductListPage from "./pages/productList/ProductListPage.tsx";
import { productLoader } from "./pages/product/productLoader.ts";

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
