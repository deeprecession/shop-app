import { useNavigate } from "react-router-dom";
import Button from "../../components/BuyButton/Button";
import { Product } from "./Product";
import "./ProductPage.css";

const ProductPage = () => {
  const navigate = useNavigate();

  return (
    <div className="product-page">
      <div className="back-button">
        <Button onClick={() => navigate(-1)} content="Back" />
      </div>
      <Product />
    </div>
  );
};

export default ProductPage;