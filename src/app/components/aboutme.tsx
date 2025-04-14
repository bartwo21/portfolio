"use client";

import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { Context, ContextType } from "../context/store";
import { motion } from "framer-motion";
import { journeyData, techStackData, workspaceData } from "../lib/data";
import type { JourneyItem, TechStackItem, WorkspaceItem } from "../lib/data";

const TimelinePoint = () => (
  <div className="absolute -left-[24px] w-5 h-5 rounded-full border-2 border-sky-400/10 bg-sky-950 z-10" />
);

const JourneyItem: React.FC<JourneyItem> = ({
  year,
  title,
  description,
  highlights,
}) => (
  <div className="relative">
    <TimelinePoint />
    <div className="ml-4">
      <h3 className="text-white mb-2">
        {year} - {title}
      </h3>
      <p className="md:text-xs text-xs">
        {description}{" "}
        {highlights && (
          <span className="text-sky-300">{highlights.join(", ")}</span>
        )}
      </p>
    </div>
  </div>
);

const WorkspaceSection: React.FC<WorkspaceItem> = ({ title, items }) => (
  <div>
    <h3 className="text-sky-300 text-lg mb-2">{title}</h3>
    <ul className="text-sm space-y-1">
      {items.map((item, itemIndex) => (
        <li key={itemIndex} className="flex items-center gap-2">
          <span>{item.name}</span>
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-sky-400 hover:text-sky-300 transition-colors"
            >
              [link]
            </a>
          )}
        </li>
      ))}
    </ul>
  </div>
);

const TechStackSection: React.FC<{
  title: string;
  skills: TechStackItem[];
}> = ({ title, skills }) => (
  <div className="mb-8">
    <h3 className="text-sky-300 text-lg mb-4">{title}</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex items-center gap-2 p-3 rounded-lg bg-sky-950/10 hover:bg-sky-900/20 transition-all"
        >
          <skill.icon className={`text-2xl ${skill.color}`} />
          <span className="text-sm">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const Aboutme = () => {
  const { selectedSection, setSelectedSection } = useContext(
    Context
  ) as ContextType;
  const [activeTab, setActiveTab] = useState<
    "journey" | "workspace" | "techstack"
  >("journey");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isInWorkSection = scrollTop >= 1600 && scrollTop <= 2300;
      if (isInWorkSection && selectedSection !== "about") {
        setSelectedSection("about");
      } else if (!isInWorkSection && selectedSection === "about") {
        setSelectedSection("");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [selectedSection, setSelectedSection]);

  return (
    <div
      style={{
        boxShadow:
          "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
      }}
      className="about-me min-h-1/2 min-w-min p-8 bg-transparent rounded-md"
    >
      <div className="flex gap-4 justify-center mb-6" id="about">
        <button
          onClick={() => setActiveTab("journey")}
          className={`px-4 py-2 rounded-md transition-all ${
            activeTab === "journey"
              ? "bg-sky-400 text-white"
              : "bg-transparent text-sky-300 hover:bg-sky-600/20"
          }`}
        >
          Journey
        </button>
        <button
          onClick={() => setActiveTab("workspace")}
          className={`px-4 py-2 rounded-md transition-all ${
            activeTab === "workspace"
              ? "bg-sky-400 text-white"
              : "bg-transparent text-sky-300 hover:bg-sky-600/20"
          }`}
        >
          Workspace
        </button>
        <button
          onClick={() => setActiveTab("techstack")}
          className={`px-4 py-2 rounded-md transition-all ${
            activeTab === "techstack"
              ? "bg-sky-400 text-white"
              : "bg-transparent text-sky-300 hover:bg-sky-600/20"
          }`}
        >
          Tech Stack
        </button>
      </div>
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {activeTab === "journey" ? (
          <div className="flex justify-center text-left flex-col">
            <div className="w-full flex text-center justify-center mb-8">
              <Image
                src="/buyuk.webp"
                width={400}
                height={400}
                alt="Picture"
                className="rounded-md border-sky-100 border-2"
              />
            </div>

            <div className="relative flex flex-col space-y-8 pl-6">
              <div className="absolute left-[9px] top-[40px] bottom-0 w-0.5 bg-sky-400/10" />

              {journeyData.map((item, index) => (
                <JourneyItem key={index} {...item} />
              ))}
            </div>
          </div>
        ) : activeTab === "workspace" ? (
          <div className="flex flex-col gap-6">
            {/* <div className="w-full flex text-center justify-center">
            <Image
              src="/workspace.webp"
              width={400}
              height={400}
              alt="Workspace"
              className="rounded-md border-sky-100 border-2"
            />
          </div> */}
            <div className="space-y-4">
              {workspaceData.map((section, index) => (
                <WorkspaceSection key={index} {...section} />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col">
            <TechStackSection
              title="Main Technologies"
              skills={techStackData.mainTech}
            />
            <TechStackSection title="Styling" skills={techStackData.styling} />
            <TechStackSection title="Backend" skills={techStackData.backend} />
            <TechStackSection title="Tools" skills={techStackData.tools} />
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Aboutme;
