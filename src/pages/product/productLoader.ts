import { LoaderFunctionArgs } from "react-router-dom";
import { ProductData } from "./ProductData";
import catchError from "../../utils/catchError";

export const productLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<ProductData> => {
  const { productId } = params;

  if (!productId) {
    throw new Error("Product ID is required");
  }

  const response = await fetch(`https://dummyjson.com/products/${productId}`);

  if (!response.ok) {
    throw new Response("Product not found", { status: 404 });
  }

  const [err, productData] = await catchError<ProductData>(response.json());
  if (err) {
    console.log(err);
  } else {
    return productData;
  }

  throw new Response("Product not found", { status: 404 });
};
