import React, { useState } from "react";
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
      name: "Challege Tracker App",
      images: [
        "https://cryptopro.app/wp-content/uploads/2020/08/crypto-pro-portfolio-tracker.png",
        "https://miro.medium.com/v2/resize:fit:1400/1*e3bibHLzf-ZjQrWJ_JBCew.jpeg",
      ],
    },
  ];
  // Open the gallery with selected images
  const openGallery = (images) => {
    setSelectedImages(images);
    setIsOpen(true);
  };

  return (
    <div className={styles.portfolioContainer}>
      <h2 className={styles.myWorkTitle}>My Work</h2>
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={styles.projectCard}
            onClick={() => openGallery(project.images)}
          >
            <h3>{project.name}</h3>
            <p>Click to view screenshots</p>
          </div>
        ))}
      </div>

      {/* Overlay Component */}
      <GalleryOverlay
        images={selectedImages}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default Portfolio;
