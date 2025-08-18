"use client";
import { useState, useRef, useCallback, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Section from "@/components/Section";
import Image from "next/image";

export default function ProductCategory() {
  const [currentCategory, setCurrentCategory] = useState(0);
  const categoriesSectionRef = useRef<HTMLDivElement>(null);
  const fadeInLeft = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  };
  const categories = [
    "Bars",
    "Barks",
    "Pralines",
    "Spreads",
    "Dragees",
    "Gelatos",
  ];
  const categoryImages = [
    "/categories/c1.svg",
    "/categories/c2.svg",
    "/categories/c3.svg",
    "/categories/c4.svg",
    "/categories/c5.svg",
    "/categories/c6.svg",
  ];

  // Memoize category change handler for better performance
  const handleCategoryChange = useCallback((idx: number) => {
    setCurrentCategory(idx);
  }, []);

  // Memoize category buttons to prevent unnecessary re-renders
  const categoryButtons = useMemo(() => {
    return categories.map((category, idx) => (
      <motion.li
        key={category}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: idx * 0.05 }} // Reduced delay
        viewport={{ once: true }}
      >
        <button
          className={`group flex items-center gap-4 transition-all duration-200 ease-out w-full text-left font-moneta hover:scale-105
            ${
              idx === currentCategory
                ? "text-[#703133] font-normal"
                : "text-[#703133] opacity-60 font-light"
            }
          `}
          style={{
            fontFamily: "MonetaSans-Regular",
            fontWeight: idx === currentCategory ? 400 : 300,
            fontSize:
              idx === currentCategory
                ? "clamp(22px, 5vw, 64px)"
                : "clamp(18px, 4vw, 56px)",
            lineHeight: "120%",
            letterSpacing: "0%",
            transition: "all 0.2s cubic-bezier(0.4, 0.0, 0.2, 1)", // Even faster transition
          }}
          onClick={() => handleCategoryChange(idx)}
          onMouseEnter={() => handleCategoryChange(idx)}
          onTouchStart={() => handleCategoryChange(idx)} // Add this for mobile touch
          tabIndex={-1}
        >
          {/* Show only on mobile */}
          <div className="block lg:hidden w-16 h-16 rounded-full overflow-hidden shrink-0">
            <Image
              src={categoryImages[idx]}
              alt={category}
              width={56}
              height={56}
              className="w-full h-full object-cover"
              draggable={false}
              quality={85}
              sizes="(max-width: 375px) 40px, (max-width: 640px) 44px, (max-width: 768px) 48px, 56px"
            />
          </div>
          {/* Category name */}
          <span className="text-left">{category}</span>
        </button>
      </motion.li>
    ));
  }, [currentCategory, handleCategoryChange]);

  // Memoize the category image component
  const categoryImageComponent = useMemo(
    () => (
      <AnimatePresence mode="wait">
        <motion.img
          key={currentCategory}
          src={categoryImages[currentCategory]}
          alt={categories[currentCategory]}
          initial={{ opacity: 0, scale: 1.01 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.99 }}
          transition={{ duration: 0.25, ease: [0.4, 0.0, 0.2, 1] }} // Super fast transition
          className="w-full h-full object-cover rounded-2xl shadow-premium hover:shadow-premium-hover transition-all duration-200 img-premium" // Faster shadow
          draggable={false}
          style={{ maxHeight: "600px", maxWidth: "100%" }}
        />
      </AnimatePresence>
    ),
    [currentCategory]
  );

  return (
    <div className="min-h-screen bg-white font-renner">
      {/* Product Categories Section */}
      <Section background="white" id="categories">
        <div
          ref={categoriesSectionRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[400px] md:min-h-[500px]"
        >
          {/* Left Column - Categories List */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInLeft}
            className="flex flex-col justify-center h-full bg-white px-4 md:px-8 py-6 md:py-12 order-2 lg:order-1"
          >
            <ul className="space-y-4 md:space-y-6">{categoryButtons}</ul>
          </motion.div>

          {/* Right Column - Large Category Image (desktop only) */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInRight}
            className="relative hidden lg:flex items-center justify-center h-full min-h-[300px] md:min-h-[400px] bg-white order-1 lg:order-2"
          >
            {categoryImageComponent}
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
