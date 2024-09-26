"use client";

import React, { useRef, useEffect, useState } from "react";
import { GiRoundStar } from "react-icons/gi";

import { motion } from "framer-motion";

const generateStars = (count: number) => {
  return Array.from({ length: count }, () => ({
    top: `${Math.floor(Math.random() * 100)}%`,
    left: `${Math.floor(Math.random() * 100)}%`,
    size: `${Math.random() * 0.3}rem`,
    xMovement: Math.random() * 50 + 20,
    yMovement: Math.random() * 20 + 10,
    rotation: Math.random() * 20 - 10,
    duration: Math.random() * 30 + 20,
    message: "",
    showMessage: false,
    key: Math.random(),
  }));
};

const Stars = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollYValue, setScrollYValue] = useState(0);
  const [stars, setStars] = useState<
    {
      top: string;
      left: string;
      size: string;
      xMovement: number;
      yMovement: number;
      rotation: number;
      duration: number;
      message: string;
      key: number;
    }[]
  >([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollYValue(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const generatedStars = generateStars(20);
    setStars(generatedStars);
  }, []);

  const getDisplacementY = (top: string) => {
    const baseDisplacement = 20;
    const scrollFactor = 0.08;
    return baseDisplacement - scrollYValue * scrollFactor + "px";
  };

  return (
    <motion.div
      ref={ref}
      className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-1]"
    >
      {stars.map((star) => (
        <div
          key={star.key}
          style={{
            top: star.top,
            left: star.left,
            transform: "translate(-50%, -50%)",
            position: "absolute",
            fontSize: star.size,
          }}
        >
          <motion.div
            style={{
              y: getDisplacementY(star.top),
            }}
            className="relative"
          >
            <GiRoundStar
              className="text-gray-300 opacity-30"
              style={{
                filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))",
              }}
            />
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
};

export default Stars;
