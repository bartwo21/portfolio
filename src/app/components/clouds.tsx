"use client";

import React, { useRef, useEffect, useState, useMemo } from "react";
import { IoCloud } from "react-icons/io5";
import { motion } from "framer-motion";

const generateClouds = (count: number) => {
  return Array.from({ length: count }, () => ({
    top: `${Math.floor(Math.random() * 100)}%`,
    left: `${Math.floor(Math.random() * 100)}%`,
    size: `${Math.random() * 1 + 0.5}rem`,
    xMovement: Math.random() * 50 + 20,
    yMovement: Math.random() * 20 + 10,
    rotation: Math.random() * 20 - 10,
    duration: Math.random() * 30 + 20,
  }));
};

const Clouds = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollYValue, setScrollYValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollYValue(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getDisplacementY = (top: string) => {
    const baseDisplacement = 20;
    const scrollFactor = 0.05;
    return baseDisplacement - scrollYValue * scrollFactor + "px";
  };

  const clouds = useMemo(() => generateClouds(15), []);

  return (
    <motion.div
      ref={ref}
      className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-1]"
    >
      {clouds.map((cloud, index) => (
        <div
          key={index}
          style={{
            top: cloud.top,
            left: cloud.left,
            transform: "translate(-50%, -50%)",
            position: "absolute",
            fontSize: cloud.size,
          }}
        >
          <motion.div
            animate={{
              x: [0, cloud.xMovement, -cloud.xMovement, 0],
              y: [0, cloud.yMovement, -cloud.yMovement, 0],
              rotate: [0, cloud.rotation, -cloud.rotation, 0],
            }}
            transition={{
              duration: cloud.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              style={{
                y: getDisplacementY(cloud.top),
              }}
              className="cloud-wrapper"
            >
              <IoCloud
                className="cloud text-gray-300 opacity-30"
                style={{
                  filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
};

export default Clouds;
