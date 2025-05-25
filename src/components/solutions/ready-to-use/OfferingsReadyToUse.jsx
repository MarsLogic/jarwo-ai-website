// src/components/solutions/ready-to-use/OfferingsReadyToUse.jsx
"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Bot, Zap, BarChart3, ArrowRight } from 'lucide-react';

const serviceOfferings = [
  {
    icon: Bot,
    title: "AI-Powered Chatbots",
    brief: "Deploy smart chatbots instantly to handle customer queries 24/7, generate leads, and improve user satisfaction.",
    learnMoreLink: "/solutions/ready-to-use/chatbots",
    tags: ["Customer Support", "Lead Gen", "24/7 Availability"],
  },
  {
    icon: Zap,
    title: "AI Automation Workflows",
    brief: "Automate repetitive tasks, optimize workflows, and free up your team for strategic initiatives with our pre-built AI automations.",
    learnMoreLink: "/solutions/ready-to-use/automation-workflows",
    tags: ["Efficiency", "Productivity", "Task Automation"],
  },
  {
    icon: BarChart3,
    title: "AI Data Analytics & Insights",
    brief: "Gain deeper understanding from your business data. Our ready-to-use analytics tools provide quick insights and predictive capabilities.",
    learnMoreLink: "/solutions/ready-to-use/data-analytics",
    tags: ["Data-Driven", "Reporting", "Forecasting"],
  },
];

// Animation Variants - RESTORED DEFINITIONS
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};
// END OF RESTORED DEFINITIONS

export function OfferingsReadyToUse() {
  return (
    <motion.section
      id="ready-to-use-offerings"
      className="py-16 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/50 text-foreground"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={sectionVariants}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-sm font-semibold text-brand-pink uppercase tracking-wider mb-2 inline-block">
            Our Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground font-inter">
            Explore Our Suite of <span className="text-brand-pink">Ready-to-Use AI Services</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground font-inter">
            Discover powerful, pre-built AI tools designed for rapid deployment and immediate business value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {serviceOfferings.map((service, index) => (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={{
                hidden: cardVariants.hidden, // Accessing defined cardVariants
                visible: {
                  ...cardVariants.visible, // Accessing defined cardVariants
                  transition: { ...(cardVariants.visible.transition || {}), delay: index * 0.1 }
                }
              }}
            >
              <Card className="h-full flex flex-col bg-card hover:shadow-xl transition-shadow duration-300 border-border/70">
                <CardHeader className="items-center text-center p-6">
                  <div className="p-3 bg-brand-pink/10 rounded-full mb-3 inline-block">
                    <service.icon className="h-8 w-8 text-brand-pink" strokeWidth="2" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground font-inter">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow px-6 pb-4">
                  <p className="text-sm text-muted-foreground text-center leading-relaxed mb-4">{service.brief}</p>
                  {service.tags && service.tags.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-2">
                      {service.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="inline-block bg-pink-100 text-brand-pink text-xs font-semibold px-2.5 py-1 rounded-md dark:bg-pink-500/20 dark:text-pink-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild variant="link" className="w-full text-brand-pink hover:text-brand-pink/80 font-semibold group">
                    <Link href={service.learnMoreLink}>
                      Learn More 
                      <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}