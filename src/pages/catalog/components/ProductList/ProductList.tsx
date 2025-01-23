import style from "./ProductList.module.css";

import { ProductData } from "../../../product/ProductData";
import ProductCard from "../ProductCard/ProductCard";
import { toast } from "react-toastify";
import { toggleLiked } from "../../../../features/catalog/catalogSlice";
import {
  addProduct,
  removeOneProduct,
} from "../../../../features/shoppingCart/shoppingCartSlice";
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
          toast("Successfuly added to cart", { type: "success" });

          dispatch(addProduct(product));
        };

        const removeFromCartHandler = () => {
          toast("Successfuly removed from cart", { type: "success" });

          dispatch(removeOneProduct(product));
        };

        return (
          <ProductCard
            key={product.id}
            product={product}
            addToCartHandler={addToCartHandler}
            toggleLikeHandler={toggleLikeHandler}
            removeFromCartHandler={removeFromCartHandler}
          />
        );
      })}
    </div>
  );
};
