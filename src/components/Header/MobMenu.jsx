import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function MobMenu({ Menus }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const location = useLocation();

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
    setActiveIndex(null);
  };

  const toggleSubMenu = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const subMenuVariants = {
    enter: {
      height: "auto",
      opacity: 1,
      overflow: "hidden",
      transition: { duration: 0.3 },
    },
    exit: {
      height: 0,
      opacity: 0,
      overflow: "hidden",
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      {/* Toggle button */}
      <button
        className="lg:hidden z-[999] relative text-[#1E5470]"
        onClick={toggleDrawer}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Slide drawer */}
      <motion.div
        className="fixed top-16 left-0 right-0 bottom-0 z-[998] overflow-y-auto backdrop-blur-md bg-white/60 text-[#1E5470] p-6 pb-20 lg:hidden"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.4 }}
      >
        <ul className="space-y-2">
          {Menus.map((menu, index) => {
            const hasSubMenu = Array.isArray(menu.subMenu);

            const isTopActive =
              location.pathname === menu.path ||
              (hasSubMenu &&
                menu.subMenu
                  .flat()
                  .some((item) => item.href === location.pathname));

            const isActive = activeIndex === index;

            return (
              <li key={menu.name}>
                {/* Top-level menu */}
                <div
                  className={`flex items-center justify-between p-3 rounded-md cursor-pointer transition-colors
                  ${isTopActive ? "bg-green-700/20" : "hover:bg-black/10"}`}
                  onClick={() => (hasSubMenu ? toggleSubMenu(index) : null)}
                >
                  <Link
                    to={menu.path || "#"}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium ${
                      isTopActive ? "text-green-400" : ""
                    }`}
                  >
                    {menu.name}
                  </Link>

                  {hasSubMenu && (
                    <ChevronDown
                      className={`transition-transform duration-300 ${
                        isActive ? "rotate-180" : ""
                      }`}
                      size={18}
                    />
                  )}
                </div>

                {/* Submenu dropdown */}
                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isActive ? "enter" : "exit"}
                    variants={subMenuVariants}
                    className="ml-4 mt-2 space-y-6"
                  >
                    {Array.isArray(menu.subMenuHeading) &&
                      menu.subMenuHeading.map(
                        ({ title, icon: Icon }, colIndex) => (
                          <div key={title}>
                            <h4 className="text-[18px] font-semibold text-green-700 mb-2 flex items-center gap-2">
                              {Icon && <Icon size={16} />} {title}
                            </h4>

                            <ul className="pl-2 border-l border-white/10 space-y-1">
                              {(menu.subMenu[colIndex] || []).map((item, i) => {
                                const isSubActive =
                                  location.pathname === item.href;

                                return (
                                  <li key={i}>
                                    <Link
                                      to={item.href}
                                      onClick={() => setIsOpen(false)}
                                      className={`flex items-center gap-2 px-2 py-1 text-sm rounded transition font-[16px]
                                        ${
                                          isSubActive
                                            ? "bg-green-100 text-green-700"
                                            : "text-[#1E5470] hover:text-[#031A09]"
                                        }`}
                                    >
                                      {item.icon &&
                                        (typeof item.icon === "string" ? (
                                          <img
                                            src={item.icon}
                                            alt={item.label}
                                            className="w-4 h-4 object-contain"
                                          />
                                        ) : (
                                          <item.icon
                                            size={14}
                                            className="text-[#53aedb]"
                                          />
                                        ))}

                                      {item.label}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        ),
                      )}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </>
  );
}
