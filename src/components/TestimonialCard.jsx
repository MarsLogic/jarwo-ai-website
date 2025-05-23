// src/components/TestimonialCard.jsx
"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function TestimonialCard({
  quote,
  author,
  title,
  company,
  imageSrc,         // e.g., "/images/avatars/evelyn-reed.jpg" or "" or null
  companyLogoSrc,   // e.g., "/images/logos/quantumleap-logo.svg" or "" or null
  rating = 5,
}) {
  const authorInitials = author
    ? author
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "??"; // Fallback if author name is missing

  const starContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const starVariants = {
    hidden: { scale: 0.3, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 400, damping: 17 },
    },
  };

  // Determine if a valid imageSrc is provided
  const hasValidImageSrc = imageSrc && typeof imageSrc === 'string' && imageSrc.trim() !== '';
  const hasValidCompanyLogoSrc = companyLogoSrc && typeof companyLogoSrc === 'string' && companyLogoSrc.trim() !== '';


  return (
    <motion.div
      className="h-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Card className="h-full flex flex-col bg-card text-card-foreground border border-border shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
        <CardHeader className="pb-4 px-5 pt-5"> {/* Added consistent padding */}
          <motion.div
            className="flex items-center space-x-1"
            variants={starContainerVariants}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div key={i} variants={starVariants}>
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
            <Avatar className="h-10 w-10 sm:h-11 sm:w-11 flex-shrink-0"> {/* Added flex-shrink-0 */}
              {hasValidImageSrc ? (
                <AvatarImage src={imageSrc} alt={author} className="object-cover" />
              ) : (
                <AvatarFallback className="bg-brand-pink/20 text-brand-pink dark:bg-brand-pink/30 dark:text-brand-pink text-sm font-medium"> {/* Added font-medium */}
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