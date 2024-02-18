import Link from "next/link";
import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center gap-7 items-center">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="bg-zinc-900 rounded-md p-4 shadow-md flex justify-between xl:w-4/6 w-5/6 items-center min-h-24"
        >
          <div className="flex w-full flex-col gap-2">
            <div className="w-4/6 h-4 dark:bg-gray-600 rounded animate-pulse"></div>
            <div className="w-3/6 h-4 dark:bg-gray-600 rounded animate-pulse"></div>
            <div className="w-5/6 h-4 dark:bg-gray-600 rounded animate-pulse"></div>
          </div>
        </div>
      ))}
      <Link
        href="/"
        className="animate-pulse w-1/4 text-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-sky-400 dark:text-white dark:border-gray-600 dark:hover:bg-sky-900 dark:hover:border-gray-600 dark:focus:ring-gray-700 transition-all"
      >
        Go back
      </Link>
    </div>
  );
}
