import { Link } from "react-router-dom";
import "./ProductList.css";

import { useState } from "react";
import { getPriceString } from "../../utils/getPriceString";
import StarSVG from "../../components/StarSVG";
import LikeButton from "../../components/LikeButton/LikeButton";
import { ProductData } from "../product/ProductData";
import ProductLikeStorage from "../../utils/likedProductStorage";

type ProductListProps = {
  products: ProductData[];
};

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="product-list">
      {products.map((product) => {
        return <ProductListElement key={product.id} product={product} />;
      })}
    </div>
  );
};

interface ProductListElementProps {
  product: ProductData;
}

const ProductListElement: React.FC<ProductListElementProps> = ({
  product,
}: ProductListElementProps) => {
  const [isLiked, setLiked] = useState(ProductLikeStorage.isLiked(product.id));
  const priceStr = getPriceString(product.price);

  const likeClickHandler = (isLiked: boolean) => {
    setLiked(isLiked);

    if (isLiked) {
      ProductLikeStorage.add(product.id);
    } else {
      ProductLikeStorage.remove(product.id);
    }
  };

  return (
    <Link className="product-link" to={`${product.id.toString()}`}>
      <article className="product-list-element">
        <div className="product-list-element__image">
          <img loading="lazy" src={product.images[0]} alt={product.title}></img>
        </div>
        <div className="product-list-element__price">{priceStr}</div>
        <div className="product-list-element__title">{product.title}</div>
        <div className="product-list-element__rating">
          {product.rating.toFixed(1)}
          <StarSVG />
        </div>
        <LikeButton isLiked={isLiked} clickHandler={likeClickHandler} />
      </article>
    </Link>
  );
};
