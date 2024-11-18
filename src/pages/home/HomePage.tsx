import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to={"catalog"}>catalog</Link>
      <Link to={"cart"}>cart</Link>
    </div>
  );
};

export default Home;
