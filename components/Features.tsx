"use client";

import React, { useEffect, useRef } from "react";
import { Code, BrainCircuit, Cloud, Lock, Smartphone, Database, Workflow, Rocket } from "lucide-react";
import gsap from "gsap";

const Features = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const data = [
    {
      title: "Full-Stack Web Development",
      icon: <Code className="w-14 h-14 text-blue-500 dark:text-blue-400" />,
      bg: "from-blue-50 to-blue-200 dark:from-blue-900/40 dark:to-blue-700/30",
      text: "Master modern web development using React, Node.js, Express, MongoDB & TypeScript. Build production-ready applications.",
    },
    {
      title: "Artificial Intelligence & ML",
      icon: <BrainCircuit className="w-14 h-14 text-green-500 dark:text-green-300" />,
      bg: "from-green-50 to-green-200 dark:from-green-900/40 dark:to-green-700/30",
      text: "Learn deep learning, neural networks, model training, AI automation and real-world machine learning applications.",
    },
    {
      title: "Cloud & DevOps Engineering",
      icon: <Cloud className="w-14 h-14 text-purple-500 dark:text-purple-300" />,
      bg: "from-purple-50 to-purple-200 dark:from-purple-900/40 dark:to-purple-700/30",
      text: "Work with AWS, Docker, Kubernetes, CI/CD pipelines, monitoring tools and cloud automation workflows.",
    },
    {
      title: "Cybersecurity & Ethical Hacking",
      icon: <Lock className="w-14 h-14 text-red-500 dark:text-red-400" />,
      bg: "from-red-50 to-red-200 dark:from-red-900/40 dark:to-red-700/30",
      text: "Master ethical hacking, network security, penetration testing, threat analysis and secure system design.",
    },
    {
      title: "Mobile App Development",
      icon: <Smartphone className="w-14 h-14 text-orange-500 dark:text-orange-400" />,
      bg: "from-orange-50 to-orange-200 dark:from-orange-900/40 dark:to-orange-700/30",
      text: "Build Android & iOS apps using React Native, Flutter or Kotlin. Create fast & responsive mobile experiences.",
    },
    {
      title: "Data Science & Big Data",
      icon: <Database className="w-14 h-14 text-cyan-500 dark:text-cyan-400" />,
      bg: "from-cyan-50 to-cyan-200 dark:from-cyan-900/40 dark:to-cyan-700/30",
      text: "Analyze data, create dashboards, work with Python, Pandas, NumPy, SQL, and implement predictive analytics.",
    },
    {
      title: "Automation & Workflow Engineering",
      icon: <Workflow className="w-14 h-14 text-indigo-500 dark:text-indigo-400" />,
      bg: "from-indigo-50 to-indigo-200 dark:from-indigo-900/40 dark:to-indigo-700/30",
      text: "Automate tasks using tools like Zapier, Power Automate, Selenium, Cron, Shell Scripts and APIs.",
    },
    {
      title: "Startup & Project Launch",
      icon: <Rocket className="w-14 h-14 text-pink-500 dark:text-pink-400" />,
      bg: "from-pink-50 to-pink-200 dark:from-pink-900/40 dark:to-pink-700/30",
      text: "Launch your own project or startup using MVP development, product design, branding and market validation.",
    },
  ];

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      // Entry animation
      gsap.fromTo(
        card,
        { opacity: 0, y: 50, rotateX: 20, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.12,
          ease: "power3.out",
        }
      );

      // Hover effects
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.05,
          rotateX: 0,
          boxShadow: "0px 10px 25px rgba(0,0,0,0.15)",
          duration: 0.3,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          rotateX: 0,
          boxShadow: "0px 4px 10px rgba(0,0,0,0.05)",
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen pt-20 font-[Poppins] dark:bg-[#0a0a0a] bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Explore Our <span className="text-blue-600 dark:text-blue-400">Tech Expertise</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Learn, build, and grow with cutting-edge technology skills that power
            the future of innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pb-20">
          {data.map((item, i) => (
            <div
              key={i}
              ref={(el: HTMLDivElement | null) => {
                if (el) {
                  cardsRef.current[i] = el;
                }
              }}
              className={`p-8 rounded-3xl shadow-md cursor-pointer transition-all backdrop-blur-xl bg-gradient-to-br ${item.bg} dark:border dark:border-white/10`}
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
