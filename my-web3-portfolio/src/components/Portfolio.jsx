// import React from "react";

// function Portfolio() {
//   return <div>Portfolio</div>;
// }

// export default Portfolio;

import React, { useState } from "react";
import GalleryOverlay from "./GalleryOverlay";
import styles from "../styles/Portfolio.module.css";

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
      name: "Crypto Tracker",
      images: [
        "https://via.placeholder.com/800x500/3388FF/FFFFFF?text=Crypto+App+1",
        "https://via.placeholder.com/800x500/FF3388/FFFFFF?text=Crypto+App+2",
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
      <h2 className={styles.title}>My Work</h2>
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
