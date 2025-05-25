// src/components/solutions/ready-to-use/WhatIsReadyToUse.jsx
"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Layers, Puzzle, Zap, TrendingUp, Users, ShieldCheck } from 'lucide-react';

// UPDATED IMAGE PATH
const diagramImageUrl = "/images/ready-to-use-integration-concept.webp";

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.15 } },
};

const textContentVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const advantageItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9, x: 20 },
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function WhatIsReadyToUse() {
  const advantagesList = [
    { icon: Zap, text: "Rapid Deployment & Immediate Value" },
    { icon: TrendingUp, text: "Cost-Effective & Lower Upfront Investment" },
    { icon: Puzzle, text: "Ease of Use & Seamless Integration" },
    { icon: Layers, text: "Scalable to Your Business Needs" },
    { icon: ShieldCheck, text: "Access Cutting-Edge AI Securely" },
  ];

  return (
    <motion.section
      id="what-are-ready-to-use-services"
      className="py-16 md:py-24 lg:py-32 bg-background text-foreground"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      variants={sectionVariants}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center md:text-left mb-12 md:mb-16 lg:mb-20"
          // This will be staggered by the parent section
        >
          <span className="text-sm font-semibold text-brand-pink uppercase tracking-wider mb-2 inline-block">
            Understand the Basics
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground font-inter">
            AI, Simplified: <span className="text-brand-pink">Understanding Ready-to-Use Services</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
          {/* Text Content Column */}
          <motion.div 
            className="space-y-6"
            variants={textContentVariants} // Animates as a block, staggered by parent section
          >
            <p className="text-lg text-muted-foreground leading-relaxed font-inter">
              Ready-to-Use AI services from Jarwo.ai are pre-developed, often cloud-hosted artificial intelligence solutions designed for <strong className="font-semibold text-foreground dark:text-brand-light-text">rapid integration</strong> into your existing business processes and systems. Think of them as powerful AI tools you can 'plug and play' without the need for extensive custom development or deep in-house AI expertise.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-inter">
              This approach allows your business, especially small to medium-sized enterprises, to quickly leverage advanced AI capabilities. You gain immediate access to benefits like enhanced efficiency, improved customer engagement, and data-driven insights, all with a significantly <strong className="font-semibold text-foreground dark:text-brand-light-text">lower upfront investment</strong> and <strong className="font-semibold text-foreground dark:text-brand-light-text">reduced technical complexity</strong>.
            </p>
            
            <div className="mt-8 pt-6 border-t border-border/50">
                <h3 className="text-xl font-semibold text-foreground mb-4">Key Advantages:</h3>
                <motion.ul 
                    className="space-y-3"
                    variants={{ visible: { transition: { staggerChildren: 0.1 }}}}
                >
                    {advantagesList.map((advantage, index) => (
                        <motion.li 
                            key={index} 
                            className="flex items-center" 
                            variants={advantageItemVariants}
                        >
                            <advantage.icon className="h-5 w-5 text-brand-pink mr-3 flex-shrink-0" strokeWidth="2.5" />
                            <span className="text-md text-muted-foreground">{advantage.text}</span>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
          </motion.div>

          {/* Visual/Diagram Column */}
          <motion.div 
            className="relative w-full min-h-[300px] md:min-h-[400px] rounded-xl overflow-hidden shadow-xl border border-border/10 flex items-center justify-center bg-slate-50 dark:bg-slate-800/50 p-4 md:p-8"
            variants={imageVariants} // Animates as a block, staggered by parent section
          >
            <Image
              src={diagramImageUrl} // Uses the updated path
              alt="Diagram illustrating easy API integration of Ready-to-Use AI services with business systems" // Updated alt text
              width={500} 
              height={375} 
              // If your image is a different aspect ratio, adjust width/height, 
              // or switch to fill and use style={{ objectFit: "contain" }} and sizes prop.
              className="rounded-md object-contain max-w-full max-h-[350px] md:max-h-[400px]"
              quality={80} // Adjust quality for WebP if needed
              priority // Consider if this image is critical for above-the-fold
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}