import React, { useState } from "react";
import { motion } from "framer-motion";
import GalleryOverlay from "./GalleryOverlay";
import styles from "../styles/MyWork.module.css";

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  // Sample Projects
  const projects = [
    {
      name: "Food Order App",
      images: [
        "https://www.businessofapps.com/wp-content/uploads/2022/01/emizen_tech_food_deliver_img1.png",
        "https://i.ytimg.com/vi/9nWcPPHBzMk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCAtRdTDBcOeq5ys33KJwTXLcqNcA",
      ],
    },
    {
      name: "Crypto Tracker App",
      images: [
        "https://miro.medium.com/v2/resize:fit:1400/1*e3bibHLzf-ZjQrWJ_JBCew.jpeg",
        "https://cryptopro.app/wp-content/uploads/2020/08/crypto-pro-portfolio-tracker.png",
      ],
    },
    {
      name: "Camping Site App",
      images: [
        "https://miro.medium.com/v2/resize:fit:1400/1*e3bibHLzf-ZjQrWJ_JBCew.jpeg",
        "https://cryptopro.app/wp-content/uploads/2020/08/crypto-pro-portfolio-tracker.png",
      ],
    },
    {
      name: "Challenge Tracker App",
      images: [
        "https://cryptopro.app/wp-content/uploads/2020/08/crypto-pro-portfolio-tracker.png",
        "https://miro.medium.com/v2/resize:fit:1400/1*e3bibHLzf-ZjQrWJ_JBCew.jpeg",
      ],
    },
  ];

  const openGallery = (images) => {
    setSelectedImages(images);
    setIsOpen(true);
  };

  return (
    <motion.div
      className={styles.portfolioContainer}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className={styles.myWorkTitle}>My Work</h2>

      <div className={styles.projects}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={styles.projectCard}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => openGallery(project.images)}
          >
            <h3>{project.name}</h3>
            <p>Click to view screenshots</p>
          </motion.div>
        ))}
      </div>

      <GalleryOverlay
        images={selectedImages}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </motion.div>
  );
};

export default Portfolio;
