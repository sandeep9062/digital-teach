"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, UserCheck, Lightbulb } from "lucide-react";
import Image from "next/image";

const points = [
  {
    icon: <GraduationCap className="w-10 h-10 text-[#3b82f6]" />,
    title: "Industry-Ready Training Programs",
    desc: "Structured, practical, and outcome-driven courses to prepare you for real-world opportunities.",
  },
  {
    icon: <BookOpen className="w-10 h-10 text-[#3b82f6]" />,
    title: "Learn From Certified Experts",
    desc: "Our trainers bring years of industry and teaching experience to guide your learning journey.",
  },
  {
    icon: <UserCheck className="w-10 h-10 text-[#3b82f6]" />,
    title: "Personal Mentorship & Support",
    desc: "We provide dedicated mentoring, doubt-solving sessions, and personalized career guidance.",
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-[#3b82f6]" />,
    title: "Hands-On Practical Training",
    desc: "Experience live workshops, real projects, and active learning to master practical skills.",
  },
];

const WhyUs = () => {
  return (
    <section className="relative py-28 bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-[#0a1124] dark:via-[#0b132b] dark:to-[#0a1124] overflow-hidden">
      {/* Floating blurred shapes */}
      <div className="absolute top-10 left-10 w-60 h-60 bg-blue-300/30 dark:bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-400/20 dark:bg-indigo-500/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 space-y-20">
        {/* Heading */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-300 dark:to-blue-500">
              VproTech Digital
            </span>
            ?
          </h2>

          <p className="mt-3 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We empower students with expert-led training, personal mentorship,
            and real-world skill-building programs designed for lasting success.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-1 md:grid-cols-2"
          >
            {points.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="relative group p-[1px] rounded-2xl bg-gradient-to-br from-blue-300/40 to-transparent dark:from-blue-700/40 dark:to-transparent"
              >
                <div
                  className="bg-white/70 dark:bg-[#1b2436]/70 backdrop-blur-xl 
                  rounded-2xl p-6 border border-gray-200/40 dark:border-gray-700/40 
                  shadow-sm transition-all group-hover:shadow-blue-300/40 dark:group-hover:shadow-blue-800/30"
                >
                  <div className="mb-3">{point.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-gray-700 dark:text-gray-400 text-sm">
                    {point.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-full max-w-lg rounded-3xl overflow-hidden shadow-xl border border-blue-200/40 dark:border-blue-900/30">
              <Image
                src="/whyus.jpg"
                alt="Training and skill development environment"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <a
            href="/contact"
            className="px-10 py-4 rounded-full text-lg font-semibold
            bg-gradient-to-r from-blue-600 to-blue-400 
            hover:from-blue-700 hover:to-blue-500
            text-white shadow-lg hover:shadow-xl hover:scale-[1.05] 
            transition-all"
          >
            Book a Free Counseling Session
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
