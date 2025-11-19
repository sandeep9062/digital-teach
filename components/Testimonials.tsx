"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// ⭐ Helper function to render star ratings
const renderStars = (rating: number) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <FaStar
        key={`full-${i}`}
        className="text-yellow-400 w-5 h-5 drop-shadow-md"
      />
    );
  }
  if (hasHalfStar) {
    stars.push(
      <FaStarHalfAlt
        key="half"
        className="text-yellow-400 w-5 h-5 drop-shadow-md"
      />
    );
  }
  for (let i = 0; i < 5 - fullStars - (hasHalfStar ? 1 : 0); i++) {
    stars.push(<FaRegStar key={`empty-${i}`} className="text-gray-300 w-5 h-5" />);
  }

  return <div className="flex gap-1">{stars}</div>;
};

// =======================================================
// ⭐ Sample Student Reviews
// =======================================================
const sampleStudentReviews = [
  {
    _id: "s1",
    name: "Ananya Sharma",
    course: "Computer Science, Batch 2024",
    review:
      "This platform helped me understand complex topics easily. The interactive sessions and practical exercises were amazing!",
    image: "/students/ananya.jpg",
    rating: 5,
  },
  {
    _id: "s2",
    name: "Rohan Mehta",
    course: "Business Management, Batch 2023",
    review:
      "I loved the live projects and mentorship. It gave me the confidence to tackle real-world challenges.",
    image: "/students/rohan.jpg",
    rating: 4.5,
  },
  {
    _id: "s3",
    name: "Priya Singh",
    course: "Design & UX, Batch 2024",
    review:
      "The instructors were super supportive and the community was amazing. I learned so much in just a few months!",
    image: "/students/priya.jpg",
    rating: 5,
  },
  {
    _id: "s4",
    name: "Aditya Verma",
    course: "Data Science, Batch 2023",
    review:
      "Hands-on exercises and clear explanations made learning fun. Highly recommend this to anyone wanting to upgrade their skills.",
    image: "/students/aditya.jpg",
    rating: 4,
  },
];

// =======================================================
// ⭐ MAIN COMPONENT
// =======================================================
const StudentReviews = () => {
  const reviews = sampleStudentReviews;

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 dark:from-[#0D1321] dark:to-[#111827] py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-navy dark:text-white"
        >
          What Our Students Say
        </motion.h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="mt-12"
        >
          {reviews.map((r) => (
            <SwiperSlide key={r._id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className=" p-8 rounded-3xl border overflow-hidden mb-2  bg-blue-50 dark:bg-gray-800/60  border-gray-200/40 dark:border-gray-600/40 cursor-pointer shadow-xl backdrop-blur-md hover:scale-105 transition-transform duration-300 max-w-2xl mx-auto"
              >
                <div className="flex items-center gap-4 mb-4">
                  {r.image ? (
                    <Image
                      src={r.image}
                      alt={r.name}
                      width={56}
                      height={56}
                      className="rounded-full object-cover h-14 w-14"
                    />
                  ) : (
                    <div className="rounded-full h-14 w-14 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                      {r.name.charAt(0)}
                    </div>
                  )}

                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {r.name}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {r.course}
                    </p>
                  </div>
                </div>

                <div className="flex justify-start mb-4">{renderStars(r.rating)}</div>

                <p className="text-sm text-gray-700 dark:text-gray-300 text-left leading-relaxed">
                  {r.review}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default StudentReviews;
