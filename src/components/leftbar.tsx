import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const LeftBar: React.FC = (): ReactNode => {
  return (
    <div className="w-1/3 h-screen flex flex-col py-20">
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

        <ul className="mt-8">
          <li className="text-xl py-1">1 - My Work</li>
          <li className="text-xl py-1">2 - About Me</li>
          <li className="text-xl py-1">3 - Contact</li>
        </ul>
      </div>
      <div className="mt-auto flex gap-5">
        <Image
          src="/kucuk.jpg"
          width={50}
          height={50}
          alt="Picture"
          className="
          rounded-full border-sky-200 border-2 
          "
        />
        <div className="flex items-center justify-between p-3 bg-zinc-900 rounded-md">
          <ul className="flex justify-between gap-4">
            <Link
              className="text-sm hover:text-sky-100 flex items-center gap-1"
              href="asd"
            >
              <FaGithub size={12} /> Github <FaExternalLinkAlt size={12} />
            </Link>
            <Link
              className="text-sm hover:text-sky-100 flex items-center gap-1"
              href="asd"
            >
              <FaLinkedin size={12} /> LinkedIn <FaExternalLinkAlt size={12} />
            </Link>
            <Link
              className="text-sm hover:text-sky-100 flex items-center gap-1"
              href="asd"
            >
              <FaSquareInstagram size={12} /> Instagram{" "}
              <FaExternalLinkAlt size={12} />
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
