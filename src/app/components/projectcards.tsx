import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { Context, ContextType } from "../context/store";
import { FaGithub } from "react-icons/fa";
import { VscRunAll } from "react-icons/vsc";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { fetchAllGithubRepos, projectData } from "../lib/data";

const Projectcards: React.FC = () => {
  const { selectedSection, setSelectedSection, loading, setLoading } =
    useContext(Context) as ContextType;
  const [data, setData] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isInWorkSection = scrollTop >= 0 && scrollTop <= 600;
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
    <div id="work" className="cards flex flex-col w-full gap-4">
      <h1 className="text-xl text-sky-50 text-center mb-4">
        Pinned Repositories
      </h1>
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
            className="card bg-zinc-900 rounded-md p-2 shadow-md flex justify-around items-center 2xl:w-full 2xl:flex-row flex-col"
            style={{ boxShadow: "0 0px 20px 0 rgba(2, 59, 116, 0.24)" }}
          >
            <div className="left flex flex-col gap-2 2xl:w-4/12 w-full">
              <h2 className="text-sm font-semibold">
                {data.topics?.map((topic) => (
                  <span key={topic} className="text-zinc-500">
                    {topic + " "}
                  </span>
                ))}
              </h2>
              <h1 className="text-xl font-bold">{data.name}</h1>
              <p className="text-gray-600 w-8/12 text-xs">{data.description}</p>
            </div>
            <div className="flex sm:flex-row flex-col-reverse gap-3 mt-1">
              <div className="flex sm:flex-col flex-row sm:mt-0 mt-3 mb-0 justify-center items-center gap-8">
                <Link
                  href={data.html_url}
                  className="flex items-center justify-center w-8 h-8 bg-sky-50 rounded-full shadow-md hover:bg-sky-200 transition-colors duration-300 ease-in-out"
                  target="_blank"
                >
                  <FaGithub className="text-xl text-gray-900" />
                </Link>
                <Link
                  href={data.live_url}
                  className="flex items-center justify-center w-8 h-8 bg-sky-50 rounded-full shadow-md hover:bg-sky-200 transition-colors duration-300 ease-in-out"
                  target="_blank"
                >
                  <VscRunAll className="text-xl text-gray-900" />
                </Link>
              </div>
              <Tilt
                style={{
                  transformStyle: "preserve-3d",
                }}
                className="img xl:w-60 2xl:mt-3 xl:mb-4 mt-4 px-1 hover:ml-10"
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
      <div className="flex w-full justify-end">
        <Link
          href={
            data ? "/projects" : "https://github.com/bartwo21?tab=repositories"
          }
          className="xl:w-1/4 w-1/2 text-center text-white border-2 hover:text-sky-300 shadow-[0_0px_9px_-2px_#54b4d3] active:shadow-none duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_0px_0px_0px_rgba(84,180,211,0.3),0_0px_14px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] border-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 transition-all"
          target={data ? "_self" : "_blank"}
        >
          See all
        </Link>
      </div>
    </div>
  );
};

export default Projectcards;
