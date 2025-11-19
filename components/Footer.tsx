"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { motion, Variants } from "framer-motion";
import SocialMediaLinks from "./SocialMediaLinks";

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="
       
       backdrop-blur-xl dark:bg-[#bbc4e7]/80 shadow-lg border-b border-[#D9E2FF] dark:border-[#1A2340]
        border-t border-blue-200 dark:border-blue-900
        backdrop-blur-xl shadow-inner"
    >
      <div
        className="max-w-7xl mx-auto px-6 py-16 grid 
      grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14"
      >
        {/* Logo + Tagline */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          custom={0}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-32 h-32 drop-shadow-md">
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          <p className="text-sm text-gray-800 dark:text-gray-800 max-w-xs leading-relaxed">
            Empowering students with practical skills, expert training, and
            future-ready career guidance.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          custom={1}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-800 mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-800 dark:text-gray-900">
            {[
              ["Home", "/"],
              ["About Us", "/about-us"],
              ["Services", "/services"],
              ["Student Zone", "/student-zone"],
              ["Blogs", "/blogs"],
              ["Contact", "/contact"],
            ].map(([name, href]) => (
              <li key={name}>
                <Link
                  href={href}
                  className="hover:text-[#2B4CFF] dark:hover:text-[#3FA6FF] transition"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Student Zone Links */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          custom={2}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-800 mb-4">
            Student Zone
          </h3>

          <ul className="space-y-3 text-gray-800 dark:text-gray-900">
            {[
              ["Courses", "/student-zone/courses"],
              ["Trainings", "/student-zone/trainings"],
              ["Internships", "/student-zone/internships"],
              ["Work With Us", "/student-zone/works-with-us"],
            ].map(([name, href]) => (
              <li key={name}>
                <Link
                  href={href}
                  className="hover:text-[#2B4CFF] dark:hover:text-[#3FA6FF] transition"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          custom={3}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-800 mb-4">
            Contact Us
          </h3>

          <ul className="space-y-4 text-gray-700 dark:text-gray-900">
            <li className="flex items-start gap-3">
              <MapPin className="text-[#2B4CFF]" size={20} />
              <span>SCF-116, 2nd Floor, Ind Area Sector 58, Phase 5, Mohali (PB)</span>
            </li>

            <li className="flex items-center gap-3">
              <Phone className="text-[#2B4CFF]" size={20} />
              <a
                href="tel:+918999621572"
                className="hover:text-[#2B4CFF] dark:hover:text-[#3FA6FF] transition"
              >
                +91-88941-10026
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Mail className="text-[#2B4CFF]" size={20} />
              <a
                href="mailto:vprotechhead@gmail.com"
                className="hover:text-[#2B4CFF] dark:hover:text-[#3FA6FF] transition"
              >
                vprotechhead@gmail.com
              </a>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Social Icons */}
      <div className="border-t border-blue-200 dark:border-blue-900 pt-6 pb-4">
        <SocialMediaLinks />
      </div>

      {/* Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center py-4 text-sm text-gray-600 dark:text-black border-t border-gray-300/40 dark:border-gray-700/40"
      >
        © {currentYear} ViproTech Digital. All rights reserved.
      </motion.div>
    </motion.footer>
  );
}
