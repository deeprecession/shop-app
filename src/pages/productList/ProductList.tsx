import { Link, useLoaderData } from "react-router-dom";
import "./ProductList.css";

import { useState } from "react";
import { LoaderData } from "../../utils/LoaderData";
import { productListLoader } from "./productListLoader";
import { getPriceString } from "../../utils/getPriceString";
import StarSVG from "../../components/StarSVG";
import LikeButton from "../../components/LikeButton/LikeButton";
import { ProductData } from "../product/ProductData";

export const ProductList = () => {
  const products = useLoaderData() as LoaderData<typeof productListLoader>;

  return (
    <div className="product-list-page">
      <div className="product-list">
        {products.map((product) => {
          return (
            <div key={product.id}>
              <ProductListElement product={product} />
            </div>
          );
        })}
      </div>

      <PaginationControls />
    </div>
  );
};

const PaginationControls = () => {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="product-list-pagination-links">
      {pages.map((pageNum) => (
        <Link key={pageNum} to={`/products?page=${pageNum}`}>
          {pageNum}
        </Link>
      ))}
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
    <Link className="product-link" to={`products/${product.id.toString()}`}>
      <article className="product-list-element">
        <div className="product-list-element__image">
          <img src={product.images[0]} alt={product.title}></img>
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
