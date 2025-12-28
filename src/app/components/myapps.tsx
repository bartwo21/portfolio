import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { VscRunAll } from "react-icons/vsc";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { myAppsData } from "../lib/data";

const MyApps: React.FC = () => {
  return (
    <div id="my-apps" className="cards flex flex-col w-full gap-6 mb-6">
      <motion.h1
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 50,
        }}
        className="text-xl text-sky-50 text-center mb-4"
      >
        My Apps
      </motion.h1>
      {myAppsData?.map((data, index) => (
        <Tilt
          tiltEnable={false}
          scale={1.02}
          transitionSpeed={2500}
          style={{
            transformStyle: "preserve-3d",
          }}
          key={data.name}
        >
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: index / 2,
              type: "spring",
              stiffness: 50,
            }}
            key={data.name}
            className="card bg-slate-900/20 backdrop-blur-sm rounded-lg shadow-lg border border-sky-500/30 hover:border-sky-400/50 transition-all duration-300 flex justify-around items-center 2xl:w-full 2xl:flex-row flex-col 2xl:p-0 p-4"
            style={{ boxShadow: "0 0px 35px 0 rgba(56, 189, 248, 0.2)" }}
          >
            <div className="left flex flex-col gap-2 2xl:w-6/12 w-full">
              <h1 className="text-md font-bold">{data.name}</h1>
              <p className="text-gray-500 font-bold w-full text-xs">
                {data.description}
              </p>
              <h2 className="text-xs font-semibold flex gap-1 flex-wrap mt-1">
                {data.topics?.map((topic) => (
                  <span key={topic} className="mb-[6px]">
                    <span className="bg-slate-800 rounded-sm p-1 text-slate-400">
                      {topic}
                    </span>{" "}
                  </span>
                ))}
              </h2>
            </div>
            <div className="flex sm:flex-row flex-col-reverse gap-3 mt-1">
              <div className="flex sm:flex-col flex-row sm:mt-0 mt-3 mb-0 justify-center items-center gap-8">
                {data.html_url && (
                  <Link
                    href={data.html_url}
                    className="flex items-center justify-center w-7 h-7 bg-sky-50 rounded-full shadow-md hover:bg-sky-200 transition-colors duration-300 ease-in-out"
                    target="_blank"
                  >
                    <FaGithub className="text-xl text-gray-900" />
                  </Link>
                )}
                <Link
                  href={data.live_url}
                  className="flex items-center justify-center w-7 h-7 bg-sky-50 rounded-full shadow-md hover:bg-sky-200 transition-colors duration-300 ease-in-out"
                  target="_blank"
                >
                  <VscRunAll className="text-xl text-gray-900" />
                </Link>
              </div>
              <Tilt
                style={{
                  transformStyle: "preserve-3d",
                }}
                className="img 2xl:w-52 lg:w-68 2xl:mt-3 2xl:mb-4 lg:mb-0 mt-4 px-1 hover:ml-10"
                scale={1.25}
              >
                <Link href={data.live_url} target="_blank">
                  <Image
                    src={data.img ?? ""}
                    alt="Project Image"
                    width={300}
                    height={300}
                    className="rounded-lg mb-0 sm:my-1"
                    style={{
                      transform: "translateZ(50px)",
                    }}
                  />
                </Link>
              </Tilt>
            </div>
          </motion.div>
        </Tilt>
      ))}
    </div>
  );
};

export default MyApps;


