import React from "react";
import About from "./About";
import Portfolio from "./Portfolio";
import styles from "../styles/PortfolioPage.module.css"; // Updated styling

const PortfolioPage = () => {
  return (
    <div className={styles.portfolioContainer}>
      <div className={styles.aboutSection}>
        <About />
      </div>
      <div className={styles.portfolioSection}>
        <Portfolio />
      </div>
    </div>
  );
};

export default PortfolioPage;
