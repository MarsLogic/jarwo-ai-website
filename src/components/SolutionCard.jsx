// src/components/SolutionCard.jsx
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react'; // CORRECTED THIS LINE
import { cn } from "@/lib/utils";

const getIcon = (iconName) => {
  if (!iconName || typeof iconName !== 'string') {
    return LucideIcons.Minus;
  }
  const IconComponent = LucideIcons[iconName];
  if (!IconComponent) {
    console.warn(`Lucide icon "${iconName}" not found. Defaulting to Minus.`);
    return LucideIcons.Minus;
  }
  return IconComponent;
};

// CHANGED TO A NAMED EXPORT
export function SolutionCard({
  iconName,
  title,
  descriptionPoints,
  learnMoreLink, // This prop holds the original URL
  iconColor = "text-brand-pink", // Default color for the main icon
  tags // Added tags prop
}) {
  const MainIconComponent = getIcon(iconName);

  return (
    <motion.div
      className="h-full flex" // Ensures motion.div takes full height if parent is flex
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <Card className="flex flex-col w-full bg-card text-card-foreground border border-border shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden">
        <CardHeader className="items-center pt-6 pb-3">
          {MainIconComponent && (
            <MainIconComponent
              className={cn(
                "h-10 w-10 sm:h-12 sm:w-12 mb-3",
                MainIconComponent === LucideIcons.Minus ? "text-muted-foreground/50" : iconColor
              )}
              strokeWidth={1.5}
            />
          )}
          <CardTitle className="font-inter text-md sm:text-lg font-semibold text-center leading-tight text-card-foreground">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow px-5 py-2 text-left">
          {Array.isArray(descriptionPoints) && descriptionPoints.length > 0 ? (
            <ul className="space-y-2.5 font-inter text-xs sm:text-sm text-muted-foreground">
              {descriptionPoints.map((point, index) => {
                let pointText = '';
                let pointIconName = 'ChevronRight'; // Default icon

                if (typeof point === 'string') {
                  pointText = point;
                } else if (typeof point === 'object' && point !== null && point.text) {
                  pointText = point.text;
                  pointIconName = point.iconName || 'ChevronRight';
                } else {
                  return null; // Skip invalid point structures
                }

                const PointIconComponent = getIcon(pointIconName);
                return (
                  <li key={index} className="flex items-start">
                    <PointIconComponent
                      className={cn(
                        "h-4 w-4 mr-2 mt-[3px] flex-shrink-0",
                        PointIconComponent === LucideIcons.Minus ? "text-muted-foreground/50" : "text-brand-pink/80"
                      )}
                      strokeWidth={PointIconComponent === LucideIcons.Minus ? 1.5 : 2.5}
                    />
                    <span className="leading-relaxed">{pointText}</span>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="font-inter text-xs sm:text-sm text-muted-foreground leading-relaxed text-center sm:text-left">
              Details coming soon.
            </p>
          )}
        </CardContent>
        {/* Optional Tags Section */}
        {tags && tags.length > 0 && (
          <div className="px-5 pt-1 pb-3 flex flex-wrap gap-2 justify-center">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-0.5 text-xs font-medium bg-brand-pink/10 text-brand-pink rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <CardFooter className="justify-center pb-5 pt-3 mt-auto"> {/* Added mt-auto to push footer down */}
          <Button
            variant="link"
            asChild
            className="font-inter text-sm text-brand-pink hover:text-brand-pink/80 hover:underline px-1 h-auto py-1"
          >
            <Link 
              href="#"
              data-original-href={learnMoreLink || "#"}
            >
              Learn More →
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}