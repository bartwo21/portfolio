"use client";

import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Context, ContextType } from "../context/store";
import Tilt from "react-parallax-tilt";

type Props = {};

const Aboutme = (props: Props) => {
  const { selectedSection, setSelectedSection } = useContext(
    Context
  ) as ContextType;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isInWorkSection = scrollTop >= 600 && scrollTop <= 1300;
      if (isInWorkSection && selectedSection !== "about") {
        setSelectedSection("about");
      } else if (!isInWorkSection && selectedSection === "about") {
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
      className="about-me min-h-1/2 min-w-min p-8 bg-zinc-900 rounded-md"
    >
      <h1 id="about" className="text-xl text-sky-50 mb-6 text-center">
        About Me
      </h1>
      <div className="flex justify-center text-left flex-col">
        <div className="w-full flex text-center justify-center">
          <Image
            src="/buyuk.webp"
            width={400}
            height={400}
            alt="Picture"
            className="rounded-md border-sky-100 border-2"
          />
        </div>
        <div className="">
          <p className="md:leading-5 leading-4 md:text-sm text-xs p-2 mt-5 w-full">
            Hi, I'm Bartu, a 4th-year student majoring in{" "}
            <span className="text-sky-300">Math. and Computer Science</span> at
            Eskişehir Osmangazi University. I'm also pursuing a{" "}
            <span className="text-sky-300">Computer Programming</span> associate
            degree at Anadolu University. Currently, I'm focused on enhancing my
            skills in React, TypeScript, and Next.js. I constantly strive to
            undertake projects to improve myself and stay updated on industry
            developments. My education in both mathematics and computer science,
            along with practical software development skills, shapes my
            versatile approach. In addition to university life in Eskişehir,
            Turkey, my distance education in Computer Programming provides a
            broad perspective. Technologies I've recently worked with include
            <span className="text-sky-300">
              {" "}
              TypeScript, React, Next.js, TailwindCSS, and Node.js.
            </span>
          </p>
        </div>
      </div>
    </Tilt>
  );
};

export default Aboutme;
