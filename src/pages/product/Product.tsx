import { useLoaderData } from "react-router-dom";
import { productLoader } from "./productLoader";
import { LoaderData } from "../../utils/LoaderData";
import "./Product.css";
import StarSVG from "../../components/StarSVG";
import { getPriceString } from "../../utils/getPriceString";
import { useNavigate } from "react-router-dom";

export const Product = () => {
  const product = useLoaderData() as LoaderData<typeof productLoader>;

  const priceStr = getPriceString(product.price);

  return (
    <div className="">
      <BackBtn />
      <article className="product">
        <div className="product-image">
          <img src={product.image} />
        </div>
        <div className="product-title">{product.title}</div>
        <div className="product-price">{priceStr}</div>
        <div className="product-rating">
          {product.rating.rate.toFixed(1)}
          <StarSVG />
        </div>
        <div className="product-description">{product.description}</div>
      </article>
    </div>
  );
};

const BackBtn = () => {
  const navigate = useNavigate();

  return (
    <button className="back-btn" onClick={() => navigate(-1)}>
      Back
    </button>
  );
};
