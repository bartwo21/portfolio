"use client";

import React, { ReactNode, useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { Context, ContextType } from "../context/store";
import { Link as LinkScroll } from "react-scroll";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const LeftBar: React.FC = (): ReactNode => {
  const { selectedSection, setSelectedSection } = useContext(
    Context
  ) as ContextType;
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname === "/projects") setSelectedSection("");
  }, [pathname]);

  return (
    <div className="w-1/2 min-[1208px]:h-screen min-[1208px]:sticky h-1/2 flex flex-col pt-32 top-0 xl:gap-20 gap-6 mr-8">
      <div className="flex flex-col justify-between gap-4 ">
        <h1 className="xl:text-6xl text-4xl font-medium text-sky-300">
          Bartu Çakır
        </h1>
        <p className="leading-7 text-xl w-11/12">
          <strong className="text-white">Software Developer.</strong> A
          self-taught developer with an interest in{" "}
          <strong className="text-white">Computer Science</strong>. 🚀 Exploring
          opportunities and side projects. 💻 Currently specializing in{" "}
          <strong className="text-white">Front-end Development.</strong>
        </p>
        <div className="flex items-center gap-2 mt-5">
          <div className="gap-2 relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </div>
          <p>Open to work</p>
        </div>
        <div className="mt-1 mb-2">
          <Link
            download
            href="/BartuCakirCV.pdf"
            className="bg-sky-400  text-white  py-2 px-4 rounded-md hover:bg-sky-300 transition-colors cursor-pointer"
            target="_blank"
          >
            Download Resume
          </Link>
        </div>
        <ul className="mt-8 gap-3 flex flex-col">
          <li
            onClick={() => {
              setSelectedSection("work");
              if (pathname === "/projects") router.push("/");
            }}
            className={`cursor-pointer transition-all font-extralight ${
              selectedSection == "work"
                ? "text-2xl font-semibold text-white"
                : "text-xl"
            }`}
            style={{ width: "100px" }}
          >
            <LinkScroll
              to="work"
              smooth={true}
              duration={500}
              onClick={() => {
                if (pathname === "/projects") router.push("/");
              }}
            >
              {" "}
              1 - Work
            </LinkScroll>
          </li>
          <li
            onClick={() => {
              setSelectedSection("about");
              if (pathname === "/projects") router.push("/");
            }}
            className={`cursor-pointer w-4/6 transition-all font-extralight ${
              selectedSection == "about"
                ? "text-2xl font-semibold text-white"
                : "text-xl"
            }`}
            style={{ width: "115px" }}
          >
            <LinkScroll
              to="about"
              smooth={true}
              duration={500}
              onClick={() => {
                if (pathname === "/projects") router.push("/");
              }}
            >
              {" "}
              2 - About
            </LinkScroll>
          </li>
          <li
            onClick={() => {
              setSelectedSection("contact");
              if (pathname === "/projects") router.push("/");
            }}
            className={`cursor-pointer w-4/6 transition-all font-extralight ${
              selectedSection == "contact"
                ? "text-2xl font-semibold text-white"
                : "text-xl"
            }`}
            style={{ width: "135px" }}
          >
            <LinkScroll
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => {
                if (pathname === "/projects") router.push("/");
              }}
            >
              {" "}
              3 - Contact
            </LinkScroll>
          </li>
        </ul>
      </div>
      <div className="xl:mt-auto mt-7 mb-16 flex gap-5">
        <Image
          src="/kucuk.jpg"
          width={50}
          height={50}
          alt="Picture"
          className="
          rounded-full border-sky-200 border-2 hidden md:block 
          "
        />
        <div className="flex items-center justify-between p-3 bg-zinc-900 rounded-md">
          <ul className="flex justify-between gap-4 md:flex-row flex-col">
            <Link
              className="text-sm hover:text-sky-100 flex items-center gap-1"
              href="https://github.com/bartwo21"
              target="_blank"
            >
              <FaGithub size={12} /> Github <FaExternalLinkAlt size={12} />
            </Link>
            <Link
              className="text-sm hover:text-sky-100 flex items-center gap-1"
              href="https://www.linkedin.com/in/bartwocakir/"
              target="_blank"
            >
              <FaLinkedin size={12} /> LinkedIn <FaExternalLinkAlt size={12} />
            </Link>
            <Link
              className="text-sm hover:text-sky-100 flex items-center gap-1"
              href="https://www.instagram.com/bar.two/?hl=tr"
              target="_blank"
            >
              <FaSquareInstagram size={12} /> Instagram{" "}
              <FaExternalLinkAlt size={12} />
            </Link>
          </ul>
        </div>
      </div>
      <div className="fixed bottom-0 left-1/5 z-10 p-2 bg-slate-300 rounded-t-2xl opacity-40">
        <p className="text-xs text-gray-800 text-center">
          Made with ❤️ by Bartu Çakır
        </p>
      </div>
    </div>
  );
};

export default LeftBar;
