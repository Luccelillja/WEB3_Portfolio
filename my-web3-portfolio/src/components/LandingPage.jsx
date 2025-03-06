import React from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground"; // Import the particles
import styles from "../styles/LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.landingContainer}>
      {/* Floating Particles */}
      <ParticlesBackground />

      {/* Animated Intro Text */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={styles.title}
      >
        Building the Future of the Web
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className={styles.subtitle}
      >
        Exploring Web3, Blockchain, and Frontend Innovation
      </motion.p>

      {/* Call to Action Button */}
      <motion.a
        href="#portfolio"
        className={styles.ctaButton}
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgb(0, 255, 170)" }}
      >
        Enter Portfolio
      </motion.a>
    </div>
  );
};

export default LandingPage;
