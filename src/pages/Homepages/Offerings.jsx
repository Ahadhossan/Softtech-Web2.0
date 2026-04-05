import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const offeringsData = {
  services: {
    label: "Our Services",
    categories: [
      {
        title: "Development & QA",
        points: [
          "Ensuring Compatibility and Smooth Integration",
          "Careful Testing and Validation",
          "Providing a Smooth User Experience",
        ],
        description: [
          "Do you know why some software projects don't meet expectations? There are two possible reasons:",
          "You might be missing important steps in your development and QA processes, or you're doing things right, but others are doing them better.",
          "With over 17 years of experience, we’ve built processes that ensure scalable, robust, and user-friendly applications.",
        ],
      },
      {
        title: "Mobility & Apps",
        points: [
          "Developing Apps That Perform Best on Each Platform",
          "Hybrid App Development for Cross-Platform Solutions",
          "Web App Development and Progressive Web Apps (PWAs)",
        ],
        description: [
          "Creating mobile and web apps that perform, engage, and align with your business goals.",
          "We develop native, hybrid, and responsive web apps to maximize user reach and experience.",
        ],
      },
      {
        title: "IT Operations",
        points: [
          "Streamlining Development and Operations with DevOps",
          "Enhancing Security with Cybersecurity Services",
          "Designing Scalable and Reliable Infrastructure",
          "Providing Ongoing Technical Support",
        ],
        description: [
          "We offer complete IT services including DevOps, cybersecurity, scalable infrastructure, and ongoing support.",
        ],
      },
    ],
  },
  solutions: {
    label: "Our Solutions",
    categories: [
      {
        title: "Education Technology",
        points: [
          "Managed Hosting",
          "Open edX LMS Customization",
          "Instructional Design and Course Creation",
          "LMS Training and Support",
          "Data Migration & Custom LMS Platforms",
        ],
        description: [
          "Enhance the learning experience with full-service eLearning tech including Open edX, instructional design, and training.",
        ],
      },
      {
        title: "Data, ML & AI",
        points: [
          "Predictive Analysis",
          "Computer Vision",
          "Machine Learning & Deep Learning",
          "Business Intelligence",
          "NLP & Generative AI",
        ],
        description: [
          "Leverage data to gain insights, automate decisions, and innovate using AI/ML and data science.",
        ],
      },
      {
        title: "E-Commerce",
        points: [
          "eCommerce Development",
          "Voice Commerce",
          "AR Shopping",
          "AI Chatbots",
          "Customer Segmentation & Sentiment Analysis",
        ],
        description: [
          "Boost your online business with interactive, secure, and intelligent e-commerce tech solutions.",
        ],
      },
    ],
  },
};

// Tab button
const TabButton = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`relative px-6 py-2 font-semibold rounded-full transition-all duration-300 hover:scale-105 ${
      active
        ? "text-white bg-gradient-to-r from-[#53aedb] to-[#1E5470] shadow-lg"
        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
    }`}
  >
    {label}
    {/* {active && (
      <motion.div
        layoutId="underline"
        className="absolute left-0 bottom-0 w-full h-1 rounded-full bg-white"
      />
    )} */}
  </button>
);

// Category button
const CategoryButton = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-1 rounded-lg text-sm transition-all duration-300 hover:scale-105 ${
      active
        ? "bg-gradient-to-r from-[#53aedb] to-[#1E5470] text-white shadow-md"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }`}
  >
    {label}
  </button>
);

const Offerings = () => {
  const [tab, setTab] = useState("services");
  const [activeIndex, setActiveIndex] = useState(0);

  const data = offeringsData[tab];
  const current = data.categories[activeIndex];

  const offerRef = useRef(null);
  const offerInView = useInView(offerRef, { once: true, margin: "-100px" });

  return (
    <section className="container px-4 py-12 mx-auto" ref={offerRef}>
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={offerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-4 text-3xl font-bold text-center"
      >
        Our <span className="text-[#53aedb]">Offerings</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={offerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-8 text-center text-lg text-gray-400 max-w-2xl mx-auto"
      >
        From development to QA, IT operations to AI, our tech services are
        tailored to your needs.
      </motion.p>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={offerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex justify-center mb-6 gap-4 flex-wrap"
      >
        {Object.keys(offeringsData).map((key) => (
          <TabButton
            key={key}
            label={offeringsData[key].label}
            active={tab === key}
            onClick={() => {
              setTab(key);
              setActiveIndex(0);
            }}
          />
        ))}
      </motion.div>

      {/* Category Buttons */}
      <div className="flex justify-center gap-3 mb-6 flex-wrap">
        {data.categories.map((cat, i) => (
          <CategoryButton
            key={cat.title}
            label={cat.title}
            active={i === activeIndex}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>

      {/* Category Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl p-6 mx-auto bg-white rounded-xl shadow-lg"
        >
          <h3 className="text-xl font-bold mb-3 text-[#1E5470]">
            {current.title}
          </h3>
          <div className="space-y-3 text-gray-700">
            {current.description.map((desc, i) => (
              <p key={i}>{desc}</p>
            ))}
          </div>
          <ul className="pl-6 mt-4 space-y-2 text-gray-800 list-disc">
            {current.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Offerings;
