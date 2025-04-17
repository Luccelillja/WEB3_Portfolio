import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.footer
      ref={ref}
      className={styles.footer}
      // initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
    >
      <motion.blockquote
        className={styles.quote}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Always Building, Always Evolving.
      </motion.blockquote>

      {/* 👇 Links */}
      <div className={styles.links}>
        <a
          href="https://github.com/luccelillja"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        {/* <a
          href="https://linkedin.com/in/YOUR-LINK"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a> */}
        <a href="mailto:Lucce@lillja.com">Email</a>
      </div>

      <p className={styles.copy}>© {new Date().getFullYear()} Carl - Lucas</p>
    </motion.footer>
  );
};

export default Footer;
