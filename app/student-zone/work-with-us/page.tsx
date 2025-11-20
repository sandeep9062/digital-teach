// app/student-zone/works-with-us/page.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { StudentZoneHeader } from "../components/StudentZoneHeader";

export default function WorkWithUsPage() {
  const [status, setStatus] = useState<null | "idle" | "submitted">(null);

  return (
    <>
      <StudentZoneHeader
        title="Work With Us"
        description="Join our team — roles for developers, designers, and interns."
      />
      <section className="min-h-screen -mt-20 pb-24 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-6 pt-10">
          <motion.form
            onSubmit={(e) => {
              e.preventDefault();
              setStatus("submitted");
            }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md"
          >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input required placeholder="Full name" className="px-4 py-3 rounded-lg border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700" />
            <input required placeholder="Email" type="email" className="px-4 py-3 rounded-lg border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700" />
            <input placeholder="Position you're applying for" className="px-4 py-3 rounded-lg border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700" />
            <input placeholder="LinkedIn / GitHub" className="px-4 py-3 rounded-lg border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700" />
          </div>

          <textarea placeholder="Tell us about your experience" className="w-full mt-4 px-4 py-3 rounded-lg border bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700" rows={6} />

          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm text-gray-600 dark:text-gray-300">We respond to all shortlisted candidates within 7 days.</div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-5 rounded-lg">Submit Application</button>
          </div>

          {status === "submitted" && (
            <div className="mt-6 p-3 rounded-md bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200">
              Thanks — your application has been submitted. We'll get back to you soon.
            </div>
          )}
          </motion.form>
        </div>
      </section>
    </>
  );
}
