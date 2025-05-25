// src/components/CtaSection.jsx
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function CtaSection() {
  const bounceVariants = { /* ... remains the same ... */ };

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
            <motion.div
              variants={bounceVariants}
              initial="initial"
              animate="animate"
              className="inline-block"
            >
              <Button
                asChild // Button will use Link as its child
                size="lg"
                className={cn(
                  "font-inter w-full max-w-xs sm:w-auto font-semibold py-3.5 px-10 text-lg sm:text-xl",
                  "transition-colors duration-300 ease-in-out",
                  "bg-brand-pink text-brand-light-text border-2 border-brand-pink",
                  "hover:bg-transparent hover:text-brand-pink hover:border-brand-pink"
                )}
              >
                <Link
                  href="/contact"
                  className="flex items-center justify-center"
                  // REMOVED legacyBehavior
                >
                  {/* Wrap children in a single fragment */}
                  <>
                    Contact Us <ArrowRight className="ml-2.5 h-5 w-5 sm:h-6 sm:w-6" />
                  </>
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}