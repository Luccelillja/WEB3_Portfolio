import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      {/* Animated Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={styles.title}
      >
        About Me
      </motion.h2>

      {/* Introduction */}
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className={styles.description}
      >
        Hi, I'm <span className={styles.name}>Carl - Lucas</span>, a passionate
        **frontend developer** exploring **Web3 & blockchain technologies**. I
        specialize in building **sleek, responsive interfaces** using **React,
        TypeScript, and Tailwind CSS**.
      </motion.p>

      {/* Skills Section */}
      <div className={styles.skillsGrid}>
        <img src="/icons/html5.svg" alt="html5" />
        <img src="/icons/css.svg" alt="css" />
        <img src="/icons/javascript.svg" alt="JS" />
        <img src="/icons/react.svg" alt="React" />
        <img src="/icons/PS.svg" alt="PS" />
        <img src="/icons/nextjs.svg" alt="Next.js" />
        <img src="/icons/tailwind.svg" alt="Tailwind CSS" />
        <img src="/icons/ethereum.svg" alt="Ethereum" />
      </div>

      {/* Resume Download Button */}
      <motion.a
        href="/resume.pdf" // Change this to your actual resume link
        download
        className={styles.downloadButton}
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgb(0, 255, 170)" }}
      >
        Download Resume
      </motion.a>
    </div>
  );
};

export default About;
