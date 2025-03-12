import React from "react";
import { motion } from "framer-motion";
import About from "./About";
import Portfolio from "./Portfolio";
import styles from "../styles/PortfolioPage.module.css";

const PortfolioPage = () => {
  return (
    <motion.div
      className={styles.portfolioContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.aboutSection}>
        <About />
      </div>
      <div className={styles.portfolioSection}>
        <Portfolio />
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
