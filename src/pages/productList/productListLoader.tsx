import { LoaderFunctionArgs } from "react-router-dom";
import catchError from "../../utils/catchError";
import { ProductData } from "../product/ProductData";

export type ProductList = {
  products: ProductData[];
};

export const productListLoader = async ({
  request,
}: LoaderFunctionArgs): Promise<ProductData[]> => {
  const url = new URL(request.url);
  const pageParameter = url.searchParams.get("page");

  const page = pageParameter ? parseInt(pageParameter) : 1;

  const limit = 30;
  const offset = (page - 1) * limit;

  const res = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${offset}`,
  );

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
