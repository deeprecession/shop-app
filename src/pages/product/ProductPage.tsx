import { useNavigate } from "react-router-dom";
import Button from "../../components/BuyButton/Button";
import { Product } from "./Product";
import style from "./ProductPage.module.css";

const ProductPage = () => {
  const navigate = useNavigate();

  return (
    <div className={style.page}>
      <div className={style.kackBtn}>
        <Button onClick={() => navigate(-1)} content="Back" />
      </div>
      <Product />
    </div>
  );
};

export default ProductPage;
