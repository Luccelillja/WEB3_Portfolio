import React from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground"; // Import the particles
import styles from "../styles/LandingPage.module.css";

const LandingPage = ({ onEnterPortfolio }) => {
  console.log("Landing Page is rendering!"); // ✅ Debugging Log
  console.log("Received onEnterPortfolio function:", onEnterPortfolio); // ✅ Debugging Log

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
      <motion.button
        className={styles.ctaButton}
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgb(0, 255, 170)" }}
        onClick={() => {
          console.log("Button Clicked! Triggering onEnterPortfolio."); // ✅ Debugging Log
          if (onEnterPortfolio) {
            onEnterPortfolio();
          } else {
            console.error("onEnterPortfolio is undefined!");
          }
        }}
      >
        Enter Portfolio
      </motion.button>
    </div>
  );
};

export default LandingPage;
