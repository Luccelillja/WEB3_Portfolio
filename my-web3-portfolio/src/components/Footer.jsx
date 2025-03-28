// // src/components/Footer.jsx
// import React from "react";
// import styles from "../styles/Footer.module.css";

// const Footer = () => {
//   return (
//     <footer className={styles.footer}>
//       <div className={styles.links}>
//         <a
//           href="https://github.com/luccelillja"
//           target="_blank"
//           rel="noreferrer"
//         >
//           GitHub
//         </a>
//         <a
//           href="https://linkedin.com/in/YOUR-LINK"
//           target="_blank"
//           rel="noreferrer"
//         >
//           LinkedIn
//         </a>
//         <a href="mailto:your.email@example.com">Email</a>
//       </div>
//       <p className={styles.copy}>© {new Date().getFullYear()} Carl - Lucas</p>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className={styles.links}>
        <a
          href="https://github.com/luccelillja"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/YOUR-LINK"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a href="mailto:your.email@example.com">Email</a>
      </div>
      <p className={styles.copy}>© {new Date().getFullYear()} Carl - Lucas</p>
    </motion.footer>
  );
};

export default Footer;
