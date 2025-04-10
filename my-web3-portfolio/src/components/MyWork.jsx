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
      name: "Launchpad App",
      images: [
        "/images/launchpad-app/launchpad-app1.png",
        "/images/launchpad-app/launchpad-app2.png",
        "/images/launchpad-app/launchpad-app3.png",
        "/images/launchpad-app/launchpad-app4.png",
        "/images/launchpad-app/launchpad-app5.png",
      ],
      status: "inProgress",
    },
    // {
    //   name: "Crypto Tracker App",
    //   images: [
    //     "https://miro.medium.com/v2/resize:fit:1400/1*e3bibHLzf-ZjQrWJ_JBCew.jpeg",
    //     "https://cryptopro.app/wp-content/uploads/2020/08/crypto-pro-portfolio-tracker.png",
    //   ],
    //   status: "inProgress",
    // },
    {
      name: "Challenge Tracker App",
      images: [
        "/images/challenge-app/Challenge-App2.png",
        "/images/challenge-app/Challenge-App3.png",
        "/images/challenge-app/Challenge-App4.png",
        "/images/challenge-app/Challenge-App5.png",
        "/images/challenge-app/Challenge-App6.png",
        "/images/challenge-app/Challenge-App7.png",
        "/images/challenge-app/Challenge-App8.png",
        "/images/challenge-app/Challenge-App9.png",
      ],
      status: "complete",
    },
    {
      name: "Camping Site App",
      images: [
        "/images/camping-app/Camping-site2.png",
        "/images/camping-app/Camping-site3.png",
        "/images/camping-app/Camping-site1.png",
        "/images/camping-app/Camping-site4.png",
      ],
      status: "complete",
    },
    {
      name: "Food Order App",
      images: [
        "/images/food-app/Food-order2.png",
        "/images/food-app/Food-order3.png",
        "/images/food-app/Food-order1.png",
      ],
      status: "complete",
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

            {project.status === "inProgress" ? (
              <p className={styles.inProgressTag}>🚧 Coming Soon</p>
            ) : (
              <p>Click to view screenshots</p>
            )}
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
