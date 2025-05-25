// src/components/solutions/self-hosted/UnderstandingSelfHosted.jsx
"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const content = {
  overline: "Core Concept",
  headline: "What is Self-Hosted AI? ",
  highlightedPartHeadline: "Your Data, Your Rules.",
  description: "Gain clarity on how self-hosted AI empowers your business by putting you in complete command of your artificial intelligence capabilities and valuable data assets.",
  mainTextP1: "Self-Hosted AI means deploying and running artificial intelligence models and applications directly on <span class='font-semibold text-brand-pink'>your organization's own servers or private cloud infrastructure</span>. Unlike relying on third-party cloud AI services, this approach grants you unparalleled control and security.",
  mainTextP2: "With Jarwo.ai's self-hosted solutions, you achieve <span class='font-semibold text-brand-pink'>complete data sovereignty</span> - your sensitive information never leaves your controlled environment. This is crucial for industries with strict data privacy regulations and for businesses that prioritize intellectual property protection.",
  benefits: [
    "Enhanced security and compliance (HIPAA, GDPR, etc.).",
    "Deep customization of models and workflows.",
    "No vendor lock-in, full control over your AI stack.",
    "Predictable costs and optimized performance for your specific needs."
  ],
  diagramAlt: "Conceptual diagram of self-hosted AI architecture showing interconnected secure modules within an organization's control.",
  // UPDATED IMAGE PATH to .webp
  diagramSrc: "/images/self-hosted-ai-diagram.webp"
};

export function UnderstandingSelfHosted() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <motion.section
      id="understanding-self-hosted"
      className="py-16 md:py-24 bg-background text-foreground"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          {content.overline && (
            <motion.p
              className="text-sm font-semibold text-brand-pink uppercase tracking-wider mb-2"
              variants={itemVariants}
            >
              {content.overline}
            </motion.p>
          )}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
            variants={itemVariants}
          >
            {content.headline}
            {content.highlightedPartHeadline && <span className="text-brand-pink">{content.highlightedPartHeadline}</span>}
          </motion.h2>
          {content.description && (
            <motion.p
              className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground"
              variants={itemVariants}
            >
              {content.description}
            </motion.p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div className="space-y-6" variants={itemVariants}>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: content.mainTextP1 }} />
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: content.mainTextP2 }} />
            <ul className="space-y-3 mt-6">
              {content.benefits.map((benefit, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: (i) => ({
                      opacity: 1,
                      x: 0,
                      transition: { delay: i * 0.1, duration: 0.4 },
                    }),
                  }}
                >
                  <CheckCircle className="flex-shrink-0 h-6 w-6 text-brand-pink mr-3 mt-1" />
                  <span className="text-base md:text-lg">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl group"
            variants={imageVariants}
          >
            <Image
              src={content.diagramSrc} // Uses the .webp path
              alt={content.diagramAlt}
              fill // Modern Next.js prop for filling parent
              style={{ objectFit: "cover" }} // Modern way to specify object-fit
              quality={75} // WebP can often use slightly lower quality for same visual
              className="transition-transform duration-500 ease-in-out group-hover:scale-105"
              // Sizes prop is important for performance with fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
              priority // If this image is often above the fold
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-4">
                <p className="text-xs font-semibold text-white bg-black/50 px-2 py-1 rounded">Diagram illustrating self-hosted AI architecture</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}