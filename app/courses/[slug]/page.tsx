"use client";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { coursesData, Course } from "../CoursesData";

export default function CourseDetailsPage() {
  const params = useParams();
  const slug = params.slug;

  const allCourses: Course[] = Object.values(coursesData).flat();
  const course = allCourses.find((c: Course) => c.slug === slug);

  if (!course) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Course not found</h1>
      </div>
    );
  }

  return (
    <div className="container  mx-auto mt-30 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative w-full h-96 rounded-lg overflow-hidden mb-8">
          <Image src={course.img} alt={course.title} layout="fill" objectFit="cover" />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">{course.title}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{course.description}</p>
        <div className="flex justify-between items-center text-md text-gray-500 dark:text-gray-400">
          <span>
            <strong>Duration:</strong> {course.duration}
          </span>
          <span>
            <strong>Instructor:</strong> {course.instructor}
          </span>
        </div>
      </div>
    </div>
  );
}
