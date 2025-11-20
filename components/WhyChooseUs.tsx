"use client";
import { motion } from "framer-motion";
import { FaRocket, FaShieldAlt, FaUsers, FaAward, FaHeadset, FaFileInvoiceDollar } from "react-icons/fa";

const choose = [
  {
    icon: <FaRocket className="text-blue-500 text-5xl" />,
    title: "Fast Delivery",
    desc: "We deliver high-quality projects on time, ensuring your business stays ahead of the curve.",
  },
  {
    icon: <FaShieldAlt className="text-red-500 text-5xl" />,
    title: "Secure & Scalable",
    desc: "Our solutions are built with security in mind and are designed to scale as your business grows.",
  },
  {
    icon: <FaUsers className="text-green-500 text-5xl" />,
    title: "Expert Team",
    desc: "Our team of experienced developers, designers, and marketers is dedicated to your success.",
  },
  {
    icon: <FaAward className="text-yellow-500 text-5xl" />,
    title: "Quality Guaranteed",
    desc: "We are committed to delivering premium, industry-standard solutions that exceed expectations.",
  },
  {
    icon: <FaHeadset className="text-purple-500 text-5xl" />,
    title: "24/7 Support",
    desc: "Our support team is available around the clock to assist you with any issues or questions.",
  },
  {
    icon: <FaFileInvoiceDollar className="text-teal-500 text-5xl" />,
    title: "Transparent Pricing",
    desc: "We offer competitive and transparent pricing with no hidden fees, so you know exactly what you're paying for.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Why Choose Us?
        </h2>
        <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-14 max-w-3xl mx-auto">
          We are more than just a service provider; we are your technology partner. Here’s why clients trust us.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {choose.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center bg-white dark:bg-gray-800 p-8 rounded-2xl shadow"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-3">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
