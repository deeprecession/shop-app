import { Link } from "react-router-dom";
import style from "./ProductCard.module.css";

import { ProductData } from "../../../product/ProductData";
import { getPriceString } from "../../../../utils/getPriceString";
import StarSVG from "../../../../components/StarSVG";
import LikeButton from "../../../../components/LikeButton/LikeButton";
import { useAppSelector } from "../../../../hooks/reduxHooks";
import { getProductCount } from "../../../../features/shoppingCart/shoppingCartSlice";
import Button from "../../../../components/BuyButton/Button";
import { isProductLiked } from "../../../../features/catalog/catalogSlice";
import Counter from "../../../../components/Counter/Counter";

interface ProductCardProps {
  product: ProductData;
  toggleLikeHandler: () => void;
  addToCartHandler: () => void;
  removeFromCartHandler: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  toggleLikeHandler,
  addToCartHandler,
  removeFromCartHandler,
}: ProductCardProps) => {
  const isLiked = useAppSelector((state) => isProductLiked(state, product.id));
  const priceStr = getPriceString(product.price);
  const productCount = useAppSelector((state) =>
    getProductCount(state, product.id),
  );

  return (
    <Link className={style.link} to={`/products/${product.id.toString()}`}>
      <article className={style.product}>
        <div className={style.image}>
          <img loading="lazy" src={product.thumbnail} alt={product.title}></img>
        </div>

        <div className={style.price}>{priceStr}</div>

        <div className={style.title}>{product.title}</div>

        <div className={style.rating}>
          {product.rating.toFixed(1)}

          <div className={style.star}>
            <StarSVG />
          </div>
        </div>

        <LikeButton isLiked={isLiked} clickHandler={toggleLikeHandler} />

        <div className={style.buyBtn}>
          {productCount > 0 ? (
            <Counter
              incHandler={() => {
                addToCartHandler();
              }}
              decHandler={() => {
                removeFromCartHandler();
              }}
              defaultValue={productCount}
            />
          ) : (
            <Button onClick={addToCartHandler} content="Add to chart" />
          )}
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
