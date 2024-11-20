import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import "./styles/layout.css";

const App = () => {
  return (
    <div className="layout">
      <NavBar />
      <main>
        <Outlet />
      </main>

    </div>
  );
};

export default App;
