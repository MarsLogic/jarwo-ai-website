// src/components/solutions/ready-to-use/WhyJarwoReadyToUse.jsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, LifeBuoy, Target, Settings2, DollarSignIcon } from 'lucide-react'; // Example icons

const jarwoAdvantages = [
  {
    icon: CheckCircle,
    title: "Curated & Tested Solutions",
    description: "Our services are built on proven AI models and rigorously tested for reliability, ensuring you get solutions that work.",
  },
  {
    icon: LifeBuoy,
    title: "Simple Onboarding & Dedicated Support",
    description: "Get started quickly with our easy onboarding process and count on our dedicated customer support for any assistance you need.",
  },
  {
    icon: Target,
    title: "Focus on Business Value",
    description: "We prioritize solutions that deliver tangible results and solve real business problems, helping you achieve your goals faster.",
  },
  {
    icon: Settings2, // Represents flexible integration
    title: "Flexible Integration Options",
    description: "Our ready-to-use services come with APIs and connectors designed to easily fit into your existing tech stack and workflows.",
  },
  {
    icon: DollarSignIcon, // Represents transparent pricing
    title: "Transparent & Predictable Pricing",
    description: "Understand your investment with clear and predictable pricing models, allowing for better budget planning. (if applicable)",
  },
];

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const advantageItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function WhyJarwoReadyToUse() {
  return (
    <motion.section
      id="why-jarwo-ready-to-use"
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
            Our Commitment
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground font-inter">
            The Jarwo.ai Edge in <span className="text-brand-pink">Ready-to-Use AI</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground font-inter">
            We go beyond just providing tools. Discover why businesses choose Jarwo.ai for their ready-to-use AI needs.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 md:gap-y-12 lg:max-w-4xl lg:mx-auto" // Max-width for 2-col centered feel if fewer items
          // Stagger children (the advantage items)
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {jarwoAdvantages.map((advantage, index) => (
            <motion.div 
              key={advantage.title} 
              className="flex items-start space-x-4"
              variants={advantageItemVariants} // Each advantage item animates
            >
              <div className="flex-shrink-0 mt-1 p-3 bg-brand-pink/10 rounded-full">
                <advantage.icon className="h-6 w-6 text-brand-pink" strokeWidth="2" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1 font-inter">{advantage.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-inter">{advantage.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}