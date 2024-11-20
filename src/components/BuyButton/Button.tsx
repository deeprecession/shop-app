import "./Button.css";

type ButtonProps = {
  onClick: () => void;
  content: string;
};

const Button = ({ onClick, content }: ButtonProps) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();

        onClick();

        e.preventDefault();
      }}
      className="buy-button"
    >
      {content}
    </button>
  );
};

export default Button;
