// src/components/solutions/self-hosted/CtaSelfHosted.jsx
"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquareQuote } from "lucide-react";

export function CtaSelfHosted() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-brand-pink/90 to-rose-600 dark:from-brand-pink/80 dark:to-rose-700 text-brand-light-text"
    >
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <MessageSquareQuote className="h-16 w-16 text-brand-light-text/80 mx-auto mb-6" strokeWidth={1.5}/>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 font-inter">
            Ready to Build Your Secure, Self-Hosted AI?
          </h2>
          <p className="text-lg sm:text-xl text-brand-light-text/90 max-w-2xl mx-auto mb-10 font-inter">
            Take the first step towards data sovereignty and customized AI power. Schedule a free, no-obligation consultation with our experts to discuss your project requirements and explore how Jarwo.ai can help.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-brand-light text-brand-pink hover:bg-white/90 font-bold text-lg px-8 py-6 shadow-xl transition-transform duration-200 hover:scale-105 w-full sm:w-auto"
          >
            <Link href="/contact?subject=Self-Hosted%20AI%20Consultation&source=selfhosted-cta">
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          {/* Optional Second CTA - can be enabled later */}
          {/*
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-brand-light text-brand-light hover:bg-brand-light/10 text-lg font-semibold px-8 py-6 shadow-md w-full sm:w-auto"
          >
            <Link href="/solutions/self-hosted-ai/getting-started"> {/* Create this page later */}
          {/*
              Learn Our Process
            </Link>
          </Button>
          */}
        </motion.div>
      </div>
    </motion.section>
  );
}