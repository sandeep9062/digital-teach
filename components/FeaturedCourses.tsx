
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// --- Your same categories + data here --- //
const coursesData: any = {
  "Cse/IT": [
    {
      title: "Full Stack Web Development (MERN)",
      img: "/1.jpg",
      description: "Build dynamic web applications using MongoDB, Express, React, and Node.js.",
      duration: "2 Weeks",
      instructor: "John Doe",
    },
    {
      title: "Python Programming",
      img: "/2.jpg",
      description: "Master Python for development, automation, data science, and AI applications.",
      duration: "8 Weeks",
      instructor: "Jane Smith",
    },
    {
      title: "Java Development (Spring Boot)",
      img: "/3.jpg",
      description: "Build enterprise applications with Java, Spring Boot, JPA, and MySQL.",
      duration: "10 Weeks",
      instructor: "Peter Jones",
    },
    {
      title: "Data Science & Machine Learning",
      img: "/4.jpg",
      description: "Work with data using Python, Pandas, NumPy, Scikit-Learn, and ML algorithms.",
      duration: "14 Weeks",
      instructor: "Emily White",
    },
    {
      title: "Artificial Intelligence & Deep Learning",
      img: "/5.jpg",
      description: "Learn neural networks, CNNs, RNNs, TensorFlow, and real AI model development.",
      duration: "12 Weeks",
      instructor: "Alex Carter",
    },
    {
      title: "Cybersecurity & Ethical Hacking",
      img: "/6.jpg",
      description: "Master penetration testing, network security, Kali Linux, and ethical hacking tools.",
      duration: "10 Weeks",
      instructor: "Ryan Brooks",
    },
    {
      title: "Cloud & DevOps Engineering",
      img: "/27.jpg",
      description: "AWS, Docker, Kubernetes, Terraform, CI/CD, GitHub Actions, Linux & cloud deployment.",
      duration: "16 Weeks",
      instructor: "Sophia Lee",
    },
    {
      title: "Mobile App Development (Flutter)",
      img: "/28.jpg",
      description: "Design and build Android/iOS apps using Flutter & Firebase.",
      duration: "10 Weeks",
      instructor: "Kevin Adams",
    },
    {
      title: "React & Next.js Frontend Development",
      img: "/29.jpg",
      description: "Advanced UI/UX engineering using React, Next.js, Tailwind, and API integration.",
      duration: "6 Weeks",
      instructor: "Nina Patel",
    },
    {
      title: "Data Structures & Algorithms (DSA)",
      img: "/210.jpg",
      description: "Crack coding interviews with DSA, problem-solving, and system thinking.",
      duration: "12 Weeks",
      instructor: "Amit Verma",
    },
    {
      title: "UI/UX Design (Figma)",
      img: "/211.jpg",
      description: "Learn Figma, prototypes, wireframes, design systems, and real-case UI designs.",
      duration: "6 Weeks",
      instructor: "Lara Collins",
    },
    {
      title: "Software Testing (Manual + Automation)",
      img: "/212.jpg",
      description: "Test applications using Selenium, JMeter, API testing, Agile, and QA workflows.",
      duration: "8 Weeks",
      instructor: "Mark Wilson",
    },
  ],

  Civil: [
    {
      title: "AutoCAD 2D/3D",
      img: "/1.jpg",
      description: "Create precise 2D/3D drawings for construction and engineering projects.",
      duration: "6 Weeks",
      instructor: "Michael Brown",
    },
    {
      title: "Revit Architecture / BIM",
      img: "/2.jpg",
      description: "Learn Building Information Modeling (BIM) for designing advanced buildings.",
      duration: "8 Weeks",
      instructor: "Sarah Green",
    },
    {
      title: "STAAD Pro",
      img: "/3.jpg",
      description: "Structural analysis and design for buildings, bridges, and civil structures.",
      duration: "8 Weeks",
      instructor: "Henry Clark",
    },
    {
      title: "3ds Max for Civil Modeling",
      img: "/4.jpg",
      description: "Create architectural visualizations like interiors, exteriors, and walkthroughs.",
      duration: "6 Weeks",
      instructor: "Eva Martinez",
    },{
      title: "3ds Max for Civil Modeling",
      img: "/4.jpg",
      description: "Create architectural visualizations like interiors, exteriors, and walkthroughs.",
      duration: "6 Weeks",
      instructor: "Eva Martinez",
    },{
      title: "3ds Max for Civil Modeling",
      img: "/4.jpg",
      description: "Create architectural visualizations like interiors, exteriors, and walkthroughs.",
      duration: "6 Weeks",
      instructor: "Eva Martinez",
    },
  ],

  Mechanical: [
    {
      title: "AutoCAD Mechanical",
      img: "/11.jpg",
      description: "Draft and design mechanical components with advanced AutoCAD tools.",
      duration: "7 Weeks",
      instructor: "David Black",
    },
    {
      title: "SolidWorks",
      img: "/12.jpg",
      description: "3D modeling, assemblies, sheet metal design, and product simulation.",
      duration: "9 Weeks",
      instructor: "Chris Taylor",
    },
    {
      title: "CATIA",
      img: "/13.jpg",
      description: "High-end CAD/CAM design for aerospace, automotive, and industrial models.",
      duration: "10 Weeks",
      instructor: "Sophia Lopez",
    },
    {
      title: "ANSYS",
      img: "/14.jpg",
      description: "Finite element analysis (FEA) for testing mechanical structures and materials.",
      duration: "8 Weeks",
      instructor: "Robert Young",
    },
  ],

  "Ece/Electrical": [
    {
      title: "MATLAB Programming",
      img: "/31.jpg",
      description: "Simulate and analyze engineering, mathematical, and scientific problems.",
      duration: "8 Weeks",
      instructor: "Laura Wilson",
    },
    {
      title: "Embedded Systems & IoT",
      img: "/32.jpg",
      description: "Learn microcontrollers, Arduino, IoT devices, sensors, and C programming.",
      duration: "10 Weeks",
      instructor: "Robert King",
    },
    {
      title: "VLSI Design",
      img: "/33.jpg",
      description: "Learn chip design, Verilog, digital circuits, and semiconductor fundamentals.",
      duration: "12 Weeks",
      instructor: "Dr. Anuj Sharma",
    },
    {
      title: "PLC & SCADA Automation",
      img: "/34.jpg",
      description: "Industrial automation training with PLC programming and SCADA systems.",
      duration: "8 Weeks",
      instructor: "Harsh Patel",
    },
  ],

  "MBA/BBA": [
    {
      title: "Digital Marketing",
      img: "/41.jpg",
      description: "SEO, social media marketing, ads, analytics, branding, and growth strategies.",
      duration: "6 Weeks",
      instructor: "Olivia Martinez",
    },
    {
      title: "HR Management",
      img: "/42.jpg",
      description: "Learn human resource planning, recruitment, payroll, and organizational behavior.",
      duration: "8 Weeks",
      instructor: "Daniel Harris",
    },
    {
      title: "Business Analytics",
      img: "/43.jpg",
      description: "Data-driven decision-making using Excel, SQL, Tableau, and dashboards.",
      duration: "10 Weeks",
      instructor: "Alicia Brown",
    },
    {
      title: "Financial Management",
      img: "/44.jpg",
      description: "Master budgeting, taxation, investment strategies, and corporate finance.",
      duration: "8 Weeks",
      instructor: "James Ford",
    },
  ],
};



const categories = Object.keys(coursesData);

export default function FeaturedCourses() {
  const [active, setActive] = useState("Cse/IT");

  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Featured Courses
        </h2>

        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full mt-4"></div>

        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-6 leading-relaxed text-lg">
          Learn industry-relevant skills through our structured professional
          training courses.
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
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* SLIDER SECTION */}
      <div className="px-6 md:px-16">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-10"
        >
          {coursesData[active]?.map((course: any, i: number) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 15px 30px rgba(0,0,0,0.2)",
                }}
                className="rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg 
                           border border-gray-200 dark:border-gray-700 flex flex-col h-full"
              >
                <div className="w-full h-48 relative">
                  <Image src={course.img} alt={course.title} fill className="object-cover" />
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {course.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">
                    {course.description}
                  </p>

                  <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span>
                      <strong>Duration:</strong> {course.duration}
                    </span>
                    <span>
                      <strong>By:</strong> {course.instructor}
                    </span>
                  </div>

                  <button className="w-full mt-auto bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-colors">
                    Enroll Now
                  </button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
