// app/student-zone/components/Cards.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export function CourseCard({ course }: { course: any }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.35 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col"
    >
      <div className="relative w-full h-44">
        <Image src={course.img} alt={course.title} fill className="object-cover" />
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{course.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 flex-1">{course.description}</p>

        <div className="mt-4 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <span><strong>Duration:</strong> {course.duration}</span>
          <span><strong>By:</strong> {course.instructor}</span>
        </div>

        <div className="mt-4">
          <Link href={`/student-zone/courses/${encodeURIComponent(course.title)}`} className="block w-full text-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
            View Course
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export function SimpleCard({ title, desc, href, color = "from-blue-500 to-blue-400" }: { title: string; desc: string; href: string; color?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ translateY: -6 }}
      transition={{ duration: 0.35 }}
      className="rounded-2xl overflow-hidden shadow-lg"
    >
      <div className={`p-6 bg-gradient-to-r ${color} text-white`}>
        <h4 className="text-xl font-bold">{title}</h4>
        <p className="mt-2 text-sm opacity-95">{desc}</p>
        <div className="mt-4">
          <Link href={href} className="inline-block bg-white/20 px-4 py-2 rounded-md text-sm hover:underline">
            Explore →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
