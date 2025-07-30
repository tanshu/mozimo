'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const banners = [
  { id: 1, src: '/banners/b1.svg', alt: 'Mozimo Chocolate Banner 1' },
  { id: 2, src: '/banners/b2.svg', alt: 'Mozimo Chocolate Banner 2' },
  { id: 3, src: '/banners/b3.svg', alt: 'Mozimo Chocolate Banner 3' },
  { id: 4, src: '/banners/b4.svg', alt: 'Mozimo Chocolate Banner 4' },
];

export default function BannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showArrows, setShowArrows] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHovered) {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
      }
    }, 4000);

    return () => clearInterval(timer);
  }, [isHovered]);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 1,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 1,
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    if (newDirection > 0) {
      goToNext();
    } else {
      goToPrevious();
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[calc(100vh-80px)] md:h-screen overflow-hidden bg-gradient-to-br from-[#1a0f0a] to-[#2d1810]"
      onMouseEnter={() => {
        setShowArrows(true);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setShowArrows(false);
        setIsHovered(false);
      }}
    >
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-200/20 to-orange-200/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
      </div>

      {/* Banner Images with Premium Animations */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={`${currentIndex}-${direction}`}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            duration: 0.4
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.7}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute inset-0"
        >
          <Image
            src={banners[currentIndex].src}
            alt={banners[currentIndex].alt}
            fill
            className="object-cover img-premium"
            draggable={false}
            priority={currentIndex === 0}
            loading={currentIndex === 0 ? 'eager' : 'lazy'}
            sizes="100vw"
            quality={85}
          />
          
          {/* Premium overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Premium Shop Now Button */}
      <div className="absolute bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2 z-10">
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ 
            scale: 1.05,
            y: -2,
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.95 }}
          className="glass text-[#3C2A21] px-8 md:px-12 py-4 md:py-5 rounded-full font-semibold text-base md:text-lg shadow-premium hover:shadow-premium-hover transition-all duration-300 font-renner border border-white/20 hover:border-white/40"
          style={{
            fontWeight: 300,
            fontSize: '16px',
            lineHeight: '100%',
            letterSpacing: '0%',
            fontFamily: 'Renner'
          }}
        >
          <span className="relative z-10">Shop Now</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700 ease-out rounded-full" />
        </motion.button>
      </div>

      {/* Premium Navigation Arrows - Hidden on mobile */}
      <AnimatePresence>
        {showArrows && (
          <>
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              onClick={goToPrevious}
              className="hidden md:block absolute left-6 top-1/2 transform -translate-y-1/2 z-20 glass text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300 border border-white/20 hover:border-white/40 shadow-premium hover:shadow-premium-hover"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous banner"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              onClick={goToNext}
              className="hidden md:block absolute right-6 top-1/2 transform -translate-y-1/2 z-20 glass text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300 border border-white/20 hover:border-white/40 shadow-premium hover:shadow-premium-hover"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next banner"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Navigation Arrows */}
      <div className="md:hidden absolute inset-x-0 top-1/2 transform -translate-y-1/2 z-20 flex justify-between items-center px-4">
        <motion.button
          onClick={goToPrevious}
          className="glass text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 border border-white/20 hover:border-white/40 shadow-premium"
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Previous banner"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>

        <motion.button
          onClick={goToNext}
          className="glass text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 border border-white/20 hover:border-white/40 shadow-premium"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Next banner"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>

      {/* Premium Dots Indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 md:space-x-3">
        {banners.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white scale-110 shadow-glow'
                : 'bg-white/50 hover:bg-white/70 hover:scale-110'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to banner ${index + 1}`}
          />
        ))}
      </div>

      {/* Premium Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-20">
        <motion.div
          className="h-full bg-gradient-to-r from-[#8B4513] to-[#DAA520]"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 4, ease: "linear" }}
          key={currentIndex}
        />
      </div>
    </div>
  );
} 