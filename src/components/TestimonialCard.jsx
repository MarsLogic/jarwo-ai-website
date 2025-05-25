// src/components/TestimonialCard.jsx
"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";
import { motion, useAnimation } from "framer-motion"; // Import useAnimation
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer"; // Import useInView
import React, { useEffect } from "react"; // Import useEffect

export function TestimonialCard({
  quote,
  author,
  title,
  company,
  imageSrc,
  companyLogoSrc,
  rating = 5,
}) {
  const authorInitials = author
    ? author
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "??";

  // Controls for the main card animation
  const cardControls = useAnimation();
  // Controls for the star container animation
  const starContainerControls = useAnimation();

  const { ref, inView } = useInView({
    triggerOnce: false, // <<< KEY CHANGE: Allow re-triggering
    threshold: 0.3,    // Adjust threshold as needed (e.g., 30% of card visible)
  });

  useEffect(() => {
    if (inView) {
      // console.log(`Card for ${author} IN VIEW, animating to visible`);
      cardControls.start("visible");
      starContainerControls.start("visible"); // Trigger star container animation
    } else {
      // console.log(`Card for ${author} OUT OF VIEW, animating to hidden`);
      cardControls.start("hidden");
      starContainerControls.start("hidden"); // Reset star container animation
    }
  }, [inView, cardControls, starContainerControls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 } 
    },
  };

  const starContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Slightly faster stagger
        delayChildren: 0.2,   // Slightly faster delay
      },
    },
  };

  const starVariants = {
    hidden: { scale: 0.3, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 15 }, // Adjusted spring
    },
  };

  const hasValidImageSrc = imageSrc && typeof imageSrc === 'string' && imageSrc.trim() !== '';
  const hasValidCompanyLogoSrc = companyLogoSrc && typeof companyLogoSrc === 'string' && companyLogoSrc.trim() !== '';

  return (
    <motion.div
      ref={ref} // Attach ref for intersection observer
      className="h-full"
      variants={cardVariants} // Use variants for the card itself
      initial="hidden"        // Initial state
      animate={cardControls}  // Control animation with useAnimation
    >
      <Card className="h-full flex flex-col bg-card text-card-foreground border border-border shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
        <CardHeader className="pb-4 px-5 pt-5">
          <motion.div // This div will control the staggering of stars
            className="flex items-center space-x-1"
            variants={starContainerVariants}
            initial="hidden" // Ensure stars also start hidden
            animate={starContainerControls} // Control with its own animation controls
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div key={i} variants={starVariants}> {/* Individual stars use starVariants */}
                <Star
                  className={cn(
                    "w-5 h-5",
                    i < rating
                      ? "text-brand-pink fill-brand-pink"
                      : "text-muted-foreground/40 fill-muted-foreground/10"
                  )}
                />
              </motion.div>
            ))}
          </motion.div>
        </CardHeader>
        <CardContent className="flex-grow px-5">
          <div className="relative">
            <Quote className="absolute -top-2 -left-3 w-8 h-8 text-brand-pink/30 dark:text-brand-pink/50" />
            <p className="text-base md:text-lg text-foreground leading-relaxed italic">
              "{quote}"
            </p>
          </div>
        </CardContent>
        <CardFooter className="mt-auto pt-4 pb-5 px-5 border-t border-border/50">
          <div className="flex items-center space-x-3 w-full">
            <Avatar className="h-10 w-10 sm:h-11 sm:w-11 flex-shrink-0">
              {hasValidImageSrc ? (
                <AvatarImage src={imageSrc} alt={author} className="object-cover" />
              ) : (
                <AvatarFallback className="bg-brand-pink/20 text-brand-pink dark:bg-brand-pink/30 dark:text-brand-pink text-sm font-medium">
                  {authorInitials}
                </AvatarFallback>
              )}
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground truncate">{author || "Anonymous"}</p>
              <p className="text-xs text-muted-foreground truncate">
                {title || "Contributor"} {company && `at ${company}`}
              </p>
            </div>
            {hasValidCompanyLogoSrc && (
              <div className="ml-auto flex-shrink-0 pl-2">
                <img
                  src={companyLogoSrc}
                  alt={`${company || 'Company'} logo`}
                  className="h-8 max-h-8 w-auto object-contain"
                  onError={(e) => { e.currentTarget.style.display = 'none'; console.warn(`Failed to load company logo: ${companyLogoSrc} for ${company}`); }}
                />
              </div>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}