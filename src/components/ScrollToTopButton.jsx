// src/components/ScrollToTopButton.jsx
"use client";

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > window.innerHeight * 0.8) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    // Call it once on mount to set initial state based on current scroll position
    toggleVisibility(); 
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out",
        "bg-brand-pink text-brand-light-text", // Base background and text color
        // HOVER STATE:
        "hover:bg-brand-pink/90", // Optional: Slightly darken background on hover
        "hover:ring-2 hover:ring-brand-pink hover:ring-offset-2 hover:ring-offset-background", // Pink ring on hover
        // FOCUS-VISIBLE STATE (for accessibility via keyboard):
        "focus-visible:outline-none", // Remove default browser outline
        "focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-offset-2 focus-visible:ring-offset-background", // Pink ring on focus-visible
        // Note: The original `focus:ring-2 focus:ring-brand-pink ...` would apply to *any* focus (mouse click or keyboard).
        // `focus-visible:` is generally preferred for outlines as it targets keyboard focus specifically,
        // leaving mouse click focus less visually intrusive if desired.
        // If you want the ring on *any* focus (including mouse click), you can revert to `focus:ring-2 ...`
        // or add it alongside `focus-visible:ring-2 ...`
        
        // VISIBILITY:
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'
      )}
      aria-label="Scroll to top"
      // Disable button when not visible to prevent accidental tabbing
      disabled={!isVisible} 
      // Hide from accessibility tree when not visible
      aria-hidden={!isVisible} 
    >
      <ChevronUp className="h-6 w-6" />
    </button>
  );
}