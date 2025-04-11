import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Achievements.module.css";

const achievements = [
  {
    title: "Web Development and Programming",
    platform: "FiTech Academy",
    year: "2022",
  },
  {
    title: "The Web Developer Bootcamp",
    platform: "Colt Steele",
    year: "2022",
  },
  {
    title: "React - The Complete Guide",
    platform: "Maximilian Schwarzmüller",
    year: "2023",
  },
  {
    title: "React Native - The Practical Guide",
    platform: "Maximilian Schwarzmüller",
    year: "In Progress",
  },
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
          <div key={index} className={styles.card}>
            <div className={styles.cardInner}>
              <h3>{achieve.title}</h3>
              <p>{achieve.platform}</p>
              <span>{achieve.year}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Achievements;
