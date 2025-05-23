// src/components/ScrollToTopButton.jsx
"use client";

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils'; // Assuming you have this utility

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > window.innerHeight * 0.8) { // Appears after 80% of first viewport scroll
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top functionality
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
        "bg-brand-pink text-brand-light-text hover:bg-brand-pink/90 focus:outline-none focus:ring-2 focus:ring-brand-pink focus:ring-offset-2 focus:ring-offset-background",
        "dark:focus:ring-offset-brand-dark-text", // Adjust offset color for dark mode if needed
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'
      )}
      aria-label="Scroll to top"
    >
      <ChevronUp className="h-6 w-6" />
    </button>
  );
}