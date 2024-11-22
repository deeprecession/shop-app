import { Link } from "react-router-dom";
import "./CartProduct.css";
import { getPriceString } from "../../../utils/getPriceString";
import {
  addProduct,
  CartProduct,
  getProductCount,
  removeOneProduct,
  removeWholeProduct,
} from "../../../features/shoppingCart/shoppingCartSlice";
import Counter from "./Counter";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import LikeButton from "../../../components/LikeButton/LikeButton";
import {
  isProductLiked,
  toggleLiked,
} from "../../../features/catalog/catalogSlice";
import GarbageSVG from "../../../components/GarbageSVG";

interface ProductCardProps {
  cardProduct: CartProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({
  cardProduct,
}: ProductCardProps) => {
  const dispatch = useAppDispatch();

  const priceStr = getPriceString(cardProduct.product.price);

  const product = cardProduct.product;

  const isLiked = useAppSelector((state) => isProductLiked(state, product.id));

  const likeClickHandler = () => {
    dispatch(toggleLiked(product.id));
  };

  const productCount = useAppSelector((state) =>
    getProductCount(state, product.id),
  );

  return (
    <article className="cart-product">
      <div className="cart-product__image">
        <img loading="lazy" src={product.images[0]} alt={product.title}></img>
      </div>

      <div className="cart-product__price">{priceStr}</div>

      <Link to={`/products/${product.id}`} className="cart-product__title">
        {product.title}
      </Link>

      <div className="cart-product__count">
        <Counter
          incHandler={() => {
            dispatch(addProduct(product));
          }}
          decHandler={() => {
            dispatch(removeOneProduct(product));
          }}
          defaultValue={productCount}
        />
      </div>

      <div
        onClick={() => dispatch(removeWholeProduct(product))}
        className="cart-product__remove-button"
      >
        <GarbageSVG />
      </div>

      <div className="cart-product__like-button">
        <LikeButton isLiked={isLiked} clickHandler={likeClickHandler} />
      </div>
    </article>
  );
};

export default ProductCard;
