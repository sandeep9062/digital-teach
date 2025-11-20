"use client";
import { FaLaptopCode, FaChartLine, FaMobileAlt, FaPaintBrush, FaShoppingCart, FaCloud } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    desc: "We build responsive, high-performance websites using modern technologies like MERN, Next.js, and Tailwind CSS.",
    icon: <FaLaptopCode className="text-blue-500 text-5xl" />,
  },
  {
    title: "Mobile App Development",
    desc: "Cross-platform mobile apps with stunning UI/UX using Flutter and React Native for both iOS and Android.",
    icon: <FaMobileAlt className="text-purple-500 text-5xl" />,
  },
  {
    title: "Digital Marketing",
    desc: "Boost your brand's visibility with our data-driven SEO, SMM, and content marketing strategies.",
    icon: <FaChartLine className="text-green-500 text-5xl" />,
  },
  {
    title: "Branding & UI/UX",
    desc: "Crafting memorable brand identities and intuitive user interfaces that captivate your audience.",
    icon: <FaPaintBrush className="text-orange-500 text-5xl" />,
  },
  {
    title: "E-commerce Solutions",
    desc: "Custom online stores with seamless payment gateway integration to scale your retail business.",
    icon: <FaShoppingCart className="text-red-500 text-5xl" />,
  },
  {
    title: "Cloud & DevOps",
    desc: "Automating workflows and deploying scalable applications on AWS, Azure, and Google Cloud.",
    icon: <FaCloud className="text-teal-500 text-5xl" />,
  },
];

export default function ServiceCardsSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Our Core Services
        </h2>
        <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          We provide a wide array of services to help you achieve your digital goals. Here’s a look at what we offer.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-gray-100 dark:bg-gray-900 rounded-2xl shadow hover:shadow-xl"
            >
              <div className="mb-6 flex justify-center">{s.icon}</div>
              <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white">
                {s.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center mt-2">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
