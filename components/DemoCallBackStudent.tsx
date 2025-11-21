"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import { useAddDemoStudentMutation } from "@/services/demoStudentApi";
import { toast } from "sonner";

const DemoCallBackStudent = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    subject: "",
    course: "",
    branch: "",
  });

  const [addDemoStudent, { isLoading }] = useAddDemoStudentMutation();

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!form.name || !form.phone) {
      toast.error("Name and phone are required");
      return;
    }

    try {
      await addDemoStudent(form).unwrap();
      toast.success("Request submitted successfully!");

      // Clear form
      setForm({
        name: "",
        phone: "",
        subject: "",
        course: "",
        branch: "",
      });
    } catch (err: any) {
      console.log(err);
      toast.error("Failed to submit request");
    }
  };

  return (
    <section className="w-full py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black relative overflow-hidden">
      {/* Background dotted world map */}
      <div className="absolute inset-0 opacity-5 bg-[url('/world-map.png')] bg-cover bg-center" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800 dark:text-gray-100">
            Apply for a free{" "}
            <span className="text-blue-600 dark:text-blue-500">Demo</span> Classes
          </h1>

          {/* Profile */}
          <div className="mt-10 flex flex-col items-center md:items-start">
            <Image
              src="/anjali.png"
              width={120}
              height={120}
              alt="Counsellor"
              className="rounded-full shadow-lg border-4 border-white dark:border-gray-800"
            />

            <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-gray-100">
              Anjali Sharma
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-center md:text-left">
              For queries, feedback & assistance
            </p>
          </div>

          {/* Online Support */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              Online Support
            </h2>
            <p className="mt-1 text-lg font-semibold text-gray-600 dark:text-gray-300">
              (9AM – 7PM)
            </p>

            <div className="flex items-center gap-3 mt-4 text-gray-700 dark:text-gray-200 font-medium">
              <FaPhoneAlt className="text-blue-600 dark:text-blue-500" />
              CALL US AT +91 9317788822
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="w-full rounded-xl p-8 shadow-lg 
                  bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 
                  text-gray-800 dark:text-gray-100"
          >
            <h2 className="text-3xl font-bold text-center mb-6">
              Call Back Request
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                  value={form.name}
                  onChange={handleChange}
                  className="p-3 rounded bg-white/80 dark:bg-gray-700/80 text-gray-800 dark:text-gray-100 
                             outline-none focus:ring-2 ring-blue-500 border border-gray-300 dark:border-gray-600"
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone*"
                  value={form.phone}
                  onChange={handleChange}
                  className="p-3 rounded bg-white/80 dark:bg-gray-700/80 text-gray-800 dark:text-gray-100 
                             outline-none focus:ring-2 ring-blue-500 border border-gray-300 dark:border-gray-600"
                />
              </div>

              {/* Subject */}
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                className="p-3 rounded w-full bg-white/80 dark:bg-gray-700/80 text-gray-800 dark:text-gray-100 
                           outline-none focus:ring-2 ring-blue-500 border border-gray-300 dark:border-gray-600"
              />

              {/* Course */}
              <select
                name="course"
                value={form.course}
                onChange={handleChange}
                className="p-3 rounded w-full bg-white/80 dark:bg-gray-700/80 text-gray-800 dark:text-gray-100 
                           outline-none focus:ring-2 ring-blue-500 border border-gray-300 dark:border-gray-600"
              >
                <option value="">--Select Course--</option>
                <option>MERN Stack</option>
                <option>Python</option>
                <option>Data Science</option>
                <option>AutoCAD</option>
              </select>

              {/* Branch */}
              <select
                name="branch"
                value={form.branch}
                onChange={handleChange}
                className="p-3 rounded w-full bg-white/80 dark:bg-gray-700/80 text-gray-800 dark:text-gray-100 
                           outline-none focus:ring-2 ring-blue-500 border border-gray-300 dark:border-gray-600"
              >
                <option value="">--Select Branch--</option>
                <option>Chandigarh</option>
                <option>Delhi</option>
                <option>Mohali</option>
              </select>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full transition text-white font-semibold py-3 rounded-md text-lg 
                ${isLoading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"}`}
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoCallBackStudent;
