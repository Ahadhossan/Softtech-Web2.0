import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const Choice = () => {
  //choice section
  const choiceRef = useRef(null);
  const choiceInView = useInView(choiceRef, { once: true, margin: "-100px" });

  return (
    <section className="py-16 bg-[#f8f8f6] relative z-10" ref={choiceRef}>
      <div className="container mx-w-9xl mx-auto px-16">
        {/* Section Title */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={choiceInView ? { opacity: 1, x: 0 } : {}}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-gray-800"
          >
            Why we arere the partner of <br />{" "}
            <span className="text-[#53aedb]">choice</span> for our{" "}
            <span className="text-[#53aedb]">clients</span>
          </motion.h2>
        </div>

        {/* Glass Boxes */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Box 1 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={choiceInView ? { opacity: 1, x: 0 } : {}}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group rounded-xl p-6 text-center border border-white/20 bg-white backdrop-blur-md shadow-lg transition duration-300 hover:shadow-2xl hover:bg-white/60 hover:border-blue-500"
          >
            <div className="flex flex-col items-center mb-4">
              <img
                src="https://i.ibb.co/gZjc0zh7/Building-partnership.png"
                alt="Building partnerships"
                className="w-16 h-16 mb-2"
              />
              <h4 className="text-xl font-semibold text-gray-800 group-hover:text-blue-500 transition">
                Building partnerships that last
              </h4>
            </div>
            <p className="text-gray-600 group-hover:text-gray-800">
              We nurture long-term relationships by creating value for our
              clients in all industries.
            </p>
          </motion.div>

          {/* Box 2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={choiceInView ? { opacity: 1, x: 0 } : {}}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group rounded-xl p-6 text-center border border-white/20 bg-white backdrop-blur-md shadow-lg transition duration-300 hover:shadow-2xl hover:bg-white/60 hover:border-purple-300"
          >
            <div className="flex flex-col items-center mb-4">
              <img
                src="https://i.ibb.co/DPW7Dxjk/Creating-value.png"
                alt="Creating value"
                className="w-16 h-16 mb-2"
              />
              <h4 className="text-xl font-semibold text-gray-800 group-hover:text-purple-300 transition">
                Creating value
              </h4>
            </div>
            <p className="text-gray-600 group-hover:text-gray-800">
              Our world-class team of engineers is ready to take on diverse and
              challenging projects to create real value.
            </p>
          </motion.div>

          {/* Box 3 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={choiceInView ? { opacity: 1, x: 0 } : {}}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative group rounded-xl p-6 text-center border border-white/20 bg-white backdrop-blur-md shadow-lg transition duration-300 hover:shadow-2xl hover:bg-white/60 hover:border-teal-300"
          >
            <div className="flex flex-col items-center mb-4">
              <img
                src="https://i.ibb.co/Q7Frxny2/Proven-capability.png"
                alt="Proven capability"
                className="w-16 h-16 mb-2"
              />
              <h4 className="text-xl font-semibold text-gray-800 group-hover:text-teal-400 transition">
                Proven capability
              </h4>
            </div>
            <p className="text-gray-600 transition group-hover:text-gray-800">
              Give us a problem and we will engineer a solution! We build
              enterprise and analytical software for every industry.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Choice;
