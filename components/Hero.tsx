"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative mt-16 overflow-hidden bg-gradient-to-b from-white to-gray-200 dark:from-[#6184dd] dark:to-[#111827] py-40 text-center">
      {/* Soft radial spotlight */}
      <div
        className="absolute inset-0 -z-10 opacity-40 dark:opacity-20 
      bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.25),transparent_60%)]"
      ></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-6"
      >
        {/* Logo with floating animation */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6, type: "spring" }}
          className="mb-8"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <Image
              src="/logo.png"
              alt="VproTech Logo"
              width={220}
              height={220}
              priority
              className="mx-auto drop-shadow-[0_0_25px_rgba(212,175,55,0.4)]"
            />
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-4xl md:text-6xl font-black leading-tight tracking-tight text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          Building Future-Ready{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#48c74e] to-[#167639]">
            Digital Solutions
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-5 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          We deliver professional training programs focused on practical skills,
          productivity, and career advancement—helping students and teams grow
          with industry-standard expertise.
        </motion.p>

        {/* Buttons */}

        {/* Demo Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="mt-14 max-w-7xl mx-auto bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl 
             p-8 rounded-2xl shadow-xl border border-white/30 dark:border-gray-700/30"
        >
          <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white text-center">
            Book Your Free Demo Now!
          </h3>

          <form className="space-y-5">
            {/* Name */}
            <input
              type="text"
              placeholder="Your name*"
              className="w-full px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-700 
                 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 
                 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            {/* Phone */}
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-700 
                 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 
                 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Your email*"
              className="w-full px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-700 
                 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 
                 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            {/* Select Dropdown */}
            <select
              className="w-full px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-700 
                 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200
                 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Choose here</option>
              <option>Web Development Training</option>
              <option>MERN Full-Stack Program</option>
              <option>UI/UX Design Course</option>
              <option>Python & ML Training</option>
              <option>Digital Marketing</option>
            </select>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#2B4CFF] to-[#00C2FF] text-white 
                 text-white font-semibold tracking-wide shadow-lg 
                 hover:shadow-xl hover:scale-[1.02] transition-all"
            >
              BOOK NOW
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
