import React from "react";
import { Particles } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 }, // Ensure it's fullscreen
        particles: {
          number: { value: 50, density: { enable: true, area: 800 } }, // More particles
          color: { value: "#00ffab" }, // Neon color
          shape: { type: "circle" }, // Particle shape
          opacity: { value: 0.5, random: true },
          size: { value: 3, random: true },
          move: { direction: "none", speed: 1, outModes: "out" },
          links: {
            enable: true,
            distance: 120,
            color: "#00ffab",
            opacity: 0.4,
          },
        },
        background: { color: "#0f172a" }, // Dark background
      }}
    />
  );
};

export default ParticlesBackground;
