"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Project = {
	title: string;
	desc: string;
	img: string;
	tech: string[]; // array of SVG paths or URLs
	link: string;
};

const projects: Project[] = [
	{
		title: "Open Docs",
		desc: "Open Source best Documentation website for libraries and frameworks.",
		img: "/od.png",
		tech: [
			"https://cdn.simpleicons.org/next.js/FFFFFF",
			"https://cdn.simpleicons.org/tailwindcss/06B6D4",
			"https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
			"https://cdn.worldvectorlogo.com/logos/gemini-icon-logo.svg",
			"https://cdn.simpleicons.org/vercel/FFFFFF"
		],
		link: "https://amethysts-beta.vercel.app",
	},
	{
		title: "Open Sync API",
		desc: "Central backend system for all types of Open Nova systems from here.",
		img: "/osa.png",
		tech: ["https://cdn.worldvectorlogo.com/logos/python-5.svg",
			"https://cdn.worldvectorlogo.com/logos/fastapi-1.svg",
			"https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
			"https://cdn.simpleicons.org/pydantic/FF004F"],
		link: "https://emeralds-beta.vercel.app",
	},
	{
		title: "Open Quantum",
		desc: "Knowledge Hub for information and other things for World of Quantum Computing.",
		img: "/oq.png",
		tech: ["https://cdn.simpleicons.org/next.js/FFFFFF",
			"https://cdn.simpleicons.org/tailwindcss/06B6D4",
			"https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
			"https://cdn.simpleicons.org/vercel/FFFFFF"],
		link: "https://rubys-beta.vercel.app",
	},

];

export default function Projects() {
	return (
		<section id="projects" className="py-20 px-8 bg-slate-950 ">
			<div className="px-20 mx-auto">
				<h2 className="text-5xl font-bold mb-32 text-rose-200 drop-shadow-[0_0_20px_rgb(255,46,158)] text-center">
					Developed Projects such as
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-20">
					{projects.map((proj, idx) => (
						<motion.div
							key={idx}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.98 }}
							className="relative group rounded-2xl hover:border-2 border-rose-200 hover:drop-shadow-[0_0_20px_rgb(255,46,158)] overflow-hidden shadow-lg bg-slate-900 flex flex-col"
						>
							{/* Project Image */}
							<div className="relative h-52 w-full">
								<Image
									src={proj.img}
									alt={proj.title}
									fill
									className="object-cover"
								/>
							</div>

							{/* Text content */}
							<div className="p-6 flex flex-col flex-1">
								{/* Header */}
								{/* Header with clickable arrow */}
								<h3 className="text-2xl text-rose-200 drop-shadow-[0_0_20px_rgb(255,46,158)] font-semibold mb-4 flex items-center justify-between">
									<span>{proj.title}</span>
									<a
										href={proj.link}
										target="_blank"
										rel="noopener noreferrer"
										className="ml-2 border px-2 rounded-full text-rose-400 hover:text-rose-200 hover:drop-shadow-[0_0_20px_rgb(255,46,158)] transition"
									>
										↗
									</a>
								</h3>

								{/* Description */}
								<p className="text-rose-100 text-sm mb-8">
									{proj.desc}
								</p>

								{/* Tech Stack */}
								<div className="flex flex-wrap gap-2">
									{proj.tech.map((techSrc, i) => (
										<div key={i} className="w-6 h-6">
											<img src={techSrc} alt="tech" width={24} height={24} />
										</div>
									))}
								</div>

							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>

	);
}
