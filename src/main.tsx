import React from "react";
import ReactDOM from "react-dom/client";
import "flowbite";
import "./index.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Router from "./router.tsx";
import { StateContextProvider } from "./context/stateContext.tsx";

Aos.init({
  // mirror: false,
  // once: true,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StateContextProvider>
      <Router />
    </StateContextProvider>
  </React.StrictMode>
);
