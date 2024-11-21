import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import "./styles/layout.css";

const App = () => {
  return (
    <div className="layout">
      <NavBar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default App;
