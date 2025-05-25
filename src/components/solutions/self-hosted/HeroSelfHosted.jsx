// src/components/solutions/self-hosted/HeroSelfHosted.jsx
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const placeholderImageUrl = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80&seed=aiinfra";

// Variants for the entire hero section wrapper to control its overall visibility
const sectionWrapperVariants = {
  hidden: { opacity: 0 }, // Only controls opacity for the wrapper
  visible: { opacity: 1, transition: { duration: 0.01 } }, // Quick transition for wrapper
};

// Variants for child elements (h1, p, button div)
const contentItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring", stiffness: 100, damping: 20, duration: 0.8 
    } 
  },
};

export function HeroSelfHosted() {
  return (
    // This outer motion.section will control re-triggering based on viewport
    <motion.section 
      className="relative w-full min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden py-10 md:py-16"
      initial="hidden" // Starts in hidden state
      whileInView="visible" // Animates to visible when in view
      viewport={{ once: false, amount: 0.1 }} // once: false enables re-animation
      variants={sectionWrapperVariants} // Applies simple opacity for the wrapper itself
    >
      <Image
        src={placeholderImageUrl}
        alt="Secure AI Infrastructure Background"
        fill 
        style={{ objectFit: "cover" }} 
        quality={80} 
        priority 
        className="absolute inset-0 z-0"
        sizes="100vw" 
      />
      <div className="absolute inset-0 bg-black/60 dark:bg-black/70 z-10"></div>

      {/* This inner motion.div's animation will be re-triggered when the parent re-enters 'visible' state */}
      {/* It staggers its own children */}
      <motion.div
        // No initial, whileInView, or viewport here. It inherits from parent's state.
        // Its variants are defined based on the parent's 'hidden' and 'visible' states.
        variants={{
          hidden: {}, // Child is hidden when parent is hidden
          visible: { transition: { staggerChildren: 0.2 } } // Stagger children when parent becomes visible
        }}
        className="relative z-20 container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center"
      >
        <motion.h1
          variants={contentItemVariants} // Uses its own detailed animation
          className="text-4xl font-bold tracking-tight text-brand-light-text sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Secure, Scalable, Sovereign: <br className="hidden sm:inline" />
          <span className="text-brand-pink">Your AI, Your Infrastructure.</span>
        </motion.h1>

        <motion.p
          variants={contentItemVariants} // Uses its own detailed animation
          className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 dark:text-slate-300 sm:text-xl"
        >
          Empower your enterprise with Jarwo.ai's self-hosted AI solutions. Gain unparalleled control over your data, customize models to your precise needs, and integrate cutting-edge AI seamlessly into your secure environment.
        </motion.p>

        <motion.div
          variants={contentItemVariants} // Uses its own detailed animation
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-brand-pink text-brand-light-text hover:bg-transparent hover:text-brand-pink hover:border-brand-pink border-2 border-transparent transition-all duration-300 ease-in-out transform hover:scale-105 px-8 py-3 text-base font-semibold shadow-lg"
          >
            <Link href="/contact?subject=Self-Hosted%20AI%20Consultation&source=selfhosted-hero">
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          
          <Button
            asChild
            variant="ghost" 
            size="lg"
            className="w-full sm:w-auto
                       border-2 border-brand-light-text/80
                       text-brand-light-text
                       hover:bg-brand-light-text
                       hover:text-brand-dark-text
                       hover:border-brand-light-text
                       focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 focus-visible:ring-brand-pink
                       transition-all duration-300 ease-in-out transform hover:scale-105 
                       px-8 py-3 text-base font-semibold"
          >
            <Link href="#tech-stack-self-hosted">
              Explore Technical Setup
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}