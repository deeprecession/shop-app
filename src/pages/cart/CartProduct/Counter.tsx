import "./Counter.css";

type CounterProps = {
  defaultValue: number;
  incHandler: () => void;
  decHandler: () => void;
};

const Counter = ({
  defaultValue,
  incHandler: incHanlder,
  decHandler: decHanlder,
}: CounterProps) => {
  return (
    <div className="counter-container">
      <button
        className="counter-button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();

          decHanlder();
        }}
      >
        -
      </button>
      <h3 className="counter-value">{defaultValue}</h3>
      <button
        className="counter-button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();

          incHanlder();
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
