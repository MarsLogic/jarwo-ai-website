// src/components/TestimonialsSection.jsx
"use client";

import React from "react";
import Link from "next/link";
import { TestimonialCard } from "./TestimonialCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";

// Assuming placeholderTestimonials data is defined as before,
// with imageSrc correctly set to "" or null for those without images
// to show proper initials.
const placeholderTestimonials = [
  {
    id: 1,
    quote:
      "Jarwo.ai revolutionized our data processing workflow. Their custom AI solution cut down our processing time by 70% and significantly improved accuracy. Truly a game-changer for our operations!",
    author: "Evelyn Reed",
    title: "COO",
    company: "QuantumLeap Tech",
    imageSrc: "", // Shows "ER"
    companyLogoSrc: "/images/logos/quantumleap-logo.svg",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "The ready-to-use AI tools from Jarwo.ai were incredibly easy to integrate and provided immediate value. Our team was up and running in days, not weeks. Highly recommended for their efficiency and support.",
    author: "Marcus Chen",
    title: "Head of Innovation",
    company: "Starlight Industries",
    imageSrc: "", // Shows "MC"
    companyLogoSrc: "/images/logos/starlight-logo.svg",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Working with Jarwo.ai on our AI system integration was a seamless experience. Their expertise in bridging legacy systems with modern AI capabilities is top-notch. We've seen a marked improvement in data flow.",
    author: "Priya Sharma",
    title: "IT Director",
    company: "Nexus Solutions",
    imageSrc: "", // Shows "PS"
    companyLogoSrc: "/images/logos/nexus-logo.svg",
    rating: 4,
  },
  {
    id: 4,
    quote:
      "The self-hosted AI platform gave us the control and security we needed for our sensitive data. Jarwo.ai's team was instrumental in customizing it to our exact infrastructure requirements.",
    author: "David Miller",
    title: "CTO",
    company: "Innovate Core",
    imageSrc: null, // Shows "DM"
    companyLogoSrc: "/images/logos/innovatecore-logo.png",
    rating: 5,
  },
];


export function TestimonialsSection() {
  const originalTestimonialsLink = "/success-stories/testimonials";

  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: false, // Set to false if you want it to stop/start on scroll in/out
                       // Set to true if it should only start once and then keep playing
    threshold: 0.2,
  });

  const autoplayPlugin = React.useRef(
    Autoplay({
      delay: 4000, // Slightly adjusted delay
      stopOnInteraction: false, // <<--- KEY CHANGE: Allow autoplay to continue after user interaction
      playOnInit: false,        // Don't play until in view
      stopOnMouseEnter: true,   // Still useful for desktop
    })
  );

  const [carouselApi, setCarouselApi] = React.useState(null); // For more direct control if needed

  React.useEffect(() => {
    if (!carouselApi) {
      return;
    }

    if (sectionInView) {
      // console.log("Testimonials section in view, attempting to play.");
      autoplayPlugin.current.play();
    } else {
      // console.log("Testimonials section NOT in view, attempting to stop.");
      // Only stop if triggerOnce is false and you want it to stop when out of view
      if(!sectionRef.current?.hasAttribute('data-triggered-once')) { // A bit of a hack if triggerOnce is true
         autoplayPlugin.current.stop();
      }
    }
  }, [sectionInView, carouselApi]);

  // If triggerOnce is true for useInView, we mark it after first play
  React.useEffect(() => {
    if (sectionInView && sectionRef.current && !sectionRef.current.hasAttribute('data-triggered-once')) {
        sectionRef.current.setAttribute('data-triggered-once', 'true');
    }
  }, [sectionInView, sectionRef]);


  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-foreground py-16 md:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-4">
          Trusted by <span className="text-brand-pink">Industry Leaders</span>
        </h2>
        <p className="mt-4 mb-12 md:mb-16 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Hear what our clients have to say about their experience with Jarwo.ai and the transformative impact we've made on their businesses.
        </p>

        {placeholderTestimonials && placeholderTestimonials.length > 0 ? (
          <Carousel
            setApi={setCarouselApi} // Get API instance for more control
            plugins={[autoplayPlugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            // onMouseEnter={autoplayPlugin.current.stop} // Already handled by stopOnMouseEnter in plugin options
            // onMouseLeave={autoplayPlugin.current.play} // Be careful with this if sectionInView is also controlling play
          >
            <CarouselContent className="-ml-4 py-4">
              {placeholderTestimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="p-1 h-full">
                    <TestimonialCard
                      quote={testimonial.quote}
                      author={testimonial.author}
                      title={testimonial.title}
                      company={testimonial.company}
                      imageSrc={testimonial.imageSrc}
                      companyLogoSrc={testimonial.companyLogoSrc}
                      rating={testimonial.rating}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-[-15px] sm:left-[-25px] md:left-[-50px] top-1/2 -translate-y-1/2 fill-background hidden sm:flex" />
            <CarouselNext className="absolute right-[-15px] sm:right-[-25px] md:right-[-50px] top-1/2 -translate-y-1/2 fill-background hidden sm:flex" />
          </Carousel>
        ) : (
          <p className="text-muted-foreground">No testimonials available at the moment. Check back soon!</p>
        )}

        <div className="mt-12 md:mt-16">
          <Link
            href={originalTestimonialsLink}
            className="inline-flex items-center text-lg font-medium text-foreground hover:text-brand-pink focus-visible:text-brand-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md transition-colors duration-200 group"
          >
            <>
              View All Testimonials
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </>
          </Link>
        </div>
      </div>
    </section>
  );
}