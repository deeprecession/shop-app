import "./BuyButton.css";

type BuyButtonProps = {
  onClick: () => void;
};

const BuyButton = ({ onClick: addProductHandler }: BuyButtonProps) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();

        addProductHandler();

        e.preventDefault();
      }}
      className="buy-button"
    >
      Add to Cart
    </button>
  );
};

export default BuyButton;
