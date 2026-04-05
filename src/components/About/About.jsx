import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ContactForm from "../../common/ContactForm/ContactForm";
import Newsletter from "../../common/Newsletter";
import ScrollToTopButton from "../../common/ScrollToTopButton";
import HeroSection from "../../pages/AboutUsPage/HeroSection";
import AboutUs from "../../pages/AboutUsPage/AboutUs";
import Choice from "../../pages/AboutUsPage/Choice";
import Technology from "../../pages/AboutUsPage/Technology";

const About = () => {
  return (
    <>
      {/* Hero Banner */}
      <HeroSection />

      {/* about us */}
      <AboutUs />

      {/* choice section */}
      <Choice />

      {/* technology partnership section */}
      <Technology />

      {/* Newsletter */}
      <Newsletter />

      {/* Contact From */}
      <ContactForm />

      {/* Scrolltop */}
      <ScrollToTopButton />
    </>
  );
};

export default About;
