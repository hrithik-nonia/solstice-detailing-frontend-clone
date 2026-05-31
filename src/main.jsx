import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import SmoothScroll from "./component/smooth-scroll.jsx";
import { AppProvider } from "./app-context/app-context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <SmoothScroll>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SmoothScroll>
    </AppProvider>
  </StrictMode>,
);
