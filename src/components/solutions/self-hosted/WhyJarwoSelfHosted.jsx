// src/components/solutions/self-hosted/WhyJarwoSelfHosted.jsx
"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, Wrench, Users, Handshake, InfinityIcon } from 'lucide-react';

// ... (advantages and sectionImage data remains the same) ...
const advantages = [
  {
    icon: ShieldCheck,
    title: "Expertise in Secure Deployments",
    description: "Benefit from our proven experience in deploying AI solutions within sensitive, regulated environments, ensuring your data's integrity and compliance.",
  },
  {
    icon: Wrench,
    title: "Tailored Solutions, Not One-Size-Fits-All",
    description: "We don't believe in generic AI. We configure, customize, and develop self-hosted solutions based on your specific operational needs and existing infrastructure.",
  },
  {
    icon: Handshake,
    title: "Transparent & Collaborative Service Model",
    description: "Understand your investment clearly with our transparent approach: one-time setup fees, project-based development costs, and flexible on-demand maintenance options.",
  },
  {
    icon: Users,
    title: "Dedicated Support & True Partnership",
    description: "Consider us an extension of your team. We provide comprehensive onboarding, dedicated support, and work collaboratively to ensure your self-hosted AI success.",
  },
  {
    icon: InfinityIcon,
    title: "Future-Proof & No Vendor Lock-In",
    description: "Empower your business with full control over your AI stack and data. Our commitment to open standards and flexible technologies ensures long-term adaptability.",
  },
];

const sectionImage = {
  src: "/images/jarwo-advantage-collaboration.webp",
  alt: "Jarwo.ai team collaborating with a client on a self-hosted AI strategy blueprint, discussing advantages.",
};


export function WhyJarwoSelfHosted() {
  const blockAnimateIn = { // For major blocks like heading or columns
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  
  const listItemAnimateIn = { // For individual list items
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };
  
  // Image variant can be the same as blockAnimateIn or have its own scale/transform
  const imageAnimateIn = {
    hidden: { opacity: 0, scale: 0.95, y: 20 }, // Matched y with blockAnimateIn
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <motion.section
      id="why-jarwo-self-hosted"
      className="py-16 md:py-24 lg:py-32 bg-background text-foreground overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        visible: { transition: { staggerChildren: 0.25 } } // Stagger direct motion children: heading block, then the grid
      }}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          className="text-center mb-12 md:mb-16 lg:mb-20 max-w-3xl mx-auto"
          variants={blockAnimateIn} // This is the first staggered child
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4 font-inter">
            The Jarwo.ai Advantage for <br className="hidden sm:inline"/>Your <span className="text-brand-pink">Private AI Journey</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-inter">
            Choosing Jarwo.ai for your self-hosted AI means partnering with experts dedicated to your security, customization, and long-term success.
          </p>
        </motion.div>

        <motion.div // Make the grid a motion component
          className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center"
          variants={{ // This grid block itself doesn't need an animation variant if its parent staggers it.
                      // Or it can use blockAnimateIn if the parent section doesn't have its own opacity/y animation.
                      // For simplicity with parent stagger:
            hidden: {}, // No specific animation, relies on parent's stagger
            visible: { transition: { staggerChildren: 0.2 } } // Stagger its direct motion children (the two columns)
          }}
          // If the parent <motion.section> did NOT have its own opacity/y animation, 
          // then this grid could use variants={blockAnimateIn}
        >
          <motion.div // Text column
            className="space-y-0" 
            variants={blockAnimateIn} // This column animates as one block
          >
            <motion.ul 
              className="space-y-6 md:space-y-8"
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              {advantages.map((advantage, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  variants={listItemAnimateIn}
                >
                  <div className="flex-shrink-0 h-10 w-10 bg-brand-pink/10 rounded-full flex items-center justify-center mr-4">
                    <advantage.icon className="h-5 w-5 text-brand-pink" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{advantage.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{advantage.description}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div // Image column
            className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl group"
            variants={imageAnimateIn}
          >
            <Image
              src={sectionImage.src}
              alt={sectionImage.alt}
              fill 
              style={{ objectFit: "cover" }} 
              quality={75} 
              className="transition-transform duration-500 ease-in-out group-hover:scale-105"
              sizes="(max-width: 768px) 90vw, 45vw"
              priority 
            />
             <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/10 group-hover:from-black/10 group-hover:to-black/20 transition-all duration-300"></div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}