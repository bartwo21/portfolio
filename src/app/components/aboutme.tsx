"use client";

import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Context, ContextType } from "../context/store";
import { Tilt } from "@jdion/tilt-react";

type Props = {};

const Aboutme = (props: Props) => {
  const { selectedSection, setSelectedSection } = useContext(
    Context
  ) as ContextType;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isInWorkSection = scrollTop >= 600 && scrollTop <= 1000;
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
    <div
      style={{
        boxShadow:
          "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
      }}
      className="about-me min-h-1/2 min-w-min p-3 bg-zinc-900 rounded-md"
    >
      <h1 id="about" className="text-xl text-sky-50 mb-3 text-center">
        About Me
      </h1>
      <div className="flex justify-center text-left flex-col">
        <div className="w-full flex text-center justify-center">
          <Image
            src="/buyuk.jpg"
            width={400}
            height={400}
            alt="Picture"
            className="rounded-md border-sky-100 border-2"
          />
        </div>
        <div className="">
          <p className="leading-6 text-sm p-2 mt-5 w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            consequatur sed delectus, facilis numquam iure, quo reprehenderit
            explicabo temporibus nesciunt iusto tempora doloremque labore
            recusandae? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sapiente, cumque. Similique, voluptatum rem. Provident assumenda
            voluptatem, quibusdam praesentium nihil illum dolores voluptate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
