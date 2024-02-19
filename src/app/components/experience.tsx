"use client";

import React, { useContext, useEffect, useState } from "react";
import { ExperienceData, experienceData } from "../lib/data";
import Tilt from "react-parallax-tilt";
import { Context, ContextType } from "../context/store";

type Props = {};

const Experience = (props: Props) => {
  const [selectedCompany, setSelectedCompany] = useState<string | null>(
    "Teknodev"
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
      const isInWorkSection = scrollTop >= 1300 && scrollTop <= 2000;
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

  return (
    <Tilt
      tiltEnable={false}
      scale={1.02}
      transitionSpeed={2500}
      style={{
        boxShadow:
          "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
      }}
      className="experience-tabs flex flex-col gap-6 text-white p-8 bg-zinc-900 rounded-md w-full min-h-72"
    >
      <h1 id="experience" className="text-xl text-sky-50 text-center">
        Experience
      </h1>

      <div className="flex gap-2">
        <div className="tab-titles flex flex-col gap-2 mr-2">
          {uniqueCompanies.map((company) => (
            <div
              key={company}
              className={`text-white text-center cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 border border-sky-300  dark:focus:ring-gray-700 transition-all ${
                selectedCompany !== company
                  ? "bg-transparent"
                  : " focus:outline-none dark:bg-sky-400 "
              }`}
              style={{ minWidth: "130px" }}
              onClick={() =>
                selectedCompany === company ? null : handleCompanyClick(company)
              }
            >
              {company}
            </div>
          ))}
        </div>

        {selectedExperience && (
          <div className="tab-content">
            <div className="experience-item">
              <h3 className="text-lg font-semibold">
                {selectedExperience.title}
              </h3>
              <p className="text-gray-600">{selectedExperience.date}</p>
              <p className="text-gray-300 font-extralight text-sm">
                {selectedExperience.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </Tilt>
  );
};

export default Experience;
