import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const Work = () => {
  // work
  const workRef = useRef(null);
  const workInView = useInView(workRef, { once: true, margin: "-100px" });

  return (
    <section className="p-10 bg-slate-50 px-16 max-w-9xl mx-auto" ref={workRef}>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={workInView ? { opacity: 1, y: 0 } : {}}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="text-center text-[40px] text-[#151517] mb-8"
      >
        How Can We <span className="text-[#53aedb]">Work</span> With You
      </motion.h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Software Development Outsourcing */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={workInView ? { opacity: 1, y: 0 } : {}}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
          className="relative group rounded-2xl p-6 text-center 
  border border-gray-200/50 
  bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50
  shadow-md transition-all duration-500 
  hover:shadow-2xl hover:-translate-y-1 hover:border-blue-400 overflow-hidden"
        >
          {/* Soft Glow Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-400/20 rounded-full blur-3xl"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h1 className="mb-4 text-xl font-semibold text-gray-800 transition hover:text-blue-500">
              Software Development Outsourcing
            </h1>
            <p className="text-gray-600 transition group-hover:text-gray-800">
              We build your software from start to finish, letting you focus on
              your core business.
            </p>
          </div>
        </motion.div>

        {/* Dedicated Teams */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={workInView ? { opacity: 1, y: 0 } : {}}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative group rounded-2xl p-6 text-center border border-white/20 
  bg-gradient-to-br from-purple-500/10 via-indigo-500/10 to-blue-500/10 
  backdrop-blur-xl shadow-lg transition duration-500 
  hover:shadow-2xl hover:scale-[1.02] hover:border-purple-400 overflow-hidden"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h1 className="mb-4 text-xl font-semibold text-gray-800 transition group-hover:text-purple-600">
              Dedicated Teams
            </h1>
            <p className="text-gray-600 transition group-hover:text-gray-800">
              You get a fully committed team that integrates into your
              organization and culture.
            </p>
          </div>
        </motion.div>

        {/* IT Staff Augmentation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={workInView ? { opacity: 1, y: 0 } : {}}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative group rounded-2xl p-6 text-center 
  border border-gray-200/50 
  bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50
  shadow-md transition-all duration-500 
  hover:shadow-2xl hover:-translate-y-1 hover:border-teal-400 overflow-hidden"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-teal-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h1 className="text-xl font-semibold text-gray-800 group-hover:text-teal-500 transition">
              IT Staff Augmentation
            </h1>
            <p className="text-gray-600 mt-3 group-hover:text-gray-800 transition">
              Fill skills gaps fast by bringing in qualified professionals
              whenever you need them.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
