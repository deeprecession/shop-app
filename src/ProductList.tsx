import { Link, useLoaderData } from "react-router-dom";
import { LoaderData } from "./LoaderData";
import { productListLoader } from "./router";
import { ProductData } from "./ProductData";
import { getPriceString } from "./getPriceString";
import "./ProductList.css";
import { FunctionComponent, ReactSVGElement, SVGProps, useState } from "react";

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
          {product.rating.rate}
          <StarSVG />
        </div>
        <LikeButton isLiked={isLiked} clickHandler={likeClickHandler} />
      </article>
    </Link>
  );
};

type LikeButtonProps = {
  clickHandler: (isLiked: boolean) => void;
  isLiked: boolean;
};

const LikeButton = ({ clickHandler, isLiked }: LikeButtonProps) => {
  return (
    <div
      className="like-button"
      onClick={() => {
        clickHandler(!isLiked);
      }}
    >
      <LikeSvg isLiked={isLiked} />
    </div>
  );
};

type LikeSvgProps = {
  isLiked: boolean;
};

const LikeSvg = ({ isLiked = false }: LikeSvgProps) => {
  return (
    <svg viewBox="-25 -25 510 500" xmlSpace="preserve">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M237.376,436.245l0.774,0.976c210.94-85.154,292.221-282.553,199.331-367.706 c-92.899-85.154-199.331,30.953-199.331,30.953h-0.774c0,0-106.44-116.107-199.331-30.953 C-54.844,154.658,26.437,351.092,237.376,436.245z"
          fill={isLiked ? "red" : "white"}
          stroke="black"
          strokeWidth="20"
        />
      </g>
    </svg>
  );
};

const StarSVG: FunctionComponent<SVGProps<ReactSVGElement>> = () => (
  <svg
    viewBox="0 0 47.94 47.94"
    xmlSpace="preserve"
    fill="#000000"
    className="star-svg"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        style={{ fill: "#ED8A19" }}
        d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"
      ></path>{" "}
    </g>
  </svg>
);
