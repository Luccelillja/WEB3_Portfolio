import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/GalleryOverlay.module.css";

const GalleryOverlay = ({ images, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Close overlay when pressing ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} // ✅ Close when clicking the backdrop
        >
          <div className={styles.content} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={onClose}>
              ✖
            </button>
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt="Project Screenshot"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            />
            <button className={styles.prevButton} onClick={prevImage}>
              ❮
            </button>
            <button className={styles.nextButton} onClick={nextImage}>
              ❯
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GalleryOverlay;
