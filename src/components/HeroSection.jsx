// src/components/HeroSection.jsx
"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import Link from 'next/link';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import NeuralNetworkAnimation from './NeuralNetworkAnimation';
import { cn } from "@/lib/utils";

// Animation variants for the title
const titleContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const wordVariants = { // For individual words in the title
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12, duration: 0.6 } },
};

const brandWordVariants = { // For "Jarwo AI."
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12, duration: 0.8, delay: 0.1 } },
};

// Variants for the main content container (title, paragraph, CTAs) for fade-out
const heroContentContainerVariants = {
  enter: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } }, // Fades and moves up slightly on exit
};


export function HeroSection() {
  const titleWordsBlack = ["Smarter", "Answers,", "Seamless", "Workflows", "with"];
  const titleWordPink = "Jarwo AI.";

  const titleAnimationControls = useAnimation();
  // This ref will be on the main section to detect when it's generally in view
  const [sectionRefForFade, sectionForFadeInView] = useInView({
    threshold: 0.1, // When 10% of section is visible, content is "enter", less than that it's "exit"
                    // Adjust this threshold carefully
  });

  // Ref for re-animating the title specifically
  const [titleElementRef, titleElementInView] = useInView({
    threshold: 0.3, // When 30% of H1 is visible, re-animate title
  });

  useEffect(() => {
    if (titleElementInView) {
      titleAnimationControls.start("visible");
    } else {
      titleAnimationControls.start("hidden"); // Reset title for re-animation
    }
  }, [titleAnimationControls, titleElementInView]);


  const handleSmoothScrollToSolutions = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById('ai-solutions');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn("Target section #ai-solutions not found on this page.");
    }
  };

  return (
    <motion.section
      ref={sectionRefForFade} // Attach ref here to control overall content fade
      className="relative flex items-center justify-center min-h-screen py-20 md:py-32 text-center overflow-hidden bg-background"
    >
      {/* Background elements (grid, neural network) remain as they are, not affected by content fade */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.02]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M30 0L60 15L60 45L30 60L0 45L0 15Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      ></div>
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-50 dark:opacity-40">
        <NeuralNetworkAnimation />
      </div>

      {/* Main content container that will fade */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={heroContentContainerVariants}
        initial="exit" // Start faded out / exited
        animate={sectionForFadeInView ? "enter" : "exit"} // Animate based on overall section visibility
      >
        <motion.h1
          ref={titleElementRef} // Ref for title re-animation
          className="font-inter text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6"
          variants={titleContainerVariants}
          initial="hidden"
          animate={titleAnimationControls}
        >
          {titleWordsBlack.map((word, index) => (
            <motion.span key={index} variants={wordVariants} className="text-foreground inline-block">
              {word}{index < titleWordsBlack.length -1 ? "\u00A0" : ""}
            </motion.span>
          ))}
          <motion.span
            variants={brandWordVariants}
            className="text-brand-pink inline-block ml-1.5 sm:ml-2"
          >
            {titleWordPink}
          </motion.span>
        </motion.h1>

        <p // Paragraph doesn't need its own motion if parent fades
          className="mt-6 font-inter text-lg sm:text-xl text-foreground max-w-3xl mx-auto"
        >
          Transform your business with scalable, secure, and innovative AI solutions tailored to your needs.
        </p>

        <div // CTAs div doesn't need its own motion if parent fades
          className="mt-20 flex flex-col items-center justify-center"
        >
          <Button
            asChild
            className={cn(
              "font-inter w-full max-w-sm sm:w-auto transition-all duration-300 ease-in-out",
              "text-lg font-semibold",
              "py-3.5 px-10 sm:py-4 sm:px-12",
              "shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
              "bg-brand-pink text-brand-light-text border-2 border-brand-pink",
              "dark:bg-brand-pink dark:text-brand-light-text dark:border-brand-pink",
              "hover:bg-transparent hover:text-brand-pink hover:border-brand-pink hover:border-2",
              "dark:hover:bg-transparent dark:hover:text-brand-pink dark:hover:border-brand-pink dark:hover:border-2"
            )}
          >
            <Link href="/contact" className="flex items-center justify-center">
              Tell us what you need
            </Link>
          </Button>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-4">
            <Dialog>
              <DialogTrigger asChild>
                <button
                  className={cn(
                    "font-inter font-medium text-base transition-colors duration-200",
                    "text-foreground hover:text-brand-pink",
                    "dark:text-brand-light-text dark:hover:text-brand-pink"
                  )}
                >
                  Try Demo
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-popover text-popover-foreground">
                <DialogHeader>
                  <DialogTitle className="text-popover-foreground">Mini Chatbot Demo</DialogTitle>
                  <DialogDescription className="text-muted-foreground">
                    This is a placeholder for an interactive mini chatbot.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4 text-popover-foreground space-y-2">
                  <p><strong>You:</strong> Hello!</p>
                  <p><strong>Bot:</strong> Hi there! How can I help you with Jarwo.ai today? (This is a mock conversation)</p>
                </div>
              </DialogContent>
            </Dialog>

            <Link
              href="/#ai-solutions"
              onClick={handleSmoothScrollToSolutions}
              className={cn(
                "font-inter font-medium text-base",
                "text-brand-pink hover:underline cursor-pointer"
              )}
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </motion.div> {/* End of heroContentContainer motion.div */}
    </motion.section>
  );
}