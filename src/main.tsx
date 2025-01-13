import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import "./styles/variables.css";
import "./styles/normalize.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Provider } from "react-redux";
import { store } from "./store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    <ToastContainer />
  </StrictMode>,
);
