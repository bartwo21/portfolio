"use client";

import type React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { sendMail } from "../lib/mail";
import "react-toastify/dist/ReactToastify.css";
import { useSectionInView } from "../hooks/useSectionInView";
import MagicButton from "./MagicButton";

export type FormData = {
	name: string;
	email: string;
	message: string;
};

const Contact = () => {
	const { ref } = useSectionInView("contact");
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);

	const send = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!formData.name || !formData.email || !formData.message) {
			toast.error("Please fill in all fields!");
			return;
		}
		try {
			setLoading(true);
			await sendMail({
				to: "bartuportfolio@gmail.com",
				name: formData.name,
				subject: "Portfolio Contact",
				body: `
          <h1>${formData.name}</h1>
          <h3>From ${formData.email}</h3>
          <p>${formData.message}</p>`,
			});
			toast.success("Message sent successfully!");
			setFormData({ name: "", email: "", message: "" });
		} catch {
			toast.error("An error occurred while sending the message!");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div id="contact" ref={ref} className="w-full py-20">
			<div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl p-8 md:p-16 shadow-2xl">
				{/* Soft daylight light source */}
				<div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-sky-200/[0.03] rounded-full blur-[150px] pointer-events-none" />

				<div className="relative z-10 max-w-4xl mx-auto">
					<div className="text-center mb-16 space-y-4">
						<h2 className="text-5xl font-extralight tracking-tight text-white">
							Let&apos;s{" "}
							<span className="font-serif italic text-sky-200">Connect</span>
						</h2>
						<p className="text-sky-100/40 text-xs tracking-[0.4em] uppercase font-black">
							Open for new horizons
						</p>
					</div>

					<form onSubmit={send} className="space-y-8">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="space-y-3">
								<label className="text-[10px] uppercase tracking-[0.3em] font-black text-white/40 ml-2">
									Name
								</label>
								<input
									type="text"
									placeholder="Bartu Cakir"
									className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-8 text-white placeholder:text-white/20 outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-500 backdrop-blur-md"
									onChange={(e) =>
										setFormData({ ...formData, name: e.target.value })
									}
									value={formData.name}
									maxLength={40}
								/>
							</div>
							<div className="space-y-3">
								<label className="text-[10px] uppercase tracking-[0.3em] font-black text-white/40 ml-2">
									Email
								</label>
								<input
									type="email"
									placeholder="hello@example.com"
									className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-8 text-white placeholder:text-white/20 outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-500 backdrop-blur-md"
									onChange={(e) =>
										setFormData({ ...formData, email: e.target.value })
									}
									value={formData.email}
									maxLength={40}
								/>
							</div>
						</div>

						<div className="space-y-3">
							<label className="text-[10px] uppercase tracking-[0.3em] font-black text-white/40 ml-2">
								Message
							</label>
							<textarea
								rows={6}
								placeholder="Share your thoughts or project ideas..."
								className="w-full bg-white/5 border border-white/10 rounded-3xl py-6 px-8 text-white placeholder:text-white/20 outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-500 backdrop-blur-md resize-none"
								onChange={(e) =>
									setFormData({ ...formData, message: e.target.value })
								}
								value={formData.message}
								maxLength={500}
							/>
						</div>

						<div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
							<MagicButton
								text="Send Message"
								type="submit"
								loading={loading}
								className="w-full sm:flex-1 h-16"
							/>
							{/* <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="h-px flex-1 bg-white/10 hidden sm:block w-12" />
                <MagicButton
                  text="Calendly"
                  href="https://calendly.com/bartucakir/30min"
                  target="_blank"
                  className="w-full sm:w-auto bg-white/5 border-white/10 h-16"
                />
              </div> */}
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
