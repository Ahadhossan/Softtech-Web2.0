import React from "react";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { faqs, practices, services } from "./../../Data/Services/softwaretest";
import Newsletter from "../../common/Newsletter";
import ScrollToTopButton from "../../common/ScrollToTopButton";

const SoftwareTest = () => {
  // faqs state js
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Hero section
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });

  // Testing
  const testingRef = useRef(null);
  const testingInView = useInView(testingRef, {
    once: true,
    margin: "-100px",
  });

  // Testing Card animation variants
  const testingcardVariants = {
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
              Software Testing Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-[#EDFFF8] w-3/4"
            >
              Speed up your software journey and mitigate risk with our
              full-cycle software testing service.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: 50 }}
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
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <SoftwareTestFrom />
          </motion.div> */}
        </div>
      </div>

      {/*Software Testing section */}
      <section
        className="bg-[#f8f8f6] py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8"
        ref={testingRef}
      >
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={testingInView ? { opacity: 1, y: 0 } : {}}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          className="text-sm sm:text-base lg:text-lg font-semibold text-[#151517] text-center sm:text-left leading-relaxed"
        >
          Software testing is more than just a quality assurance measure. This
          service is a strategic investment in your software’s success and
          growth. Avoid the pitfalls of delayed releases, inflated costs, and
          compromised user experience with software testing. Our testing
          services identify and mitigate risks to ensure your software delivers
          exceptional performance and safeguards your brand’s reputation.
        </motion.p>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {services.map(({ title, description }, i) => (
            <motion.article
              key={i}
              initial="hidden"
              animate={testingInView ? "visible" : "hidden"}
              custom={i}
              variants={testingcardVariants}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-[#151517] mb-3">
                {title}
                <div className="bg-[#53aedb] w-10 h-1 mt-2"></div>
              </h3>

              <p className="text-sm sm:text-base text-[#151517] flex-grow">
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
            className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2"
          >
            <b>Best</b> Practices in Software Testing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={practicesInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-700 max-w-full sm:max-w-2xl"
          >
            Lets be honest - Testing can be a pain point. But with Arbisoft, we
            will make it a breeze. Our expert QA team employs a combination of
            testing strategies to ensure your software remains reliable, secure,
            and performs flawlessly.
          </motion.p>
        </header>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {practices.map(({ icon, title, description }, i) => (
            <motion.article
              key={i}
              initial="hidden"
              animate={practicesInView ? "visible" : "hidden"}
              custom={i}
              variants={practicescardVariants}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col hover:scale-105 transition-transform duration-300"
              style={{ transition: "transform 0.3s ease" }}
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800 flex items-center">
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

export default SoftwareTest;
