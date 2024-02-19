"use client";

import React from "react";
import { GithubRepoData, fetchGetAllGithubRepos } from "../lib/data";
import Tilt from "react-parallax-tilt";
import Link from "next/link";

const ProjectsContainer: React.FC = async () => {
  const fetchData = (await fetchGetAllGithubRepos()) as GithubRepoData[];

  // throw new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(fetchData);
  //   }, 4000);
  // });

  return (
    <div className="flex flex-col justify-center gap-7 items-center mb-10">
      {fetchData ? (
        fetchData?.map((data) => {
          return (
            <Tilt
              tiltEnable={false}
              scale={1.02}
              transitionSpeed={2500}
              className=" xl:w-4/6 w-5/6"
            >
              <Link
                href={data.html_url}
                key={data.name}
                className="card bg-zinc-900 rounded-md p-2 mr-2 shadow-md flex justify-between cursor-pointer flex-col min-h-24"
                target="_blank"
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
          We're currently unable to retrieve the data due to API limitations.
          Please try again later or explore all repositories on{" "}
          <Link
            className="underline hover:text-sky-200"
            href="https://github.com/bartwo21"
            target="_blank"
          >
            Github.
          </Link>
        </p>
      )}
      <Link
        href="/"
        className="xl:w-2/4 w-1/2 text-center text-white border-2 hover:text-sky-300 border-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 transition-all"
      >
        Back to home
      </Link>
    </div>
  );
};

export default ProjectsContainer;
