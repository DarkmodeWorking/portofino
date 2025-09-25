"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Project = {
  title: string;
  desc: string;
  img: string;
  tech: string[];
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
      "https://cdn.simpleicons.org/vercel/FFFFFF",
    ],
    link: "https://amethysts-beta.vercel.app",
  },
  {
    title: "Open Sync API",
    desc: "Central backend system for all types of Open Nova systems from here.",
    img: "/osa.png",
    tech: [
      "https://cdn.worldvectorlogo.com/logos/python-5.svg",
      "https://cdn.worldvectorlogo.com/logos/fastapi-1.svg",
      "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
      "https://cdn.simpleicons.org/pydantic/FF004F",
    ],
    link: "https://emeralds-beta.vercel.app",
  },
  {
    title: "Open Quantum",
    desc: "Knowledge Hub for information and other things for World of Quantum Computing.",
    img: "/oq.png",
    tech: [
      "https://cdn.simpleicons.org/next.js/FFFFFF",
      "https://cdn.simpleicons.org/tailwindcss/06B6D4",
      "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
      "https://cdn.simpleicons.org/vercel/FFFFFF",
    ],
    link: "https://rubys-beta.vercel.app",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-16 px-6 sm:px-12 md:px-20 overflow-hidden min-h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/vc2.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Section Content */}
      <div className="relative mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-20 md:mb-32 text-rose-100 drop-shadow-[0_0_20px_rgb(255,46,158)] text-center">
          Developed Projects such as
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-16 md:gap-20">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03, rotate: 0.5 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative group rounded-2xl overflow-hidden shadow-lg bg-slate-900/80 flex flex-col min-h-[320px] border border-transparent hover:border-rose-200/70 hover:drop-shadow-[0_0_25px_rgb(255,46,158)] transition-all duration-500"
            >
              <div className="relative h-40 sm:h-52 w-full">
                <Image
                  src={proj.img}
                  alt={proj.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out z-0"
                />
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-4 sm:p-6 flex flex-col flex-1 z-20">
                <h3 className="text-xl sm:text-2xl text-rose-200 drop-shadow-[0_0_20px_rgb(255,46,158)] font-semibold mb-3 sm:mb-4 flex items-center justify-between">
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

                <p className="text-rose-100 text-sm sm:text-base mb-6 sm:mb-8">
                  {proj.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((techSrc, i) => (
                    <img
                      key={i}
                      src={techSrc}
                      alt="tech"
                      className="w-5 h-5 sm:w-6 sm:h-6 opacity-70 group-hover:opacity-100"
                    />
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
