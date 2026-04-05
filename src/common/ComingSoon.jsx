import React from "react";

import { CodeXmlIcon, MessageCircleCode } from "lucide-react";
import { useState } from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ComingSoon = ({ title }) => {
  // coming section
  const comingRef = useRef(null);
  const comingInView = useInView(comingRef, { once: true, margin: "-100px" });

  const [comingsoonEmail, setComingSoonEmail] = useState("");
  const [comingsoonSuccess, setComingSoonSuccess] = useState("");

  const handleComingSoonSubmit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(comingsoonEmail)) {
      setComingSoonSuccess("Please enter a valid email.");
      return;
    }

    // Replace this with actual email processing logic (e.g. Mailchimp / Web3Forms)
    setComingSoonSuccess("Thanks for subscribing!");
    setComingSoonEmail("");
    setTimeout(() => setComingSoonSuccess(""), 3000);
  };

  return (
    <>
      <section
        className="flex items-center justify-center min-h-screen px-4 text-white bg-gradient-to-br from-gray-900 via-black to-gray-800"
        ref={comingRef}
      >
        <div className="space-y-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={comingInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
            className="flex gap-3 text-4xl font-extrabold md:text-6xl animate-pulse"
          >
            <CodeXmlIcon size={45} /> Coming Very Soon !{" "}
            <MessageCircleCode size={45} />
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={comingInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl font-extrabold md:text-6xl"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={comingInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-xl mx-auto text-lg text-gray-300 md:text-xl"
          >
            <span>Hi Friend!</span> We’re working hard to bring something
            amazing to life. Stay tuned for updates!
          </motion.p>
          <motion.div className="mt-6 ">
            <form
              onSubmit={handleComingSoonSubmit}
              className="flex flex-wrap justify-center gap-2 mt-6"
            >
              <motion.input
                initial={{ opacity: 0, x: -50 }}
                animate={comingInView ? { opacity: 1, x: 0 } : {}}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 1, delay: 0.6 }}
                type="email"
                value={comingsoonEmail}
                onChange={(e) => setComingSoonEmail(e.target.value)}
                placeholder="Email here"
                required
                className="w-full px-4 py-2 text-black border border-gray-300 rounded sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <motion.button
                initial={{ opacity: 0, x: 50 }}
                animate={comingInView ? { opacity: 1, x: 0 } : {}}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 1, delay: 0.8 }}
                type="submit"
                className="px-6 py-2 font-semibold transition bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Notify Me
              </motion.button>
            </form>

            {comingsoonSuccess && (
              <p
                className={`text-sm mt-2 ${
                  comingsoonSuccess.includes("Thanks")
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {comingsoonSuccess}
              </p>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ComingSoon;
