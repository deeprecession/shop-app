import { ProductData } from "./ProductData";
import { ProductList } from "./ProductList";

const ProductListPage = () => {
  return <ProductList />;
};

export const productListLoader = async (): Promise<ProductData[]> => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return products;
};

export default ProductListPage;
