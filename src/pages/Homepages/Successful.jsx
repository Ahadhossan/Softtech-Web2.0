import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const Successful = () => {
  // successful softwares
  const sucessRef = useRef(null);
  const sucessInView = useInView(sucessRef, { once: true, margin: "-100px" });

  return (
    <div
      className="pt-16 pb-16 bg-white max-w-9xl mx-auto px-16"
      ref={sucessRef}
    >
      {/* ============ header =================== */}
      <div className="text-center mb-10 px-6">
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          animate={sucessInView ? { opacity: 1, y: 0 } : {}}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          className="uppercase text-lg sm:text-xl md:text-2xl font-bold text-[#53aedb]"
        >
          Softwares
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={sucessInView ? { opacity: 1, y: 0 } : {}}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm mt-1 font-normal text-gray-500"
        >
          Driving Change with Innovative Successful Softwares
        </motion.p>
      </div>
      {/* ============= card ============= */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {/* box 1 */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={sucessInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
            className="relative group rounded-2xl p-6 
    bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50
    border border-gray-200/50 shadow-md 
    transition-all duration-500 
    hover:shadow-2xl hover:-translate-y-1 hover:border-green-400 overflow-hidden"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-green-400/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-400/20 rounded-full blur-3xl"></div>
            </div>

            {/* Image */}
            <div className="relative z-10">
              <video
                src="/src/assets/wired-flat-3094-marketing-letter-hover-pinch.mp4"
                className="h-20 w-20 object-cover rounded-xl mb-5"
                autoPlay
                loop
                muted
                playsInline
              />

              <h1 className="text-xl font-semibold text-gray-800 group-hover:text-green-500 transition">
                Best Marketing Software
              </h1>

              <p className="mt-3 text-gray-600 group-hover:text-gray-800 transition">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repudiandae nobis natus esse! Earum, inventore porro.
              </p>
            </div>
          </motion.div>
        </div>
        {/* box 2 */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={sucessInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative group rounded-2xl p-6 
    bg-gradient-to-br from-red-50 via-rose-50 to-pink-50
    border border-gray-200/50 shadow-md 
    transition-all duration-500 
    hover:shadow-2xl hover:-translate-y-1 hover:border-red-400 overflow-hidden"
          >
            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-red-400/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-pink-400/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <video
                src="/src/assets/wired-flat-943-commodity-hover-pinch.mp4"
                className="h-20 w-20 object-cover rounded-xl mb-5"
                autoPlay
                loop
                muted
                playsInline
              />

              <h1 className="text-xl font-semibold text-gray-800 group-hover:text-red-500 transition">
                Product Sales Software
              </h1>

              <p className="mt-3 text-gray-600 group-hover:text-gray-800 transition">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repudiandae nobis natus esse! Earum, inventore porro.
              </p>
            </div>
          </motion.div>
        </div>
        {/* box 3 */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={sucessInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group rounded-2xl p-6 
    bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50
    border border-gray-200/50 shadow-md 
    transition-all duration-500 
    hover:shadow-2xl hover:-translate-y-1 hover:border-green-400 overflow-hidden"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-green-400/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-400/20 rounded-full blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <video
                src="/src/assets/web.mp4"
                className="h-20 w-20 object-cover rounded-xl mb-5"
                autoPlay
                loop
                muted
                playsInline
              />

              <h1 className="text-xl font-semibold text-gray-800 group-hover:text-green-500 transition">
                Best Web Solution
              </h1>

              <p className="mt-3 text-gray-600 group-hover:text-gray-800 transition">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repudiandae nobis natus esse! Earum, inventore porro.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Successful;
