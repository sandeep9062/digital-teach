"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import {toast} from "sonner";
import { useSubmitDemoSectionMutation } from "@/services/demoSectionApi";

const DemoCallBackSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    service: "",
    message: "",
  });

  const [submitDemoSection, { isLoading }] = useSubmitDemoSectionMutation();

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      toast.error("Name and phone number are required");
      return;
    }

    try {
      await submitDemoSection(formData).unwrap();

      toast.success("Your request has been submitted!");

      setFormData({
        name: "",
        phone: "",
        subject: "",
        service: "",
        message: "",
      });
    } catch (error) {
      toast.error("Something went wrong, try again.");
    }
  };

  return (
    <section className="w-full py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background dotted world map */}
      <div className="absolute inset-0 opacity-10 bg-[url('/world-map.png')] bg-cover bg-center" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
            Request a Free <span className="text-blue-600">Consultation</span>{" "}
            for Our Services
          </h1>

          {/* Online Support */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Online Support
            </h2>
            <p className="mt-1 text-lg font-semibold text-gray-600 dark:text-gray-300">
              (9AM – 7PM)
            </p>

            <div className="flex items-center gap-3 mt-4 text-gray-800 dark:text-gray-200 font-medium">
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
          <div
            className="w-full rounded-xl p-8 shadow-lg 
                  bg-white dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
              Get a Call Back
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name*"
                  className="p-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone*"
                  className="p-3 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Subject */}
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="p-3 rounded w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Service */}
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="p-3 rounded w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">--Select Service--</option>
                <option>Web Development</option>
                <option>App Development</option>
                <option>Digital Marketing</option>
                <option>SEO Services</option>
              </select>

              {/* Message */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={4}
                className="p-3 rounded w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-md text-lg disabled:opacity-60"
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

export default DemoCallBackSection;
