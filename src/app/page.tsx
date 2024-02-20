"use client";

import Aboutme from "@/app/components/aboutme";
import Projectcards from "@/app/components/projectcards";
import Contact from "@/app/components/contact";
import { ToastContainer } from "react-toastify";
import Experience from "./components/experience";
import MainLoader from "./components/mainLoader/mainLoader";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const AnimatedComponent = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 25 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      transition={{ duration: 0.8 }}
      animate={controls}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
    <div className="py-0 mb-16 w-1/2 items-end flex flex-col flex-wrap gap-36">
      <ToastContainer stacked />
      <MainLoader />

      <Projectcards />

      <AnimatedComponent>
        <Aboutme />
      </AnimatedComponent>

      <AnimatedComponent>
        <Experience />
      </AnimatedComponent>

      <AnimatedComponent>
        <Contact />
      </AnimatedComponent>
    </div>
  );
}
