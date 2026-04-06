import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { faqs, practices, services } from "../../Data/Services/frontend";
import Newsletter from "../../common/Newsletter";
import ScrollToTopButton from "../../common/ScrollToTopButton";

const Frontend = () => {
  // faqs state js
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // hero section
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });

  // frontend
  const frontendRef = useRef(null);
  const frontendInView = useInView(frontendRef, {
    once: true,
    margin: "-100px",
  });

  // frontend Card animation variants
  const frontendcardVariants = {
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

  // Services Card animation variants
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
      <div className="w-full hero-bg py-24 px-4 md:px-12" ref={heroRef}>
        <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-semibold text-[#53aedb]"
            >
              Frontend Development Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-[#EDFFF8] w-3/4
            "
            >
              We focus on usability and aesthetics to create powerful first
              impressions that captivate your users and put your business ahead
              of the competition.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              href="/contact"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-900 transition mt-6"
            >
              Lets Talk
            </motion.a>
          </div>

          {/* Right Side - Form */}
          {/* <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <FrontendFrom />
          </motion.div> */}
        </div>
      </div>

      {/*Frontend Development section */}
      <section
        className="space-y-6 max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-[#f8f8f6]"
        ref={frontendRef}
      >
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={frontendInView ? { opacity: 1, y: 0 } : {}}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          className="text-sm sm:text-base font-extrabold text-[#151517] text-center sm:text-left leading-relaxed"
        >
          Our frontend development services encompass everything from responsive
          design solutions to holistic UI and UX design for your project. With
          over a decade of experience, we have delivered frontend development
          services to a number of industries from finance and healthcare to
          education and travel.
        </motion.p>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {services.map(({ title, description }, i) => (
            <motion.article
              initial="hidden"
              animate={frontendInView ? "visible" : "hidden"}
              custom={i}
              variants={frontendcardVariants}
              key={i}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-[#151517]">
                {title}
                <div className="bg-[#53aedb] w-10 h-1 mt-2"></div>
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
            <b>Best</b> Practices in Frontend Development
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={practicesInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#151517] max-w-full sm:max-w-2xl"
          >
            Our frontend development process follows a clear set of tools,
            techniques, and guidelines. This ensures that every project is
            efficient, consistent, and user-focused. Here’s how we approach it.:
          </motion.p>
        </header>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {practices.map(({ icon, title, description }, i) => (
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

export default Frontend;
