// src/components/solutions/ready-to-use/CtaReadyToUse.jsx
"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut",
      staggerChildren: 0.2 // Stagger the title, text, and button group
    } 
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function CtaReadyToUse() {
  return (
    <motion.section
      id="cta-ready-to-use"
      className="py-16 md:py-24 lg:py-32 bg-slate-100 dark:bg-slate-800 text-foreground" // A slightly different background for emphasis
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} // Re-animates section
      variants={sectionVariants}
    >
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div variants={itemVariants} className="mb-4">
            <Sparkles className="h-10 w-10 text-brand-pink mx-auto" />
        </motion.div>
        
        <motion.h2 
          variants={itemVariants}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-6 font-inter"
        >
          Ready to Supercharge Your Business <span className="text-brand-pink">with AI?</span>
        </motion.h2>
        
        <motion.p 
          variants={itemVariants}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 font-inter"
        >
          Explore our range of ready-to-use AI services and discover how easy it is to integrate powerful AI capabilities into your operations. Start your free trial or talk to our team today.
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button 
            asChild 
            size="lg" 
            className="w-full sm:w-auto bg-brand-pink text-brand-light-text hover:bg-brand-pink/90 dark:hover:bg-brand-pink/80 shadow-lg transform hover:scale-105 transition-transform"
          >
            {/* This could scroll up to the offerings section or link to a more detailed catalog page if one exists */}
            <Link href="#ready-to-use-offerings"> 
              Browse All AI Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="w-full sm:w-auto text-foreground border-foreground/30 hover:bg-foreground/5 dark:text-brand-light-text dark:border-brand-light-text/50 dark:hover:bg-brand-light-text/10 transform hover:scale-105 transition-transform"
          >
            <Link href="/contact?subject=Ready-to-Use%20AI%20Inquiry">
              Contact Us
              <Mail className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          {/* Optionally, add a "Request a Demo" or "Start Free Trial" button if applicable */}
          {/* 
          <Button 
            asChild 
            variant="secondary" // Or another appropriate variant
            size="lg" 
            className="w-full sm:w-auto transform hover:scale-105 transition-transform"
          >
            <Link href="/demo?service=ready-to-use"> 
              Request a Demo
            </Link>
          </Button> 
          */}
        </motion.div>
      </div>
    </motion.section>
  );
}