import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function DesktopMenu({ menu }) {
  const [isHover, setIsHover] = useState(false);
  const location = useLocation();

  const { gridCols = 3, subMenuHeading = [], subMenu = [], name, path } = menu;

  const hasSubMenu = subMenu.length > 0;

  // ✅ FIXED: Tailwind safe grid classes
  const gridColsMap = {
    1: "sm:grid-cols-1",
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-3",
    4: "sm:grid-cols-4",
  };

  const gridClass = `grid-cols-1 ${gridColsMap[gridCols] || "sm:grid-cols-3"}`;

  // Animation
  const transition = { duration: 0.25, ease: "easeInOut" };
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      y: 0,
      scale: 1,
      display: "block",
      transition,
    },
    exit: {
      opacity: 0,
      y: 10,
      scale: 0.98,
      transition,
      transitionEnd: { display: "none" },
    },
  };

  const isTopActive = location.pathname === path;

  return (
    <Motion.li
      className="relative hidden md:list-item"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      tabIndex={0}
      aria-expanded={isHover}
      aria-haspopup={hasSubMenu}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsHover((prev) => !prev);
        }
      }}
    >
      {/* Top Menu */}
      <Link
        to={path}
        className={`flex items-center gap-1 text-sm lg:text-base font-semibold px-3 py-2 rounded-xl transition-all duration-200
        ${
          isTopActive
            ? "bg-green-100 text-green-700"
            : "text-[#1E5470] hover:bg-white/80"
        }`}
      >
        {name}

        {hasSubMenu && (
          <ChevronDown
            className={`transition-transform duration-200 ${
              isHover ? "rotate-180" : ""
            }`}
            size={16}
          />
        )}
      </Link>

      {/* Submenu */}
      {hasSubMenu && (
        <Motion.div
          id="submenu"
          role="menu"
          aria-label="Submenu"
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
          className="absolute mt-3 backdrop-blur-xl bg-white/60 border border-white/30 shadow-2xl rounded-2xl w-full max-w-[100vw] md:min-w-[600px] p-6 z-40 origin-top"
        >
          <div className={`grid gap-6 ${gridClass}`}>
            {subMenuHeading.map(({ title, icon: Icon }, i) => (
              <div key={i}>
                <p className="text-[17px] font-semibold mb-3 flex items-center gap-2 text-green-700">
                  {Icon && <Icon size={18} />}
                  {title}
                </p>

                <ul className="space-y-2 text-[15px]">
                  {subMenu[i]?.map((link, j) => {
                    const isSubActive = location.pathname === link.href;

                    return (
                      <li key={j}>
                        <Link
                          to={link.href}
                          role="menuitem"
                          className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200
                          ${
                            isSubActive
                              ? "bg-green-100 text-green-700"
                              : "text-[#1E5470] hover:bg-black/5 hover:text-[#031A09]"
                          }`}
                        >
                          {link.icon &&
                            (typeof link.icon === "string" ? (
                              <img
                                src={link.icon}
                                alt={link.label}
                                className="w-5 h-5 object-contain"
                              />
                            ) : (
                              <link.icon size={16} className="text-[#1E5470]" />
                            ))}

                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </Motion.div>
      )}
    </Motion.li>
  );
}
