'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import ContactUsForm from "./ContactUsForm";

import {Mina,Oswald, Bebas_Neue,Syne} from "next/font/google"
const button = Syne({
  weight:"400",
  subsets:['latin']
}); 

const hero = Syne({
  weight:"500",
  subsets:['latin']
})

import { useState } from "react";
import { ArrowUp, ArrowRight, CalendarCheck } from 'lucide-react';
const herofont = Bebas_Neue({
  weight:"400",
  subsets:['latin']
}); 

export default function HeroSection() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
   const [isHovered2, setIsHovered2] = useState(false);
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  return (
<main className="min-h-screen xs:min-h-auto text-white flex items-center justify-center px-4 sm:px-6">
 <div className="max-w-3xl  sm:mt-36 xs:mt-10">
  {/* Tagline - Now properly responsive */}
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.6 }}
    className="flex justify-start md:justify-center w-full"
  >
    {/* <div className={`max-w-fit flex items-center gap-3 text-md font-semibold bg-white/10 px-4 py-2 rounded-full ${button.className}`}>
      <div className="h-2 w-2 bg-purple-400 rounded-full animate-pulse filter blur-xs"></div> 
      Receive logo concepts within 24 hours
    </div> */}

    <div
  className={`max-w-fit flex items-center gap-2 sm:gap-3 
  text-sm sm:text-md md:text-lg font-semibold
  bg-white/10 backdrop-blur-md border border-white/20 
  px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-full 
  shadow-lg hover:shadow-purple-500/30 
  transition-all duration-300 ${button.className}`}
>
  {/* Animated Glow Dot */}
  <div className="relative flex items-center justify-center shrink-0">
    <div className="absolute h-4 w-4 sm:h-5 sm:w-5 bg-purple-500 rounded-full blur-md opacity-70 animate-pulse"></div>
    <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 bg-purple-400 rounded-full animate-ping absolute"></div>
    <div className="h-3 w-3 sm:h-4 sm:w-4 bg-purple-300 rounded-full relative z-10 shadow-[0_0_15px_rgba(192,132,252,0.9)]"></div>
  </div>

  {/* Text */}
  <span className="text-white tracking-wide leading-snug">
    Receive logo concepts within{" "}
    <span className="text-purple-300 font-bold whitespace-nowrap">
      24 hours
    </span>
  </span>
</div>
  </motion.div>
<motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 20 }}
  transition={{ duration: 0.8 }}
  className={`${herofont.className} text-5xl mt-8 mb-4   sm:text-8xl md:text-5xl lg:text-7xl tracking-tight font-extrabold text-left sm:text-center`}
>
  The First Choice in{' '}
  <br className='sm:hidden' />
  <span className={`text-purple-500 ${herofont.className}`}>WHITE LABEL</span>
  <br className='sm:hidden' />
  <span className="block sm:inline"> Logo Design for  <br className='sm:hidden' /> Agencies</span>
</motion.h1>

    {/* Description */}
  <motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ delay: 0.6, duration: 0.8 }}
  className={`${hero.className} mb-8 text-zinc-400 text-lg sm:text-xl text-left sm:text-center`}
>
  <span className="sm:block">
    We deliver professionally hand-designed white{' '}
  </span>
  <span className="sm:block">
    label logos within 1 day all at a fixed price
  </span>
</motion.p>

    {/* CTA Buttons - Changed to justify-start on mobile */}
  <motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 10 }}
  transition={{ delay: 0.8, duration: 0.6 }}
  className="flex justify-start sm:justify-center gap-4"
>
  {/* Pricing Button */}
  <button
    onClick={() => scrollToSection('pricing')}
    className={`relative w-42 h-12 bg-purple-600 hover:bg-purple-700 transition-colors duration-200 text-white rounded-2xl text-sm font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-purple-500/20 whitespace-nowrap overflow-hidden ${button.className}`}
    onMouseEnter={() => setIsHovered1(true)}
    onMouseLeave={() => setIsHovered1(false)}
  >
    <span className={`flex items-center text-lg gap-2 transition-all duration-200 ${
      isHovered1 ? "opacity-0 translate-x-[-20px]" : "opacity-100"
    }`}>
      Check Plans
      <ArrowRight size={24} className="stroke-[2.5]" />
    </span>

    <ArrowUp
      size={36}
      className={`absolute transition-all duration-200 stroke-[2.5] ${
        isHovered1
          ? "opacity-100 translate-y-0 rotate-45"
          : "opacity-0 translate-y-2"
      }`}
    />
  </button>

  {/* Contact Button */}
  <button
    onClick={() => setIsContactFormOpen(true)}
    className={`relative w-44 h-12 bg-white/10 hover:bg-gradient-to-b from-zinc-700 to-purple-400  transition-colors duration-200 text-white rounded-2xl text-sm font-medium flex items-center justify-center gap-2 overflow-hidden ${button.className} `}
    onMouseEnter={() => setIsHovered2(true)}
    onMouseLeave={() => setIsHovered2(false)}
  >
    <span className={`flex items-center text-lg gap-2 transition-all duration-200 ${
      isHovered2 ? 'opacity-0 -translate-x-5  ' : 'opacity-100 translate-x-0'
    }`}>
      Book a call
      <CalendarCheck size={20} />
    </span>

    <CalendarCheck
      size={28}
      className={`absolute transition-all duration-200 stroke-[2.5] ${
        isHovered2
          ? 'opacity-100 rotate-45 translate-y-0'
          : 'opacity-0 translate-y-2'
      }`}
    />
  </button>

  <ContactUsForm
    isOpen={isContactFormOpen}
    onClose={() => setIsContactFormOpen(false)}
  />
</motion.div>
  </div>
</main>
  );
}