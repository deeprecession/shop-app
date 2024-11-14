import catchError from "../../utils/catchError";
import LikedProductStorage from "../../utils/likedProductStorage";
import { ProductData } from "../product/ProductData";

type FakeJsonResponse = {
  products: ProductData[];
};

type ProductListLoaderData = {
  products: ProductData[];
};

export const productListLoader = async (): Promise<ProductListLoaderData> => {
  const res = await fetch(`https://dummyjson.com/products?limit=0`);

  if (!res.ok) {
    throw new Response("Product not found", { status: 404 });
  }

  const [err, jsonResopnse] = await catchError<FakeJsonResponse>(res.json());
  if (err) {
    console.error(err);
    throw new Response("Product not found", { status: 404 });
  }

  return {
    products: jsonResopnse.products,
  };
};
