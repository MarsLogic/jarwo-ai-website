// src/components/CtaSection.jsx
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion"; // Ensure motion is imported

export function CtaSection() {
  // Animation variants for the button bounce
  const bounceVariants = {
    initial: {
      scale: 1,
      boxShadow: "0px 5px 15px rgba(249, 45, 119, 0.2)", // Softer initial shadow
    },
    animate: {
      scale: [1, 1.03, 1], // Bounces slightly up
      translateY: [0, -3, 0], // Moves slightly up and down
      boxShadow: [ // Animate shadow for more depth
        "0px 5px 15px rgba(249, 45, 119, 0.2)", 
        "0px 8px 20px rgba(249, 45, 119, 0.3)", 
        "0px 5px 15px rgba(249, 45, 119, 0.2)"
      ],
      transition: {
        duration: 1.5, // Duration of one bounce cycle
        repeat: Infinity, // Repeat the animation indefinitely
        repeatType: "loop", // Loop the animation
        ease: "easeInOut", // Smooth easing
      },
    },
  };

  return (
    <section
      id="cta-section"
      className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-foreground py-16 md:py-24 lg:py-32"
    >
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="font-inter text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Ready to Innovate with <span className="text-brand-pink">AI</span>?
          </h2>
          <p className="mt-4 sm:mt-6 font-inter text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Join businesses transforming their operations with Jarwo.ai. Let's discuss how our AI solutions can be tailored to your unique needs and drive significant growth.
          </p>

          <div className="mt-10 sm:mt-12">
            {/* Wrap the Button/Link with motion.div for the bounce animation */}
            <motion.div
              variants={bounceVariants}
              initial="initial" // Corresponds to key in bounceVariants
              animate="animate"   // Corresponds to key in bounceVariants
              className="inline-block" // To ensure motion.div wraps the button correctly
            >
              <Button
                asChild
                size="lg"
                className={cn(
                  "font-inter w-full max-w-xs sm:w-auto font-semibold py-3.5 px-10 text-lg sm:text-xl",
                  // Removed shadow from here as it's handled by framer-motion
                  "transition-colors duration-300 ease-in-out", // Keep transition for hover colors
                  "bg-brand-pink text-brand-light-text border-2 border-brand-pink",
                  "hover:bg-transparent hover:text-brand-pink hover:border-brand-pink"
                  // Note: The hover:-translate-y-0.5 is less noticeable with the bounce, can be kept or removed
                )}
              >
                <Link href="/contact" className="flex items-center justify-center">
                  Contact Us <ArrowRight className="ml-2.5 h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}