"use client";

import React, { useRef, useEffect, useState } from "react";
import { IoCloud } from "react-icons/io5";
import { motion } from "framer-motion";

// Rastgele cümleler
const messages = [
  "Hey!",
  "Merhaba!",
  "Hola!",
  "Bonjour!",
  "Hello!",
  "Olá!",
  "Salut!",
  "Ciao!",
  "Ahoj!",
  "Hoi!",
];

const generateClouds = (count: number) => {
  return Array.from({ length: count }, () => ({
    top: `${Math.floor(Math.random() * 100)}%`,
    left: `${Math.floor(Math.random() * 100)}%`,
    size: `${Math.random() * 1 + 0.5}rem`,
    xMovement: Math.random() * 50 + 20,
    yMovement: Math.random() * 20 + 10,
    rotation: Math.random() * 20 - 10,
    duration: Math.random() * 30 + 20,
    message: "",
    showMessage: false,
    key: Math.random(),
  }));
};

const Clouds = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollYValue, setScrollYValue] = useState(0);
  const [clouds, setClouds] = useState<
    {
      top: string;
      left: string;
      size: string;
      xMovement: number;
      yMovement: number;
      rotation: number;
      duration: number;
      message: string;
      showMessage: boolean;
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
    const generatedClouds = generateClouds(15);
    setClouds(generatedClouds);

    const updateMessages = () => {
      setClouds((prevClouds) =>
        prevClouds.map((cloud) => ({
          ...cloud,
          message: messages[Math.floor(Math.random() * messages.length)],
          showMessage: Math.random() < 0.2,
        }))
      );
    };

    updateMessages();

    const interval = setInterval(
      updateMessages,
      Math.random() * 5000 + 5000 + 5000
    );

    return () => clearInterval(interval);
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
      {clouds.map((cloud) => (
        <div
          key={cloud.key}
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
              className="relative"
            >
              <IoCloud
                className="cloud text-gray-300 opacity-30"
                style={{
                  filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))",
                }}
              />
              {cloud.showMessage && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 1, 0] }}
                  transition={{
                    duration: 8,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 5,
                  }}
                  className="absolute top-[95%] left-[50%] translate-x-[-50%] bg-gray-600 text-black rounded-2xl px-2 py-1 text-[8px] shadow-2xl text-center"
                >
                  {cloud.message}
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
};

export default Clouds;
