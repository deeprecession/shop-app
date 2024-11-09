import App from "./App.tsx";
import { createBrowserRouter, LoaderFunctionArgs } from "react-router-dom";
import { ProductList } from "./ProductList.tsx";
import { Product } from "./Product.tsx";
import { ProductData } from "./ProductData.ts";

export const productListLoader = async (): Promise<ProductData[]> => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return products;
};

export const productLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<ProductData> => {
  const { productId } = params;

  if (!productId) {
    throw new Error("Product ID is required");
  }

  const response = await fetch(
    `https://fakestoreapi.com/products/${productId}`,
  );

  if (!response.ok) {
    throw new Response("Product not found", { status: 404 });
  }

  const productData = await response.json();

  return productData;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/products",
    loader: productListLoader,
    element: <ProductList />,
  },
  {
    path: "/products/:productId",
    loader: productLoader,
    element: <Product />,
  },
]);
