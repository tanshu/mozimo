"use client";
import { useState, useRef, useCallback, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import Section from "@/components/Section";
import Image from "next/image";

export default function ProductCategory() {
  const [currentCategory, setCurrentCategory] = useState(0);
  const categoriesSectionRef = useRef<HTMLDivElement>(null);
  const imageCache = useRef<{ [key: string]: HTMLImageElement }>({});

  const categories = [
    "Bars",
    "Barks",
    "Pralines",
    "Spreads",
    "Dragees",
    "Gelatos",
  ];

  const categoryLinks = [
    "https://shop.mozimo.in/#bar",
    "https://shop.mozimo.in/#barks",
    "https://shop.mozimo.in/#pralines",
    "https://shop.mozimo.in/#spreads",
    "https://shop.mozimo.in/#dragees",
    "https://shop.mozimo.in/",
  ];
  const categoryImages = [
    "/categories/c1.svg",
    "/categories/c2.svg",
    "/categories/c3.svg",
    "/categories/c4.svg",
    "/categories/c5.svg",
    "/categories/c6.svg",
  ];

  // Preload all images on component mount
  useEffect(() => {
    const preloadImages = async () => {
      const loadPromises = categoryImages.map((src) => {
        return new Promise<void>((resolve) => {
          if (imageCache.current[src]) {
            resolve();
            return;
          }

          const img = new window.Image();
          img.onload = () => {
            imageCache.current[src] = img;
            resolve();
          };
          img.onerror = () => resolve(); // Continue even if one fails
          img.src = src;
        });
      });

      await Promise.all(loadPromises);
    };

    preloadImages();
  }, []);

  // Ultra-fast animation variants (no delays)
  const fadeInLeft = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] },
  };

  // Instant category change with no debouncing
  const handleCategoryChange = useCallback((idx: number) => {
    setCurrentCategory(idx);
  }, []);

  // Optimized category buttons
  const categoryButtons = useMemo(() => {
    return categories.map((category, idx) => {
      const isActive = idx === currentCategory;

      return (
        <motion.li
          key={category}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: idx * 0.02 }}
          viewport={{ once: true }}
        >
          <a
            href={categoryLinks[idx]}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center gap-4 w-full text-left font-moneta transition-all duration-100 ease-out will-change-transform
              ${
                isActive
                  ? "text-[#703133] font-normal"
                  : "text-[#703133] opacity-70 font-light hover:opacity-90"
              }
            `}
            style={{
              fontFamily: "MonetaSans-Regular",
              fontWeight: isActive ? 400 : 300,
              fontSize: isActive
                ? "clamp(22px, 5vw, 64px)"
                : "clamp(18px, 4vw, 56px)",
              lineHeight: "120%",
              letterSpacing: "0%",
              transform: isActive ? "translateX(4px)" : "translateX(0)",
            }}
            onClick={() => handleCategoryChange(idx)}
            onMouseEnter={() => handleCategoryChange(idx)}
            onTouchStart={() => handleCategoryChange(idx)}
          >
            {/* Mobile optimized thumbnail */}
            <div className="block lg:hidden w-16 h-16 rounded-full overflow-hidden shrink-0 will-change-transform">
              <Image
                src={categoryImages[idx]}
                alt={category}
                width={64}
                height={64}
                className={`w-full h-full object-cover transition-transform duration-100 ${
                  isActive ? "scale-110" : "scale-100"
                }`}
                draggable={false}
                quality={60}
                priority={idx < 2}
                loading={idx < 2 ? "eager" : "lazy"}
              />
            </div>
            <span className="will-change-transform">{category}</span>
          </a>
        </motion.li>
      );
    });
  }, [currentCategory, handleCategoryChange]);

  // Ultra-optimized image switcher with instant transitions
  const categoryImageComponent = useMemo(
    () => (
      <div className="relative w-full h-full overflow-hidden rounded-2xl">
        {/* Render all images but show only active one */}
        {categoryImages.map((src, idx) => (
          <motion.div
            key={idx}
            initial={false}
            animate={{
              opacity: idx === currentCategory ? 1 : 0,
              scale: idx === currentCategory ? 1 : 0.95,
            }}
            transition={{
              duration: 0.15,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="absolute inset-0 will-change-transform"
            style={{
              zIndex: idx === currentCategory ? 2 : 1,
            }}
          >
            <Image
              src={src}
              alt={categories[idx]}
              fill
              className="object-cover"
              draggable={false}
              quality={85}
              priority={idx < 3}
              loading={idx < 3 ? "eager" : "lazy"}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        ))}
      </div>
    ),
    [currentCategory]
  );

  return (
    <Section background="white" id="categories">
      <div
        ref={categoriesSectionRef}
        className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[400px] md:min-h-[500px]"
      >
        {/* Left Column - Categories List */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInLeft}
          className="flex flex-col justify-center h-full bg-white px-4 md:px-8 py-6 md:py-12 order-2 lg:order-1"
        >
          <ul className="space-y-4 md:space-y-6">{categoryButtons}</ul>
        </motion.div>

        {/* Right Column - Large Category Image */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInRight}
          className="relative hidden lg:flex items-center justify-center h-full min-h-[300px] md:min-h-[400px] bg-white order-1 lg:order-2 p-4"
        >
          {categoryImageComponent}
        </motion.div>
      </div>
    </Section>
  );
}
