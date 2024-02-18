import React from "react";
import { fetchGetAllGithubRepos } from "../lib/data";
import Link from "next/link";

type RepoProps = {
  name: string;
  html_url: string;
  description: string;
  topics: string[];
};

const ProjectsContainer = async ({}) => {
  const allRepos = await fetchGetAllGithubRepos();
  return (
    <div className="flex flex-col justify-center gap-7 my-12 xl:items-stretch items-center">
      {allRepos.length !== undefined
        ? allRepos.slice(1).map((data: RepoProps) => {
            return (
              <Link
                href={data.html_url}
                key={data.name}
                className="card bg-zinc-900 rounded-md p-2 shadow-md flex justify-between xl:w-full w-5/6 cursor-pointer flex-col min-h-24"
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
                  <p className="text-gray-600">{data.description}</p>
                </div>
              </Link>
            );
          })
        : "API rate limit exceeded for ******"}
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
