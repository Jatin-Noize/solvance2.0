'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Bebas_Neue, Syne } from "next/font/google";
import { IoArrowBackSharp } from "react-icons/io5";

import { useEffect, useState } from 'react';
import { CalendarCheck } from 'lucide-react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const herofont = Bebas_Neue({
  weight: "400",
  subsets: ['latin']
});

const syne = Syne({
  weight: "400",
  subsets: ['latin']
});

const syneBold = Syne({
  weight: "700",
  subsets: ['latin']
});

// Floating particle component
function Particle({ delay, x, size }) {
  return (
    <motion.div
      className="absolute rounded-full bg-purple-500 opacity-20 pointer-events-none"
      style={{ width: size, height: size, left: `${x}%`, bottom: '-10px' }}
      animate={{
        y: [0, -window?.innerHeight - 100 || -900],
        opacity: [0, 0.4, 0.2, 0],
        scale: [1, 1.2, 0.8, 0.5],
      }}
      transition={{
        duration: 6 + Math.random() * 4,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
  );
}

// Animated check with ring burst
function CheckAnimation() {
  return (
    <div className="relative flex items-center justify-center w-32 h-32 mx-auto mb-8">
      {/* Outer glow ring */}
      <motion.div
        className="absolute inset-0 rounded-full bg-purple-500/20"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.8, 1.4], opacity: [0, 0.6, 0] }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
      />
      {/* Second ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-purple-400/40"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.5, 1.3], opacity: [0, 0.8, 0] }}
        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
      />
      {/* Circle background */}
      <motion.div
        className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 to-purple-900 border border-purple-500/50 flex items-center justify-center shadow-[0_0_40px_rgba(168,85,247,0.5)]"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.7, delay: 0.1, type: "spring", stiffness: 200 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.4, type: "spring" }}
        >
          <CheckCircle2 size={44} className="text-white stroke-[1.5]" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function ThankYouPage() {
  const [particles, setParticles] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  useEffect(() => {
    setParticles(
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        delay: Math.random() * 5,
        x: Math.random() * 100,
        size: Math.random() * 6 + 3,
      }))
    );
  }, []);

  const steps = [
    { num: "01", label: "Review your brief", sub: "We analyze every detail you shared" },
    { num: "02", label: "Design begins", sub: "Our team starts crafting concepts" },
    { num: "03", label: "24hr delivery", sub: "Logo concepts land in your inbox" },
  ];

  return (
    <main className="relative min-h-screen bg-[#0a0a0f] text-white overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6">

      {/* Background mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-purple-700/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-900/10 blur-[100px]" />
        <div className="absolute top-1/3 right-0 w-[300px] h-[300px] rounded-full bg-indigo-900/10 blur-[80px]" />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map(p => <Particle key={p.id} {...p} />)}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl w-full text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className={`flex mt-36 items-center gap-2 bg-white/[0.06] backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-full shadow-lg ${syne.className}`}>
            <div className="relative flex items-center justify-center shrink-0">
              <div className="absolute h-4 w-4 bg-purple-500 rounded-full blur-md opacity-70 animate-pulse" />
              <div className="h-2.5 w-2.5 bg-purple-400 rounded-full animate-ping absolute" />
              <div className="h-3 w-3 bg-purple-300 rounded-full relative z-10 shadow-[0_0_12px_rgba(192,132,252,0.9)]" />
            </div>
            <span className="text-white/80  text-sm tracking-wide">
              Message received — you're all set
            </span>
          </div>
        </motion.div>

        {/* Check animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <CheckAnimation />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className={`${herofont.className} text-6xl sm:text-8xl lg:text-9xl tracking-tight leading-none mb-4`}
        >
          THANK
          <span className=" text-purple-500"> YOU</span>
        </motion.h1>

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className={`${syne.className} text-zinc-400 text-lg sm:text-xl mb-12 leading-relaxed`}
        >
          We've received your message and will be in touch{' '}
          <span className="text-purple-300 font-semibold">shortly.</span>
          <br className="hidden sm:block" />
          In the meantime, here's what happens next.
        </motion.p>


     {/* CTA */}
<motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.6, duration: 0.6 }}
  className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${syne.className} `}
>
  <Link href="/">
    <button
      className={`relative h-12 px-8 bg-purple-600 hover:bg-purple-700 
      transition-all duration-300 text-white rounded-2xl text-sm 
      font-semibold flex items-center justify-center gap-2 
      shadow-lg hover:shadow-purple-500/30 overflow-hidden 
      ${syne.className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Default Text */}
      <motion.span
        animate={
          isHovered
            ? { opacity: 0, x: -20 }
            : { opacity: 1, x: 0 }
        }
        transition={{ duration: 0.25 }}
        className="flex items-center text-lg gap-2"
      >
        Book to home
      </motion.span>

      {/* Hover Icon */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={
          isHovered
            ? { opacity: 1, x: 0 }
            : { opacity: 0, x: 20 }
        }
        transition={{ duration: 0.25 }}
      >
        <IoArrowBackSharp size={20} className="stroke-[1.5]" />
      </motion.div>
    </button>
  </Link>
</motion.div>

        {/* Footer note */}
        
      </div>
    </main>
  );
}