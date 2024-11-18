import { Link } from "react-router-dom";
import "./HomePage.css";

const Home = () => {
  return (
    <div className="home-page">
      <h1>Home</h1>
      <Link to={"catalog"}>catalog</Link>
      <Link to={"cart"}>cart</Link>
    </div>
  );
};

export default Home;
