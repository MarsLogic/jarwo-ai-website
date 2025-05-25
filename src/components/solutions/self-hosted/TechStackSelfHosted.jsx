// src/components/solutions/self-hosted/TechStackSelfHosted.jsx
"use client";
import { motion } from "framer-motion";
import { Workflow, Server, BotMessageSquare, Brain, Cable, CloudCog } from "lucide-react";

const techStackItems = [
  {
    icon: Workflow,
    name: "Workflow Automation",
    description: "Visually design, build, and automate complex business processes and data workflows, fully hosted within your environment for maximum control.",
  },
  {
    icon: Server,
    name: "Application Deployment",
    description: "Simplify the deployment and management of your AI applications. We can help you set up PaaS-like experiences on your own servers.",
  },
  {
    icon: BotMessageSquare,
    name: "Conversational AI",
    description: "Build and deploy intelligent, context-aware chatbots for internal or external use, ensuring all conversation data remains private.",
  },
  {
    icon: Brain,
    name: "Private Large Language Models",
    description: "Leverage the power of open-source LLMs (e.g., Llama, Mistral) or fine-tune models on your proprietary data, all hosted securely by you.",
  },
  {
    icon: Cable,
    name: "API Development & Integration",
    description: "Develop custom APIs to seamlessly connect your self-hosted AI solutions with your existing enterprise systems, databases, and third-party services.",
  },
  {
    icon: CloudCog,
    name: "Flexible Infrastructure Options",
    description: "Deploy on your existing on-premise servers, private cloud, or opt for Jarwo.ai to manage the dedicated infrastructure for you as a service.",
  },
];

export function TechStackSelfHosted() {
  return (
    <motion.section
      id="tech-stack-self-hosted" // For anchor linking
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      className="py-16 md:py-24 lg:py-32 bg-background text-foreground"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl font-inter">
            Our Flexible <span className="text-brand-pink">Self-Hosted Technology Stack</span>
          </h2>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            We leverage a powerful and adaptable stack to build your private AI ecosystem, ensuring control, security, and future-readiness.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStackItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-card p-6 rounded-lg shadow-lg border border-border 
                         flex flex-col items-center text-center 
                         hover:shadow-xl 
                         dark:hover:shadow-brand-pink/20 
                         transition-shadow duration-300"
            >
              <div className="p-3 bg-brand-pink/10 rounded-full mb-4 inline-block">
                <item.icon className="h-8 w-8 text-brand-pink" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 font-inter">{item.name}</h3>
              <p className="text-sm text-muted-foreground font-inter flex-grow">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}