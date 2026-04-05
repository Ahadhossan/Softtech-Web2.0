import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const HeroSection = () => {
  // hero section
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });

  return (
    <section
      className="relative w-full h-[90vh] md:h-[75vh] lg:h-[85vh] overflow-hidden"
      ref={heroRef}
    >
      {/* Desktop Banner */}
      <div className="hidden md:block absolute inset-0 w-full h-full">
        <img
          src="https://d1foa0aaimjyw4.cloudfront.net/banner_about_e03a2d2608.webp"
          alt="Banner Desktop"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Mobile Banner */}
      <div className="block md:hidden absolute inset-0 w-full h-full">
        <img
          src="https://d1foa0aaimjyw4.cloudfront.net/Why_Arbisoft_d6186a5263.jpg"
          alt="Banner Mobile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full bg-black/70">
        <div className="text-white text-start md:text-left max-w-9xl mx-auto px-12">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold mb-4 w-full md:w-[50%] text-[#53aedb]"
          >
            Empowering businesses for the modern age
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg mb-6 w-full md:w-[50%]"
          >
            Specializing in integrated software, data management, and
            development services that enable businesses to take the digital leap
            to growth and success.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-900 transition"
          >
            <img
              src="../../src/assets/icon-circle.svg"
              alt="Icon"
              width={24}
              height={24}
            />
            <span>Let’s work together</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
