import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/SectionDivider.module.css";

const SectionDivider = () => {
  return (
    <motion.div
      className={styles.divider}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    />
  );
};

export default SectionDivider;
