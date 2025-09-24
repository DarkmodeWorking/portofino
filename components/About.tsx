"use client";

import { motion } from "framer-motion";

type TimelineEvent = {
  year: string;
  title: string;
  desc: string;
  img: string;
};

const edu: TimelineEvent[] = [
  { year: "2010 — 2020", title: "ICSE", desc: "St. Xaviers Instituition", img: "https://media.licdn.com/dms/image/v2/D4D0BAQHCqC1EokZHgA/company-logo_200_200/company-logo_200_200/0/1686644200230/st_xaviers_institution_logo?e=1761782400&v=beta&t=M2i0kWhM6c1EacYG4fb8FH7a7RcmhowOjLU1f2PATPo" },
  { year: "2020 — 2022", title: "ISC (Science)", desc: "St. Xaviers Instituition", img: "https://media.licdn.com/dms/image/v2/D4D0BAQHCqC1EokZHgA/company-logo_200_200/company-logo_200_200/0/1686644200230/st_xaviers_institution_logo?e=1761782400&v=beta&t=M2i0kWhM6c1EacYG4fb8FH7a7RcmhowOjLU1f2PATPo" },
  { year: "2022 — 2026", title: "BTech CSE", desc: "Guru Nanak Institute of Technology", img: "https://media.licdn.com/dms/image/v2/C4D0BAQGVdTueWoZ0Eg/company-logo_100_100/company-logo_100_100/0/1660843902959?e=1761782400&v=beta&t=yjKk6Gt2c0uXfSHEUtZnZ3CMpfhAAikfLsJo9pyt0wE" },
];

const work: TimelineEvent[] = [
  { year: "Dec 24 — Apr 25", title: "SDE Intern", desc: "Noi Software Pvt. Ltd.", img: "https://media.licdn.com/dms/image/v2/C5103AQFu6tOpQaxwKg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1560429085017?e=1761782400&v=beta&t=nvGSjqnATq4yV7EwZeGMFS0xYfKOoQSBcF03rUxKMCg" },
  { year: "Jun 25 — Sep 25", title: "Lead Organizer", desc: "MetaMorph 2K25", img: "https://media.licdn.com/dms/image/v2/D560BAQHxrktwDs6A_Q/company-logo_200_200/B56Zc7Fc5_GQAI-/0/1749042976718/metamorph2k25_logo?e=1761782400&v=beta&t=zUgITNJlm86uu8wg3Bh4ypmEi5uZnAqkuAK9dvddLc4"}
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 px-8 overflow-hidden min-h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/vc.png')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-rose-100 drop-shadow-[0_0_20px_rgb(255,46,158)] mb-32 text-center">
          Get to know about me
        </h2>

        {/* Grid for timelines */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <p className="text-3xl pb-10">Education</p>
            <div className="relative border-l-2 border-rose-200 ml-4">
              {edu.map((event, idx) => (
                <motion.div
                  key={idx}
                  className="mb-10 ml-6 flex items-start gap-6 px-10 py-4 rounded-2xl bg-slate-900/80 relative"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                >
                  {/* Circle */}
                  <span className="absolute -left-5 top-4 w-4 h-4 bg-rose-200 drop-shadow-[0_0_20px_rgb(255,46,158)] rounded-full border-2 border-gray-950"></span>

                  {/* Left Content */}
                  <div className="flex-1">
                    <h3 className="text-md font-semibold text-rose-200 drop-shadow-[0_0_20px_rgb(255,46,158)]">
                      {event.year} : {event.title}
                    </h3>
                    <p className="text-white mt-1">{event.desc}</p>
                  </div>

                  {/* Right Image */}
                  {event.img && (
                    <div className="w-14 h-14 flex-shrink-0 rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={event.img}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <p className="text-3xl pb-10">Work Experience</p>
            <div className="relative border-l-2 border-rose-200 ml-4">
              {work.map((event, idx) => (
                <motion.div
                  key={idx}
                  className="mb-10 ml-6 flex items-start gap-6 px-10 py-4 rounded-2xl bg-slate-900/80 relative"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                >
                  {/* Circle */}
                  <span className="absolute -left-5 top-4 w-4 h-4 bg-rose-200 drop-shadow-[0_0_20px_rgb(255,46,158)] rounded-full border-2 border-gray-950"></span>

                  {/* Left Content */}
                  <div className="flex-1">
                    <h3 className="text-md font-semibold text-rose-200 drop-shadow-[0_0_20px_rgb(255,46,158)]">
                      {event.year} : {event.title}
                    </h3>
                    <p className="text-white mt-1">{event.desc}</p>
                  </div>

                  {/* Right Image */}
                  {event.img && (
                    <div className="w-14 h-14 flex-shrink-0 rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={event.img}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
