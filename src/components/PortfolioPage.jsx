import React from "react";
import { motion, useTransform } from "framer-motion";
import About from "./About";
import MyWork from "./MyWork";
import Achievements from "./Achievements";
import styles from "../styles/PortfolioPage.module.css";
import SectionDivider from "./SectionDivider";
import Footer from "./Footer";

const PortfolioPage = () => {
  return (
    <motion.div className={styles.portfolioContainer}>
      <motion.div id="about" className={styles.aboutSection}>
        <About />
      </motion.div>

      <SectionDivider />

      <motion.div id="work" className={styles.portfolioSection}>
        <MyWork />
      </motion.div>

      <SectionDivider />

      <motion.div id="achievements" className={styles.achievementsSection}>
        <Achievements />
      </motion.div>
      <Footer />
    </motion.div>
  );
};

export default PortfolioPage;
