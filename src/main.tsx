import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./assets/fonts/fonts.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/layout/Header/Header.tsx";
import Footer from "./components/layout/Footer/Footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <App />
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
