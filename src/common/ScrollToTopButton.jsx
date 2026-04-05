import React from "react";

// components/ScrollToTopButton.jsx
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // Toggle visibility on scroll
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <div className="fixed bottom-4 right-4 z-50 animate-pulse">
        <button
          onClick={scrollToTop}
          className="bg-[#53aedb] hover:bg-[#53aedb] text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition focus:outline-none"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-xl" />
        </button>
      </div>
    )
  );
};

export default ScrollToTopButton;
