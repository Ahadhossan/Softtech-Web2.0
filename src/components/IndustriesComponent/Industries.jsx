import React from "react";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrollToTopButton from "../../common/ScrollToTopButton";

const Industries = () => {
  // Industries
  const industriesRef = useRef(null);
  const industriesInView = useInView(industriesRef, {
    once: true,
    margin: "-100px",
  });

  // education
  const educationRef = useRef(null);
  const educationInView = useInView(educationRef, {
    once: true,
    margin: "-100px",
  });

  // travel
  const travelRef = useRef(null);
  const travelInView = useInView(travelRef, {
    once: true,
    margin: "-100px",
  });

  // Healthcare
  const healthcareRef = useRef(null);
  const healthcareInView = useInView(healthcareRef, {
    once: true,
    margin: "-100px",
  });

  // Financial
  const financialRef = useRef(null);
  const financialInView = useInView(financialRef, {
    once: true,
    margin: "-100px",
  });

  // E-commerce
  const eCommerceRef = useRef(null);
  const eCommerceInView = useInView(eCommerceRef, {
    once: true,
    margin: "-100px",
  });

  // Technology
  const technologyRef = useRef(null);
  const technologyInView = useInView(technologyRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <>
      {/* Industries We Serve */}
      <section
        className="bg-gradient-to-r from-blue-500 to-teal-600 text-white pt-32 pb-14"
        ref={industriesRef}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={industriesInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center mb-2 text-[#151517]"
          >
            Industries We Serve
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={industriesInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-[#151517] mb-6"
          >
            We specialize in delivering tailored solutions across various
            industries.
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center items-center">
            {/* Example Industry Cards */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={industriesInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-blue-700 p-6 rounded-lg shadow-md transition flex items-center justify-center w-full max-w-sm mx-auto"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Education
              </h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={industriesInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-red-400 p-6 rounded-lg shadow-md transition flex items-center justify-center w-full max-w-sm mx-auto"
            >
              <h3 className="text-xl font-semibold mb-4">Travel</h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={industriesInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-neutral-600 p-6 rounded-lg shadow-md transition flex items-center justify-center w-full max-w-sm mx-auto"
            >
              <h3 className="text-xl font-semibold mb-4">Healthcare</h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={industriesInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-orange-300 p-6 rounded-lg shadow-md transition flex items-center justify-center w-full max-w-sm mx-auto"
            >
              <h3 className="text-xl font-semibold mb-4">E-commerce</h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={industriesInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="bg-sky-900 p-6 rounded-lg shadow-md transition flex items-center justify-center w-full max-w-sm mx-auto"
            >
              <h3 className="text-xl font-semibold mb-4">Technology</h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={industriesInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-emerald-300 p-6 rounded-lg shadow-md transition flex items-center justify-center w-full max-w-sm mx-auto"
            >
              <h3 className="text-xl font-semibold mb-4">Finance</h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* education section */}
      <section
        className="bg-slate-200 pt-16 pb-8 md:pt-24 md:pb-10"
        ref={educationRef}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Content Section */}
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={educationInView ? { opacity: 1, x: 0 } : {}}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.8 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#151517] mb-4 leading-tight"
              >
                Transforming learning by{" "}
                <span className="text-[#53aedb]">educating</span> millions
                worldwide
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                animate={educationInView ? { opacity: 1, x: 0 } : {}}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-[#151517]"
              >
                We have partnered with some of the leading education, financial,
                and nonprofit institutes to transform learning platforms
                digitally. Our ed-tech solutions are used by millions around the
                globe to access knowledge in new and innovative ways.
              </motion.p>
            </div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={educationInView ? { opacity: 1, x: 0 } : {}}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="hover:scale-105 transition-transform duration-300"
            >
              <img
                src="https://i.ibb.co/DHbhDghH/education.jpg"
                alt="Illustration of education with students and technology"
                className="w-full h-auto rounded-lg object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* travel section */}
      <section className="w-full bg-white py-16" ref={travelRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={travelInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#151517] mb-4"
          >
            Revolutionizing the Travel Industry Through{" "}
            <span className="text-[#53aedb]">travel Apps</span> by SoftTech
            Company
          </motion.h2>
          {/* Introduction */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={travelInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[15px] sm:text-[17px] text-[#151517] mb-8"
          >
            SoftTech Company is dedicated to crafting innovative travel
            experiences. Our award-winning apps make exploring the world
            effortless, offering seamless bookings, real-time updates, and
            personalized itineraries.
          </motion.p>

          {/* Core Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* box-1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={travelInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group rounded-xl p-6 text-center border border-white/20 bg-white/30 backdrop-blur-md shadow-lg transition duration-300 hover:shadow-2xl hover:bg-white/60 hover:border-green-400"
            >
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-green-400 transition">
                Real-Time Updates
              </h3>
              <p className="text-[16px] text-[#151517] mt-2">
                Stay updated on travel changes with live alerts about flight
                status, gate changes, and more. Never miss an important
                notification!
              </p>
            </motion.div>
            {/* box-2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={travelInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative group rounded-xl p-6 text-center border border-white/20 bg-white/30 backdrop-blur-md shadow-lg transition duration-300 hover:shadow-2xl hover:bg-white/60 hover:border-blue-600"
            >
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                Seamless Booking
              </h3>
              <p className="text-[16px] text-[#151517] mt-2">
                Effortlessly book flights, accommodations, and activities with
                just a few taps, ensuring a hassle-free experience from start to
                finish.
              </p>
            </motion.div>
            {/* box-3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={travelInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative group rounded-xl p-6 text-center border border-white/20 bg-white/30 backdrop-blur-md shadow-lg transition duration-300 hover:shadow-2xl hover:bg-white/60 hover:border-fuchsia-500"
            >
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-fuchsia-500 transition">
                Personalized Itinerary
              </h3>
              <p className="text-[17px] text-gray-600 mt-2">
                Customize your travel plans to suit your needs, with suggested
                itineraries based on your preferences, helping you make the most
                of your journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* healthcare section */}
      <section className="bg-slate-200 pt-32 pb-14" ref={healthcareRef}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={healthcareInView ? { opacity: 1, x: 0 } : {}}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              className=" hover:scale-105 transition-transform"
            >
              <img
                src="https://i.ibb.co/5gnQbG7C/healthcare.jpg"
                alt="Illustration of education with students and technology"
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
            {/* Content Section */}
            <div>
              <motion.h2
                initial={{ opacity: 0, x: 50 }}
                animate={healthcareInView ? { opacity: 1, x: 0 } : {}}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#151517] mb-4 leading-tight"
              >
                Transforming the digital landscape of{" "}
                <span className="text-[#53aedb]">healthcare</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                animate={healthcareInView ? { opacity: 1, x: 0 } : {}}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-[#151517]"
              >
                Our apps have been a cornerstone of the technology revolution in
                the healthcare industry. From educating medical students to
                patient management in clinics, our experts have covered it all.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Financial section */}
      <section className="w-full bg-gray-50 py-16" ref={financialRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={financialInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#151517] mb-4"
          >
            Developing Bespoke{" "}
            <span className="text-[#53aedb]">Financial Solutions</span> for the
            Modern Age
          </motion.h2>
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={financialInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[15px] sm:text-[17px] text-[#151517] mb-8"
          >
            At SoftTech Company, we specialize in leveraging innovative
            technology to craft custom financial solutions that empower
            businesses to navigate today’s fast-paced, data-driven world.
          </motion.p>

          {/* Core Solutions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* box 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={financialInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group rounded-xl p-6 text-center border border-white/20 bg-white/30 backdrop-blur-md shadow-lg transition duration-300 hover:shadow-2xl hover:bg-white/60 hover:border-red-500"
            >
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-red-500 transition">
                Custom Financial Software
              </h3>
              <p className="text-[17px] text-gray-600 mt-2">
                Our team of experts builds bespoke financial software tailored
                to your specific business needs, ensuring maximum efficiency and
                scalability.
              </p>
            </motion.div>
            {/* box 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={financialInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative group rounded-xl p-6 text-center border border-white/20 bg-white/30 backdrop-blur-md shadow-lg transition duration-300 hover:shadow-2xl hover:bg-white/60 hover:border-cyan-950"
            >
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-cyan-950 transition">
                Real-Time Financial Tracking
              </h3>
              <p className="text-[17px] text-gray-600 mt-2">
                Gain instant access to key financial data through our real-time
                tracking solutions, empowering your team to make quick,
                data-driven decisions.
              </p>
            </motion.div>
            {/* box 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={financialInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative group rounded-xl p-6 text-center border border-white/20 bg-white/30 backdrop-blur-md shadow-lg transition duration-300 hover:shadow-2xl hover:bg-white/60 hover:border-green-900"
            >
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-green-900 transition">
                Automated Compliance Management
              </h3>
              <p className="text-[17px] text-gray-600 mt-2">
                SoftTech automates the compliance process, ensuring that your
                financial operations remain in full regulatory compliance with
                minimal manual effort.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* e-commerce section */}
      <section
        className="bg-slate-200 pt-16 pb-8 md:pt-24 md:pb-10"
        ref={eCommerceRef}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Content Section */}
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={eCommerceInView ? { opacity: 1, x: 0 } : {}}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.8 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#151517] mb-4 leading-tight"
              >
                <span className="text-[#53aedb]">Dynamic e-commerce</span>{" "}
                solutions patterned to your business needs
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: 50 }}
                animate={eCommerceInView ? { opacity: 1, x: 0 } : {}}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-[#151517]"
              >
                Our experience in setting up and supporting online businesses
                means we are more than equipped to handle the challenges your
                company faces, whether you are just starting out or scaling up.
                To empower our partners to solve their problems, we are in the
                business of creating simple and sophisticated solutions that
                make it easier for you to run an e-commerce business without
                external support.
              </motion.p>
            </div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={eCommerceInView ? { opacity: 1, x: 0 } : {}}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="hover:scale-105 transition-transform duration-300"
            >
              <img
                src="https://i.ibb.co/GQrYvcvR/e-commerce.jpg"
                alt="Illustration of education with students and technology"
                className="w-full h-auto rounded-lg object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology section */}
      <section className="w-full bg-gray-50 py-16" ref={technologyRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={technologyInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#151517] mb-4"
          >
            The Ultimate <span className="text-[#53aedb]">Technology</span> and
            Solution Development Partner
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={technologyInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[15px] sm:text-[17px] text-[#151517] mb-8"
          >
            Technology and software industry leaders place their confidence in
            SoftTech Company to support their expanding enterprise.
          </motion.p>

          {/* Core Expertise Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
            {/* box 1 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={technologyInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group rounded-xl p-6 text-center border border-white/20 bg-white/30 backdrop-blur-md shadow-lg transition duration-300 hover:shadow-2xl hover:bg-white/60 hover:border-pink-400"
            >
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-pink-400 transition">
                Innovative Technology Solutions
              </h3>
              <p className="text-[17px] text-gray-600 mt-2">
                SoftTech Company offers cutting-edge technology solutions that
                are tailored to meet the unique needs of businesses across
                industries.
              </p>
            </motion.div>
            {/* box 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={technologyInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative group rounded-xl p-6 text-center border border-white/20 bg-white/30 backdrop-blur-md shadow-lg transition duration-300 hover:shadow-2xl hover:bg-white/60 hover:border-blue-900"
            >
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-900 transition">
                Custom Software Development
              </h3>
              <p className="text-[17px] text-gray-600 mt-2">
                From concept to deployment, we create custom software that
                streamlines processes, improves efficiency, and drives
                innovation.
              </p>
            </motion.div>
            {/* box 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={technologyInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative group rounded-xl p-6 text-center border border-white/20 bg-white/30 backdrop-blur-md shadow-lg transition duration-300 hover:shadow-2xl hover:bg-white/60 hover:border-teal-500"
            >
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-teal-500 transition">
                Enterprise Support & Consulting
              </h3>
              <p className="text-[17px] text-gray-600 mt-2">
                SoftTech provides strategic consulting and dedicated enterprise
                support to ensure your business stays ahead in a rapidly
                changing technological landscape.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scrolltop */}
      <ScrollToTopButton />
    </>
  );
};

export default Industries;
