"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useSectionInView } from "../hooks/useSectionInView";
import { type ExperienceData, experienceData } from "../lib/data";

const Experience = () => {
	const { ref } = useSectionInView("experience");
	const [selectedCompany, setSelectedCompany] = useState<string | null>(
		"Rmos Yazılım",
	);
	const [selectedExperience, setSelectedExperience] =
		useState<ExperienceData | null>(experienceData[0]);

	const handleCompanyClick = (company: string) => {
		const experience =
			experienceData.find((exp) => exp.company === company) || null;
		setSelectedCompany(company);
		setSelectedExperience(experience);
	};

	const uniqueCompanies = Array.from(
		new Set(experienceData.map((exp) => exp.company)),
	);

	const tabContentVariants: Variants = {
		initial: { opacity: 0, y: 10 },
		enter: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: -10 },
	};

	return (
		<div id="experience" ref={ref} className="w-full py-10">
			<div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl p-8 md:p-14 shadow-2xl">
				{/* Soft morning sky glow */}
				<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-200/[0.03] rounded-full blur-[120px] -z-10" />

				<div className="relative z-10 space-y-12">
					<div className="text-center space-y-4">
						<h2 className="text-4xl font-extralight tracking-tight text-white">
							Professional{" "}
							<span className="font-serif italic text-sky-200">Path</span>
						</h2>
						<p className="text-sky-100/40 text-sm tracking-[0.3em] uppercase font-bold">
							Career Timeline
						</p>
					</div>

					<div className="flex flex-col lg:flex-row gap-12">
						{/* Minimalist Tabs */}
						<div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-hide lg:w-1/4">
							{uniqueCompanies.map((company) => {
								const isSelected = selectedCompany === company;
								const companyData = experienceData.find(
									(exp) => exp.company === company,
								);
								return (
									<button
										key={company}
										onClick={() => handleCompanyClick(company)}
										className={`relative flex flex-col items-start md:px-6 px-4 md:py-5 py-3 rounded-2xl transition-all duration-500 md:min-w-[200px] min-w-fit text-left border ${
											isSelected
												? "bg-white/10 border-white/20 text-white shadow-xl scale-[1.02]"
												: "border-transparent text-white/40 hover:text-white/60"
										}`}
									>
										<span className="md:text-lg text-sm font-medium tracking-tight">
											{company}
										</span>
										<span className="text-xs font-bold uppercase tracking-widest md:mt-2 mt-1 opacity-60">
											{companyData?.date}
										</span>
										{isSelected && (
											<motion.div
												layoutId="activeExperienceTab"
												className="absolute inset-0 bg-white/5 border border-white/20 rounded-2xl -z-10"
												initial={false}
												transition={{
													type: "spring",
													bounce: 0.2,
													duration: 0.6,
												}}
											>
												{/* Soft corner glow */}
												<div className="absolute top-0 right-0 w-8 h-8 bg-sky-300/20 blur-xl rounded-full" />
												<div className="absolute bottom-0 left-0 w-8 h-8 bg-white/10 blur-xl rounded-full" />
											</motion.div>
										)}
									</button>
								);
							})}
						</div>

						{/* Elegant Content */}
						<div className="flex-1 lg:w-3/4 min-h-[450px]">
							<AnimatePresence mode="wait">
								{selectedExperience && (
									<motion.div
										key={selectedExperience.company}
										variants={tabContentVariants}
										initial="initial"
										animate="enter"
										exit="exit"
										transition={{ duration: 0.5, ease: "circOut" }}
										className="space-y-8"
									>
										<div className="flex items-center lg:flex-row flex-col gap-8">
											<div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-white/5 border border-white/10 p-4 flex items-center justify-center">
												<Image
													src={selectedExperience.image}
													alt={selectedExperience.company}
													width={60}
													height={60}
													className="object-contain"
													unoptimized
												/>
											</div>
											<div className="space-y-1 text-center">
												<h3 className="text-3xl font-medium text-white tracking-tight">
													{selectedExperience.title}
												</h3>
												<p className="text-sky-200/60 font-serif italic text-lg">
													{selectedExperience.dateWith}
												</p>
											</div>
										</div>

										<div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent" />

										<div className="space-y-6">
											{selectedExperience.description.map((item, index) => {
												if (Array.isArray(item)) {
													return (
														<div
															key={index}
															className="grid grid-cols-1 md:grid-cols-2 gap-4"
														>
															{item.map((subItem, subIndex) => (
																<div
																	key={subIndex}
																	className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-sky-100/70 text-sm font-light hover:bg-white/[0.05] transition-colors"
																>
																	<div className="w-1.5 h-1.5 rounded-full bg-sky-300/50" />
																	{subItem}
																</div>
															))}
														</div>
													);
												}
												return (
													<p
														key={index}
														className="text-sky-100/50 text-lg font-light leading-relaxed max-w-3xl"
													>
														{item}
													</p>
												);
											})}
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
