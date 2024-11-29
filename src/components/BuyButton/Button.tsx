import styles from "./Button.module.css";

type ButtonProps = {
  onClick: () => void;
  content: string;
  isDisabled?: boolean;
};

const Button = ({ onClick, content, isDisabled = false }: ButtonProps) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();

        onClick();

        e.preventDefault();
      }}
      className={styles.button}
      disabled={isDisabled}
    >
      {content}
    </button>
  );
};

export default Button;
