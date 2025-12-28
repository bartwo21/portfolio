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
import { useSectionInView } from "../hooks/useSectionInView";

const Projectcards: React.FC = () => {
  const { ref } = useSectionInView("work");
  const { setLoading } = useContext(Context) as ContextType;
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchAllGithubRepos();
      if (response) {
        setDataLoaded(true);
      }
      setTimeout(() => {
        localStorage.setItem("loaded", "true");
        setLoading(false);
      }, 2500);
    };
    fetchData();
  }, [setLoading]);

  return (
    <div id="work" ref={ref} className="cards flex flex-col w-full gap-10">
      <div className="relative flex flex-col items-center mb-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-2xl font-light tracking-[0.2em] text-white uppercase"
        >
          Selected <span className="font-serif italic text-sky-200">Works</span>
        </motion.h2>
        <div className="mt-4 w-12 h-[2px] bg-white/20" />
      </div>

      <div className="grid grid-cols-1 gap-8">
        {projectData?.map((data, index) => (
          <motion.div
            key={data.name}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Tilt
              tiltMaxAngleX={1}
              tiltMaxAngleY={1}
              scale={1}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.03] backdrop-blur-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 transition-all duration-500 hover:bg-white/[0.07] hover:border-white/20 shadow-xl">

                <div className="flex-1 space-y-4 z-10 text-left w-full">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-medium text-white group-hover:text-sky-200 transition-colors">
                      {data.name}
                    </h3>
                    <div className="flex gap-4">
                      <Link
                        href={data.html_url}
                        target="_blank"
                        className="text-white/30 hover:text-white transition-colors"
                      >
                        <FaGithub size={24} />
                      </Link>
                      <Link
                        href={data.live_url}
                        target="_blank"
                        className="text-white/30 hover:text-sky-300 transition-colors"
                      >
                        <VscRunAll size={24} />
                      </Link>
                    </div>
                  </div>

                  <p className="text-sky-100/50 text-base font-light leading-relaxed">
                    {data.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {data.topics?.map((topic) => (
                      <span
                        key={topic}
                        className="px-3 py-1 text-[10px] tracking-wider font-bold bg-white/5 border border-white/10 rounded-lg text-white/60"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative w-full md:w-64 aspect-video overflow-hidden rounded-2xl border border-white/5 shadow-lg">
                  <Link href={data.live_url} target="_blank">
                    <Image
                      src={data.img ?? ""}
                      alt={data.name}
                      fill
                      className="object-cover transition-opacity duration-500 group-hover:opacity-90"
                    />
                  </Link>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="flex w-full justify-center mt-6"
      >
        <MagicButton
          text="View Full Portfolio"
          href={dataLoaded ? "/projects" : "https://github.com/bartwo21?tab=repositories"}
          target={dataLoaded ? "_self" : "_blank"}
          icon={<GoArrowUpRight size={18} />}
          className="px-12"
        />
      </motion.div>
    </div>
  );
};

export default Projectcards;
