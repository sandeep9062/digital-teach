// app/student-zone/courses/page.tsx
"use client";

import React, { useMemo, useState } from "react";
import { CourseCard } from "../components/Cards";
import { motion } from "framer-motion";
import { StudentZoneHeader } from "../components/StudentZoneHeader";

const allCourses = [
  // (12 items) — keep the same dataset you already used (shortened for brevity)
  {
    title: "Full Stack Web Development (MERN)",
    img: "/21.jpg",
    description:
      "Build dynamic web applications using MongoDB, Express, React, and Node.js.",
    duration: "12 Weeks",
    instructor: "John Doe",
    level: "Intermediate",
  },
  {
    title: "Python Programming",
    img: "/22.jpg",
    description:
      "Master Python for development, automation, data science, and AI applications.",
    duration: "8 Weeks",
    instructor: "Jane Smith",
    level: "Beginner",
  },
  {
    title: "Java Development (Spring Boot)",
    img: "/23.jpg",
    description:
      "Build enterprise applications with Java, Spring Boot, JPA, and MySQL.",
    duration: "10 Weeks",
    instructor: "Peter Jones",
    level: "Intermediate",
  },
  {
    title: "Data Science & Machine Learning",
    img: "/24.jpg",
    description:
      "Work with data using Python, Pandas, NumPy, Scikit-Learn, and ML algorithms.",
    duration: "14 Weeks",
    instructor: "Emily White",
    level: "Advanced",
  },
  {
    title: "AI & Deep Learning",
    img: "/25.jpg",
    description: "Neural networks, CNNs, RNNs, TensorFlow and model building.",
    duration: "12 Weeks",
    instructor: "Alex Carter",
    level: "Advanced",
  },
  {
    title: "Cybersecurity & Ethical Hacking",
    img: "/26.jpg",
    description:
      "Pen testing, network security, Kali Linux, and secure coding.",
    duration: "10 Weeks",
    instructor: "Ryan Brooks",
    level: "Intermediate",
  },
  {
    title: "Cloud & DevOps Engineering",
    img: "/27.jpg",
    description: "AWS, Docker, Kubernetes, Terraform & CI/CD.",
    duration: "16 Weeks",
    instructor: "Sophia Lee",
    level: "Advanced",
  },
  {
    title: "Mobile App Development (Flutter)",
    img: "/28.jpg",
    description: "Android/iOS apps with Flutter & Firebase.",
    duration: "10 Weeks",
    instructor: "Kevin Adams",
    level: "Intermediate",
  },
  {
    title: "React & Next.js Frontend",
    img: "/29.jpg",
    description: "React, Next.js, Tailwind & SSR/SSG patterns.",
    duration: "6 Weeks",
    instructor: "Nina Patel",
    level: "Beginner",
  },
  {
    title: "DSA for Interviews",
    img: "/210.jpg",
    description: "Algorithms, data structures, and interview prep.",
    duration: "12 Weeks",
    instructor: "Amit Verma",
    level: "Intermediate",
  },
  {
    title: "UI/UX Design (Figma)",
    img: "/211.jpg",
    description: "Figma, prototyping, design systems.",
    duration: "6 Weeks",
    instructor: "Lara Collins",
    level: "Beginner",
  },
  {
    title: "Software Testing",
    img: "/212.jpg",
    description: "Manual & automated testing with Selenium and APIs.",
    duration: "8 Weeks",
    instructor: "Mark Wilson",
    level: "Beginner",
  },
];

export default function CoursesPage() {
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState("All");

  const filtered = useMemo(() => {
    return allCourses.filter((c) => {
      const matchesQuery =
        c.title.toLowerCase().includes(query.toLowerCase()) ||
        c.description.toLowerCase().includes(query.toLowerCase());
      const matchesLevel = level === "All" ? true : c.level === level;
      return matchesQuery && matchesLevel;
    });
  }, [query, level]);

  return (
    <>
      <StudentZoneHeader
        title="Courses"
        description="Search courses, filter by level and enroll to build real-world skills."
      />
      <section className="min-h-screen -mt-20 pb-24 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-8 pt-10">
            {/* <div className="w-full sm:w-1/2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search courses..."
              className="w-full px-4 py-3 rounded-lg border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
            />
          </div> */}

            {/* <div className="flex gap-3 items-center">
            <select value={level} onChange={(e) => setLevel(e.target.value)} className="px-4 py-3 rounded-lg border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <option>All</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>

            <button onClick={() => { setQuery(""); setLevel("All"); }} className="px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg">Reset</button>
          </div> */}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((course, i) => (
              <CourseCard key={i} course={course} />
            ))}
          </div>

          {filtered.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mt-16 text-gray-600 dark:text-gray-300"
            >
              No courses found. Try another search or filter.
            </motion.p>
          )}
        </div>
      </section>
    </>
  );
}
