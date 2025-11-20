"use client";

import { motion } from "framer-motion";

interface StudentZoneHeaderProps {
  title: string;
  description: string;
}

export function StudentZoneHeader({ title, description }: StudentZoneHeaderProps) {
  return (
    <div className="pt-32 mt-30 pb-20 text-center px-6 bg-gradient-to-b from-white via-[#F3F6FF] to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#2B4CFF] to-[#00C2FF] text-transparent bg-clip-text"
      >
        {title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="mt-4 text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
      >
        {description}
      </motion.p>
    </div>
  );
}
