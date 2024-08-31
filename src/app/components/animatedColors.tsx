"use client";

import React, { useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";

type Props = {};

const AnimatedColors = (props: Props) => {
  const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(505% 505% at 50% 0%, #020617 10%, ${color})`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <motion.section
      style={{ backgroundImage }}
      className="fixed inset-0 w-full h-full -z-10 bg-gray-950 overflow-hidden"
    ></motion.section>
  );
};

export default AnimatedColors;
