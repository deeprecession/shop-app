import { useLoaderData } from "react-router-dom";
import { productLoader } from "./productLoader";
import { LoaderData } from "../../utils/LoaderData";
import "./Product.css";
import StarSVG from "../../components/StarSVG";
import { getPriceString } from "../../utils/getPriceString";
import LikeButton from "../../components/LikeButton/LikeButton";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import {
  isProductLiked,
  toggleLiked,
} from "../../features/catalog/catalogSlice";
import Button from "../../components/BuyButton/Button";
import { addProduct } from "../../features/shoppingCart/shoppingCartSlice";

export const Product = () => {
  const product = useLoaderData() as LoaderData<typeof productLoader>;

  const isLiked = useAppSelector((state) => isProductLiked(state, product.id));

  const onLikeClick = () => {
    dispatch(toggleLiked(product.id));
  };

  const onBuyClick = () => {
    dispatch(addProduct(product));
  };

  const dispatch = useAppDispatch();

  const priceStr = getPriceString(product.price);

  return (
    <article className="product">
      <div className="product-like-button">
        <LikeButton clickHandler={onLikeClick} isLiked={isLiked} />
      </div>

      <div className="product-buy-button">
        <Button onClick={onBuyClick} content="Add to chart" />
      </div>

      <div className="product-image">
        <img src={product.images[0]} />
      </div>

      <div className="product-title">{product.title}</div>

      <div className="product-category">({product.category})</div>

      <div className="product-price">{priceStr}</div>

      <div className="product-rating">
        {product.rating.toFixed(1)}
        <StarSVG />
      </div>

      <div className="product-description">{product.description}</div>
    </article>
  );
};
