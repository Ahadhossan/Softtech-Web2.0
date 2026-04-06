import React from "react";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  consulting,
  faqs,
  practices,
  services,
} from "./../../Data/Services/softwareconsulting";
import Newsletter from "../../common/Newsletter";
import ScrollToTopButton from "../../common/ScrollToTopButton";

const SoftwareConsulting = () => {
  // faqs state js
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // hero section
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });

  // Consulting section
  const consultingRef = useRef(null);
  const consultingInView = useInView(consultingRef, {
    once: true,
    margin: "-100px",
  });

  // consulting Card animation variants
  const consultingcardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.6,
      },
    }),
  };

  // Businesses
  const businessesRef = useRef(null);
  const businessesInView = useInView(businessesRef, {
    once: true,
    margin: "-100px",
  });

  // businesses Card animation variants
  const businessescardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.6,
      },
    }),
  };

  // Practices
  const practicesRef = useRef(null);
  const practicesInView = useInView(practicesRef, {
    once: true,
    margin: "-100px",
  });

  // practices Card animation variants
  const practicescardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.6,
      },
    }),
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="w-full min-h-[340px] bg-gradient-to-br from-black via-slate-900 to-gray-950 py-24 pb-12"
        ref={heroRef}
      >
        <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 mt-10 lg:mt-0">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-bold text-[#53aedb]"
            >
              Software Consulting
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0"
            >
              Expert software consulting to optimize development processes,
              enhance system architecture, and deliver tailored technology
              solutions that drive business growth and operational efficiency.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              href="#contact"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
            >
              Lets Talk
            </motion.a>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0"
          >
            <img
              src="https://i.ibb.co/Q781X037/Software-Consulting.jpg"
              alt="Software Consulting"
              width={500}
              height={400}
              loading="lazy"
              className="w-full max-w-lg h-auto object-contain rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/*Consulting section */}
      <section
        className="max-w-9xl mx-auto px-6 py-10 sm:px-8 lg:px-10 bg-white"
        ref={consultingRef}
      >
        <header className="mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={consultingInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            id="best-practices-in-backend-development"
            className="text-2xl sm:text-3xl font-extrabold text-[#151517] mb-2"
          >
            <span className="text-[#53aedb]">Our Software</span> Consulting
            Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={consultingInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#151517] max-w-full sm:max-w-2xl"
          >
            How well your project is planned and developed will determine its
            ultimate success, its potential for a positive ROI, and its ability
            to scale as your business grows. Without the right expertise, you
            risk falling short of your goals and missing key opportunities.
          </motion.p>
        </header>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {consulting.map(({ icon, title, description }, i) => (
            <motion.article
              initial="hidden"
              animate={consultingInView ? "visible" : "hidden"}
              custom={i}
              variants={consultingcardVariants}
              key={i}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col hover:scale-105 transition-transform duration-300"
              style={{ transition: "transform 0.3s ease" }}
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-[#151517] flex items-center">
                <img
                  src={icon}
                  alt={`${title} icon`}
                  className="w-6 h-6 mr-2 flex-shrink-0"
                />
                {title}
              </h3>
              <p className="text-gray-600 flex-grow text-sm sm:text-base">
                {description}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/*Helping Businesses section */}
      <section
        className="space-y-6 max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-[#f8f8f6]"
        ref={businessesRef}
      >
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={businessesInView ? { opacity: 1, y: 0 } : {}}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[#151517]"
        >
          Helping Businesses of All Types
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={businessesInView ? { opacity: 1, x: 0 } : {}}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 text-center sm:text-left max-w-3xl mx-auto sm:mx-0"
        >
          We provide software consulting services to businesses of all sizes and
          all stripes.
        </motion.p>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description }, i) => (
            <motion.article
              initial="hidden"
              animate={businessesInView ? "visible" : "hidden"}
              custom={i}
              variants={businessescardVariants}
              key={i}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-[#151517]">
                {title}
              </h3>
              <p className="text-gray-600 flex-grow text-sm sm:text-base">
                {description}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/*Practices section */}
      <section
        className="max-w-9xl mx-auto px-6 py-10 sm:px-8 lg:px-10 bg-white"
        ref={practicesRef}
      >
        <header className="mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={practicesInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            id="best-practices-in-backend-development"
            className="text-2xl sm:text-3xl font-extrabold text-[#151517] mb-2"
          >
            <b>Best</b> Practices in Software Consulting
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={practicesInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#151517] max-w-full sm:max-w-2xl"
          >
            SoftTech prides itself on crafting successful software that caters
            to your digital growth. Our experts do everything software - around
            the clock, delivering you innovative and precisely focused software
            consulting services.
          </motion.p>
        </header>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {practices.map(({ title, description }, i) => (
            <motion.article
              initial="hidden"
              animate={practicesInView ? "visible" : "hidden"}
              custom={i}
              variants={practicescardVariants}
              key={i}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col hover:scale-105 transition-transform duration-300"
              style={{ transition: "transform 0.3s ease" }}
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-[#151517] flex items-center">
                {title}
              </h3>
              <p className="text-gray-600 flex-grow text-sm sm:text-base">
                {description}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Faqs section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-[#042222]">
            Frequently <span className="text-[#53aedb]">Asked</span> Questions
          </h2>

          <div className="space-y-4 text-left">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border rounded-md bg-white shadow-sm overflow-hidden transition-all duration-500 ease-in-out"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-4 py-3 flex justify-between items-center text-left bg-[#a0d1e9] hover:bg-[#73c1e9] transition-colors duration-300 text-gray-800 font-semibold"
                >
                  <p className="text-gray-800 font-medium">{faq.question}</p>
                  <span
                    className={`text-2xl text-[#151517] transform transition-transform duration-300 ${
                      openIndex === idx ? "rotate-180" : ""
                    }`}
                  >
                    {openIndex === idx ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`px-4 text-[#042222] bg-[#dcf3ea] text-sm overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === idx
                      ? "max-h-96 py-2 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {typeof faq.answer === "string" ? (
                    <p>{faq.answer}</p>
                  ) : (
                    faq.answer
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />

      {/* Scrolltop */}
      <ScrollToTopButton />
    </>
  );
};

export default SoftwareConsulting;
