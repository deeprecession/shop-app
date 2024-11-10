import { ProductData } from "./ProductData";

export const productListLoader = async (): Promise<ProductData[]> => {
  const res = await fetch("https://fakestoreapi.com/products?limit=40");
  const products = await res.json();

  return products;
};
