"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { Button } from "./ui/button";

import { motion } from "framer-motion";
import {
  Monitor,
  Smartphone,
  Brush,
  PencilRuler,
  Layers,
  Globe,
} from "lucide-react";

const services = [
  {
    title: "Digital Marketing",
    desc: "We are a Google partner and deliver powerful digital marketing strategies to help you expand your business with real growth and conversions.",
    icon: <Monitor className="w-10 h-10 text-white" />,
    color: "bg-[#2E9AFE]",
    slug: "/services/digital-marketing",
  },
  {
    title: "Android Development",
    desc: "We build custom Android apps that streamline your business operations and deliver top-tier performance.",
    icon: <Smartphone className="w-10 h-10 text-white" />,
    color: "bg-[#2ECC71]",
    slug: "/services/android-development",
  },
  {
    title: "Website Design",
    desc: "Using modern design concepts, we create highly optimized websites that attract customers and grow your business.",
    icon: <Layers className="w-10 h-10 text-white" />,
    color: "bg-[#6A5ACD]",
    slug: "/services/website-design",
  },
  {
    title: "Web Development",
    desc: "From eCommerce to real estate websites, we build high-performing web solutions tailored for all industries.",
    icon: <Globe className="w-10 h-10 text-white" />,
    color: "bg-[#0093FF]",
    slug: "/services/web-development",
  },
  {
    title: "Logo Designing",
    desc: "Need a creative brand identity? We design unique, original logos to help your business stand out beautifully.",
    icon: <Brush className="w-10 h-10 text-white" />,
    color: "bg-[#2ECC71]",
    slug: "/services/logo-designing",
  },
  {
    title: "Interior Designing",
    desc: "We turn spaces into beautiful, functional environments with professional interior design expertise.",
    icon: <PencilRuler className="w-10 h-10 text-white" />,
    color: "bg-[#6A5ACD]",
    slug: "/services/interior-designing",
  },
];

const ServicesSlider = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-14"
        >
          Services <span className="text-[#2E67F8]">We Provide</span>
        </motion.h2>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 2000 }}
          spaceBetween={30}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {services.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="p-8 rounded-2xl border bg-white dark:bg-[#1e293b] border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 text-center min-h-[380px]"
              >
                <div
                  className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center ${item.color}`}
                >
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  {item.desc}
                </p>
                <Link href={item.slug} passHref>
                  <Button className="mt-6" size={"sm"}>
                    Learn More
                  </Button>
                </Link>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default ServicesSlider;
