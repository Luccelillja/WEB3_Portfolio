import React from "react";
import { motion } from "framer-motion";
import About from "./About";
import MyWork from "./MyWork";
import Achievements from "./Achievements";
import styles from "../styles/PortfolioPage.module.css";

const PortfolioPage = () => {
  return (
    <motion.div
      className={styles.portfolioContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* About Section */}
      <div className={styles.aboutSection}>
        <About />
      </div>

      {/* Section Divider */}
      <motion.div
        className={styles.sectionDivider}
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>

      {/* My Work Section */}
      <div className={styles.portfolioSection}>
        <MyWork />
      </div>

      {/* Section Divider */}
      <motion.div
        className={styles.sectionDivider}
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>

      {/* Achievements Section */}
      <div className={styles.achievementsSection}>
        <Achievements />
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
