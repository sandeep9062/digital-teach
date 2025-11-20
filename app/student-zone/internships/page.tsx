// app/student-zone/internships/page.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CourseCard } from "../components/Cards";
import { StudentZoneHeader } from "../components/StudentZoneHeader";

const internships = [
  {
    title: "Frontend Intern",
    img: "/intern-frontend.jpg",
    description: "Work on React/Next projects and UI improvements.",
    duration: "3 Months",
    instructor: "Team Frontend",
  },
  {
    title: "Backend Intern",
    img: "/intern-backend.jpg",
    description: "Work on Node services, APIs and databases.",
    duration: "3 Months",
    instructor: "Team Backend",
  },
  {
    title: "Data Intern",
    img: "/intern-data.jpg",
    description: "Assist ML engineers with data cleaning and models.",
    duration: "3 Months",
    instructor: "Team Data",
  },
];

export default function InternshipsPage() {
  const [appOpen, setAppOpen] = useState(false);
  const [selected, setSelected] = useState<any>(null);

  return (
    <>
      <StudentZoneHeader
        title="Internships"
        description="Real client projects, mentorship and certificates on completion."
      />
      <section className="min-h-screen -mt-20 pb-24 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-6 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {internships.map((it, i) => (
              <div key={i} className="flex flex-col gap-4">
                <CourseCard course={it} />
                <button
                  onClick={() => {
                    setSelected(it);
                    setAppOpen(true);
                  }}
                  className="w-full bg-blue-500 text-white py-2 rounded-lg"
                >
                  Apply
                </button>
              </div>
            ))}
          </div>

          {/* Simple modal */}
          {appOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div
                className="absolute inset-0 bg-black/40"
                onClick={() => setAppOpen(false)}
              />
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-lg z-10 shadow-xl"
              >
                <h3 className="text-xl font-bold mb-3">
                  Apply for {selected?.title}
                </h3>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Application submitted!");
                    setAppOpen(false);
                  }}
                >
                  <div className="grid gap-3">
                    <input
                      required
                      placeholder="Full name"
                      className="px-4 py-3 rounded-lg border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
                    />
                    <input
                      required
                      placeholder="Email"
                      type="email"
                      className="px-4 py-3 rounded-lg border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
                    />
                    <input
                      placeholder="Portfolio / GitHub (optional)"
                      className="px-4 py-3 rounded-lg border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
                    />
                    <textarea
                      placeholder="Short message"
                      rows={4}
                      className="px-4 py-3 rounded-lg border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
                    />
                  </div>

                  <div className="mt-4 flex gap-3 justify-end">
                    <button
                      type="button"
                      onClick={() => setAppOpen(false)}
                      className="px-4 py-2 rounded-lg border"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-lg bg-blue-500 text-white"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
