"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

const DemoCallBackStudent = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">

      {/* Background dotted world map */}
      <div className="absolute inset-0 opacity-10 bg-[url('/world-map.png')] bg-cover bg-center" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Apply for a free <span className="text-blue-600">Demo</span> Classes
          </h1>

          {/* Profile */}
          <div className="mt-10 flex flex-col items-center md:items-start">
            <Image
              src="/anjali.png"
              width={120}
              height={120}
              alt="Counsellor"
              className="rounded-full shadow-lg"
            />

            <h3 className="text-xl font-semibold mt-4 text-gray-900">
              Anjali Sharma
            </h3>
            <p className="text-gray-600 text-center md:text-left">
              For queries, feedback & assistance
            </p>
          </div>

          {/* Online Support */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold">Online Support</h2>
            <p className="mt-1 text-lg font-semibold text-gray-700">(9AM – 7PM)</p>

            <div className="flex items-center gap-3 mt-4 text-gray-800 font-medium">
              <FaPhoneAlt className="text-blue-600" />
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
          <div className="w-full rounded-xl p-8 shadow-lg 
                  bg-[#6B7A8A]/90 backdrop-blur-xl text-white">

            <h2 className="text-3xl font-bold text-center mb-6">
              Call Back Request
            </h2>

            <form className="space-y-5">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name*"
                  className="p-3 rounded bg-white/90 text-black outline-none"
                />
                <input
                  type="text"
                  placeholder="Phone*"
                  className="p-3 rounded bg-white/90 text-black outline-none"
                />
              </div>

              {/* Subject */}
              <input
                type="text"
                placeholder="Subject"
                className="p-3 rounded w-full bg-white/90 text-black outline-none"
              />

              {/* Course */}
              <select className="p-3 rounded w-full bg-white/90 text-black outline-none">
                <option>--Select Course--</option>
                <option>MERN Stack</option>
                <option>Python</option>
                <option>Data Science</option>
                <option>AutoCAD</option>
              </select>

              {/* Branch */}
              <select className="p-3 rounded w-full bg-white/90 text-black outline-none">
                <option>--Select Branch--</option>
                <option>Chandigarh</option>
                <option>Delhi</option>
                <option>Mohali</option>
              </select>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 transition text-white font-semibold py-3 rounded-md text-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default DemoCallBackStudent;
