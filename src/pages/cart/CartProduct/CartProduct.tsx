import { Link } from "react-router-dom";
import "./CartProduct.css";
import { getPriceString } from "../../../utils/getPriceString";
import {
  addProduct,
  CartProduct,
  getProductCount,
  removeProduct,
} from "../../../features/shoppingCart/shoppingCartSlice";
import Counter from "./Counter";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";

interface ProductCardProps {
  cardProduct: CartProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({
  cardProduct,
}: ProductCardProps) => {
  const dispatch = useAppDispatch();

  const priceStr = getPriceString(cardProduct.product.price);

  const product = cardProduct.product;

  const productCount = useAppSelector((state) =>
    getProductCount(state, product.id),
  );

  return (
    <Link
      className="cart-product-link"
      to={`/products/${product.id.toString()}`}
    >
      <article className="cart-product">
        <div className="cart-product__image">
          <img loading="lazy" src={product.images[0]} alt={product.title}></img>
        </div>

        <div className="cart-product__price">{priceStr}</div>

        <div className="cart-product__title">{product.title}</div>

        <div className="cart-product__count">
          <Counter
            incHandler={() => {
              dispatch(addProduct(product));
            }}
            decHandler={() => {
              dispatch(removeProduct(product));
            }}
            defaultValue={productCount}
          />
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
