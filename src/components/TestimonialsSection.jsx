// src/components/TestimonialsSection.jsx
"use client";

import Link from "next/link";
import { TestimonialCard } from "./TestimonialCard"; // Ensure TestimonialCard.jsx is in the same directory and correctly exported
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// UPDATED Placeholder Data with 5 testimonials
const placeholderTestimonials = [
    {
      id: 1, // David Miller
      quote: "The insights Jarwo.ai provided helped us to redefine our market strategy. Their platform is intuitive and powerful.",
      author: "David Miller",
      title: "Marketing Director",
      company: "Apex Corp",
      imageSrc: null,
      companyLogoSrc: null, // Explicitly no company logo for NextGen in this example
      rating: 5,
    },
    {
      id: 2, // Dr. Evelyn Reed
      quote: "Jarwo.ai transformed our data processing, saving us countless hours and improving accuracy significantly. Their team is top-notch and the solutions are truly cutting-edge!",
      author: "Dr. Evelyn Reed",
      title: "Chief Innovation Officer",
      company: "QuantumLeap Solutions",
      imageSrc: null,
      companyLogoSrc: null, // Assuming no logo for now, or provide path if you have one
      rating: 5,
    },
    {
      id: 3, // Marcus Chen
      quote: "The custom AI solution developed by Jarwo.ai integrated seamlessly into our existing systems. We've seen a 30% increase in efficiency and a significant reduction in operational costs.",
      author: "Marcus Chen",
      title: "VP of Technology",
      company: "Synergy Dynamics",
      imageSrc: null,
      companyLogoSrc: null, // Assuming no logo for now, or provide path if you have one
      rating: 5,
    },
    {
      id: 4, // New: Aisha Khan
      quote: "Working with Jarwo.ai was a game-changer. Their expertise in AI and commitment to our success was evident from day one. Highly recommended for any business looking to leverage AI.",
      author: "Aisha Khan",
      title: "Director of Digital Transformation",
      company: "NextGen Enterprises",
      imageSrc: null, // For initials "AK"
      // imageSrc: "/images/avatars/aisha-khan.jpg", // Path if you have an image
      companyLogoSrc: null, // Explicitly no company logo for NextGen in this example
      rating: 4,
    },
    {
      id: 5, // New: Samuel Green
      quote: "The scalability of Jarwo.ai's platform allowed us to handle a 10x increase in data volume without a hitch. Their support team is also incredibly responsive and knowledgeable.",
      author: "Samuel Green",
      title: "Head of Data Science",
      company: "Innovatech Inc.",
      imageSrc: null, // For initials "SG"
      // imageSrc: "/images/avatars/samuel-green.jpg", // Path if you have an image
      companyLogoSrc: null, // Explicitly no company logo for NextGen in this example
      rating: 5,
    }
  ];


export function TestimonialsSection() {
  const originalTestimonialsLink = "/success-stories/testimonials"; // Store the original link

  return (
    <section
      id="testimonials"
      className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-foreground py-16 md:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-4">
          Trusted by <span className="text-brand-pink">Industry Leaders</span>
        </h2>
        <p className="mt-4 mb-12 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Hear what our clients have to say about their experience with Jarwo.ai and the transformative impact we've made on their businesses.
        </p>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 6000,
              stopOnInteraction: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {placeholderTestimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  className="p-1 h-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <TestimonialCard {...testimonial} />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-[-20px] md:ml-[-40px] text-brand-pink border-brand-pink hover:bg-brand-pink hover:text-primary-foreground disabled:border-border disabled:text-muted-foreground" />
          <CarouselNext className="mr-[-20px] md:mr-[-40px] text-brand-pink border-brand-pink hover:bg-brand-pink hover:text-primary-foreground disabled:border-border disabled:text-muted-foreground" />
        </Carousel>

        <div className="mt-12 md:mt-16">
          {/* MODIFIED Link component below */}
          <Link
            href="#" // MODIFIED: Changed href to "#"
            data-original-href={originalTestimonialsLink} // MODIFIED: Added data-original-href
            className="inline-flex items-center text-lg font-medium text-foreground hover:text-brand-pink focus-visible:text-brand-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md transition-colors duration-200 group"
          >
            View All Testimonials
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}