"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import type React from "react";
import { useState } from "react";
import { useSectionInView } from "../hooks/useSectionInView";
import type { JourneyItem, TechStackItem, WorkspaceItem } from "../lib/data";
import { journeyData, techStackData, workspaceData } from "../lib/data";

const JourneyItemComponent: React.FC<JourneyItem> = ({
	year,
	title,
	description,
	highlights,
}) => (
	<div className="relative pl-12 pb-12 group">
		<div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border border-sky-300 bg-transparent flex items-center justify-center">
			<div className="w-1 h-1 bg-sky-300 rounded-full group-hover:scale-[2] transition-transform duration-500" />
		</div>
		<div className="space-y-3">
			<div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
				<span className="text-sky-200 font-serif italic text-xl">{year}</span>
				<h3 className="text-white font-medium text-lg">{title}</h3>
			</div>
			<p className="text-sky-100/50 text-base font-light leading-relaxed max-w-2xl">
				{description}
			</p>
			{highlights && (
				<div className="flex flex-wrap gap-2 pt-2">
					{highlights.map((h, i) => (
						<span
							key={i}
							className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] text-sky-100/70 font-bold uppercase tracking-widest"
						>
							{h}
						</span>
					))}
				</div>
			)}
		</div>
	</div>
);

const WorkspaceSectionComponent: React.FC<WorkspaceItem> = ({
	title,
	items,
}) => (
	<div className="space-y-6">
		<h3 className="text-white font-medium tracking-tight text-xl">{title}</h3>
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
			{items.map((item, itemIndex) => (
				<div
					key={itemIndex}
					className="flex items-center justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-sky-300/30 transition-all group"
				>
					<span className="text-sky-100/70 text-sm font-medium">
						{item.name}
					</span>
					{item.link && (
						<a
							href={item.link}
							target="_blank"
							rel="noopener noreferrer"
							className="text-[10px] text-sky-300/60 hover:text-sky-300 font-black tracking-widest uppercase transition-colors"
						>
							Link
						</a>
					)}
				</div>
			))}
		</div>
	</div>
);

const TechStackSectionComponent: React.FC<{
	title: string;
	skills: TechStackItem[];
}> = ({ title, skills }) => (
	<div className="space-y-8">
		<div className="flex items-center gap-4">
			<div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
			<h3 className="text-sky-200/40 font-bold tracking-[0.3em] uppercase text-[11px]">
				{title}
			</h3>
			<div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
		</div>
		<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
			{skills.map((skill, index) => (
				<motion.div
					key={index}
					whileHover={{ y: -4 }}
					className="flex flex-col items-center gap-4 group"
				>
					<div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center transition-all duration-500 group-hover:bg-white/[0.08] group-hover:border-white/20 group-hover:shadow-2xl">
						<skill.icon
							className={`text-2xl ${skill.color} opacity-60 group-hover:opacity-100 transition-opacity`}
						/>
					</div>
					<span className="text-[10px] text-sky-100/40 font-bold uppercase tracking-widest text-center">
						{skill.name}
					</span>
				</motion.div>
			))}
		</div>
	</div>
);

const Aboutme = () => {
	const { ref } = useSectionInView("about");
	const [activeTab, setActiveTab] = useState<
		"journey" | "workspace" | "techstack"
	>("journey");

	return (
		<div id="about" ref={ref} className="w-full py-10">
			<div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl p-8 md:p-16 shadow-2xl">
				{/* Editorial Layout Header */}
				<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
					<div className="space-y-4 lg:text-left text-center">
						<span className="text-sky-300/60 font-black tracking-[0.4em] uppercase text-xs">
							Curriculum Vitae test deneme bu ne?
						</span>
						<h2 className="text-5xl md:text-7xl font-extralight tracking-tighter text-white">
							About{" "}
							<span className="font-serif italic text-sky-200">Bartu</span>
						</h2>
					</div>

					<div className="flex flex-col md:flex-row bg-white/5 p-1.5 rounded-2xl border border-white/10 backdrop-blur-sm">
						{["journey", "workspace", "techstack"].map((tab) => (
							<button
								key={tab}
								onClick={() => setActiveTab(tab as any)}
								className={`md:px-6 px-4 md:py-3 py-2 rounded-xl text-xs font-bold tracking-widest uppercase transition-all duration-500 ${
									activeTab === tab
										? "bg-white text-sky-950 shadow-lg"
										: "text-white/40 hover:text-white/70"
								}`}
							>
								{tab}
							</button>
						))}
					</div>
				</div>

				<AnimatePresence mode="wait">
					<motion.div
						key={activeTab}
						initial={{ opacity: 0, x: 10 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -10 }}
						transition={{ duration: 0.6, ease: "circOut" }}
					>
						{activeTab === "journey" ? (
							<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
								<div className="lg:col-span-3 space-y-8">
									<div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
										<Image
											src="/buyuk.webp"
											alt="Bartu"
											fill
											className="object-cover"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-sky-950/40 to-transparent" />
									</div>
									<p className="text-sky-100/40 text-sm font-light leading-relaxed italic">
										Building digital experiences with a focus on clean
										aesthetics and meaningful interactions.
									</p>
								</div>

								<div className="lg:col-span-9 relative">
									<div className="absolute left-[7.5px] top-[10px] bottom-0 w-px bg-gradient-to-b from-sky-300/40 to-transparent" />
									{journeyData.map((item, index) => (
										<JourneyItemComponent key={index} {...item} />
									))}
								</div>
							</div>
						) : activeTab === "workspace" ? (
							<div className="space-y-16">
								{workspaceData.map((section, index) => (
									<WorkspaceSectionComponent key={index} {...section} />
								))}
							</div>
						) : (
							<div className="space-y-20">
								<TechStackSectionComponent
									title="Primary Core"
									skills={techStackData.mainTech}
								/>
								<TechStackSectionComponent
									title="Design & Visuals"
									skills={techStackData.styling}
								/>
								<TechStackSectionComponent
									title="Infrastructure"
									skills={techStackData.backend}
								/>
								<TechStackSectionComponent
									title="Workflow"
									skills={techStackData.tools}
								/>
							</div>
						)}
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
};

export default Aboutme;
