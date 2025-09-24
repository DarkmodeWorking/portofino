"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const socials = [
    { name: "GitHub", icon: <FaGithub />, href: "https://github.com/DarkmodeWorking" },
    { name: "LinkedIn", icon: <FaLinkedin />, href: "https://www.linkedin.com/in/anurag-bhattacharjee-65a487275/" },
    { name: "Twitter", icon: <FaTwitter />, href: "https://x.com/hammydoestweet8" },
    { name: "Instagram", icon: <FaInstagram />, href: "https://www.instagram.com/_.hamsen._/" },
    { name: "Email", icon: <FaEnvelope />, href: "mailto:hamsen3880@example.com" },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 px-8 overflow-hidden min-h-screen bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/vc5.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-4xl mx-auto text-center text-white">
        <h2 className="text-5xl mt-20 font-bold text-rose-100 drop-shadow-[0_0_20px_rgb(255,46,158)] mb-16">
          Scrolled till here?
        </h2>

        <p className="text-xl mb-12 max-w-2xl mx-auto">
        If you have a question, a project idea, or just want to connect, I&apos;d love to hear from you! <b>ADIOS AMIGO</b>!
        </p>

        <div className="flex justify-center gap-8 flex-wrap">
          {socials.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl p-6 rounded-full bg-slate-900/80 border-2 border-rose-200 text-rose-200 
                         drop-shadow-[0_0_20px_rgb(255,46,158)] hover:bg-rose-200 hover:text-slate-900 
                         transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
