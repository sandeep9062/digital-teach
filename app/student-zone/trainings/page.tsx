// app/student-zone/trainings/page.tsx
"use client";

import React from "react";
import { SimpleCard } from "../components/Cards";
import { motion } from "framer-motion";
import { StudentZoneHeader } from "../components/StudentZoneHeader";

const trainings = [
  { title: "Live MERN Bootcamp", desc: "8 week instructor-led bootcamp with live projects and mentorship.", href: "/student-zone/trainings/mern-bootcamp", color: "from-[#2B4CFF] to-[#00C2FF]" },
  { title: "AI/ML Project Lab", desc: "Hands-on model building, deployment & dataset engineering.", href: "/student-zone/trainings/ai-ml", color: "from-[#00C08B] to-[#00D1B2]" },
  { title: "DevOps Immersive", desc: "CI/CD, Kubernetes, infra as code and production practices.", href: "/student-zone/trainings/devops", color: "from-[#7C3AED] to-[#D946EF]" },
  { title: "Security Workshop", desc: "Ethical hacking, secure coding and incident response.", href: "/student-zone/trainings/security", color: "from-[#EF4444] to-[#F97316]" },
];

export default function TrainingsPage() {
  return (
    <>
      <StudentZoneHeader
        title="Trainings"
        description="Instructor-led batches that get you to production-ready skills quickly."
      />
      <section className="min-h-screen -mt-20 pb-24 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-6 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trainings.map((t, i) => (
            <SimpleCard key={i} title={t.title} desc={t.desc} href={t.href} color={t.color} />
          ))}
        </div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} className="mt-12 text-center md:col-span-2">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Next Batch Starts Soon</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Limited seats — reserve your spot with a small token.</p>
            <a href="/contact" className="inline-block mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg">Reserve Seat</a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
