'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'cream' | 'dark';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
}

export default function Section({ 
  children, 
  className = '', 
  background = 'white',
  padding = 'lg',
  id
}: SectionProps) {
  const backgroundClasses = {
    white: 'bg-white',
    cream: 'bg-[#F8F6F5]',
    dark: 'bg-[#3C2A21]'
  };
  
  const paddingClasses = {
    sm: 'py-6 md:py-8',
    md: 'py-8 md:py-12',
    lg: 'py-12 md:py-16 lg:py-20',
    xl: 'py-16 md:py-24 lg:py-32'
  };
  
  const classes = `${backgroundClasses[background]} ${paddingClasses[padding]} ${className} section-premium`;
  
  return (
    <section id={id} className={classes}>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1.2, 
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.1
        }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
      >
        {/* Premium section decoration */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-1 bg-gradient-to-r from-transparent via-[#8B4513]/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
        
        {children}
      </motion.div>
    </section>
  );
} 
 