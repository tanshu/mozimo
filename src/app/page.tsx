"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Button from "@/components/Button";
import BannerSlider from "@/components/BannerSlider";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import { useInstagram } from "@/hooks/useInstagram";

// Premium animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
};

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

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
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

const partnerImages = [
  "/partners/p1.svg",
  "/partners/p2.svg",
  "/partners/p3.svg",
  "/partners/p4.svg",
];

export default function Home() {
  const [currentCategory, setCurrentCategory] = useState(0);
  const categoriesSectionRef = useRef<HTMLDivElement>(null);
  const currentCategoryRef = useRef(currentCategory);

  // Update ref when currentCategory changes
  useEffect(() => {
    currentCategoryRef.current = currentCategory;
  }, [currentCategory]);

  // Optimized wheel event handler
  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();

    // Determine scroll direction
    if (e.deltaY > 0) {
      // Scroll down - next category
      if (currentCategoryRef.current < categories.length - 1) {
        setCurrentCategory((prev) => prev + 1);
      }
    } else if (e.deltaY < 0) {
      // Scroll up - previous category
      if (currentCategoryRef.current > 0) {
        setCurrentCategory((prev) => prev - 1);
      }
    }
  }, []);

  // Wheel event for scroll-based category switching
  useEffect(() => {
    const section = categoriesSectionRef.current;
    if (!section) return;

    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;

    const onWheel = (e: WheelEvent) => {
      if (isScrolling) return;

      isScrolling = true;
      clearTimeout(scrollTimeout);

      handleWheel(e);

      // Reset scrolling flag after delay
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 800);
    };

    section.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      section.removeEventListener("wheel", onWheel);
      clearTimeout(scrollTimeout);
    };
  }, [handleWheel]);

  const [spotlightIndex, setSpotlightIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setSpotlightIndex((prev) => (prev + 1) % partnerImages.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const { posts, loading, error, isTokenExpired } = useInstagram();

  // Memoize expensive components
  const BrandStorySection = useMemo(
    () => (
      <Section background="white" id="about">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInLeft}
            className="space-y-6 md:space-y-8 order-2 lg:order-1 px-4 md:px-0" // ← Added mobile padding
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3C2A21] font-moneta text-gradient"
              style={{
                fontWeight: 400,
                fontSize: "clamp(32px, 5vw, 58px)",
                lineHeight: "100%",
                letterSpacing: "0%",
                fontFamily: "MonetaSans-Regular",
                color: "#703133",
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              Brand Story
            </motion.h2>
            <div
              className="space-y-4 md:space-y-6 text-gray-700 leading-relaxed font-renner"
              style={{
                fontWeight: 300,
                fontSize: "clamp(16px, 2.5vw, 18px)",
                lineHeight: "160%",
                letterSpacing: "0%",
                fontFamily: "Renner*",
              }}
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Mozimo&apos;s journey is a passionate pursuit of crafting
                exceptional chocolate that celebrates the origin of each cocoa
                bean.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                We meticulously roast, crack, winnow, and refine beans in-house,
                using modern techniques to highlight their natural flavors.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Each chocolate is a masterpiece, capturing the essence of cocoa
                in its purest form.
              </motion.p>
            </div>
            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button variant="white" size="lg" className="btn-premium">
                Discover more
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInRight}
            className="relative order-1 lg:order-2 w-screen md:w-auto -mx-4 md:mx-0" // ← Made full-width on mobile
          >
            <motion.div
              className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-none md:rounded-xl overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-500" // ← Removed rounded corners on mobile
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <Image
                src="/bst/bs1.svg"
                alt="Cocoa pods and beans - Mozimo chocolate ingredients"
                fill
                className="object-cover img-premium"
                draggable={false}
                quality={85}
              />
              {/* Premium overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </Section>
    ),
    []
  );

  return (
    <div className="min-h-screen bg-white font-renner">
      <Header />
      <BannerSlider />

      {BrandStorySection}

      {/* Chocolate Tempering Section */}
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInLeft}
            className="relative order-1 lg:order-1 w-screen md:w-auto -mx-4 md:mx-0" // ← Added for mobile edge-to-edge
          >
            <motion.div
              className="relative w-full h-[400px] md:h-[500px] lg:h-[700px] rounded-none md:rounded-xl overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-500" // ← Changed to rounded-none for mobile
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <video
                src="/bst/v1.mp4"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                aria-label="Chocolate pouring from metallic spout - Mozimo chocolate tempering process"
                style={{ display: "block" }}
              />
              {/* Premium overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </motion.div>
          </motion.div>

          {/* Right Column - Text */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInRight}
            className="space-y-4 md:space-y-6 order-2 lg:order-2 px-4 md:px-0" // ← Added px-4 for mobile padding
          >
            <div className="space-y-3 md:space-y-4">
              <motion.h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#3C2A21] font-renner text-gradient"
                style={{
                  fontWeight: 200,
                  fontSize: "clamp(24px, 4vw, 40px)",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  fontFamily: "MonetaSans-Regular",
                  color: "#703133",
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                Discover the delicate art of our
              </motion.h2>
              <motion.h3
                className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#8B4513] font-samantha"
                style={{
                  fontWeight: 300,
                  fontSize: "clamp(36px, 6vw, 60px)",
                  lineHeight: "120%",
                  letterSpacing: "0%",
                  fontStyle: "italic",
                  color: "#703133",
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                Chocolate Tempering
              </motion.h3>
            </div>

            {/* Premium decorative line */}
            <motion.div
              className="w-100 h-px bg-gradient-to-r from-transparent via-[#8B4513] to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />

            <motion.p
              className="text-gray-700 leading-relaxed font-renner"
              style={{
                fontWeight: 300,
                fontSize: "clamp(16px, 2.5vw, 18px)",
                lineHeight: "160%",
                letterSpacing: "0%",
                fontFamily: "Renner*",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Crafted to perfection Mozimo delivers a sublime sensory experience
              with every bite. Experience the epitome of indulgence with our
              perfectly tempered chocolate: velvety smooth, exquisitely rich,
              and artfully balanced. Each bite offers a symphony of nuanced
              cocoa flavors, melting luxuriously!
            </motion.p>
          </motion.div>
        </div>
      </Section>

      {/* Our Collections Section */}
      <Section background="cream" id="shop">
        <motion.h2
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#3C2A21] text-center mb-8 md:mb-12 font-renner text-gradient"
          style={{
            fontWeight: 300,
            fontSize: "clamp(24px, 4vw, 36px)",
            lineHeight: "100%",
            letterSpacing: "0%",
            fontFamily: "MonetaSans-Regular",
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          Our Collections
        </motion.h2>

        <motion.div
          className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-4 px-4 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 md:gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {[
            {
              src: "/collection/cl1.svg",
              title: "Bestsellers",
              alt: "Bestsellers - Mozimo chocolate bars with geometric patterns",
            },
            {
              src: "/collection/cl2.svg",
              title: "New Arrivals",
              alt: "New Arrivals - Stacked chocolate barks with nuts and toppings",
            },
            {
              src: "/collection/cl3.svg",
              title: "Gift Collection",
              alt: "Gift Collection - Mozimo packaged chocolate products and gift items",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              className="snap-start w-[calc(50%)] flex-shrink-0 sm:w-auto sm:flex-shrink sm:min-w-0 group flex flex-col items-center justify-end transition-all duration-500 hover:-translate-y-2"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              // style={{ minHeight: "480px" }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={320}
                height={400}
                className="object-contain img-premium group-hover:scale-105 transition-transform duration-500"
                draggable={false}
                quality={85}
                style={{ maxHeight: "380px", width: "100%" }}
              />

              <div className="p-4 md:p-6 text-center mb-2 w-full">
                <h3
                  className="text-lg md:text-xl font-semibold text-[#3C2A21] font-renner"
                  style={{
                    fontWeight: 300,
                    fontSize: "clamp(16px, 2.5vw, 20px)",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    fontFamily: "Renner*",
                  }}
                >
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

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
            <ul className="space-y-4 md:space-y-6">
              {categories.map((category, idx) => (
                <motion.li
                  key={category}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    className={`group flex items-center gap-4 transition-all duration-700 ease-out w-full text-left font-moneta hover:scale-105
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
                      transition: "all 0.7s cubic-bezier(0.25,0.46,0.45,0.94)",
                    }}
                    onClick={() => setCurrentCategory(idx)}
                    onMouseEnter={() => setCurrentCategory(idx)}
                    tabIndex={-1}
                  >
                    {/* Show only on mobile */}
                    <div className="block lg:hidden w-10 h-10 rounded-full overflow-hidden shrink-0">
                      <img
                        src={categoryImages[idx]}
                        alt={category}
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                    </div>

                    {/* Category name */}
                    <span className="text-left">{category}</span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column - Large Category Image (desktop only) */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInRight}
            className="relative hidden lg:flex items-center justify-center h-full min-h-[300px] md:min-h-[400px] bg-white order-1 lg:order-2"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentCategory}
                src={categoryImages[currentCategory]}
                alt={categories[currentCategory]}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="w-full h-full object-cover rounded-2xl shadow-premium hover:shadow-premium-hover transition-all duration-500 img-premium"
                draggable={false}
                style={{ maxHeight: "600px", maxWidth: "100%" }}
              />
            </AnimatePresence>
          </motion.div>
        </div>
      </Section>

      {/* Social Media Call to Action */}
      <Section background="cream" padding="md">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="text-center mb-8 md:mb-12"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-moneta text-[#703133] mb-6 md:mb-8 text-gradient"
            style={{
              fontWeight: 400,
              fontSize: "clamp(28px, 5vw, 48px)",
              lineHeight: "120%",
              letterSpacing: "0%",
              fontFamily: "MonetaSans-Regular",
            }}
          >
            Follow us on Instagram
          </h2>
        </motion.div>

        <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-4 px-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {loading ? (
            <>
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-lg shadow-premium h-64 md:h-96 skeleton snap-start w-[calc(80vw-1rem)] flex-shrink-0 sm:w-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                />
              ))}
            </>
          ) : error ? (
            isTokenExpired ? (
              <div className="col-span-full text-center py-12 sm:col-span-2 lg:col-span-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="max-w-md mx-auto"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full mx-auto mb-4 flex items-center justify-center shadow-premium">
                    <span className="text-2xl">🔗</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#703133] mb-2">
                    Instagram Connection Expired
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Our Instagram connection needs to be refreshed. We&apos;re
                    working on getting it back up!
                  </p>
                  <div className="text-sm text-gray-500">
                    In the meantime, follow us @mozimo_chocolate
                  </div>
                </motion.div>
              </div>
            ) : (
              <>
                {/* Left Block - Chocolate Spread Jar */}
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeInLeft}
                  className="bg-white rounded-lg shadow-premium overflow-hidden hover:shadow-premium-hover transition-all duration-500 transform hover:-translate-y-2 snap-start w-[calc(80vw-1rem)] flex-shrink-0 sm:w-auto"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative h-64 md:h-96 bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center">
                    <motion.div
                      className="text-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-32 h-32 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full mx-auto mb-4 flex items-center justify-center shadow-premium">
                        <span className="text-4xl">🍫</span>
                      </div>
                      <div className="bg-white rounded-lg p-4 mx-4 shadow-premium">
                        <div className="font-semibold text-[#703133] text-lg">
                          MOZIMO
                        </div>
                        <div className="text-sm text-gray-600">
                          SINGLE ORIGIN HAZELNUT SPREAD 45%
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Middle Block - Magazine Article */}
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeInUp}
                  className="bg-white rounded-lg shadow-premium overflow-hidden hover:shadow-premium-hover transition-all duration-500 transform hover:-translate-y-2 snap-start w-[calc(80vw-1rem)] flex-shrink-0 sm:w-auto"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-4 md:p-6">
                    <div className="bg-red-600 h-32 rounded-lg mb-4 flex items-center justify-center shadow-premium">
                      <span className="text-white text-2xl">🍫</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-200 h-20 rounded-lg flex items-center justify-center shadow-premium">
                        <span className="text-lg">🍰</span>
                      </div>
                      <div className="bg-gray-200 h-20 rounded-lg flex items-center justify-center shadow-premium">
                        <span className="text-lg">👨‍🍳</span>
                      </div>
                    </div>
                    <div className="text-xs text-gray-700 space-y-2 leading-relaxed">
                      <p>
                        <strong>By RUPALI DEAN</strong>
                      </p>
                      <p>
                        <strong>
                          MOZIMO&apos;S CHOCOLATE PIE BY PRIYANKA GUPTA
                        </strong>
                      </p>
                      <p>
                        isolat[ing] beans to not only single ori- but also to
                        single farms so as to express unique complexity.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Right Block - World Chocolate Day */}
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeInRight}
                  className="bg-white rounded-lg shadow-premium overflow-hidden hover:shadow-premium-hover transition-all duration-500 transform hover:-translate-y-2 snap-start w-[calc(80vw-1rem)] flex-shrink-0 sm:w-auto"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-4 md:p-6 text-center">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-[#8B4513] mb-2 text-gradient">
                        World Chocolate Day
                      </h3>
                      <p className="text-gray-600">
                        Celebrating the art of chocolate making
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg p-4 shadow-premium">
                      <div className="text-4xl mb-2">🍫</div>
                      <p className="text-sm text-gray-700">
                        Join us in celebrating the world&apos;s favorite treat
                      </p>
                    </div>
                  </div>
                </motion.div>
              </>
            )
          ) : (
            posts?.slice(0, 3).map((post, index) => (
              <motion.div
                key={post.id}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-50px" }}
                variants={
                  index === 0
                    ? fadeInLeft
                    : index === 1
                    ? fadeInUp
                    : fadeInRight
                }
                className="snap-start w-[calc(80vw-1rem)] flex-shrink-0 sm:w-auto bg-white rounded-lg shadow-premium overflow-hidden hover:shadow-premium-hover transition-all duration-500 transform hover:-translate-y-2"
                whileHover={{ scale: 1.02 }}
              >
                <a
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative h-64 md:h-96">
                    <Image
                      src={post.mediaUrl}
                      alt={post.caption || "Instagram post"}
                      fill
                      className="object-cover img-premium"
                      draggable={false}
                      quality={85}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/bst/bs1.svg";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    {post.mediaType === "VIDEO" && (
                      <div className="absolute top-4 right-4 bg-black/50 rounded-full p-2">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M8 5v10l8-5-8-5z" />
                        </svg>
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="glass rounded-lg p-3 border border-white/20">
                        <p className="text-sm text-gray-800 line-clamp-2">
                          {post.caption?.slice(0, 100)}...
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))
          )}
        </div>
      </Section>

      {/* In the Spotlight Section */}
      <Section background="white">
        <motion.h2
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="text-3xl md:text-4xl lg:text-5xl font-moneta text-[#703133] mb-6 md:mb-8 text-center text-gradient"
          style={{
            fontWeight: 400,
            fontSize: "clamp(28px, 5vw, 48px)",
            lineHeight: "120%",
            letterSpacing: "0%",
            fontFamily: "MonetaSans-Regular",
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          In the Spotlight
        </motion.h2>
        <div
          className="w-full flex justify-center items-center overflow-hidden"
          style={{ minHeight: "8rem md:10rem" }}
        >
          <div className="w-full max-w-[700px] overflow-hidden px-4">
            <motion.div
              className="flex gap-8"
              animate={{ x: `-${spotlightIndex * 152}px` }}
              transition={{ type: "spring", stiffness: 80, damping: 18 }}
            >
              {/* Create 12 tiles (3 sets of 4 logos) */}
              {Array(12)
                .fill(0)
                .map((_, i) => {
                  const imgIdx = i % partnerImages.length;
                  const img = partnerImages[imgIdx];
                  return (
                    <motion.div
                      key={i}
                      className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 bg-white rounded-full flex items-center justify-center shadow-premium hover:shadow-premium-hover flex-shrink-0 transition-all duration-300"
                      style={{ boxShadow: "0 2px 12px 0 rgba(60,42,33,0.10)" }}
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <Image
                        src={img}
                        alt={`Partner ${imgIdx + 1}`}
                        width={120}
                        height={120}
                        className="w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 object-contain img-premium"
                        draggable={false}
                        quality={85}
                      />
                    </motion.div>
                  );
                })}
            </motion.div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
