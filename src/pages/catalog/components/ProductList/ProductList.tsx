import style from "./ProductList.module.css";

import { ProductData } from "../../../product/ProductData";
import ProductCard from "../ProductCard/ProductCard";
import { toast } from "react-toastify";
import { toggleLiked } from "../../../../features/catalog/catalogSlice";
import { addProduct } from "../../../../features/shoppingCart/shoppingCartSlice";
import { useAppDispatch } from "../../../../hooks/reduxHooks";

type ProductListProps = {
  products: ProductData[];
};

export const ProductList = ({ products }: ProductListProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className={style.productList}>
      {products.map((product) => {
        const toggleLikeHandler = () => {
          dispatch(toggleLiked(product.id));
        };

        const addToCartHandler = () => {
          toast("Successful added to cart", { type: "success" });

          dispatch(addProduct(product));
        };

        return (
          <ProductCard
            key={product.id}
            product={product}
            addToCartHandler={addToCartHandler}
            toggleLikeHandler={toggleLikeHandler}
          />
        );
      })}
    </div>
  );
};
