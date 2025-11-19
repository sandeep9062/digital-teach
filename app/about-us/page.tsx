"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { FaUsers, FaLaptopCode, FaIndustry, FaBrain } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import { useState, useEffect } from "react";
import OurClients from "./ourClients/OurClients";
import OurStory from "./ourStory/OurStory";
import CTAWithForm from "../../components/CTAWithForm";

const aboutStats = [
  { icon: <FaUsers className="w-6 h-6" />, label: "Students Mentored", value: "500+" },
  { icon: <FaLaptopCode className="w-6 h-6" />, label: "Projects Completed", value: "150+" },
  { icon: <FaIndustry className="w-6 h-6" />, label: "Workshops Conducted", value: "25+" },
  { icon: <FaBrain className="w-6 h-6" />, label: "Skill Certifications", value: "300+" },
];

const missionPoints = [
  "Guiding students to build real-world projects",
  "Hands-on coding sessions & workshops",
  "Personalized mentorship & career guidance",
  "Skill-building in web development, AI, and more",
  "Soft skills & interview preparation",
  "Fostering innovation, creativity, and problem-solving",
];

export default function AboutPage() {
  const [darkMode, setDarkMode] = useState(false);

  // Optional: Remember user preference in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="min-h-screen pt-20 mt-30 text-gray-800 dark:text-gray-100 bg-white dark:bg-darkbg1 px-4 md:px-8 lg:px-12 transition-colors duration-300">
        

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <Image
            src="/logo.png"
            alt="EduLogo"
            width={140}
            height={140}
            className="mx-auto mb-6 sparkle-animation"
            priority
          />
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
            About <span className="text-blue-800 dark:text-blue-400">Vpro</span>Tech
          </h1>
          <p className="md:text-lg text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            Empowering students with knowledge, practical experience, and mentorship. We help learners gain the skills and confidence to thrive in the tech world.
          </p>
        </motion.section>

        <Separator className="my-16" />

        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden">
            <Image src="/location.jpg" alt="Our Mission" fill className="object-cover rounded-xl" />
          </div>

          <div>
            <h2 className=" font-bold mb-4 text-3xl md:text-4xl text-primary dark:text-blue-300">
              Our Mission
            </h2>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              At <strong>VproTech</strong>, our mission is to guide students to achieve their goals through hands-on learning, mentorship, and practical experience.
            </p>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Founded in March 2020 by Rajat Kumar, VProTech Digital provides industrial training for B.Tech, Diploma, BCA, and MCA students. Our trainers specialize in web development, Android apps, SEO, social media marketing, and other skills through 6-week and 6-month programs.
            </p>
          </div>
        </motion.section>

        <Separator className="my-16" />

        {/* What We Do Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-2xl font-bold mb-4 text-primary dark:text-blue-300">What We Do</h2>
            <ul className="space-y-4 md:text-lg text-base text-gray-700 dark:text-gray-300">
              {missionPoints.map((point, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <AiFillCheckCircle className="text-gold dark:text-yellow-400 w-5 h-5 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden">
            <Image src="/location1.jpg" alt="What We Do" fill className="object-cover rounded-xl" />
          </div>
        </motion.section>

        <Separator className="my-16" />

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-6xl mx-auto mb-20"
        >
          {aboutStats.map((stat, index) => (
            <div key={index} className="bg-muted dark:bg-[#1E1E20] p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="mb-3 flex justify-center text-gold dark:text-yellow-400">{stat.icon}</div>
              <h3 className="text-2xl font-bold text-primary dark:text-blue-300">{stat.value}</h3>
              <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.section>

        <Separator />
      </main>

      <OurStory />
      <OurClients />
      <CTAWithForm />
    </div>
  );
}
