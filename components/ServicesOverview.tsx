"use client";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  "Custom Web Development",
  "Mobile App Solutions",
  "Digital Marketing Strategy",
  "UI/UX Design & Branding",
  "SEO & Content Creation",
  "Ongoing Support & Maintenance",
  "Secure & Scalable Architecture",
  "Agile Development Methodology",
];

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          A Complete Suite of Digital Services
        </h2>
        <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          We offer a comprehensive range of services to meet your business needs, from initial concept to final deployment and beyond.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg"
            >
              <FaCheckCircle className="text-blue-500 text-3xl mb-3" />
              <p className="text-gray-700 dark:text-gray-300 font-medium">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
