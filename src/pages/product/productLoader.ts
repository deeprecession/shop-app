import { LoaderFunctionArgs } from "react-router-dom";
import { ProductData } from "./ProductData";

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
