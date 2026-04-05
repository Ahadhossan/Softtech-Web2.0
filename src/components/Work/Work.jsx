import React from "react";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ContactForm from "../../common/ContactForm/ContactForm";
import Newsletter from "../../common/Newsletter";
import ScrollToTopButton from "../../common/ScrollToTopButton";
import { industries } from "../../Data/Work";

const Work = () => {
  // hero section
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });

  // list of work
  const workRef = useRef(null);
  const workInView = useInView(workRef, { once: true, margin: "-100px" });

  // Card
  const cardVariants = {
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
      {/* hero section */}
      <section
        className="relative w-full h-[90vh] md:h-[75vh] lg:h-[85vh] overflow-hidden"
        ref={heroRef}
      >
        {/* Desktop Banner */}
        <div className="hidden md:block absolute inset-0">
          <img
            src="https://d1foa0aaimjyw4.cloudfront.net/banner_work_fb6119fde0.webp"
            alt="Desktop Banner"
            className="w-full h-full object-cover object-bottom"
            aria-hidden="true"
            role="presentation"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Mobile Banner */}
        <div className="block md:hidden absolute inset-0">
          <img
            src="https://d1foa0aaimjyw4.cloudfront.net/Who_we_work_with_56d55013b9.jpg"
            alt="Mobile Banner"
            className="w-full h-full object-cover object-bottom"
            aria-hidden="true"
            role="presentation"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex items-center justify-center h-full bg-black/70 px-4">
          <div className="text-white text-start md:text-left max-w-6xl w-full">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-bold mb-4 w-full md:w-[50%] text-[#53aedb]"
            >
              From startups to enterprises, we work with the world’s best
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-lg mb-6 w-full md:w-[50%]"
            >
              With over a decade of experience in technology consultancy, we’ve
              created thousands of solutions to help businesses like yours
              expand at a rapid scale. From startups to large-scale enterprises,
              we’ve supported the foundations for some of the most successful
              global businesses.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              aria-label="Contact us to work together"
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

      {/* industries box, Technology, Education, Travel, Healthcare, Finance, E-commerce */}

      <section
        className="bg-gradient-to-br from-gray-100 to-white py-20"
        ref={workRef}
      >
        <div className="container mx-auto px-6 space-y-16">
          {industries.map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              animate={workInView ? "visible" : "hidden"}
              custom={idx}
              variants={cardVariants}
              className={`flex flex-col lg:flex-row ${
                item.imageRight ? "lg:flex-row-reverse" : ""
              } items-center gap-10 bg-white p-6 rounded-2xl shadow-2xl hover:shadow-[0_10px_60px_rgba(0,0,0,0.2)] transition duration-500`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-xl w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
                <h2 className="text-3xl font-bold text-[#53aedb]">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {item.text}
                </p>
                <a
                  href={item.link}
                  aria-label={`Explore our ${item.title} services`}
                  className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                >
                  Explore our work
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact From */}
      <ContactForm />

      {/* Newsletter */}
      <Newsletter />

      {/* Scrolltop */}
      <ScrollToTopButton />
    </>
  );
};

export default Work;
