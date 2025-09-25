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
      className="relative py-20 px-6 md:px-8 overflow-hidden min-h-screen bg-fixed bg-center bg-cover flex flex-col justify-center"
      style={{ backgroundImage: "url('/vc5.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-4xl mx-auto text-center text-rose-100">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-rose-100 drop-shadow-[0_0_20px_rgb(255,46,158)] mb-10">
          Scrolled till here?
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-rose-100/90">
          If you have a question, a project idea, or just want to connect, I&apos;d love to hear from you!  
          <span className="font-bold text-rose-200"> ADIOS AMIGO</span> 🚀
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 md:gap-10 flex-wrap">
          {socials.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl md:text-4xl p-4 md:p-6 rounded-full 
                         bg-slate-900/80 border-2 border-rose-200 text-rose-200 
                         drop-shadow-[0_0_15px_rgb(255,46,158)] 
                         hover:bg-rose-200 hover:text-slate-900 
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

        {/* Footer Line */}
        <div className="mt-16 text-sm text-rose-100/70">
          Built with ❤️ and Vice City vibes
        </div>
      </div>
    </section>
  );
}
