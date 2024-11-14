import { useNavigate } from "react-router-dom";
import "./BackBtn.css";

const BackBtn = () => {
  const navigate = useNavigate();

  return (
    <button className="back-btn" onClick={() => navigate(-1)}>
      Back
    </button>
  );
};

export default BackBtn;
