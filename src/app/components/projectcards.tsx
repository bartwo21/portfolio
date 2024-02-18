"use client";

import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { Context, ContextType } from "../context/store";
import { Tilt } from "@jdion/tilt-react";
import datas, { GithubRepoData } from "../lib/data";

const Projectcards: React.FC = () => {
  const { selectedSection, setSelectedSection } = useContext(
    Context
  ) as ContextType;

  const [projectData, setProjectData] = useState<GithubRepoData[]>(datas);

  const projectImages = ["tour.png", "weather.png", "next.png"];

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
  return (
    <div id="work" className="cards flex flex-col w-full gap-4">
      {projectData.length !== undefined ? (
        projectData.map((data, index) => (
          <Tilt
            style={{
              boxShadow: "0 0px 30px 0 rgba(2, 59, 116, 0.24)",
              transformStyle: "preserve-3d",
            }}
            key={data.name}
          >
            <Link
              href={data.html_url}
              key={data.name}
              className="card bg-zinc-900 rounded-md p-4 py-1 shadow-md flex justify-between items-center w-full cursor-pointer xl:flex-row flex-col"
              target="_blank"
            >
              <div className="left flex flex-col gap-2">
                <h2 className="text-sm font-semibold">
                  {data.topics?.slice(1).map((topic) => (
                    <span key={topic} className="text-zinc-500">
                      {topic + " "}
                    </span>
                  ))}
                </h2>
                <h1 className="text-xl font-bold">{data.name}</h1>
                <p className="text-gray-600 w-3/4">{data.description}</p>
              </div>
              <div className="">
                <div className="img xl:w-52 xl:mt-0 py-7">
                  <Image
                    src={`/${projectImages[index]}`}
                    alt="Project Image"
                    width={300}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </Link>
          </Tilt>
        ))
      ) : (
        <div className="cards flex flex-col w-full gap-4">
          <Tilt
            style={{
              boxShadow: "0 0px 30px 0 rgba(2, 59, 116, 0.24)",
              transformStyle: "preserve-3d",
            }}
          >
            <Link
              href={""}
              className="card bg-zinc-900 rounded-md p-4 shadow-md flex justify-between xl:flex-row flex-col w-full"
            >
              <div className="left flex flex-col gap-2">
                <h2 className="text-sm font-semibold text-zinc-500">Next.js</h2>
                <h1 className="text-xl font-bold">Next.js Project</h1>
                <p className="text-gray-600 w-3/4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  consequatur sed delectus,
                </p>
              </div>
              <div className="right h-full flex items-center justify-center ml-4">
                <div className="img min-w-32 xl:mt-0 py-7">
                  <Image
                    src="/kucuk.jpg"
                    alt="Project Image"
                    width={120}
                    height={120}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </Link>
          </Tilt>
          <Tilt
            style={{
              boxShadow: "0 0px 30px 0 rgba(2, 59, 116, 0.24)",
              transformStyle: "preserve-3d",
            }}
          >
            <Link
              href={""}
              className="card bg-zinc-900 rounded-md p-4 shadow-md flex justify-between w-full xl:flex-row flex-col"
            >
              <div className="left flex flex-col gap-2">
                <h2 className="text-sm font-semibold text-zinc-500">Next.js</h2>
                <h1 className="text-xl font-bold">Next.js Project</h1>
                <p className="text-gray-600 w-3/4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  consequatur sed delectus,
                </p>
              </div>
              <div className="right h-full flex items-center justify-center ml-4">
                <div className="img min-w-32 xl:mt-0 py-7">
                  <Image
                    src="/kucuk.jpg"
                    alt="Project Image"
                    width={120}
                    height={120}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </Link>
          </Tilt>
          <Tilt
            style={{
              boxShadow: "0 0px 30px 0 rgba(2, 59, 116, 0.24)",
              transformStyle: "preserve-3d",
            }}
          >
            <Link
              href={""}
              className="card bg-zinc-900 rounded-md p-4 shadow-md flex justify-between w-full xl:flex-row flex-col"
            >
              <div className="left flex flex-col gap-2">
                <h2 className="text-sm font-semibold text-zinc-500">Next.js</h2>
                <h1 className="text-xl font-bold">Next.js Project</h1>
                <p className="text-gray-600 w-3/4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  consequatur sed delectus,
                </p>
              </div>
              <div className="right h-full flex items-center justify-center ml-4">
                <div className="img min-w-32 xl:mt-0 py-7">
                  <Image
                    src="/kucuk.jpg"
                    alt="Project Image"
                    width={120}
                    height={120}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </Link>
          </Tilt>
        </div>
      )}
      <div className="flex w-full justify-end">
        <Link
          href="/projects"
          className="animate-pulse xl:w-1/4 w-1/2 text-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-sky-400 dark:text-white dark:border-gray-600 dark:hover:bg-sky-900 dark:hover:border-gray-600 dark:focus:ring-gray-700 transition-all"
        >
          See all
        </Link>
      </div>
    </div>
  );
};

export default Projectcards;
