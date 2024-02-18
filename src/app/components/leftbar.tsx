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
    <div className="xl:w-1/3 w-1/2 h-screen flex flex-col pt-32 xl:sticky top-0 xl:gap-20 gap-6">
      <div className="flex flex-col justify-between gap-4 ">
        <h1 className="text-6xl font-medium text-sky-300">Bartu Çakır</h1>
        <p className="leading-7 text-xl">
          <strong className="text-white">Software Developer.</strong> A
          self-taught developer with an interest in{" "}
          <strong className="text-white">Computer Science</strong>. 🚀 Exploring
          opportunities and side projects. 💻 Currently specializing in{" "}
          <strong className="text-white">Front-end Development.</strong>
        </p>
        <div className="flex items-center gap-2">
          <div className="gap-2 relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </div>
          <p>Open to work</p>
        </div>

        <ul className="mt-8 gap-3 flex flex-col">
          <li
            onClick={() => {
              setSelectedSection("work");
              if (pathname === "/projects") router.push("/");
            }}
            className={`cursor-pointer w-4/6 transition-all font-extralight ${
              selectedSection == "work"
                ? "text-2xl font-semibold text-white"
                : "text-xl py-1"
            }`}
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
                : "text-xl py-1"
            }`}
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
                : "text-xl py-1"
            }`}
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
      <div className="mt-auto mb-16 flex gap-5">
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
      <div className="fixed bottom-0 left-1/5  p-2 bg-slate-300 rounded-t-2xl opacity-40">
        <p className="text-xs text-gray-500 text-center">
          Made with ❤️ by Bartu Çakır
        </p>
      </div>
    </div>
  );
};

export default LeftBar;
