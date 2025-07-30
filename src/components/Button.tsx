'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick,
  href
}: ButtonProps) {
  const baseClasses = 'font-renner rounded-full transition-all duration-500 inline-flex items-center justify-center relative overflow-hidden shadow-premium hover:shadow-premium-hover';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white hover:from-[#3C2A21] hover:to-[#8B4513] shadow-glow hover:shadow-glow',
    secondary: 'bg-gradient-to-r from-[#DAA520] to-[#CD7F32] text-white hover:from-[#B8860B] hover:to-[#DAA520] shadow-glow hover:shadow-glow',
    white: 'bg-white text-[#3C2A21] shadow-premium hover:shadow-premium-hover hover:bg-gray-50 border border-gray-200 hover:border-[#8B4513]'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm md:px-4 md:py-2 md:text-sm',
    md: 'px-4 py-2 text-sm md:px-6 md:py-3 md:text-base',
    lg: 'px-6 py-3 text-base md:px-8 md:py-4 md:text-lg'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  const buttonContent = (
    <motion.div
      className={classes}
      style={{
        fontWeight: 300,
        fontSize: 'clamp(14px, 2.5vw, 16px)',
        lineHeight: '100%',
        letterSpacing: '0%'
      }}
      whileHover={{ 
        scale: 1.05, 
        y: -3,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ 
        scale: 0.98,
        transition: { duration: 0.1 }
      }}
      onClick={onClick}
    >
      {/* Shimmer effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700 ease-out" />
      
      {/* Button content */}
      <span className="relative z-10">{children}</span>
    </motion.div>
  );
  
  if (href) {
    return (
      <a href={href} className="inline-block">
        {buttonContent}
      </a>
    );
  }
  
  return buttonContent;
} 