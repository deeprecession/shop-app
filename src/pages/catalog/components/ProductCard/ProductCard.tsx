import { Link } from "react-router-dom";
import "./ProductCard.css";

import { ProductData } from "../../../product/ProductData";
import { getPriceString } from "../../../../utils/getPriceString";
import StarSVG from "../../../../components/StarSVG";
import LikeButton from "../../../../components/LikeButton/LikeButton";
import "./ProductCard.css";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { addProduct } from "../../../../features/shoppingCart/shoppingCartSlice";
import {
  isProductLiked,
  toggleLiked,
} from "../../../../features/likedProducts/likedProductsSlice";
import BuyButton from "../../../../components/BuyButton/BuyButton";

interface ProductCardProps {
  product: ProductData;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
}: ProductCardProps) => {
  const isLiked = useAppSelector((state) => isProductLiked(state, product.id));
  const priceStr = getPriceString(product.price);

  const dispatch = useAppDispatch();

  const likeClickHandler = () => {
    dispatch(toggleLiked(product.id));
  };

  const addToChartHandler = () => {
    dispatch(addProduct(product));
  };

  return (
    <Link className="product-link" to={`/products/${product.id.toString()}`}>
      <article className="product-card">
        <div className="product-card__image">
          <img loading="lazy" src={product.images[0]} alt={product.title}></img>
        </div>

        <div className="product-card__price">{priceStr}</div>

        <div className="product-card__title">{product.title}</div>

        <div className="product-card__rating">
          {product.rating.toFixed(1)}
          <StarSVG />
        </div>

        <LikeButton isLiked={isLiked} clickHandler={likeClickHandler} />

        <div className="buy-button-container">
          <BuyButton onClick={addToChartHandler} />
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
