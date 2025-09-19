import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { Context, ContextType } from "../context/store";
import { FaGithub } from "react-icons/fa";
import { VscRunAll } from "react-icons/vsc";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { fetchAllGithubRepos, projectData } from "../lib/data";
import MagicButton from "./MagicButton";

const Projectcards: React.FC = () => {
  const { selectedSection, setSelectedSection, loading, setLoading } =
    useContext(Context) as ContextType;
  const [data, setData] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isInWorkSection = scrollTop >= 0 && scrollTop <= 700;
      if (isInWorkSection && selectedSection !== "work") {
        setSelectedSection("work");
      } else if (!isInWorkSection && selectedSection === "work") {
        setSelectedSection("");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [selectedSection]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchAllGithubRepos();
      if (response) {
        setData(true);
      }
      setTimeout(() => {
        localStorage.setItem("loaded", "true");
        setLoading(false);
      }, 2500);
    };
    fetchData();
  }, []);

  return (
    <div id="work" className="cards flex flex-col w-full gap-6">
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
        Pinned Repositories
      </motion.h1>
      {projectData?.map((data, index) => (
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
            className="card bg-transparent rounded-lg shadow-md border border-slate-800 border-opacity-65 flex justify-around items-center 2xl:w-full 2xl:flex-row flex-col lg:p-0 p-4"
            style={{ boxShadow: "0 0px 20px 0 rgba(17, 72, 128, 0.164)" }}
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
                <Link
                  href={data.html_url}
                  className="flex items-center justify-center w-7 h-7 bg-sky-50 rounded-full shadow-md hover:bg-sky-200 transition-colors duration-300 ease-in-out"
                  target="_blank"
                >
                  <FaGithub className="text-xl text-gray-900" />
                </Link>
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
                className="img xl:w-52 2xl:mt-3 xl:mb-4 mt-4 px-1 hover:ml-10"
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
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 50,
        }}
        className="flex w-full justify-end"
      >
        <MagicButton
          text="See all"
          href={
            data ? "/projects" : "https://github.com/bartwo21?tab=repositories"
          }
          target={data ? "_self" : "_blank"}
          icon={<GoArrowUpRight size={14} />}
        />
      </motion.div>
    </div>
  );
};

export default Projectcards;
