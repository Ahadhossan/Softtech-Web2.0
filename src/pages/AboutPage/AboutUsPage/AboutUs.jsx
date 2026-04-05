import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const AboutUs = () => {
  // about us section
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" });

  return (
    <div className="pt-16 pb-16 bg-[#f8f8f6]" ref={aboutRef}>
      <div className="max-w-9xl px-16 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* left slide */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={aboutInView ? { opacity: 1, x: 0 } : {}}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.8 }}
        >
          <img src="https://i.ibb.co/Y4Q8k2tS/about.webp" alt="" />
        </motion.div>
        {/* right slide */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            className="text-sm sm:text-base md:text-xl font-bold text-[#53aedb] uppercase"
          >
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl mt-3 font-bold leading-[1.8rem] md:leading-[3rem] text-[#151517]"
          >
            Innovations Excellence Building Digital Future Together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-3 text-[#151517] text-sm sm:text-base md:text-lg leading-6"
          >
            SoftTech Company is committed to driving innovations and excellence,
            building a digital future together with our clients through
            cutting-edge solutions and transformative technology.
          </motion.p>
          {/* top side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={aboutInView ? { opacity: 1, x: 0 } : {}}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center"
          >
            {/* card 1 */}
            <div className="flex items-center gap-4">
              <img src="https://i.ibb.co/TxsWWTj6/a1.webp" alt="" />
              <h1 className="text-[25px] sm:text-[17px] font-semibold leading-5 text-[#151517] ">
                IT Infrastucture <br /> Management
              </h1>
            </div>
            {/* card 2 */}
            <div className="flex items-center gap-4">
              <img src="https://i.ibb.co/bjyJMCcg/a2.webp" alt="" />
              <h1 className="text-[25px] sm:text-[17px] font-semibold leading-5 text-[#151517]">
                Cloud Integration <br /> Service Provide
              </h1>
            </div>
          </motion.div>
          {/* bottom side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={aboutInView ? { opacity: 1, x: 0 } : {}}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center"
          >
            {/* card 1 */}
            <div className="flex items-center gap-4">
              <img src="https://i.ibb.co/v6fNt49L/a3.webp" alt="" />
              <h1 className="text-[25px] sm:text-[17px] font-semibold leading-5 text-[#151517]">
                Custom Software <br /> Development
              </h1>
            </div>
            {/* card 2 */}
            <div className="flex items-center gap-4">
              <img src="https://i.ibb.co/YB5GmH6M/a4.webp" alt="" />
              <h1 className="text-[25px] sm:text-[17px] font-semibold leading-5 text-[#151517]">
                Instant Supports <br /> any Queries
              </h1>
            </div>
          </motion.div>
          {/* button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12"
          >
            <a
              href="#"
              className="w-full py-4 text-base text-center text-white transition-colors font-semibold duration-300 bg-blue-800 rounded-full uppercase hover:bg-blue-900 ease px-9 md:w-auto"
            >
              About More
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
