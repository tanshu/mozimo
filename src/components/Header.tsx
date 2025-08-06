"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (
        !target.closest(".mobile-menu") &&
        !target.closest(".hamburger-button")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Header - Only visible on mobile */}
      <motion.header
        className="fixed top-0 z-[60] w-full md:hidden"
        initial={false}
        animate={{
          width: "100%",
          left: "0%",
          x: "0%",
          top: isScrolled ? "0px" : "12px",
          borderRadius: "0px",
          height: isScrolled ? "64px" : "60px",
        }}
        transition={{
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <nav className="relative bg-white border border-white/20 shadow-premium w-full h-full flex items-center px-4">
          {/* Left: Hamburger Menu */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <motion.button
              className="hamburger-button p-2 text-gray-800 hover:text-[#8B4513] transition-all duration-300 relative min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full hover:bg-white/20 backdrop-blur-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <motion.span
                  className="w-6 h-0.5 bg-current block transition-all duration-300"
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 6 : 0,
                  }}
                />
                <motion.span
                  className="w-6 h-0.5 bg-current block mt-1 transition-all duration-300"
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                  }}
                />
                <motion.span
                  className="w-6 h-0.5 bg-current block mt-1 transition-all duration-300"
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -6 : 0,
                  }}
                />
              </div>
            </motion.button>
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="relative w-10 h-10"
                animate={{
                  scale: isScrolled ? 1.1 : 1,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                whileHover={{
                  scale: 1.15,
                  rotate: 5,
                  transition: { duration: 0.3 },
                }}
              >
                <Image
                  src="/logo/logo.svg"
                  alt="Mozimo Logo"
                  fill
                  className="object-contain drop-shadow-lg"
                  priority
                  sizes="40px"
                  quality={95}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Action Buttons */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <motion.button
              className="p-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Search"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 28 28"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </motion.button>

            <motion.button
              className="p-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Shopping bag"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 28 28"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </motion.button>

            <motion.button
              className="p-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="User account"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 28 28"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Desktop Header - Only visible on desktop */}
      <motion.header
        className="fixed top-0 z-50 hidden md:block"
        initial={false}
        animate={{
          width: isScrolled ? "100%" : "1440px",
          left: isScrolled ? "0%" : "50%",
          x: isScrolled ? "0%" : "-50%",
          top: isScrolled ? "0px" : "24px",
          borderRadius: isScrolled ? "0px" : "15px",
          height: isScrolled ? "64px" : "80px",
        }}
        transition={{
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <nav
          className={`bg-white border border-white/20 shadow-premium w-full h-full flex justify-between items-center ${
            isScrolled ? "rounded-none" : "rounded-[15px]"
          }`}
        >
          <div className="flex justify-between items-center w-full px-20">
            {/* Left Navigation */}
            <div className="flex items-center space-x-16">
              <motion.a
                href="#about"
                className="text-gray-800 hover:text-[#8B4513] transition-all duration-300 font-renner relative group"
                style={{
                  fontWeight: 100,
                  fontFamily: "Renner",
                  fontSize: "18px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                }}
                whileHover={{ scale: 1.02 }}
              >
                About us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8B4513] to-[#DAA520] transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
              <motion.a
                href="#shop"
                className="text-gray-800 hover:text-[#8B4513] transition-all duration-300 font-renner relative group"
                style={{
                  fontWeight: 100,
                  fontFamily: "Renner",
                  fontSize: "18px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                }}
                whileHover={{ scale: 1.02 }}
              >
                Shop
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8B4513] to-[#DAA520] transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            </div>

            {/* Center Logo */}
            <motion.div
              className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="relative w-12 h-12"
                animate={{
                  scale: isScrolled ? 1.1 : 1,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                whileHover={{
                  scale: 1.15,
                  rotate: 5,
                  transition: { duration: 0.3 },
                }}
              >
                <Image
                  src="/logo/logo.svg"
                  alt="Mozimo Logo"
                  fill
                  className="object-contain drop-shadow-lg"
                  priority
                  sizes="48px"
                  quality={95}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </motion.div>
            </motion.div>

            {/* Right Icons */}
            <div className="flex items-center space-x-8">
              {/* More Dropdown */}
              <motion.button
                className="flex items-center space-x-1 text-gray-800 hover:text-[#8B4513] transition-all duration-300 font-renner relative group"
                style={{
                  fontWeight: 100,
                  fontFamily: "Renner",
                  fontSize: "18px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                }}
                whileHover={{ scale: 1.02 }}
                aria-label="More options"
              >
                <span>More</span>
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: 0 }}
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </motion.button>

              <motion.button
                className="p-3 text-gray-800 hover:text-[#8B4513] transition-all duration-300 relative min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full hover:bg-white/20 backdrop-blur-sm"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="User account"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </motion.button>
              <motion.button
                className="p-3 text-gray-800 hover:text-[#8B4513] transition-all duration-300 relative min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full hover:bg-white/20 backdrop-blur-sm"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Search"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </motion.button>
              <motion.button
                className="p-3 text-gray-800 hover:text-[#8B4513] transition-all duration-300 relative min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full hover:bg-white/20 backdrop-blur-sm"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Shopping bag"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay - Only visible on mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute top-[72px] left-0 right-0 bg-white/95 backdrop-blur-md border-t border-white/20 shadow-premium"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="px-6 py-8 space-y-6">
                {/* Mobile Navigation Links */}
                <div className="space-y-4">
                  <motion.a
                    href="#about"
                    className="block text-lg font-renner text-gray-800 hover:text-[#8B4513] transition-all duration-300 py-3 border-b border-gray-100"
                    style={{
                      fontWeight: 300,
                      fontFamily: "Renner",
                      fontSize: "18px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileHover={{ x: 10 }}
                  >
                    About us
                  </motion.a>
                  <motion.a
                    href="#shop"
                    className="block text-lg font-renner text-gray-800 hover:text-[#8B4513] transition-all duration-300 py-3 border-b border-gray-100"
                    style={{
                      fontWeight: 300,
                      fontFamily: "Renner",
                      fontSize: "18px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileHover={{ x: 10 }}
                  >
                    Shop
                  </motion.a>
                  <motion.a
                    href="#categories"
                    className="block text-lg font-renner text-gray-800 hover:text-[#8B4513] transition-all duration-300 py-3 border-b border-gray-100"
                    style={{
                      fontWeight: 300,
                      fontFamily: "Renner",
                      fontSize: "18px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileHover={{ x: 10 }}
                  >
                    Categories
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
