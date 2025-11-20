"use client";
import { motion } from "framer-motion";
import { FaLightbulb, FaPencilRuler, FaCode, FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    icon: <FaLightbulb className="text-yellow-500 text-5xl" />,
    title: "1. Discovery & Strategy",
    desc: "We start by understanding your business goals, target audience, and project requirements to create a customized strategy.",
  },
  {
    icon: <FaPencilRuler className="text-blue-500 text-5xl" />,
    title: "2. UI/UX Design",
    desc: "Our design team creates intuitive wireframes, mockups, and prototypes that deliver a seamless user experience.",
  },
  {
    icon: <FaCode className="text-purple-500 text-5xl" />,
    title: "3. Development & Testing",
    desc: "Our developers write clean, scalable code and conduct rigorous testing to ensure a bug-free, high-quality product.",
  },
  {
    icon: <FaCheckCircle className="text-green-500 text-5xl" />,
    title: "4. Deployment & Support",
    desc: "We handle the deployment process and provide ongoing support and maintenance to keep your application running smoothly.",
  },
];

export default function WorkProcess() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Our Work Process
        </h2>
        <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-14 max-w-3xl mx-auto">
          We follow a structured and transparent process to ensure the successful delivery of your project. Here’s how we do it.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gray-100 dark:bg-gray-900 p-8 rounded-xl text-center shadow"
            >
              <div className="mb-5 flex justify-center">{s.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {s.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
