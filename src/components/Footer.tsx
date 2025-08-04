"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#F8F6F5] text-[#703133] font-renner text-base relative overflow-hidden">
      {/* Premium background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(139,69,19,0.1)_1px,transparent_1px)] bg-[length:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {/* Column 1: Brand Identity */}
        <motion.div
          className="space-y-4 sm:col-span-2 lg:col-span-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* MOZIMO Logo */}
          <Image
            src="/logo/logo.svg"
            alt="Mozimo Logo"
            className="object-contain drop-shadow-lg"
            priority
            sizes="40px"
            width={80}
            height={80}
            quality={95}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          {/* Tagline */}
          <p
            className="text-sm leading-relaxed opacity-80 font-renner"
            style={{
              fontWeight: 300,
              fontSize: "14px",
              lineHeight: "160%",
              letterSpacing: "0%",
              fontFamily: "Renner*",
            }}
          >
            India&apos;s Premier European style bean-to-bar chocolate
            experience.
          </p>
        </motion.div>

        {/* Column 2: Get in touch */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3
            className="font-semibold text-lg font-renner"
            style={{
              fontWeight: 600,
              fontSize: "18px",
              lineHeight: "120%",
              letterSpacing: "0%",
              fontFamily: "Renner*",
            }}
          >
            Get in touch
          </h3>
          <div
            className="space-y-2 text-sm font-renner"
            style={{
              fontWeight: 300,
              fontSize: "14px",
              lineHeight: "160%",
              letterSpacing: "0%",
              fontFamily: "Renner*",
            }}
          >
            <motion.div
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ x: 5 }}
            >
              <svg
                className="w-4 h-4 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="text-xs md:text-sm">0172-4045414</span>
            </motion.div>
            <motion.div
              className="flex items-start space-x-2"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ x: 5 }}
            >
              <svg
                className="w-4 h-4 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs md:text-sm">
                SCO 8, Inner Market, 9-D, Sector 9, Chandigarh, 160009
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Column 3: Know more */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3
            className="font-semibold text-lg font-renner"
            style={{
              fontWeight: 600,
              fontSize: "18px",
              lineHeight: "120%",
              letterSpacing: "0%",
              fontFamily: "Renner*",
            }}
          >
            Know more
          </h3>
          <ul
            className="space-y-2 text-sm font-renner"
            style={{
              fontWeight: 300,
              fontSize: "14px",
              lineHeight: "160%",
              letterSpacing: "0%",
              fontFamily: "Renner*",
            }}
          >
            {[
              "Privacy Policy",
              "Refund & Return Policy",
              "Terms & Conditions",
              "Shipping Policy",
            ].map((link, index) => (
              <motion.li
                key={link}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <a
                  href="#"
                  className="hover:opacity-80 transition-all duration-300 relative group text-xs md:text-sm"
                >
                  {link}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8B4513] to-[#DAA520] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Column 4: FAQ, Store, Ordering, Social Media */}
        <motion.div
          className="space-y-4 sm:col-span-2 lg:col-span-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Individual links */}
          <div
            className="space-y-2 text-sm font-renner"
            style={{
              fontWeight: 300,
              fontSize: "14px",
              lineHeight: "160%",
              letterSpacing: "0%",
              fontFamily: "Renner*",
            }}
          >
            {["FAQ", "Locate our store", "Bulk Ordering"].map((link, index) => (
              <motion.div
                key={link}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <a
                  href="#"
                  className="hover:opacity-80 transition-all duration-300 relative group text-xs md:text-sm"
                >
                  {link}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8B4513] to-[#DAA520] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Find Us On */}
          <div className="pt-4">
            <h3
              className="font-semibold text-lg font-renner mb-3"
              style={{
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: "120%",
                letterSpacing: "0%",
                fontFamily: "Renner*",
              }}
            >
              Find Us On
            </h3>
            <div className="flex space-x-3 md:space-x-4">
              {/* Facebook */}
              <motion.a
                href="#"
                className="hover:opacity-80 transition-all duration-300 p-2 rounded-full hover:bg-white/20 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
                </svg>
              </motion.a>
              {/* Instagram */}
              <motion.a
                href="#"
                className="hover:opacity-80 transition-all duration-300 p-2 rounded-full hover:bg-white/20 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.567 5.782 2.295 7.148 2.233 8.414 2.175 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.334 3.678 1.315c-.98.98-1.187 2.092-1.245 3.373C2.012 5.668 2 6.077 2 12c0 5.923.012 6.332.07 7.612.058 1.281.265 2.393 1.245 3.373.98.98 2.092 1.187 3.373 1.245C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.393-.265 3.373-1.245.98-.98 1.187-2.092 1.245-3.373.058-1.28.07-1.689.07-7.612 0-5.923-.012-6.332-.07-7.612-.058-1.281-.265-2.393-1.245-3.373-.98-.98-2.092-1.187-3.373-1.245C15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
                </svg>
              </motion.a>
              {/* YouTube */}
              <motion.a
                href="#"
                className="hover:opacity-80 transition-all duration-300 p-2 rounded-full hover:bg-white/20 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="YouTube"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.117C19.163 3.5 12 3.5 12 3.5s-7.163 0-9.391.569A2.994 2.994 0 0 0 .502 6.186C0 8.413 0 12 0 12s0 3.587.502 5.814a2.994 2.994 0 0 0 2.107 2.117C4.837 20.5 12 20.5 12 20.5s7.163 0 9.391-.569a2.994 2.994 0 0 0 2.107-2.117C24 15.587 24 12 24 12s0-3.587-.502-5.814zM9.545 15.568V8.432l6.545 3.568-6.545 3.568z" />
                </svg>
              </motion.a>
              {/* LinkedIn */}
              <motion.a
                href="#"
                className="hover:opacity-80 transition-all duration-300 p-2 rounded-full hover:bg-white/20 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
                </svg>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="border-t border-[#e5e5e5] mt-6 md:mt-8 pt-6 md:pt-8 text-center text-sm font-renner relative z-10"
        style={{
          fontWeight: 300,
          fontSize: "14px",
          lineHeight: "160%",
          letterSpacing: "0%",
          fontFamily: "Renner*",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p className="text-xs md:text-sm">
          &copy; 2024 Mozimo. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
