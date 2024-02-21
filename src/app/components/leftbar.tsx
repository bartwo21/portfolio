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
import { motion } from "framer-motion";
import AnimatedText from "./animatedText";
import { IoIosMail } from "react-icons/io";

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
    <div className="md:w-1/2 w-4/6 min-[1208px]:h-screen min-[1208px]:sticky h-1/2 flex flex-col md:pt-32 pt-14 top-0 xl:gap-20 gap-6 mr-8">
      <div className="flex flex-col justify-between gap-3 ">
        <h1 className="xl:text-6xl text-4xl font-medium text-sky-300">
          <AnimatedText text="Bartu Çakır" delay={1} />
        </h1>
        <div className="leading-7 text-lg w-11/12 text-white">
          <AnimatedText
            words="Software Developer.A self-taught developer with an interest in Computer Science.🚀 Exploring opportunities and side projects. 💻 Currently specializing in Front-end Development."
            delay={0.5}
          />
        </div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{
            type: "spring",
            damping: "12",
            stiffness: "50",
            duration: 1.5,
            delay: 1.2,
          }}
          className="flex items-center gap-2 mt-5"
        >
          <div className="gap-2 relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </div>
          <p>Open to work</p>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.5, delay: 1.5 }}
          className="mt-1 mb-2"
        >
          <Link
            download
            href="/BartuCakirCV.pdf"
            className="xl:w-1/4 w-1/2 text-center text-white border-2 hover:text-sky-300 shadow-[0_0px_9px_-2px_#54b4d3] active:shadow-none duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_0px_0px_0px_rgba(84,180,211,0.3),0_0px_14px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] border-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 transition-all"
            target="_blank"
          >
            Download Resume
          </Link>
        </motion.div>
        <motion.ul
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1.5, delay: 1 }}
          className="mt-8 gap-3 flex flex-col"
        >
          <li
            onClick={() => {
              setSelectedSection("work");
              if (pathname === "/projects") router.push("/");
            }}
            className={`cursor-pointer w-4/6 transition-all font-extralight ${
              selectedSection === "work"
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
              className="relative inline-block group"
            >
              1 - Work
              <span
                className={`absolute -bottom-1 left-0 right-0 h-0.5 origin-left bg-sky-300 transform scale-x-0 transition-transform duration-250 ease-in-out ${
                  pathname === "/" && selectedSection === "work"
                    ? "scale-x-100"
                    : ""
                }`}
              ></span>
            </LinkScroll>
          </li>
          <li
            onClick={() => {
              setSelectedSection("about");
              if (pathname === "/projects") router.push("/");
            }}
            className={`cursor-pointer w-4/6 transition-all font-extralight ${
              selectedSection === "about"
                ? "text-2xl font-semibold text-white"
                : "text-xl"
            }`}
            style={{ width: "110px" }}
          >
            <LinkScroll
              to="about"
              smooth={true}
              duration={500}
              onClick={() => {
                if (pathname === "/projects") router.push("/");
              }}
              className="relative inline-block group"
            >
              2 - About
              <span
                className={`absolute -bottom-1 left-0 right-0 h-0.5 origin-left bg-sky-300 transform scale-x-0 transition-transform duration-250 ease-in-out ${
                  pathname === "/" && selectedSection === "about"
                    ? "scale-x-100"
                    : ""
                }`}
              ></span>
            </LinkScroll>
          </li>
          <li
            onClick={() => {
              setSelectedSection("experience");
              if (pathname === "/projects") router.push("/");
            }}
            className={`cursor-pointer w-4/6 transition-all font-extralight ${
              selectedSection === "experience"
                ? "text-2xl font-semibold text-white"
                : "text-xl"
            }`}
            style={{ width: "170px" }}
          >
            <LinkScroll
              to="experience"
              smooth={true}
              duration={500}
              onClick={() => {
                if (pathname === "/projects") router.push("/");
              }}
              className="relative inline-block group"
            >
              3 - Experience
              <span
                className={`absolute -bottom-1 left-0 right-0 h-0.5 origin-left bg-sky-300 transform scale-x-0 transition-transform duration-250 ease-in-out ${
                  pathname === "/" && selectedSection === "experience"
                    ? "scale-x-100"
                    : ""
                }`}
              ></span>
            </LinkScroll>
          </li>
          <li
            onClick={() => {
              setSelectedSection("contact");
              if (pathname === "/projects") router.push("/");
            }}
            className={`cursor-pointer w-4/6 transition-all font-extralight ${
              selectedSection === "contact"
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
              className="relative inline-block group"
            >
              4 - Contact
              <span
                className={`absolute -bottom-1 left-0 right-0 h-0.5 origin-left bg-sky-300 transform scale-x-0 transition-transform duration-250 ease-in-out ${
                  pathname === "/" && selectedSection === "contact"
                    ? "scale-x-100"
                    : ""
                }`}
              ></span>
            </LinkScroll>
          </li>
        </motion.ul>
      </div>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.5 }}
        className="xl:mt-auto mt-7 mb-16 flex gap-5"
      >
        <div className="flex flex-col items-left gap-2 justify-between p-2 px-4 bg-zinc-900 rounded-md">
          <ul className="flex justify-between gap-2 md:flex-row flex-col">
            <Link
              className="text-sm hover:text-sky-100 flex items-center gap-1 mr-2"
              href="https://github.com/bartwo21"
              target="_blank"
            >
              <FaGithub size={12} /> Github <FaExternalLinkAlt size={12} />
            </Link>
            <Link
              className="text-sm hover:text-sky-100 flex items-center gap-1 mr-2"
              href="https://www.linkedin.com/in/bartwocakir/"
              target="_blank"
            >
              <FaLinkedin size={12} /> LinkedIn <FaExternalLinkAlt size={12} />
            </Link>
            <Link
              className="text-sm hover:text-sky-100 flex items-center gap-1 mr-2"
              href="https://www.instagram.com/bar.two/?hl=tr"
              target="_blank"
            >
              <FaSquareInstagram size={12} /> Instagram{" "}
              <FaExternalLinkAlt size={12} />
            </Link>
          </ul>
          <Link
            className="text-sm hover:text-sky-100 flex items-center gap-1"
            href="mailto:bartucakir21@gmail.com"
          >
            <IoIosMail size={16} /> bartucakir21@gmail.com{" "}
            <FaExternalLinkAlt size={12} />
          </Link>
        </div>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.5 }}
        className="fixed bottom-0 left-1/5 z-10 p-2 bg-slate-300 rounded-t-2xl opacity-40"
      >
        <p className="text-xs text-gray-800 text-center">
          Made with ❤️ by Bartu Çakır
        </p>
      </motion.div>
    </div>
  );
};

export default LeftBar;
