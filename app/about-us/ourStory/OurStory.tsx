"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section className="bg-white text-gray-800 dark:bg-darkbg1 dark:text-white py-20 px-6 sm:px-10 md:px-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-xl shadow-md"
        >
          <Image
            src="/location.jpg"
            alt="Students collaborating"
            width={600}
            height={400}
            className="w-full h-auto object-cover rounded-xl"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary dark:text-white">
            Our Story
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Founded with a vision to empower students, <strong>VproTech</strong> began as a small initiative to provide hands-on learning, mentorship, and career guidance. Starting with a handful of students in our local community, we quickly expanded to reach learners across the country, helping them build real projects, enhance technical skills, and gain confidence in their abilities.
          </p>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          We are also specialized in designing effective virtual branding and developing Mobile Apps for Android and I-Phone devices. We also develop websites that are compatible with all devices. We help you in getting business online and promote it on various platforms including social media. We create original logo designs for your business. Our other expertise includes Interior Designing work. We assist students and others also in finding a right job after completion of their training course. </p>
        </motion.div>
      </div>
    </section>
  );
}
