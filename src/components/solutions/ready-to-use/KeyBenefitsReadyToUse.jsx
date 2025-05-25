// src/components/solutions/ready-to-use/KeyBenefitsReadyToUse.jsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, DollarSign, Puzzle, ArrowUpRightSquare, Brain, Users } from 'lucide-react'; // Example icons

const benefits = [
  {
    icon: Zap,
    title: "Speed to Market",
    description: "Deploy AI capabilities in days, not months. Get a rapid return on your investment and stay ahead of the competition.",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective Solutions",
    description: "Benefit from lower upfront costs compared to custom development, with predictable and transparent pricing models.",
  },
  {
    icon: Puzzle,
    title: "Ease of Integration",
    description: "Our ready-to-use services are designed for seamless integration with your popular business tools and existing platforms.",
  },
  {
    icon: ArrowUpRightSquare, // Represents scalability
    title: "Scalability on Demand",
    description: "Easily scale your AI usage up or down based on your evolving business needs, ensuring optimal resource allocation.",
  },
  {
    icon: Brain, // Represents access to latest AI
    title: "Access to Latest AI",
    description: "Benefit from continuous updates and the latest AI advancements without the overhead of in-house R&D.",
  },
  {
    icon: Users, // Represents reduced technical burden / support
    title: "Reduced Technical Burden",
    description: "Minimize the need for specialized in-house AI talent and complex infrastructure management with our supported solutions.",
  },
];

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const benefitItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function KeyBenefitsReadyToUse() {
  return (
    <motion.section
      id="key-benefits-ready-to-use"
      className="py-16 md:py-24 lg:py-32 bg-background text-foreground" // Consistent background
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }} // Re-animates section
      variants={sectionVariants}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          // This animates as part of the parent section's animation
        >
          <span className="text-sm font-semibold text-brand-pink uppercase tracking-wider mb-2 inline-block">
            The Advantages
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground font-inter">
            Why Opt for <span className="text-brand-pink">Ready-to-Use AI from Jarwo.ai?</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground font-inter">
            Our pre-built AI solutions offer significant advantages, empowering your business to innovate faster and operate smarter.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 md:gap-y-12"
          // Stagger children (the benefit items)
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={benefit.title} 
              className="flex items-start space-x-4"
              variants={benefitItemVariants} // Each benefit item animates
            >
              <div className="flex-shrink-0 mt-1 p-3 bg-brand-pink/10 rounded-full">
                <benefit.icon className="h-6 w-6 text-brand-pink" strokeWidth="2" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1 font-inter">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-inter">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}