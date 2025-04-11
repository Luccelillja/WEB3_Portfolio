import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <motion.div
      className={styles.aboutContainer}
      initial={{ opacity: 0, y: 40 }} // ✅ Start slightly lower
      animate={{ opacity: 1, y: 0 }} // ✅ Fade in and move up
      exit={{ opacity: 0, y: 20, transition: { duration: 0.5 } }} // ✅ Exit smoothly
      transition={{ duration: 1 }}
    >
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
        <div>
          Hi, I'm <span className={styles.name}>Carl - Lucas</span>, I come from
          a background in business and marketing, but for the past three years,
          I’ve gone all-in on frontend development. With over five years in the
          crypto space, I love building sleek, responsive interfaces using React
          and exploring the possibilities of Web3.
          <div>
            <br />
            I’ve worked with businesses on marketing campaigns and now focus on
            crafting user-friendly web apps, especially within the Web3 and
            blockchain space.
          </div>
        </div>
        {/* <div>
          {" "}
          Hi, I'm <span className={styles.name}>Carl - Lucas</span>, a
          passionate frontend developer exploring Web3 & blockchain
          technologies. I specialize in building sleek, responsive interfaces
          using React, TypeScript, and Tailwind CSS.
        </div> */}
        {/* <div>
          Hi, I'm <span className={styles.name}>Carl - Lucas</span>, I'm a
          passionate frontend developer with experience in building responsive
          and user-friendly web applications. My expertise includes HTML, CSS,
          JavaScript, ReactJS and React Native. I enjoy working with UI/UX
          designers to create beautiful and functional interfaces that provide a
          seamless user experience. I'm also proficient in version control tools
          like Git and have experience working in agile development
          environments. I constantly strive to learn new technologies and
          techniques to improve my skills and stay up-to-date with the latest
          industry trends.
        </div> */}
      </motion.p>

      {/* Skills Section */}
      <div className={styles.skillsGrid}>
        <img src="/icons/html5.svg" alt="html5" />
        <img src="/icons/css.svg" alt="css" />
        <img src="/icons/javascript.svg" alt="JS" />
        <img src="/icons/react.svg" alt="React" />
        <img src="/icons/bootstrap.svg" alt="Tailwind CSS" />
        <img src="/icons/tailwind.svg" alt="Tailwind CSS" />
        <img src="/icons/nextjs.svg" alt="Next.js" />
        <img src="/icons/vite.svg" alt="Tailwind CSS" />
        <img src="/icons/PS.svg" alt="PS" />
        {/* <img src="/icons/ethereum.svg" alt="Ethereum" /> */}
      </div>

      <motion.a
        className={styles.downloadButton}
        href="mailto:Lucce@lillja.com"
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgb(0, 255, 170)" }}
      >
        Let's Connect
      </motion.a>
    </motion.div>
  );
};

export default About;
