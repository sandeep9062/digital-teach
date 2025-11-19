"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  "Cse/IT",
  "Mechanical",
  "Civil",
  "Ece/Electrical",
  "MBA/BBA",
];
const coursesData: any = {
  "Cse/IT": [
    { title: "Full Stack Web Development (MERN)", img: "/21.jpg" },
    { title: "Python Programming", img: "/22.jpg" },
    { title: "Java Development", img: "/23.jpg" },
    { title: "Data Science & ML", img: "/24.jpg" },
    { title: "Cyber Security & Ethical Hacking", img: "/25.jpg" },
    { title: "Cloud Computing (AWS/Azure)", img: "/26.jpg" },
    { title: "UI/UX Designing", img: "/27.jpg" },
    { title: "Android App Development", img: "/28.jpg" },
  ],
  Civil: [
    { title: "Autocad 2D/3D", img: "/1.jpg" },
    { title: "Revit", img: "/2.jpg" },
    { title: "3ds-Max", img: "/3.jpg" },
    { title: "Google SketchUp", img: "/4.jpg" },
    { title: "ETABS", img: "/5.jpg" },
    { title: "STAAD Pro", img: "/6.jpg" },
    { title: "Primavera P6", img: "/7.jpg" },
    { title: "Civil 3D", img: "/8.jpg" },
  ],

  Mechanical: [
    { title: "AutoCAD Mechanical", img: "/11.jpg" },
    { title: "SolidWorks", img: "/12.jpg" },
    { title: "CATIA", img: "/13.jpg" },
    { title: "CREO", img: "/14.jpg" },
    { title: "NX CAD", img: "/15.jpg" },
    { title: "ANSYS", img: "/16.jpg" },
    { title: "HyperMesh", img: "/17.jpg" },
    { title: "Fusion 360", img: "/18.jpg" },
  ],

  "Ece/Electrical": [
    { title: "MATLAB", img: "/31.jpg" },
    { title: "Embedded Systems", img: "/32.jpg" },
    { title: "PLC & SCADA", img: "/33.jpg" },
    { title: "IoT & Automation", img: "/34.jpg" },
    { title: "PCB Design", img: "/35.jpg" },
    { title: "VLSI Design", img: "/36.jpg" },
    { title: "Power System Design", img: "/37.jpg" },
    { title: "Electrical CAD", img: "/38.jpg" },
  ],

  "MBA/BBA": [
    { title: "Digital Marketing", img: "/41.jpg" },
    { title: "HR Management", img: "/42.jpg" },
    { title: "Finance & Stock Market", img: "/43.jpg" },
    { title: "Business Analytics", img: "/44.jpg" },
    { title: "Project Management", img: "/45.jpg" },
    { title: "Entrepreneurship Development", img: "/46.jpg" },
    { title: "Sales & Branding", img: "/47.jpg" },
    { title: "Import & Export Management", img: "/48.jpg" },
  ],
};

export default function FeaturedCourses() {
  const [active, setActive] = useState("Civil");

  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Featured Courses
        </h2>

        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full mt-4"></div>

        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-6 leading-relaxed text-lg">
          Learn industry-relevant skills through our structured and professional
          training courses with three levels – Beginner, Intermediate, and
          Expert.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-6 flex-wrap mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full text-xl font-semibold transition-all backdrop-blur-md
              ${
                active === cat
                  ? "bg-blue-500 text-white shadow-lg scale-105"
                  : "bg-white/40 text-gray-800 dark:bg-gray-700/40 dark:text-gray-200 hover:bg-white/60"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-12">
        {coursesData[active]?.map((course: any, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            whileHover={{ scale: 1.05 }}
            className="rounded-3xl overflow-hidden shadow-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200/40 dark:border-gray-600/40 cursor-pointer transition-all"
          >
            <div className="w-full h-48 relative">
              <Image
                src={course.img}
                alt={course.title}
                fill
                className="object-cotain"
              />
            </div>

            <div className="text-center py-5 bg-gradient-to-r from-blue-400 to-blue-500 text-white text-xl font-bold">
              {course.title}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
