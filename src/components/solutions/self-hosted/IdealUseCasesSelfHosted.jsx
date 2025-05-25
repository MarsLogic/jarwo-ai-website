// src/components/solutions/self-hosted/IdealUseCasesSelfHosted.jsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// Corrected icon import: Changed ShieldLock to Shield
import { Server, DatabaseZap, Shield, Settings2, BrainCircuit, Workflow } from 'lucide-react'; 

const selfHostedUseCases = [
  {
    icon: Server,
    title: "On-Premise LLM Deployment",
    description: "Deploy and manage large language models entirely within your secure infrastructure for maximum data privacy and control.",
  },
  {
    icon: DatabaseZap,
    title: "Secure Data Analytics Platform",
    description: "Build a private analytics environment to process sensitive datasets without them ever leaving your network.",
  },
  {
    icon: Shield, // Corrected icon usage
    title: "Custom AI for Regulated Industries",
    description: "Develop and host bespoke AI solutions that meet strict regulatory compliance standards (e.g., finance, healthcare).",
  },
  // Example:
  // {
  //   icon: BrainCircuit,
  //   title: "Private R&D Environments",
  //   description: "Create secure sandboxes for AI research and development, protecting valuable intellectual property.",
  // },
];

// Animation variants - ensure these are defined in your project or uncomment/adapt
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const cardBaseVariants = { // Renamed to avoid conflict if 'cardVariants' is used differently
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};


export function IdealUseCasesSelfHosted() {
  return (
    <motion.section
      id="ideal-use-cases-self-hosted"
      className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/30 text-foreground"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }} // Changed once to true for section consistent with others
      variants={sectionVariants} 
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl font-inter">
            Ideal Use Cases for <span className="text-brand-pink">Self-Hosted AI</span>
          </h2>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            Explore scenarios where deploying AI on your own infrastructure provides critical advantages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {selfHostedUseCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }} // Changed once to true for cards consistent with others
              variants={{ 
                hidden: cardBaseVariants.hidden,
                visible: {
                  ...cardBaseVariants.visible,
                  transition: { ...( (cardBaseVariants.visible && cardBaseVariants.visible.transition) || {} ), delay: index * 0.1 }
                }
              }}
            >
              <Card className="h-full flex flex-col text-left bg-card 
                               hover:shadow-xl 
                               dark:hover:shadow-brand-pink/20 
                               transition-shadow duration-300">
                <CardHeader className="p-6">
                  {useCase.icon && (
                    <div className="mb-4 p-3 bg-brand-pink/10 rounded-full w-fit"> 
                      <useCase.icon className="h-8 w-8 text-brand-pink" strokeWidth={1.5} />
                    </div>
                  )}
                  <CardTitle className="font-inter text-xl font-semibold text-foreground">
                    {useCase.title}
                  </CardTitle>
                </CardHeader>
                <CardDescription className="px-6 pb-6 font-inter text-muted-foreground flex-grow">
                  {useCase.description}
                </CardDescription>
              </Card>
            </motion.div>
          ))}
          {selfHostedUseCases.length === 0 && (
             <p className="md:col-span-2 lg:col-span-3 text-center text-muted-foreground py-10">
                Detailed use cases for self-hosted AI solutions will be showcased here soon.
             </p>
          )}
        </div>
      </div>
    </motion.section>
  );
}