import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StyleProvider } from "@ant-design/cssinjs";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <StyleProvider layer>
        <App />
      </StyleProvider>
    </BrowserRouter>
  </StrictMode>
);
