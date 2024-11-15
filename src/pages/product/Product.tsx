import { useLoaderData } from "react-router-dom";
import { productLoader } from "./productLoader";
import { LoaderData } from "../../utils/LoaderData";
import "./Product.css";
import StarSVG from "../../components/StarSVG";
import { getPriceString } from "../../utils/getPriceString";

export const Product = () => {
  const product = useLoaderData() as LoaderData<typeof productLoader>;

  const priceStr = getPriceString(product.price);

  return (
    <article className="product">
      <div className="product-image">
        <img src={product.images[0]} />
      </div>
      <div className="product-title">{product.title}</div>
      <div className="product-price">{priceStr}</div>
      <div className="product-rating">
        {product.rating.toFixed(1)}
        <StarSVG />
      </div>
      <div className="product-description">{product.description}</div>
    </article>
  );
};
