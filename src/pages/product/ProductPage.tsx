import { useNavigate } from "react-router-dom";
import Button from "../../components/BuyButton/Button";
import { Product } from "./Product";

const ProductPage = () => {
  const navigate = useNavigate();

  return (
    <div className="product-page">
      <Button onClick={() => navigate(-1)} content="Back" />
      <Product />
    </div>
  );
};

export default ProductPage;
