// src/components/solutions/ready-to-use/IdealUseCasesReadyToUse.jsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
    MessageSquare, 
    LineChart, 
    Settings, 
    Briefcase, 
    CheckCircle // Make sure CheckCircle is imported
} from 'lucide-react'; 

const useCaseCategories = [
  {
    icon: MessageSquare,
    categoryTitle: "Enhanced Customer Support",
    description: "Automate responses, provide 24/7 availability, and qualify leads efficiently using AI-powered chatbots and support tools.",
    examples: ["Instant FAQ Answers", "After-Hours Support", "Lead Qualification Bots"],
  },
  {
    icon: LineChart,
    categoryTitle: "Smarter Marketing & Sales",
    description: "Leverage AI for personalized customer experiences, effective lead scoring, and automated campaign management to boost conversions.",
    examples: ["Personalized Recommendations", "Automated Email Sequences", "Sales Trend Analysis"],
  },
  {
    icon: Settings,
    categoryTitle: "Optimized Operations",
    description: "Streamline internal processes with AI automation for tasks like data entry, document processing, and resource management.",
    examples: ["Automated Data Entry", "Intelligent Document Summarization", "Workflow Optimization"],
  },
  {
    icon: Briefcase, 
    categoryTitle: "Empowering Small & Medium Businesses",
    description: "Quickly adopt powerful AI tools to level the playing field, improve operational efficiency, and enhance customer experiences without needing large internal teams or budgets.",
    examples: ["Affordable AI Tools", "Rapid Productivity Boosts", "Competitive Edge"],
  },
];

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function IdealUseCasesReadyToUse() {
  return (
    <motion.section
      id="ideal-use-cases-ready-to-use"
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
            Practical Applications
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground font-inter">
            Transform Your Business with <span className="text-brand-pink">Real-World AI Use Cases</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground font-inter">
            See how Jarwo.ai's ready-to-use services can address common challenges and unlock new opportunities across various business functions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {useCaseCategories.map((category, index) => (
            <motion.div
              key={category.categoryTitle}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.25 }}
              variants={{
                hidden: cardVariants.hidden,
                visible: {
                  ...cardVariants.visible,
                  transition: { ...( (cardVariants.visible && cardVariants.visible.transition) || {} ), delay: index * 0.1 }
                }
              }}
            >
              <Card className="h-full flex flex-col bg-card hover:shadow-lg transition-shadow duration-300 border-border/70">
                <CardHeader className="flex flex-row items-center space-x-4 p-6">
                  <div className="p-3 bg-brand-pink/10 rounded-lg">
                    <category.icon className="h-7 w-7 text-brand-pink" strokeWidth="2" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground font-inter leading-tight">
                    {category.categoryTitle}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow px-6 pb-6">
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{category.description}</p>
                  {category.examples && category.examples.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2 uppercase tracking-wider">Examples:</p>
                      {/* --- THIS IS THE CORRECTED LIST STRUCTURE --- */}
                      <ul className="space-y-1.5 list-none p-0 m-0"> {/* Ensures no default list styling */}
                        {category.examples.map((example, exIndex) => (
                          <li key={exIndex} className="flex items-start text-sm text-muted-foreground p-0"> 
                            <CheckCircle className="h-4 w-4 text-brand-pink mr-2 mt-[3px] flex-shrink-0" /> 
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                      {/* --- END OF CORRECTED LIST STRUCTURE --- */}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}