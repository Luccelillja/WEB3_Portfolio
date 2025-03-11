//
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import PortfolioPage from "./components/PortfolioPage"; // New Portfolio Page
import styles from "./App.module.css";

const App = () => {
  return (
    <Router>
      <div className={styles.appContainer}>
        <Routes>
          {/* Landing Page Route */}
          <Route path="/" element={<LandingPage />} />

          {/* Portfolio Page Route */}
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
