"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroServices() {
  return (
    <section className="mt-30 relative w-full py-28 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center">
        
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Next-Gen Digital Services <br /> to Supercharge Your Growth
          </h1>

          <p className="mt-6 text-lg opacity-90">
            We deliver cutting-edge websites, mobile apps, and digital marketing strategies that drive results. Partner with us to elevate your brand and achieve your business goals.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition-transform transform hover:scale-105">
              Request a Quote
            </button>
            <button className="px-6 py-3 border border-white font-semibold rounded-lg hover:bg-white/20 transition-colors">
              Explore Our Work
            </button>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex-1 mt-10 md:mt-0"
        >
          <Image
            src="/location3.jpg"
            alt="services"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
