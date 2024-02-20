import React from "react";
import { motion } from "framer-motion";

type Props = {
  text?: string;
  delay: number;
  words?: string;
};

const AnimatedText = ({ text, words, delay }: Props) => {
  const letters = Array.from(text ? text : "") || [];

  const wordsArray = words?.split(" ") || [];

  const container = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay && delay * i,
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 50,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 50,
      },
    },
  };

  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
      {wordsArray.map((word, index) => (
        <motion.span
          style={{
            marginRight: "0.3rem",
            display: "inline-block",
          }}
          variants={child}
          key={index}
        >
          {word === " " ? "\u00A0" : word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
