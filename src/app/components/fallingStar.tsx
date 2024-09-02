"use client";

import React, { useEffect, useState } from "react";
import { GiRoundStar } from "react-icons/gi";
import { motion } from "framer-motion";

export const ShootingStar = () => {
  const [isShooting, setIsShooting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsShooting(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <motion.div
        className="absolute"
        initial={{ opacity: 0, x: -100, y: -100 }}
        animate={{
          opacity: isShooting ? [1, 0] : 0,
          x: isShooting ? [0, 200] : 200,
          y: isShooting ? [0, 200] : 200,
        }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <GiRoundStar
          className="text-gray-300 opacity-30"
          style={{
            fontSize: "0.4rem",
            filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))",
          }}
        />
      </motion.div>

      <motion.div
        className="absolute"
        style={{
          width: "2px",
          height: "100px",
          background:
            "linear-gradient(to top, transparent, rgba(255, 255, 255, 0.1))",
          transformOrigin: "0 0",
          rotate: 130,
        }}
        initial={{ opacity: 0, x: -100, y: -100 }}
        animate={{
          opacity: isShooting ? [1, 0] : 0,
          x: isShooting ? [5, 200] : 200,
          y: isShooting ? [5, 200] : 200,
        }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
    </div>
  );
};
