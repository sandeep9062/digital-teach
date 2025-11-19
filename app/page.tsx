import FeaturedCourses from "@/components/FeaturedCourses";
import Features from "@/components/Features";

import Hero from "@/components/Hero";

import ServicesSlider from "@/components/ServicesSlider";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <WhyUs />
      <ServicesSlider />
      <FeaturedCourses />
      <Testimonials />
    </>
  );
}
