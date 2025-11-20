"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section className="bg-muted py-20 px-6 sm:px-10 md:px-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-xl shadow-lg"
        >
          <Image
            src="/whyus.jpg"
            alt="Our Story"
            width={600}
            height={400}
            className="w-full h-auto object-cover rounded-xl"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Our Story
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Founded with a vision to empower students, <strong>VproTech</strong> began as a small initiative to provide hands-on learning, mentorship, and career guidance. We have since grown into a leading training provider, helping learners build real-world projects and gain confidence in their abilities.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mt-4">
            Our expertise extends to virtual branding, mobile app development, and responsive web design. We are dedicated to helping businesses establish a strong online presence and assisting students in launching successful careers after their training.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
