"use client";

import React from "react";
import { GithubRepoData } from "../lib/data";
import Tilt from "react-parallax-tilt";
import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import MagicButton from "./MagicButton";

const Githuballrepos = ({ fetchData }: { fetchData: GithubRepoData[] }) => {
  const GitHubCalendar = dynamic(() => import("react-github-calendar"));

  return (
    <div className="flex flex-col w-full gap-16 mb-20 px-4 md:px-0">
      {/* Editorial Header */}
      <div className="relative flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[10px] tracking-[0.5em] text-sky-200/60 uppercase font-black mb-2"
        >
          Archive & Activity
        </motion.span>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-6xl font-extralight tracking-tighter text-white mb-8"
        >
          All <span className="font-serif italic text-sky-200">Repositories</span>
        </motion.h1>
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />
      </div>

      {/* Activity Section First (Editorial choice) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl p-8 md:p-12 flex flex-col items-center gap-10"
      >
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-light tracking-tight text-white italic font-serif">
            Coding <span className="text-sky-200 not-italic font-sans font-extralight uppercase tracking-widest text-sm ml-2">Pulse</span>
          </h2>
          <div className="w-8 h-px bg-sky-400/30 mx-auto" />
        </div>

        <div className="w-full overflow-x-auto flex justify-center scrollbar-hide py-4">
          <div className="min-w-fit p-6 rounded-3xl bg-white/[0.03] border border-white/5 shadow-inner">
            <GitHubCalendar
              username="bartwo21"
              year="last"
              blockSize={12}
              blockMargin={4}
              fontSize={12}
            />
          </div>
        </div>
      </motion.div>

      {/* Grid Header */}
      <div className="flex items-center gap-4">
        <h3 className="text-sky-200/40 font-bold tracking-[0.3em] uppercase text-[11px] whitespace-nowrap">Source Archive</h3>
        <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
      </div>

      {/* Repositories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {fetchData ? (
          fetchData.map((data, index) => (
            <motion.div
              key={data.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Tilt
                tiltMaxAngleX={3}
                tiltMaxAngleY={3}
                scale={1}
                className="h-full"
              >
                <Link
                  href={data.html_url}
                  target="_blank"
                  className="group relative flex flex-col h-full overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-xl p-8 transition-all duration-700 hover:bg-white/[0.06] hover:border-white/20 shadow-xl"
                >
                  <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {data.topics?.map((topic) => (
                          <span
                            key={topic}
                            className="text-[9px] uppercase tracking-[0.2em] font-black text-sky-300/40"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-2xl font-medium text-white group-hover:text-sky-200 transition-colors tracking-tight">
                        {data.name}
                      </h3>
                      <p className="text-sky-100/40 text-sm font-light leading-relaxed italic">
                        {data.description || "Experimental source code and explorations."}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 text-sky-400/30 group-hover:text-sky-400 transition-all duration-500">
                      <span className="text-[10px] font-black tracking-[0.2em] uppercase">Open Repository</span>
                      <div className="h-px w-6 bg-current origin-left group-hover:w-12 transition-all duration-500" />
                    </div>
                  </div>

                  {/* Soft Light Spot */}
                  <div className="absolute -right-20 -top-20 w-40 h-40 bg-sky-400/[0.03] rounded-full blur-[80px] pointer-events-none" />
                </Link>
              </Tilt>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center bg-white/[0.02] rounded-[2.5rem] border border-dashed border-white/10">
            <p className="text-sky-100/40 font-light italic text-lg">
              Celestial signal lost. Explore directly on{" "}
              <Link
                className="text-sky-300 hover:text-white transition-colors underline decoration-sky-300/30 underline-offset-4"
                href="https://github.com/bartwo21"
                target="_blank"
              >
                GitHub
              </Link>.
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-center pt-12 pb-20">
        <MagicButton text="Return to Horizon" href="/" target="_self" />
      </div>
    </div>
  );
};

export default Githuballrepos;
