"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { FaUsers, FaLaptopCode, FaIndustry, FaBrain } from "react-icons/fa6";
import { AiFillCheckCircle } from "react-icons/ai";
import OurClients from "./ourClients/OurClients";
import OurStory from "./ourStory/OurStory";
import CTAWithForm from "@/components/CTAWithForm";
import { FaUserGraduate, FaChalkboardTeacher, FaLightbulb, FaRocket } from "react-icons/fa";


const aboutStats = [
  { icon: <FaUsers className="w-6 h-6" />, label: "Students Mentored", value: "500+" },
  { icon: <FaLaptopCode className="w-6 h-6" />, label: "Projects Completed", value: "150+" },
  { icon: <FaIndustry className="w-6 h-6" />, label: "Workshops Conducted", value: "25+" },
  { icon: <FaBrain className="w-6 h-6" />, label: "Skill Certifications", value: "300+" },
];

const missionPoints = [
  "Guiding students to build real-world projects",
  "Hands-on coding sessions & workshops",
  "Personalized mentorship & career guidance",
  "Skill-building in web development, AI, and more",
  "Soft skills & interview preparation",
  "Fostering innovation, creativity, and problem-solving",
];

const whyChooseUsPoints = [
  {
    icon: <FaUserGraduate className="w-8 h-8 text-blue-500" />,
    title: "Expert-Led Training",
    description: "Learn from industry professionals with years of real-world experience.",
  },
  {
    icon: <FaChalkboardTeacher className="w-8 h-8 text-blue-500" />,
    title: "Hands-On Projects",
    description: "Build a strong portfolio with practical, hands-on project work.",
  },
  {
    icon: <FaLightbulb className="w-8 h-8 text-blue-500" />,
    title: "Career Guidance",
    description: "Receive personalized mentorship and guidance to achieve your career goals.",
  },
  {
    icon: <FaRocket className="w-8 h-8 text-blue-500" />,
    title: "Innovation Focused",
    description: "Stay ahead with a curriculum focused on the latest industry trends.",
  },
];


export default function AboutPage() {
  return (
    <div>
      <main className="min-h-screen pt-20 mt-30 text-foreground bg-background px-4 md:px-8 lg:px-12 transition-colors duration-300">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <Image
            src="/logo.png"
            alt="EduLogo"
            width={140}
            height={140}
            className="mx-auto mb-6 sparkle-animation"
            priority
          />
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
            About <span className="text-primary">Vpro</span>Tech
          </h1>
          <p className="md:text-lg text-base text-muted-foreground leading-relaxed">
            Empowering students with knowledge, practical experience, and mentorship. We help learners gain the skills and confidence to thrive in the tech world.
          </p>
        </motion.section>

        <Separator className="my-16" />

        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden">
            <Image src="/location.jpg" alt="Our Mission" fill className="object-cover rounded-xl" />
          </div>

          <div>
            <h2 className=" font-bold mb-4 text-3xl md:text-4xl text-primary">
              Our Mission
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-4 leading-relaxed">
              At <strong>VproTech</strong>, our mission is to guide students to achieve their goals through hands-on learning, mentorship, and practical experience.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Founded in March 2020 by Rajat Kumar, VProTech Digital provides industrial training for B.Tech, Diploma, BCA, and MCA students. Our trainers specialize in web development, Android apps, SEO, social media marketing, and other skills through 6-week and 6-month programs.
            </p>
          </div>
        </motion.section>

        <Separator className="my-16" />

        {/* What We Do Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-2xl font-bold mb-4 text-primary">What We Do</h2>
            <ul className="space-y-4 md:text-lg text-base text-muted-foreground">
              {missionPoints.map((point, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <AiFillCheckCircle className="text-gold w-5 h-5 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden">
            <Image src="/location1.jpg" alt="What We Do" fill className="object-cover rounded-xl" />
          </div>
        </motion.section>

        <Separator className="my-16" />

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-6xl mx-auto mb-20"
        >
          {aboutStats.map((stat, index) => (
            <div key={index} className="bg-muted p-6 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="mb-3 flex justify-center text-gold">{stat.icon}</div>
              <h3 className="text-2xl font-bold text-primary">{stat.value}</h3>
              <p className="text-sm md:text-base text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.section>

        <Separator />

        <OurStory />
        
        {/* Why Choose Us Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto py-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsPoints.map((point, index) => (
              <div key={index} className="bg-muted p-6 rounded-lg text-center">
                <div className="flex justify-center mb-4">{point.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-primary">{point.title}</h3>
                <p className="text-muted-foreground">{point.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <OurClients />
        <CTAWithForm />
      </main>
    </div>
  );
}
