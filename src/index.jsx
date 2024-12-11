import * as React from "react";
import { createRoot } from "react-dom/client";
// import Navbar from "@/components/ux/navbar";
import App from "./App.jsx";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <Navbar /> */}
    <App />
  </>
);
