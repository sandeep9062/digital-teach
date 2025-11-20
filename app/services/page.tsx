import HeroServices from "@/components/HeroServices";
import ServiceCardsSection from "@/components/ServiceCardsSection";
import CTAWithForm from "@/components/CTAWithForm";
import ServicesOverview from "@/components/ServicesOverview";

import WhyChooseUs from "@/components/WhyChooseUs";
import WorkProcess from "@/components/WorkProcess";
import React from "react";
import DemoCallBackSection from "@/components/DemoCallBackSection";

const page = () => {
  return (
    <>
      <HeroServices />
      <ServicesOverview />
      <ServiceCardsSection />
      <WhyChooseUs />
      <DemoCallBackSection />
      <WorkProcess />
      <CTAWithForm />
    </>
  );
};

export default page;
