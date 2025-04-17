import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "../styles/LandingPage.module.css";

const fadeInFromTop = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
};

const fadeInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { delay: 0.3, duration: 1 } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.5 } },
};

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className={styles.landingContainer}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}
    >
      <motion.h1 className={styles.title} variants={fadeInFromTop}>
        Building the Future of the Web
      </motion.h1>

      <motion.p className={styles.subtitle} variants={fadeInFromLeft}>
        Exploring Web3, Blockchain, and Frontend Innovation
      </motion.p>

      <motion.button
        className={styles.ctaButton}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { delay: 0.1, duration: 0.1 },
        }}
        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/portfolio")}
      >
        Enter Portfolio
      </motion.button>
    </motion.div>
  );
};

export default LandingPage;
