// src/components/solutions/self-hosted/KeyAdvantagesSelfHosted.jsx
"use client";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LockKeyhole, Settings, Network, Baseline, ShieldCheck, Blocks, Combine, Coins } from "lucide-react"; // Added more icons

const advantages = [
  {
    icon: ShieldCheck,
    title: "Full Data Sovereignty & Security",
    description: "Keep sensitive data entirely within your infrastructure. Meet stringent compliance (HIPAA, GDPR, etc.) and control access with robust, customizable security layers.",
  },
  {
    icon: Blocks,
    title: "Unmatched Customization & Control",
    description: "Tailor AI models (including custom LLMs), workflows (Activepieces), and chatbots to your exact business logic. Deploy on your terms using flexible infrastructure like CapRover.",
  },
  {
    icon: Combine,
    title: "Seamless Integration & Scalability",
    description: "Integrate with existing enterprise systems via custom APIs. Our self-hosted solutions are architected to scale from initial pilot projects to full enterprise-wide adoption.",
  },
  {
    icon: Coins,
    title: "Transparent & Predictable Costs",
    description: "Benefit from clear one-time setup costs, defined project-based development fees, and flexible on-demand maintenance. Avoid vendor lock-in and unpredictable cloud AI expenses.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function KeyAdvantagesSelfHosted() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      className="py-16 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900/30 text-foreground"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl font-inter">
            Unlock Key Advantages with <span className="text-brand-pink">Self-Hosted AI</span>
          </h2>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            Discover the tangible benefits of deploying AI on your own terms, backed by Jarwo.ai's expertise.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full flex flex-col text-left bg-card 
                               hover:shadow-xl 
                               dark:hover:shadow-brand-pink/20 
                               transition-shadow duration-300">
                <CardHeader>
                  <div className="mb-4">
                    <advantage.icon className="h-10 w-10 text-brand-pink" strokeWidth={1.5} />
                  </div>
                  <CardTitle className="font-inter text-xl font-semibold text-foreground">
                    {advantage.title}
                  </CardTitle>
                </CardHeader>
                <CardDescription className="px-6 pb-6 font-inter text-muted-foreground flex-grow">
                  {advantage.description}
                </CardDescription>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}