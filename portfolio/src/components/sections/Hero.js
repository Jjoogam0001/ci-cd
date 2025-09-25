"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between py-20 px-6 max-w-6xl mx-auto bg-gradient-to-r from-gray-50 to-white font-mono">
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 relative">
          <span className="absolute left-1/2 transform -translate-x-1/2 -top-3 w-12 h-0.5 bg-black"></span>
          Hi, I’m Martin Jjooga
        </h1>
        <p className="text-gray-700 mb-6">
          Backend Engineer | Cloud & Microservices Enthusiast
        </p>
        <a
          href="#projects"
          className="inline-block px-6 py-3 border border-black rounded hover:bg-gray-100 hover:scale-105 transition transform"
        >
          View My Work
        </a>
      </motion.div>

      <motion.div
        className="md:w-1/2 mb-8 md:mb-0 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/1756140010276.jpeg"
          alt="Martin Jjooga"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg"
        />
      </motion.div>
    </section>
  );
}
