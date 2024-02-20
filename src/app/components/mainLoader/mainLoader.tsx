+"use client";

import React, { useContext, useEffect, useState } from "react";
import "./mainLoader.css";
import { Context, ContextType } from "../../context/store";
import { motion } from "framer-motion";

const MainLoader = () => {
  const { loading, isLoaded } = useContext(Context) as ContextType;
  const [delayedLoading, setDelayedLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDelayedLoading(loading);
    }, 2500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [loading]);

  if (isLoaded === true) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 1 }}
      className={!delayedLoading ? "loaded" : "container"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 98"
        width="50"
        height="98"
        className="loader-svg"
      >
        <style>
          {`
          tspan { white-space:pre }
          .shp0 { fill: transparent } 
          .shp1 { fill: none;stroke: #000000;stroke-width: 1.4 } 
          .txt1 { font-size: 42px;fill: transparent;font-weight: 400;font-family: 'Gothic A1', sans-serif } 
          .txt2 { font-size: 39px;fill: transparent;font-weight: 400;font-family: 'Gothic A1', sans-serif } 
          `}
        </style>
        <path id="Shape 4" className="shp0" d="M0 0L50 0L50 100L0 100L0 0Z" />
        <path id="Shape 1" className="shp1" d="M4 3L48 3L48 94.01L48 96" />
        <path id="Shape 2" className="shp1" d="M44 95L1.99 95L1.99 2" />
        <text id="B" style={{ transform: "matrix(1,0,0,1,11,41)" }}>
          <tspan x="0" y="0" className="txt1 txt">
            B
          </tspan>
        </text>
        <text id="C" style={{ transform: "matrix(1,0,0,1,11,80)" }}>
          <tspan x="0" y="0" className="txt2 txt">
            Ç
          </tspan>
        </text>
      </svg>
    </motion.div>
  );
};

export default MainLoader;
