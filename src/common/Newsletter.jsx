import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import toast from "react-hot-toast";

const Newsletter = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [status, setStatus] = useState("default");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      toast.error("Please enter a valid email!");
      return;
    }

    setStatus("loading");

    setTimeout(() => {
      toast.success("Thanks for subscribing!");
      setStatus("success");
      setNewsletterEmail("");

      setTimeout(() => {
        setStatus("default");
      }, 2500);
    }, 1200);
  };

  const newsRef = useRef(null);
  const newsInView = useInView(newsRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={newsRef}
      className="max-w-9xl mx-auto px-16 py-20 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a]"
    >
      <div className=" flex flex-col items-center justify-between gap-10 md:flex-row">
        {/* Text */}
        <div className="max-w-lg text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={newsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#53aedb] mb-3"
          >
            Stay Updated
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={newsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-gray-400"
          >
            Subscribe with your email to receive updates about our services,
            offers, and latest news.
          </motion.p>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={newsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="w-full md:w-auto"
        >
          <form
            onSubmit={handleNewsletterSubmit}
            className="flex flex-col gap-4 sm:flex-row items-center"
          >
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-md sm:w-80 px-6 py-3 rounded-full border-2 border-[#1E5470] bg-white/5 text-gray-200 placeholder-gray-400 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[#1E5470]"
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className={`flex items-center gap-2 px-7 py-3 font-semibold rounded-full shadow-lg transition-all duration-300
              
              ${
                status === "default"
                  ? "bg-gradient-to-r from-[#1E5470] to-[#2a7fa3] text-white hover:scale-105"
                  : status === "loading"
                    ? "bg-gray-500 text-white cursor-not-allowed"
                    : "bg-green-600 text-white"
              }`}
            >
              {status === "loading" && (
                <Loader2 className="w-5 h-5 animate-spin" />
              )}

              {status === "success" && <Check className="w-5 h-5" />}

              {status === "default"
                ? "Subscribe"
                : status === "loading"
                  ? "Submitting..."
                  : "Subscribed"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
