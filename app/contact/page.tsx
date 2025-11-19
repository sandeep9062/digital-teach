import React from "react";
//import ContactPage from "../components/ContactPage/page";
import ContactHeader from "./ContactHeader/ContactHeader";
import ContactInfoSection from "./ContactInfoSection/ContactInfoSection";
import SocialMediaLinks from "./SocialLinks/SocialMediaLinks";
import CTAWithForm from "../../components/CTAWithForm"



const Contact = () => {
  return (
    <>
      <ContactHeader />

      <CTAWithForm />
    
      <SocialMediaLinks />
      <ContactInfoSection />

    </>
  );
};

export default Contact;
