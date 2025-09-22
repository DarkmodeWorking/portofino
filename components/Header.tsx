"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "PROJECTS", href: "#projects" },
    { name: "ABOUT", href: "#about" },
    { name: "CONTACT", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-slate-950 bg-opacity-80 backdrop-blur-md z-50 shadow-md transition-all duration-300 ${
        scrolled ? "border-b border-rose-200 drop-shadow-[0_0_5px_rgb(255,46,158)]" : ""
      }`}
    >
      <div className="px-20 flex justify-between items-center h-20">
        {/* Logo / Name */}
        <div className="text-4xl font-bold text-rose-200 drop-shadow-[0_0_20px_rgb(255,46,158)]">
          THEME VICE_
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-rose-300 hover:text-rose-200 hover:drop-shadow-[0_0_20px_rgb(255,46,158)] transition font-medium"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <span className="text-2xl">✖</span> : <span className="text-2xl">☰</span>}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-gray-900 w-full px-8 py-4 flex flex-col space-y-4 border-b border-rose-500/30">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white hover:text-pink-200 transition font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
