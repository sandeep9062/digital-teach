
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { coursesData, Course } from "../app/courses/CoursesData";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

                  <div className="flex gap-2 mt-4">
                    <Link href={`/courses/${course.slug}`} passHref className="flex-1">
                      <button className="w-full bg-gray-200 text-gray-800 font-semibold py-3 rounded-lg hover:bg-gray-300 transition-colors">
                        View Course
                      </button>
                    </Link>
                    <Link href="/contact" passHref className="flex-1">
                      <button className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-colors">
                        Enroll Now
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
