"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";

const clients = [
  { name: "Google" },
  { name: "Meta" },
  { name: "Amazon" },
  { name: "Netflix" },
  { name: "OpenAI" },
  { name: "Salesforce" },
  { name: "Adobe" },
  { name: "Microsoft" },
];

const OurClients = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">
          Trusted by Global Clients
        </h2>
        <p className="text-muted-foreground mb-12">
          We've had the privilege of working with forward-thinking companies.
        </p>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={3000}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {clients.map((client, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-lg bg-muted border border-transparent hover:border-primary transition-all duration-300"
              >
                <span className="text-lg font-semibold text-muted-foreground">
                  {client.name}
                </span>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurClients;
