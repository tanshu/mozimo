"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Section from "./Section";
import { useInstagram } from "@/hooks/useInstagram";

export default function SocialMedia() {
  const { posts, loading, error, isTokenExpired } = useInstagram();
  const scrollRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    // Only auto-scroll on mobile (<768px)
    if (window.innerWidth >= 768) return;

    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const cardWidth = container.firstElementChild?.clientWidth || 300;
    const scrollStep = cardWidth + 16; // 16px gap between items
    let direction = 1; // 1 = right, -1 = left

    const interval = setInterval(() => {
      if (!container) return;
      scrollAmount += scrollStep * direction;

      // Reverse direction if hitting ends
      if (
        scrollAmount >= container.scrollWidth - container.clientWidth ||
        scrollAmount <= 0
      ) {
        direction *= -1;
      }

      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }, 3000); // scroll every 3s

    return () => clearInterval(interval);
  }, []);

  return (
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

      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-4 px-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 md:gap-8 max-w-7xl mx-auto"
      >
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
                index === 0 ? fadeInLeft : index === 1 ? fadeInUp : fadeInRight
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
  );
}
