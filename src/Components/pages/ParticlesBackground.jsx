// Components/ParticlesBackground.js
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: { value: "transparent" },
        },
        particles: {
          color: { value: "#cfe8ff" },
          links: {
            color: "#86c5d7",
            distance: 150,
            enable: true,
            opacity: 0.26,
            width: 1,
          },
          collisions: { enable: false },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            speed: 1,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 60,
          },
          opacity: { value: 0.35 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse", // ✅ يخلي النقاط تتزق من الماوس
            },
            onClick: {
              enable: true,
              // mode: "push", // ✅ يضيف نقاط جديدة عند الكلك
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
