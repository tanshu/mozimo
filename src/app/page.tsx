"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Button from "@/components/Button";
import BannerSlider from "@/components/BannerSlider";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import ProductCategory from "@/components/ProductCategory";
import SocialMedia from "@/components/SocialMedia";

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

  // Memoize expensive components

  return (
    <div className="min-h-screen bg-white font-renner">
      <Header />
      <BannerSlider />

      {/* Brand Story */}

      <Section background="white" id="about">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Brand Story - Left Text */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInLeft}
            className="space-y-6 md:space-y-8 order-2 lg:order-1 px-4 md:px-0" // ← Added mobile padding
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3C2A21] font-moneta text-gradient p-4 md:p-0"
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
          {/* Brand Story - Right Image */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInRight}
            className="relative order-1 lg:order-2 w-screen md:w-auto -mx-4 md:mx-0"
          >
            <motion.div
              className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-500 clip-diagonal-bottom-left"
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <Image
                src="/bst/bs1.svg"
                alt="Cocoa pods and beans - Mozimo chocolate ingredients"
                fill
                className="object-cover img-premium"
                draggable={false}
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </motion.div>
          </motion.div>

          {/* Chocolate Tempering - Left Video */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInLeft}
            className="relative order-3 lg:order-3 w-screen md:w-auto -mx-4 md:mx-0 py-4 md:py-0"
          >
            <motion.div
              className="relative w-full h-[400px] md:h-[500px] lg:h-[700px]  overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-500 clip-diagonal-top-right"
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <video
                src="https://qa-dugout.s3.ap-south-1.amazonaws.com/testing/v1.mp4"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                aria-label="Chocolate pouring from metallic spout - Mozimo chocolate tempering process"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </motion.div>
          </motion.div>

          {/* Chocolate Tempering - Right Text */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInRight}
            className="space-y-4 md:space-y-6 order-4 lg:order-4 px-4 md:px-0 ml-4 md:ml-8 lg:ml-12"
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
                  fontFamily: "Samantha Signature",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "clamp(35px, 8vw, 50px)",
                  lineHeight: "clamp(20px, 4vw, 25px)",
                  letterSpacing: "0%",
                  color: "#703133",
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                Chocolate Tempering
              </motion.h3>
            </div>

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

      <ProductCategory />
      {/* Social Media Call to Action */}
      <SocialMedia />

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
        <div className="w-full flex justify-center items-center py-8 md:py-12">
          <div className="w-full max-w-[700px] px-4 overflow-hidden">
            <motion.div
              className="flex gap-8 py-6"
              animate={{ x: `-${spotlightIndex * 152}px` }}
              transition={{ type: "spring", stiffness: 80, damping: 18 }}
            >
              {Array(12)
                .fill(0)
                .map((_, i) => {
                  const imgIdx = i % partnerImages.length;
                  const img = partnerImages[imgIdx];
                  return (
                    <motion.div
                      key={i}
                      className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 bg-white rounded-full flex items-center justify-center shadow-premium hover:shadow-premium-hover flex-shrink-0 transition-all duration-300"
                      style={{
                        boxShadow: "0 4px 20px 0 rgba(60,42,33,0.15)",
                        margin: "20px 8px",
                      }}
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
