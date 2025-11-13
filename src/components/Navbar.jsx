import React, { useState, useEffect } from "react";
import { BiMenuAltLeft, BiX } from "react-icons/bi";
import { BsBag } from "react-icons/bs";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Models", path: "/model" },
  { name: "Electric", path: "/electric" },
  { name: "Offers", path: "/offers" },
  { name: "About", path: "/About" },
];

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";

  return (
    <motion.nav
      initial={false}
      animate={{ height: scrolled ? 80 : 60 }}
      transition={{ duration: 0.3 }}
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isHome
          ? scrolled
            ? "backdrop-blur-md bg-white/20 text-white shadow-md"
            : "bg-transparent text-white"
          : "bg-white text-black shadow-md"
      }`}
    >
      <div className="relative flex justify-between items-center px-6 h-full">
        {/* Left Hamburger / Menu */}
        <div className="flex items-center gap-4 relative z-20">
          {/* Hamburger only on home page and not scrolled */}
          {isHome && !scrolled && (
            <button
              onClick={toggleMenu}
              className="text-3xl flex font-bold focus:outline-none"
            >
              {menuOpen ? <BiX /> : <BiMenuAltLeft />}
            </button>
          )}

          {/* Dropdown Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 top-full mt-2 flex flex-col gap-3 bg-white/10 text-white px-5 py-3 shadow-lg"
              >
                {menuItems.map((item) => (
                  <NavLink
                    key={item.name}
                    onClick={() => setMenuOpen(false)}
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "font-bold underline scale-105"
                        : "scale-105 hover:text-blue-600"
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Inline Menu for scroll or other pages */}
          {(!isHome || scrolled) && (
            <div className="flex gap-6">
              {menuItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold underline scale-105"
                      : "hover:text-blue-600 transition-colors"
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          )}
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center z-10 pointer-events-none">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg"
            alt="BMW Logo"
            className="h-10 w-auto"
          />
          <h1 className="text-3xl font-bold italic pl-3 tracking-wider">
            BMW
          </h1>
        </div>

        {/* Right Store Link */}
        <div className="flex z-20">
          <Link
            to="/store"
            className="flex justify-center items-center gap-1.5 hover:underline"
          >
            <BsBag /> Store
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
