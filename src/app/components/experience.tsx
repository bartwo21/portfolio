"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import { ExperienceData, experienceData } from "../lib/data";
import Tilt from "react-parallax-tilt";
import { Context, ContextType } from "../context/store";
import { AnimatePresence, Variants, motion, useAnimate } from "framer-motion";
import Image from "next/image";

type Props = {};

const Experience = (props: Props) => {
  const [selectedCompany, setSelectedCompany] = useState<string | null>(
    "Robosme"
  );
  const [selectedExperience, setSelectedExperience] =
    useState<ExperienceData | null>(experienceData[0]);

  const { selectedSection, setSelectedSection } = useContext(
    Context
  ) as ContextType;

  const handleCompanyClick = (company: string) => {
    const experience =
      experienceData.find((exp) => exp.company === company) || null;
    setSelectedCompany(company);
    setSelectedExperience(experience);
  };

  const uniqueCompanies = Array.from(
    new Set(experienceData.map((exp) => exp.company)) // direk exp.company yazarak şirket adlarını içeren bir dizi oluşturur.
  ); //tekrarlanan şirket adlarını ortadan kaldırarak yalnızca benzersiz şirket adlarını içeren bir küme oluşturur.

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isInWorkSection = scrollTop >= 1000 && scrollTop <= 1600;
      if (isInWorkSection && selectedSection !== "experience") {
        setSelectedSection("experience");
      } else if (!isInWorkSection && selectedSection === "experience") {
        setSelectedSection("");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [selectedSection]);

  const tabContentVariants: Variants = {
    initial: {
      opacity: 0,
      y: 10,
    },
    enter: {
      y: 0,
      opacity: 1,
    },
    exit: {
      opacity: 0,
      y: -10,
    },
  };

  return (
    <div id="experience">
      <div
        style={{
          boxShadow:
            "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
        }}
        className="experience-tabs flex flex-col gap-6 text-white p-8 bg-transparent rounded-md w-full min-h-80"
      >
        <h1 className="text-xl text-sky-50 text-center">Experience</h1>

        <div className="flex lg:flex-row flex-col gap-2">
          <div className="tab-titles flex flex-col gap-2 mr-2">
            {uniqueCompanies.map((company) => (
              // if div have a underline then give layoutId = "underline"
              <div
                key={company}
                className={`text-center text-white border-2 shadow-[0_0px_9px_-2px_#54b4d3] active:shadow-none duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_0px_0px_0px_rgba(84,180,211,0.3),0_0px_14px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] border-sky-300 rounded-lg text-sm font-semibold px-2 py-2.5 transition-all cursor-pointer ${
                  selectedCompany !== company
                    ? "bg-transparent"
                    : " focus:outline-none dark:bg-sky-400 "
                }`}
                style={{ minWidth: "145px" }}
                onClick={() =>
                  selectedCompany === company
                    ? null
                    : handleCompanyClick(company)
                }
              >
                {company} <br />{" "}
                <p
                  className={`text-[11px] text-white ${
                    selectedCompany === company
                      ? "text-opacity-80"
                      : "text-opacity-30"
                  }`}
                >
                  {experienceData.find((exp) => exp.company === company)?.date}
                </p>
              </div>
            ))}
          </div>

          {selectedExperience && (
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedExperience.company}
                variants={tabContentVariants}
                initial="initial"
                animate="enter"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="experience-item md:min-h-[435px]"
              >
                <div className="flex gap-3 md:mt-1 mt-4">
                  <Image
                    src={selectedExperience.image}
                    width={50}
                    height={50}
                    className="rounded-md w-[50px] h-[50px] object-cover"
                    alt={selectedExperience.company}
                    unoptimized
                  />
                  <div>
                    <h3 className="text-lg font-semibold">
                      {selectedExperience.title}
                    </h3>
                    <p className="text-gray-600">
                      {selectedExperience.dateWith}
                    </p>
                  </div>
                </div>
                <hr className="mt-[13px] opacity-10" />
                <div className="text-gray-300 font-extralight lg:text-sm text-xs space-y-1 mt-2">
                  {selectedExperience.description.map((item, index) => {
                    if (Array.isArray(item)) {
                      return (
                        <ul
                          key={index}
                          className="list-inside ml-4 flex flex-col gap-1 py-2"
                        >
                          {item.map((subItem, subIndex) => (
                            <li
                              key={subIndex}
                              className=" px-2 bg-slate-900 bg-opacity-30 rounded-sm p-1 text-slate-400"
                            >
                              {subItem}
                            </li>
                          ))}
                        </ul>
                      );
                    } else {
                      return <p key={index}> {item}</p>;
                    }
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
