// src/components/ImpactStatsSection.jsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  { value: 500, suffix: '+', label: 'Businesses Empowered', countUpEnd: 500, duration: 2 },
  { value: 99, suffix: '%', label: 'System Uptime', countUpEnd: 99, duration: 2 },
  { value: 10, prefix: "", suffix: 'M+', label: 'AI Predictions Processed', countUpEnd: 10, duration: 2.5, decimals: 0 },
  { value: 200, suffix: '%', label: 'Efficiency Increase Avg.', countUpEnd: 200, duration: 2.5 },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.5,
    },
  }),
};

export function ImpactStatsSection() {
  const { ref, inView } = useInView({
    // triggerOnce: true, // REMOVE THIS LINE or set to false
    threshold: 0.2,    // Trigger when 20% of the section is visible
                       // (Adjust threshold as needed for when you want the animation to start)
  });

  return (
    <section
      ref={ref} // Attach ref to the section
      className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-foreground py-16 md:py-24 lg:py-32"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          // Animate title based on inView. It will fade out when out of view and fade in again.
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }} // Delay ensures it animates after section is in view
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-inter text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Our <span className="text-brand-pink">Impact</span>
          </h2>
          <p className="mt-4 font-inter text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            We're proud of the tangible results our AI solutions deliver, helping businesses thrive and innovate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              // Animate cards based on inView. They will animate out and in.
              initial="hidden" // Always start hidden when initially rendered or re-entering
              animate={inView ? "visible" : "hidden"}
            >
              <Card className="text-center bg-card text-card-foreground shadow-lg h-full flex flex-col justify-center py-6 sm:py-8 border border-border hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pt-0">
                  <CardTitle className="font-roboto-mono text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-pink">
                    {stat.prefix}
                    {/* Conditionally render CountUp to ensure it re-mounts and re-animates */}
                    {inView ? (
                      <CountUp
                        start={0} // Always start from 0
                        end={stat.countUpEnd !== undefined ? stat.countUpEnd : stat.value}
                        duration={stat.duration !== undefined ? stat.duration : 2}
                        separator=","
                        decimals={stat.decimals !== undefined ? stat.decimals : 0}
                        // Delay slightly for a staggered effect upon re-entering view
                        delay={0.2 + (index * 0.1)}
                      />
                    ) : (
                      // When not in view, show '0' to indicate it will reset
                      '0'
                    )}
                    {stat.suffix}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-0">
                  <p className="font-inter text-sm sm:text-base text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}