"use client";

import React from "react";
import { GithubRepoData } from "../lib/data";
import Tilt from "react-parallax-tilt";
import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Githuballrepos = ({ fetchData }: { fetchData: GithubRepoData[] }) => {
  const GitHubCalendar = dynamic(() => import("react-github-calendar"));
  return (
    <motion.div
      initial={{ scale: 0.999 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.1 }}
      className="flex flex-col justify-center gap-5 items-center mb-10"
    >
      {fetchData ? (
        fetchData?.map((data) => {
          return (
            <Tilt
              tiltEnable={false}
              scale={1.02}
              transitionSpeed={2500}
              className=" xl:w-full w-5/6"
              key={data.name}
            >
              <Link
                href={data.html_url}
                key={data.name}
                className="card bg-transparent border border-gray-900 rounded-lg p-2 mr-2 flex justify-between cursor-pointer flex-col min-h-24"
                target="_blank"
                style={{ boxShadow: "0 0px 20px 0 rgba(17, 73, 128, 0.027)" }}
              >
                <div className="left flex flex-col gap-2">
                  <h2 className="text-sm font-semibold">
                    {data.topics?.map((topic) => (
                      <span key={topic} className="text-zinc-500">
                        {topic + " "}
                      </span>
                    ))}
                  </h2>
                  <h1 className="text-xl font-bold">{data.name}</h1>
                  <p className="text-gray-600">{data.description}</p>
                </div>
              </Link>
            </Tilt>
          );
        })
      ) : (
        <p className=" w-2/4">
          We&apos;re currently unable to retrieve the data due to API
          limitations. Please try again later or explore all repositories on{" "}
          <Link
            className="underline hover:text-sky-200"
            href="https://github.com/bartwo21"
            target="_blank"
          >
            Github.
          </Link>
        </p>
      )}
      <h1 className="text-xl text-sky-50 text-center mt-3">
        Github Contributions
      </h1>
      <GitHubCalendar
        username="bartwo21"
        year="last"
        style={{ maxWidth: "960px!important", marginTop: "-20px" }}
      />
      <Link
        href="/"
        className="xl:w-2/4 w-1/2 text-center text-white border-2 hover:text-sky-300 border-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 transition-all"
      >
        Back to home
      </Link>
    </motion.div>
  );
};

export default Githuballrepos;
