import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/HomePage.tsx";
import ProductPage from "./pages/product/ProductPage.tsx";
import { productLoader } from "./pages/product/productLoader.ts";
import CatalogPage from "./pages/catalog/CatalogPage.tsx";
import CartPage from "./pages/cart/CartPage.tsx";
import App from "./App.tsx";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/catalog",
          element: <CatalogPage />,
        },
        {
          path: "/cart",
          element: <CartPage />,
        },
        {
          path: "/products/:productId",
          loader: productLoader,
          element: <ProductPage />,
        },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
);
