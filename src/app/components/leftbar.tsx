"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type React from "react";
import { type ReactNode, useContext, useEffect } from "react";
import { FaGithubSquare as FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { ImMail as IoIosMail } from "react-icons/im";
import { Link as LinkScroll } from "react-scroll";
import { Context, type ContextType } from "../context/store";
import AnimatedText from "./animatedText";
import MagicButton from "./MagicButton";

const LeftBar: React.FC = (): ReactNode => {
	const { selectedSection, setSelectedSection } = useContext(
		Context,
	) as ContextType;
	const pathname = usePathname();
	const router = useRouter();

	useEffect(() => {
		if (pathname === "/projects") setSelectedSection("");
	}, [pathname, setSelectedSection]);

	const navItems = [
		{ id: "work", label: "Work", number: "01" },
		{ id: "experience", label: "Experience", number: "02" },
		{ id: "about", label: "About", number: "03" },
		{ id: "contact", label: "Contact", number: "04" },
	];

	return (
		<div className="md:w-1/3 w-full min-[1208px]:h-screen min-[1208px]:sticky h-auto mr-auto flex flex-col 2xl:pt-32 xl:pt-20 pt-14 top-0 2xl:gap-24 xl:gap-14 gap-12 px-6 md:px-0">
			{/* Header Section */}
			<div className="space-y-6">
				<div className="space-y-2">
					<motion.span
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}
						className="text-sky-300/60 font-black tracking-[0.5em] uppercase text-[10px] block"
					>
						Software Engineer
					</motion.span>
					<h1 className="2xl:text-7xl xl:text-5xl text-5xl font-extralight tracking-tighter text-white leading-none">
						Bartu <span className="font-serif italic text-sky-200">Çakır</span>
					</h1>
				</div>

				<div className="leading-relaxed text-sm md:text-base w-full xl:w-11/12 text-sky-100/50 font-light italic">
					<AnimatedText
						words="Building immersive digital experiences with a focus on clean aesthetics and high-performance architecture. Currently exploring the intersections of design and engineering."
						delay={0.2}
					/>
				</div>

				{/* Availability Badge */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.2 }}
					className="flex items-center gap-3 py-2 px-4 bg-white/5 border border-white/10 rounded-full w-fit backdrop-blur-sm"
				>
					<div className="relative flex h-2 w-2">
						<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
						<span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
					</div>
					<span className="text-[10px] font-bold tracking-widest uppercase text-sky-100/80">
						Available for new projects
					</span>
				</motion.div>
			</div>

			{/* Navigation Section */}
			<nav>
				<motion.ul
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1 }}
					className="space-y-4"
				>
					{navItems.map((item) => {
						const isActive = selectedSection === item.id;
						return (
							<li
								key={item.id}
								onClick={() => {
									setSelectedSection(item.id);
									if (pathname === "/projects") router.push("/");
								}}
								className="group w-fit"
							>
								<LinkScroll
									to={item.id}
									smooth={true}
									duration={500}
									className="flex items-center gap-6 cursor-pointer py-1"
								>
									<span
										className={`text-[10px] font-black tracking-widest transition-colors duration-500 ${isActive ? "text-sky-300" : "text-white/20 group-hover:text-white/40"}`}
									>
										{item.number}
									</span>
									<span
										className={`text-2xl tracking-tight transition-all duration-500 ${isActive ? "text-white font-medium pl-4" : "text-white/40 font-extralight group-hover:text-white group-hover:pl-2"}`}
									>
										{item.label}
									</span>
								</LinkScroll>
							</li>
						);
					})}
				</motion.ul>
			</nav>

			{/* Footer Section */}
			<div className="xl:mt-auto space-y-8 pb-12">
				<div className="flex flex-col gap-6">
					<MagicButton
						text="Get Resume"
						href="/BartuCakirCV.pdf"
						target="_blank"
						className="w-full xl:w-64"
					/>

					<div className="flex items-center gap-6 ml-2">
						<Link
							className="text-white/30 hover:text-sky-300 transition-all duration-300 hover:scale-110"
							href="https://github.com/bartwo21"
							target="_blank"
						>
							<FaGithub size={24} />
						</Link>
						<Link
							className="text-white/30 hover:text-sky-300 transition-all duration-300 hover:scale-110"
							href="https://www.linkedin.com/in/bartwocakir/"
							target="_blank"
						>
							<FaLinkedin size={24} />
						</Link>
						<Link
							className="text-white/30 hover:text-sky-300 transition-all duration-300 hover:scale-110"
							href="https://www.instagram.com/bar.two/?hl=tr"
							target="_blank"
						>
							<FaSquareInstagram size={24} />
						</Link>
						<Link
							className="text-white/30 hover:text-sky-300 transition-all duration-300 hover:scale-110"
							href="mailto:bartucakir21@gmail.com"
						>
							<IoIosMail size={24} />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LeftBar;
