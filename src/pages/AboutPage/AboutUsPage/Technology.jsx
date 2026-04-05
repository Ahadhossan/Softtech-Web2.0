import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const Technology = () => {
  // partnership section
  const partnershipRef = useRef(null);
  const partnershipInView = useInView(partnershipRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-10 items-centermx-w-9xl mx-auto px-16 py-16 md:px-16 lg:px-24 bg-gray-50"
      ref={partnershipRef}
    >
      {/* Text Content */}
      <div className="space-y-6">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={partnershipInView ? { opacity: 1, x: 0 } : {}}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-gray-800"
        >
          A technology <span className="text-[#53aedb]">partnership</span>
          that goes beyond code
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={partnershipInView ? { opacity: 1, x: 0 } : {}}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-600 text-base md:text-lg leading-relaxed"
        >
          We believe in building enduring relationships with our clients and
          partners. Find out what they have to say about us.
        </motion.p>
      </div>

      {/* Image Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={partnershipInView ? { opacity: 1, x: 0 } : {}}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center"
      >
        <img
          src="https://i.ibb.co/qYgMhBJj/technology-partnership.webp"
          alt="Technology Partnership"
        />
      </motion.div>
    </section>
  );
};

export default Technology;
