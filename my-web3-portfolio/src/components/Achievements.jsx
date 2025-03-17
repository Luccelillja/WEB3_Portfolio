import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Achievements.module.css";

const achievements = [
  { title: "React Developer Certification", platform: "Udemy", year: "2024" },
  { title: "Web3 Fundamentals", platform: "Alchemy University", year: "2023" },
  { title: "100+ GitHub Contributions", platform: "Open Source", year: "2024" },
  { title: "Hackathon Participant", platform: "ETHGlobal", year: "2023" },
];

const Achievements = () => {
  return (
    <motion.div
      className={styles.achievementsContainer}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className={styles.title}>Achievements</h2>

      <div className={styles.grid}>
        {achievements.map((achieve, index) => (
          <motion.div
            key={index}
            className={styles.card}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px #00ffab" }}
          >
            <h3>{achieve.title}</h3>
            <p>{achieve.platform}</p>
            <span>{achieve.year}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Achievements;
