// app/student-zone/components/Cards.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CourseCard({ course }: { course: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.35 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col">
        <CardHeader>
          <div className="relative w-full h-44 mb-4">
            <Image
              src={course.img}
              alt={course.title}
              fill
              className="object-cover rounded-t-lg"
            />
          </div>
          <CardTitle>{course.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {course.description}
          </p>
          <div className="mt-4 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <span>
              <strong>Duration:</strong> {course.duration}
            </span>
            <span>
              <strong>By:</strong> {course.instructor}
            </span>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full">
            <Link
              href={`/student-zone/courses/${encodeURIComponent(course.title)}`}
            >
              View Course
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
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
