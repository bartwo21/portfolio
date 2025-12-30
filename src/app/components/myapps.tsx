import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { FaGithub } from "react-icons/fa";
import { VscRunAll } from "react-icons/vsc";
import Tilt from "react-parallax-tilt";
import { useSectionInView } from "../hooks/useSectionInView";
import { myAppsData } from "../lib/data";

const MyApps: React.FC = () => {
	const { ref } = useSectionInView("work");

	return (
		<div
			id="my-apps"
			ref={ref}
			className="cards flex flex-col w-full gap-12 mb-20"
		>
			<div className="relative flex flex-col items-center">
				<motion.span
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className="text-[10px] tracking-[0.5em] text-sky-200/60 uppercase font-black mb-2"
				>
					Curated Projects
				</motion.span>
				<motion.h1
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					className="text-4xl 2xl:text-5xl font-extralight tracking-tight text-white mb-8"
				>
					My <span className="font-serif italic text-sky-200">Apps</span>
				</motion.h1>
				<div className="w-px h-12 bg-gradient-to-b from-sky-400/50 to-transparent" />
			</div>

			{myAppsData?.map((data) => (
				<motion.div
					key={data.name}
					initial={{ y: 40, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true, margin: "-100px" }}
				>
					<Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} scale={1} className="group">
						<div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 xl:p-12 flex flex-col lg:flex-row gap-12 items-center transition-all duration-700 hover:bg-white/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)]">
							{/* Cloud-like soft light */}
							<div className="absolute -right-20 -top-20 w-96 h-96 bg-sky-200/10 rounded-full blur-[120px] pointer-events-none" />
							<div className="absolute -left-20 -bottom-20 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none" />

							<div className="flex-1 space-y-6 z-10">
								<div className="space-y-4">
									<h2 className="text-3xl font-medium text-white tracking-tight">
										{data.name}
									</h2>
									<p className="text-sky-100/60 leading-relaxed text-base md:text-lg font-light max-w-xl">
										{data.description}
									</p>
								</div>

								<div className="flex flex-wrap gap-3">
									{data.topics?.map((topic) => (
										<span
											key={topic}
											className="px-4 py-1.5 text-[11px] tracking-wider font-bold bg-white/5 border border-white/10 rounded-full text-sky-100/80 backdrop-blur-sm"
										>
											{topic}
										</span>
									))}
								</div>

								<div className="flex items-center gap-6 pt-6">
									{data.html_url && (
										<Link
											href={data.html_url}
											target="_blank"
											className="text-white/40 hover:text-white transition-colors duration-300"
										>
											<FaGithub size={28} />
										</Link>
									)}
									<Link
										href={data.live_url}
										target="_blank"
										className="flex items-center gap-3 px-8 py-4 bg-sky-400/20 hover:bg-sky-400/30 border border-sky-400/20 rounded-2xl transition-all duration-300 text-sky-100 font-semibold text-sm tracking-wide"
									>
										<span>Visit App</span>
										<VscRunAll size={20} />
									</Link>
								</div>
							</div>

							<div className="relative w-full lg:w-[350px] 2xl:w-[450px] aspect-video overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
								<Link
									href={data.live_url}
									target="_blank"
									className="block w-full h-full"
								>
									<Image
										src={data.img ?? ""}
										alt={data.name}
										fill
										className="object-cover"
									/>
									<div className="absolute inset-0 bg-sky-900/5 mix-blend-overlay" />
								</Link>
							</div>
						</div>
					</Tilt>
				</motion.div>
			))}
		</div>
	);
};

export default MyApps;
