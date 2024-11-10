import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to={"products"}>Check out the products</Link>
    </div>
  );
};

export default Home;
