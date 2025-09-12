"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-renner">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="w-full">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="text-center space-y-8"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#3C2A21] font-samantha"
              style={{
                fontFamily: "MonetaSans-Regular",
                fontWeight: 400,
                fontSize: "clamp(48px, 8vw, 80px)",
                lineHeight: "90%",
                letterSpacing: "0%",
                color: "#703133",
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              Welcome to the World of Mozimo Magic
            </motion.h1>
            
            <motion.div
              className="w-full px-8 md:px-16 lg:px-24"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p
                className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-renner"
                style={{
                  fontWeight: 300,
                  fontSize: "clamp(18px, 3vw, 24px)",
                  lineHeight: "160%",
                  letterSpacing: "0%",
                  fontFamily: "Renner*",
                }}
              >
                Indulge in the Luxurious. Immerse in the Captivating. Savor the Fresh. At Mozimo, we create a chocolate experience that transports you to a world of opulence, with mesmerizing aromas and visuals, and delights your taste buds with the vibrant flavors of freshly crafted chocolates. Join us on a journey of pure luxury, captivating moments, and a fresh perspective on the art of chocolate-making.
              </p>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              className="relative w-full mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-500 rounded-lg"
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <Image
                  src="/aboutus/0.jpg"
                  alt="Mozimo chocolate hero image"
                  fill
                  className="object-cover img-premium"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Our Founders Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Founders Image */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInLeft}
              className="order-2 lg:order-1"
            >
              <motion.div
                className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-500"
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <Image
                  src="/aboutus/1.jpg"
                  alt="Priyanka and Amritanshu, founders of Mozimo, sitting in their chocolate shop"
                  fill
                  className="object-cover img-premium"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </motion.div>
            </motion.div>

            {/* Founders Text */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInRight}
              className="space-y-6 md:space-y-8 order-1 lg:order-2 px-8 md:px-16 lg:px-24"
            >
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3C2A21] font-samantha"
                style={{
                  fontFamily: "MonetaSans-Regular",
                  fontWeight: 400,
                  fontSize: "clamp(32px, 5vw, 48px)",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#703133",
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                Our Founders
              </motion.h2>
              
              <motion.h3
                className="text-2xl md:text-3xl font-semibold text-[#8B4513] font-renner"
                style={{
                  fontWeight: 500,
                  fontSize: "clamp(20px, 3vw, 28px)",
                  lineHeight: "120%",
                  letterSpacing: "0%",
                  fontFamily: "MonetaSans-Regular",
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                Priyanka and Amritanshu.
              </motion.h3>
              
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
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                are the proud founders of Mozimo, a bean-to-bar chocolate shop that celebrates the rich and distinctive flavors of single origin cocoa beans. Their journey with Mozimo has been a passionate pursuit of creating exceptional chocolate that tantalizes the taste buds and tells the unique story of each cocoa bean&apos;s origin.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capturing the Essence of Italian Chocolate Section */}
      <section className="py-16 md:py-24 bg-[#F5E6D3]">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Italian Chocolate Text */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInLeft}
              className="order-2 lg:order-1 space-y-6 md:space-y-8 px-8 md:px-16 lg:px-24"
            >
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3C2A21]"
                style={{
                  fontFamily: "MonetaSans-Regular",
                  fontWeight: 400,
                  fontSize: "clamp(32px, 5vw, 48px)",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#703133",
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                Capturing the essence of
              </motion.h2>
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3C2A21] font-samantha"
                style={{
                  fontFamily: "Samantha Signature",
                  fontWeight: 400,
                  fontSize: "clamp(32px, 5vw, 48px)",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#703133",
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                Italian Chocolate
              </motion.h2>
              
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
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                With over 15 years of hospitality experience, these avid travelers scoured the globe for the finest cocoa beans and techniques. Deep in remote cocoa farms, they cultivated relationships with farmers committed to sustainability. Carefully selecting beans, they honor each harvest&apos;s stories. In their cozy workshop, they roast, crack, and refine beans with modern techniques, capturing their essence in every Mozimo chocolate bar.
              </motion.p>
            </motion.div>

            {/* Cocoa Farm Image */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInRight}
              className="order-1 lg:order-2"
            >
              <motion.div
                className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-500"
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <Image
                  src="/aboutus/2.jpg"
                  alt="Cocoa beans drying in open-air structure with farmers tending to the beans"
                  fill
                  className="object-cover img-premium"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chocolate Making Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="w-full">
          {/* Two Images Side by Side */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16"
          >
            <motion.div
              variants={fadeInLeft}
              className="relative w-full h-[300px] md:h-[400px] overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-500"
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <Image
                src="/aboutus/3.jpg"
                alt="Chocolatier holding cocoa nibs with chocolate pieces and beans arranged artistically"
                fill
                className="object-cover img-premium"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="relative w-full h-[300px] md:h-[400px] overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-500"
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <Image
                src="/aboutus/4.jpg"
                alt="Thick chocolate bars with whole hazelnuts on chocolate shavings"
                fill
                className="object-cover img-premium"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="w-full space-y-6 md:space-y-8 px-8 md:px-16 lg:px-24"
          >
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
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Under the mentorship of the master chocolatier Gabriele Rinaudo, Priyanka and Amritanshu dedicated themselves to mastering the intricate art of chocolate making. With unwavering determination and a thirst for knowledge, they immersed themselves in the world of cocoa, learning the nuances of sourcing the finest ingredients and perfecting the delicate techniques that transform raw beans into exquisite chocolate creations.
            </motion.p>
            
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
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              In addition to their training under Gabriele Rinaudo, they embarked on a transformative journey to Italy to further enrich their understanding of the art of chocolate making. This immersive experience in Italy not only broadened their knowledge but also deepened their appreciation for the timeless artistry and dedication that define the world of chocolate making.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Vision and Passion Section */}
      <section className="py-16 md:py-24 bg-[#F5E6D3]">
        <div className="w-full">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="text-center space-y-8 md:space-y-12"
          >
            {/* Founders Outdoor Image */}
            <motion.div
              className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-500"
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <Image
                src="/aboutus/5.jpg"
                alt="Priyanka and Amritanshu in white chef coats with modern tree sculpture in background"
                fill
                className="object-cover img-premium"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </motion.div>

            {/* Vision and Passion Text */}
            <motion.div
              className="w-full space-y-6 md:space-y-8 px-8 md:px-16 lg:px-24"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p
                className="text-gray-700 leading-relaxed font-renner"
                style={{
                  fontWeight: 300,
                  fontSize: "clamp(16px, 2.5vw, 18px)",
                  lineHeight: "160%",
                  letterSpacing: "0%",
                  fontFamily: "Renner*",
                }}
              >
                Passionate about chocolate as a medium for creativity and exploration, they view it not just as a confection but as a canvas for artistic expression. Constantly seeking inspiration, they push the boundaries of chocolate-making, committed to crafting sensory experiences that delight the taste buds, eyes, and soul. Proud to be part of the global craft chocolate revolution, they aim to inspire others while championing cocoa diversity and sustainability. Back in the workshop, cacao beans are roasted, cracked, and refined with modern techniques, crafting each bar of Mozimo chocolate into a masterpiece, capturing the essence of its origins.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
