import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { initGtm } from "@/lib/gtm";
import { App } from "@/app/App";
import "@/styles/globals.css";

initGtm();

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);