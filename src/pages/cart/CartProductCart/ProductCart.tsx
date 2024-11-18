import { Link } from "react-router-dom";
import "./ProductCart.css";
import { getPriceString } from "../../../utils/getPriceString";
import { CartProduct } from "../../../features/shoppingCart/shoppingCartSlice";

interface ProductCardProps {
  cardProduct: CartProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({
  cardProduct,
}: ProductCardProps) => {
  const priceStr = getPriceString(cardProduct.product.price);

  const product = cardProduct.product;

  return (
    <Link className="product-link" to={`/products/${product.id.toString()}`}>
      <article className="product-card">
        <div className="product-card__image">
          <img loading="lazy" src={product.images[0]} alt={product.title}></img>
        </div>

        <div className="product-card__price">{priceStr}</div>

        <div className="product-card__title">{product.title}</div>

        <div className="product-card__count">Count: {cardProduct.count}</div>
      </article>
    </Link>
  );
};

export default ProductCard;
