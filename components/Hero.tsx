import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pl-32 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/bg-video-hero-new.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/20 -z-10"></div>

      {/* Content */}
      <div className="relative mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-16">
        {/* Left Side: Intro */}
        <div className="flex-1 text-left">
          <h1 className="mt-6 text-3xl font-extrabold text-rose-100 drop-shadow-[0_0_20px_rgb(255,46,158)] leading-tight">
            Hi I am Anurag Bhattacharjee <br />
            Software Developer from India
          </h1>
          <p className="mt-12 text-lg text-white max-w-md">
            Using JS, PY and CPP to solve issues
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1 hidden md:flex justify-center items-center">
          <div className="border-2 border-rose-200 rounded-xl drop-shadow-[0_0_20px_rgb(255,46,158)] flex items-center justify-center text-gray-500">
            <img src="/pic.png" className="rounded-xl" alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  );
}
