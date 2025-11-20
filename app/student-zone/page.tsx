"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, Award, Users } from "lucide-react";
import { CourseCard } from "./components/Cards";
import { StudentZoneHeader } from "./components/StudentZoneHeader";
import { featuredCourses, items } from "./data";
import Testimonials from "@/components/Testimonials";
import DemoCallBackStudent from "@/components/DemoCallBackStudent";
export default function StudentZonePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#F3F6FF] to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <StudentZoneHeader
        title="Student Zone"
        description="Learn. Grow. Build your Future with VproTech Digital."
      />

      {/* CONTENT GRID */}
      <div className="max-w-6xl mx-auto px-6 pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="p-7 rounded-3xl shadow-lg bg-white dark:bg-gray-800 dark:border-gray-700 border border-gray-200 cursor-pointer group hover:shadow-2xl transition-all"
          >
            <div
              className={`w-16 h-16 flex items-center justify-center rounded-2xl text-white bg-gradient-to-r ${item.color} shadow-md group-hover:scale-110 transition-transform`}
            >
              <item.icon size={38} />
            </div>

            <h3 className="text-2xl font-bold mt-5 mb-3 text-gray-900 dark:text-white">
              {item.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {item.desc}
            </p>

            <Link href={item.link}>
              <motion.button
                whileHover={{ x: 6 }}
                className="mt-6 text-[#2B4CFF] dark:text-cyan-300 font-semibold text-sm"
              >
                Explore →
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* WHY CHOOSE US SECTION */}
      <div className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            We provide top-tier training and opportunities to kickstart your
            tech career.
          </p>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 rounded-xl bg-gray-50 dark:bg-gray-800/50">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-500 dark:text-blue-300">
                <Zap size={32} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-gray-900 dark:text-white">
                Industry-Relevant Skills
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Our curriculum is designed in collaboration with industry
                experts to match current demands.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-gray-50 dark:bg-gray-800/50">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900 text-green-500 dark:text-green-300">
                <Award size={32} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-gray-900 dark:text-white">
                Expert Mentorship
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Learn from seasoned professionals who bring real-world
                experience to the classroom.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-gray-50 dark:bg-gray-800/50">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900 text-orange-500 dark:text-orange-300">
                <Users size={32} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-gray-900 dark:text-white">
                Career Opportunities
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Gain access to internships and job placements with our network
                of partner companies.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURED COURSES SECTION */}
      <div className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white">
              Featured Courses
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Check out some of our most popular courses to get started.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.title} course={course} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/student-zone/courses">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                View All Courses
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
      <DemoCallBackStudent />
      <Testimonials />
    </div>
  );
}
