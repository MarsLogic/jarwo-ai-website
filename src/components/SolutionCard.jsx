// src/components/SolutionCard.jsx
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
// ----- CORRECT THE EXPLICIT IMPORT -----
import { MousePointerSquareDashed as MousePointerSquareDashedIconDirect } from 'lucide-react'; // Try importing the suggested name
// ----- END OF CORRECTED IMPORT -----
import { cn } from "@/lib/utils";

// console.log("SolutionCard.jsx: All LucideIcons available at module load (via * as LucideIcons):", LucideIcons);
// console.log("SolutionCard.jsx: Directly imported MousePointerSquareDashedIconDirect:", MousePointerSquareDashedIconDirect); // Check this import

const getIcon = (iconName) => {
  // console.log(`SolutionCard.jsx: getIcon called with iconName: "${iconName}"`);

  // ----- MODIFIED LOGIC TO PRIORITIZE DIRECT IMPORT FOR THE DASHED ICON -----
  if (iconName === 'MousePointerSquareDashed') { // Check for the dashed name now
    console.log('SolutionCard.jsx: getIcon - Processing specifically for "MousePointerSquareDashed".');
    if (MousePointerSquareDashedIconDirect) {
      console.log('SolutionCard.jsx: getIcon - Using DIRECTLY IMPORTED MousePointerSquareDashedIconDirect.');
      return MousePointerSquareDashedIconDirect;
    } else {
      console.warn('SolutionCard.jsx: getIcon - Directly imported MousePointerSquareDashedIconDirect is undefined. Falling back to dynamic lookup.');
    }
  }
  // ----- END OF MODIFIED LOGIC -----

  if (!iconName || typeof iconName !== 'string') {
    console.warn(`SolutionCard.jsx: getIcon - iconName is invalid. Defaulting to Minus.`);
    return LucideIcons.Minus;
  }
  const IconComponent = LucideIcons[iconName];
  if (!IconComponent) {
    console.warn(`SolutionCard.jsx: getIcon - Lucide icon "${iconName}" not found dynamically. Defaulting to Minus.`);
    return LucideIcons.Minus;
  }
  console.log(`SolutionCard.jsx: getIcon - Successfully found component for "${iconName}" via dynamic lookup.`);
  return IconComponent;
};

// ... (Rest of the SolutionCard component remains the same as your last full version)
export function SolutionCard({
  iconName: mainCardIconName,
  title,
  descriptionPoints,
  learnMoreLink,
  iconColor = "text-brand-pink",
  tags
}) {
  console.log(`SolutionCard.jsx: Rendering card with title: "${title}", main card iconName: "${mainCardIconName}"`);
  const MainIconComponent = getIcon(mainCardIconName);

  return (
    <motion.div
      className="h-full flex"
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
                let pointIconName = 'ChevronRight'; 

                if (typeof point === 'string') {
                  pointText = point;
                  // console.log(`SolutionCard.jsx: Description point for card "${title}" at index ${index} is a STRING: "${pointText}". Using default icon "${pointIconName}".`);
                } else if (typeof point === 'object' && point !== null && point.text) {
                  pointText = point.text;
                  pointIconName = point.iconName || 'ChevronRight';
                  // console.log(`SolutionCard.jsx: Description point for card "${title}", item "${pointText}" (index ${index}): received pointIconName "${point.iconName}", will attempt to use "${pointIconName}".`);
                } else {
                  // console.warn(`SolutionCard.jsx: Invalid description point structure for card "${title}" at index ${index}:`, point, `. Skipping.`);
                  return null; 
                }
                
                if (title === "Ready-to-Use AI Applications" && pointText.includes("User-friendly interfaces")) {
                  // console.log(`SolutionCard.jsx: >>> DEBUGGING ITEM <<< Card: "${title}", Text: "${pointText}", Attempting to use pointIconName: "${pointIconName}" (this should now be "MousePointerSquareDashed")`);
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
        <CardFooter className="justify-center pb-5 pt-3 mt-auto">
          <Button
            variant="link"
            asChild
            className="font-inter text-sm text-brand-pink hover:text-brand-pink/80 hover:underline px-1 h-auto py-1"
          >
            <Link 
              href={learnMoreLink || "#"}
            >
              Learn More →
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}