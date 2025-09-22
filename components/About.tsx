"use client";

import { motion } from "framer-motion";

type TimelineEvent = {
  year: string;
  title: string;
  desc: string;
};

const edu: TimelineEvent[] = [
  { year: "2010", title: "2020", desc: "ICSE - St. Xaviers Instituition" },
  { year: "2020", title: "2022", desc: "ISC (Science) - St. Xaviers Instituition" },
  { year: "2022", title: "2026", desc: "BTech (CSE) - Guru Nanak Institute of Technology" },
];

const work: TimelineEvent[] = [
  { year: "Dec 2024", title: "Apr 2025", desc: "Software Developer Intern - Noi Software Pvt. Ltd." }
];

export default function About() {
  return (
    <section id="about" className="py-20 px-8 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-rose-200 drop-shadow-[0_0_20px_rgb(255,46,158)] mb-32 text-center">
          Get to know about me
        </h2>

        <p className="text-3xl pb-10">Education</p>

        <div className="relative border-l-2 border-rose-200  ml-4">
          {edu.map((event, idx) => (
            <motion.div
              key={idx}
              className="mb-10 ml-6 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              {/* Circle */}
              <span className="absolute -left-5 top-0 w-4 h-4 bg-rose-200 drop-shadow-[0_0_20px_rgb(255,46,158)] rounded-full border-2 border-gray-950"></span>

              {/* Content */}
              <h3 className="text-xl font-semibold text-rose-200 drop-shadow-[0_0_20px_rgb(255,46,158)]">{event.year} — {event.title}</h3>
              <p className="text-white mt-1">{event.desc}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-3xl pb-10">Work Experience</p>

        <div className="relative border-l-2 border-rose-200  ml-4">
          {work.map((event, idx) => (
            <motion.div
              key={idx}
              className="mb-10 ml-6 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              {/* Circle */}
              <span className="absolute -left-5 top-0 w-4 h-4 bg-rose-200 drop-shadow-[0_0_20px_rgb(255,46,158)] rounded-full border-2 border-gray-950"></span>

              {/* Content */}
              <h3 className="text-xl font-semibold text-rose-200 drop-shadow-[0_0_20px_rgb(255,46,158)]">{event.year} — {event.title}</h3>
              <p className="text-white mt-1">{event.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
