"use client";

import React from "react";
import { GithubRepoData, fetchGetAllGithubRepos } from "../lib/data";
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
            <Link
              href={data.html_url}
              key={data.name}
              className="card bg-zinc-900 rounded-md p-2 shadow-md flex justify-between xl:w-4/6 w-5/6 cursor-pointer flex-col min-h-24"
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
        className="animate-pulse xl:w-2/4 w-1/2 text-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-sky-400 dark:text-white dark:border-gray-600 dark:hover:bg-sky-900 dark:hover:border-gray-600 dark:focus:ring-gray-700 transition-all"
      >
        Back to home
      </Link>
    </div>
  );
};

export default ProjectsContainer;
