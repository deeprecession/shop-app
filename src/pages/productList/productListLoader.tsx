import catchError from "../../utils/catchError";
import { ProductData } from "../product/ProductData";

export type ProductList = {
  products: ProductData[];
};

export const productListLoader = async (): Promise<ProductData[]> => {
  const res = await fetch("https://dummyjson.com/products?limit=10");

  if (!res.ok) {
    throw new Response("Product not found", { status: 404 });
  }

  const [err, products] = await catchError<ProductList>(res.json());
  if (err) {
    console.error(err);
  } else {
    return products.products;
  }

  throw new Response("Product not found", { status: 404 });
};
