"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { GraduationCap, Code, Briefcase } from "lucide-react";

const data = [
  {
    title: "Training",
    icon: <GraduationCap className="w-14 h-14 text-blue-500 dark:text-blue-400" />,
    bg: "from-blue-50 to-blue-200 dark:from-blue-900 dark:to-blue-700",
    text: `We provide industry-ready training with practical sessions, live projects, 
    and hands-on learning. Build skills, improve communication, boost workplace 
    confidence, and earn a career-boosting certification.`,
  },
  {
    title: "Development",
    icon: <Code className="w-14 h-14 text-green-500 dark:text-green-400" />,
    bg: "from-green-50 to-green-200 dark:from-green-900 dark:to-green-700",
    text: `We build powerful, scalable websites, software, and mobile applications 
    using modern technologies that help businesses grow and succeed online.`,
  },
  {
    title: "Consultancy",
    icon: <Briefcase className="w-14 h-14 text-purple-500 dark:text-purple-400" />,
    bg: "from-purple-50 to-purple-200 dark:from-purple-900 dark:to-purple-700",
    text: `Get guidance on career, business, interviews, and skill development. 
    We help students and professionals make confident, growth-oriented decisions.`,
  },
];

export default function Features() {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      if (!card) return;

      const spotlight = card.querySelector(".spotlight") as HTMLDivElement;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Move internal spotlight
        gsap.to(spotlight, {
          x: x - rect.width / 2,
          y: y - rect.height / 2,
          duration: 0.3,
          ease: "power2.out",
        });

        const tiltX = (y - rect.height / 2) / 18;
        const tiltY = -(x - rect.width / 2) / 18;

        // Smooth 3D tilt
        gsap.to(card, {
          rotationX: tiltX,
          rotationY: tiltY,
          scale: 1.05,
          transformPerspective: 900,
          ease: "power3.out",
          duration: 0.35,
        });
      };

      const handleMouseEnter = () => {
        gsap.to(card, {
          boxShadow:
            "0 25px 50px -12px rgba(0,0,0,0.25), 0 0 20px rgba(255,255,255,0.25)",
          duration: 0.3,
        });

        gsap.to(card, { z: 20, duration: 0.3 });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          z: 0,
          boxShadow: "0 10px 30px -10px rgba(0,0,0,0.15)",
          ease: "power3.out",
          duration: 0.5,
        });

        gsap.to(spotlight, {
          x: 0,
          y: 0,
          duration: 0.5,
        });
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  return (
    <section className="w-full py-20 bg-gray-50 dark:bg-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {data.map((item, i) => (
          <motion.div
            key={i}
            ref={(el) => {
              if (el) {
                cardsRef.current[i] = el;
              }
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className={`
              relative 
              bg-gradient-to-b ${item.bg}
              p-10 text-center
              rounded-3xl shadow-lg
              border border-white/40 dark:border-white/10
              backdrop-blur-xl
              transition-all duration-300
              cursor-pointer
              overflow-hidden
              will-change-transform
            `}
          >
            {/* Internal spotlight */}
            <div className="spotlight absolute inset-0 bg-white/20 dark:bg-white/10 blur-3xl opacity-20 pointer-events-none"></div>

            {/* Icon */}
            <div className="w-28 h-28 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border border-white/50 dark:border-gray-700">
              {item.icon}
            </div>

            <h2 className="text-2xl font-bold tracking-wide mb-4 text-gray-900 dark:text-white">
              {item.title}
            </h2>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed whitespace-pre-line">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
