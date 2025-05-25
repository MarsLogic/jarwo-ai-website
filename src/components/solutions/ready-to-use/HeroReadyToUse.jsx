// src/components/solutions/ready-to-use/HeroReadyToUse.jsx
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Rocket } from 'lucide-react'; // Example icons

// Placeholder image for hero section - replace with a relevant abstract visual
// representing quick integration or cloud services connecting rapidly.
const heroImageUrl = "https://picsum.photos/seed/readytouseAI/1920/1080"; // Replace!

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function HeroReadyToUse() {
  return (
    <motion.section
      className="relative bg-gradient-to-b from-background to-slate-50 dark:from-slate-900 dark:to-slate-800/70 text-foreground min-h-[calc(80vh-4rem)] md:min-h-[calc(70vh-4rem)] flex items-center justify-center py-16 md:py-20 lg:py-24 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={sectionVariants}
    >
      {/* Optional subtle background pattern or abstract elements */}
      {/* 
      <Image
        src={heroImageUrl} // Replace with an actual relevant abstract background image
        alt="Abstract representation of rapid AI integration"
        fill
        style={{ objectFit: "cover" }}
        className="absolute inset-0 z-0 opacity-10 dark:opacity-5"
        quality={50}
        sizes="100vw"
      /> 
      */}
      <div className="absolute inset-0 bg-grid-slate-300/[0.05] dark:bg-grid-slate-700/[0.05] [mask-image:linear-gradient(0deg,transparent,black)]"></div>


      <div className="relative z-10 container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div variants={itemVariants} className="mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-pink/10 text-brand-pink ring-1 ring-inset ring-brand-pink/20">
            <Zap className="w-4 h-4 mr-1.5" />
            Fast & Easy AI Solutions
          </span>
        </motion.div>
        
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl font-inter"
        >
          Instant AI Power: Ready-to-Use Services for <span className="text-brand-pink">Immediate Impact</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-muted-foreground sm:text-xl font-inter"
        >
          Leverage Jarwo.ai's suite of pre-built AI services for chatbots, automation, and data analytics. No complex setup, no lengthy development – just powerful AI at your fingertips.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <Button asChild size="lg" className="w-full sm:w-auto bg-brand-pink text-brand-light-text hover:bg-brand-pink/90 dark:hover:bg-brand-pink/80 shadow-lg transform hover:scale-105 transition-transform">
            <Link href="#ready-to-use-offerings"> {/* Scrolls to Offerings section */}
              Explore Our AI Services
              <Rocket className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-foreground border-foreground/30 hover:bg-foreground/5 dark:text-brand-light-text dark:border-brand-light-text/50 dark:hover:bg-brand-light-text/10 transform hover:scale-105 transition-transform">
            <Link href="/contact?subject=Ready-to-Use%20AI%20Demo">
              Try a Free Demo
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}