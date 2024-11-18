import "./ProductList.css";

import { ProductData } from "../../../product/ProductData";
import ProductCard from "../ProductCard/ProductCard";

type ProductListProps = {
  products: ProductData[];
};

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="product-list">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};
