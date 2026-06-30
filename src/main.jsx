import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../src/context/AuthContext.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { MyListProvider } from "./context/MyListContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <MyListProvider>
          <App />
        </MyListProvider>
        <ToastContainer />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
