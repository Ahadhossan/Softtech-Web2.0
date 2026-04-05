import { ArrowRight } from "lucide-react";
import React from "react";

const ButtonFill = ({ children, href = "#", onClick }) => {
  return (
    <div className="relative inline-block group">
      {/* Subtle hover background */}
      <span className="absolute inset-0 rounded-xl bg-gray-700/20 transition-all duration-300 group-hover:bg-gray-700/40"></span>

      {/* Button */}
      <a
        href={href}
        onClick={onClick}
        role="button"
        className="relative flex items-center justify-center px-6 py-3 rounded-lg bg-[#1E5470] text-white font-semibold text-base shadow-md transition-all duration-200 transform-gpu hover:-translate-y-0.5 hover:shadow-lg hover:bg-gray-700"
      >
        {children}
        <ArrowRight
          size={20}
          className="ml-2 transition-transform duration-200 group-hover:translate-x-1"
        />
      </a>
    </div>
  );
};

export default ButtonFill;

// import React from "react";

// const ButtonFill = () => {
//   return <div>ButtonFill</div>;
// };

// export default ButtonFill;
