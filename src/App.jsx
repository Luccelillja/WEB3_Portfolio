import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LandingPage from "./components/LandingPage";
import PortfolioPage from "./components/PortfolioPage";
import styles from "./App.module.css";
import { Analytics } from "@vercel/analytics/react";
// import Navbar from "./components/Navbar";

const App = () => {
  const location = useLocation(); // ✅ Ensures transitions work properly

  return (
    <div className={styles.appContainer}>
      <AnimatePresence mode="wait">
        {/* <Navbar /> */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </AnimatePresence>
      <Analytics />
    </div>
  );
};

export default App;
