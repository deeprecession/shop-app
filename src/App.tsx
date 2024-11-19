import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
