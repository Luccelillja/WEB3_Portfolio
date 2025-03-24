import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import About from "./About";
import MyWork from "./MyWork";
import Achievements from "./Achievements";
import styles from "../styles/PortfolioPage.module.css";

const PortfolioPage = () => {
  const { scrollYProgress } = useScroll();

  // Parallax transformations
  const yTranslate1 = useTransform(scrollYProgress, [0, 1], [0, -200]); // Moves up
  const yTranslate2 = useTransform(scrollYProgress, [0, 1], [0, -150]); // Moves slightly less
  const yTranslate3 = useTransform(scrollYProgress, [0, 1], [0, -100]); // Moves even less

  return (
    <motion.div className={styles.portfolioContainer}>
      <motion.div className={styles.aboutSection} style={{ y: yTranslate1 }}>
        <About />
      </motion.div>

      <motion.div
        className={styles.portfolioSection}
        style={{ y: yTranslate2 }}
      >
        <MyWork />
      </motion.div>

      <motion.div
        className={styles.achievementsSection}
        style={{ y: yTranslate3 }}
      >
        <Achievements />
      </motion.div>
    </motion.div>
  );
};

export default PortfolioPage;
