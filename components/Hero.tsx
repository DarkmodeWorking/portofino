"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center md:pl-32 overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/bg-video-hero-new.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/20 -z-10"></div>

      <div className="relative mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-12">
        {/* Profile image */}
        <motion.div
          className="flex-1 flex justify-center items-center order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
        >
          <div className="border-2 border-rose-200 rounded-xl drop-shadow-[0_0_20px_rgb(255,46,158)] flex items-center justify-center text-gray-500">
            <img
              src="/pic.png"
              className="rounded-xl w-72 md:w-auto"
              alt="Profile"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          className="flex-1 text-center md:text-left order-2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="mt-6 text-xl md:text-3xl font-extrabold text-rose-100 drop-shadow-[0_0_20px_rgb(255,46,158)] leading-tight"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Hi I am Anurag Bhattacharjee <br />
            Software Developer from India
          </motion.h1>

          <motion.p
            className="mt-6 md:mt-12 text-base md:text-lg text-rose-100 max-w-md mx-auto md:mx-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Using JS, PY and CPP to solve issues
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
