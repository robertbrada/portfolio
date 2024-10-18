import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@fontsource-variable/cabin";
import '@fontsource/source-serif-pro';
import "@fontsource/poppins";
import "@fontsource-variable/lexend-deca";
import '@fontsource-variable/rubik';
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
