import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import "./styles/GlobalStyles.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <Router>
    {" "}
    {/* ✅ Wrap the entire app in Router */}
    <App />
  </Router>
);
