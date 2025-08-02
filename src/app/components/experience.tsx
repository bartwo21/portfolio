"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import { ExperienceData, experienceData } from "../lib/data";
import { Context, ContextType } from "../context/store";
import { AnimatePresence, Variants, motion, useAnimate } from "framer-motion";
import Image from "next/image";
import MagicButton from "./MagicButton";
import { GoArrowUpRight } from "react-icons/go";

const Experience = () => {
  const [selectedCompany, setSelectedCompany] = useState<string | null>(
    "Rmos Yazılım"
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
          <div className="tab-titles flex flex-col gap-3 mr-2">
            {uniqueCompanies.map((company) => {
              const isSelected = selectedCompany === company;
              const companyData = experienceData.find((exp) => exp.company === company);
              return (
                <div key={company} className="flex flex-col gap-1">
                  <MagicButton
                    text={`${company}\n${companyData?.date}`}
                    onClick={() =>
                      isSelected ? null : handleCompanyClick(company)
                    }
                    type="button"
                    className="min-h-14 !flex-col !items-center whitespace-pre-line"
                    isActive={isSelected}
                  />
                </div>
              );
            })}
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
