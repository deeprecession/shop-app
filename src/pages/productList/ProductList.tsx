import { Link, useLoaderData } from "react-router-dom";
import { ProductData } from "./ProductData";
import "./ProductList.css";
import { useState } from "react";
import { LoaderData } from "../../utils/LoaderData";
import { productListLoader } from "./ProductListPage";
import { getPriceString } from "../../utils/getPriceString";
import StarSVG from "../../components/StarSVG";
import LikeButton from "../../components/LikeButton/LikeButton";

export const ProductList = () => {
  const products = useLoaderData() as LoaderData<typeof productListLoader>;

  return (
    <div className="product-list">
      {products.map((product) => {
        return <ProductListElement product={product} />;
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
  const [isLiked, setLiked] = useState(false);
  const priceStr = getPriceString(product.price);

  const likeClickHandler = (isLiked: boolean) => {
    setLiked(isLiked);
  };

  return (
    <Link className="product-link" to={product.id.toString()}>
      <article className="product-list-element">
        <div className="product-list-element__image">
          <img src={product.image} alt={product.title}></img>
        </div>
        <div className="product-list-element__price">{priceStr}</div>
        <div className="product-list-element__title">{product.title}</div>
        <div className="product-list-element__rating">
          {product.rating.rate.toFixed(1)}
          <StarSVG />
        </div>
        <LikeButton isLiked={isLiked} clickHandler={likeClickHandler} />
      </article>
    </Link>
  );
};
