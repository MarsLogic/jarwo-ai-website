// src/components/Footer.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, ShieldCheck
} from 'lucide-react';

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'YouTube', href: '#', icon: Youtube },
];

const validateFooterEmail = (email) => {
  if (!email) return "Email is required.";
  const atIndex = email.lastIndexOf('@');
  if (atIndex === -1) return "Invalid email format (missing @).";
  const localPart = email.substring(0, atIndex);
  const domainAndTld = email.substring(atIndex + 1);
  if (localPart.length < 1) return "Email username (before @) must be at least 1 character.";
  if (localPart.length > 50) return "Email username (before @) cannot exceed 50 characters.";
  if (!/^[a-zA-Z0-9]+$/.test(localPart)) return "Email username (before @) can only contain letters and numbers.";
  const dotIndex = domainAndTld.lastIndexOf('.');
  if (dotIndex === -1 || dotIndex === 0 || dotIndex === domainAndTld.length - 1) {
    return "Invalid email domain format (e.g., example.com).";
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) return "Invalid email address format.";
  return true;
};

export default function Footer({ className }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterError, setNewsletterError] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState('');
  const [fakeCaptchaCheckedFooter, setFakeCaptchaCheckedFooter] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setNewsletterError('');
    setNewsletterSuccess('');
    const validationResult = validateFooterEmail(newsletterEmail);
    if (validationResult !== true) {
      setNewsletterError(validationResult);
      return;
    }
    console.log('Newsletter email submitted:', newsletterEmail);
    setNewsletterSuccess('Thank you for subscribing!');
    setNewsletterEmail('');
    setFakeCaptchaCheckedFooter(false);
    setTimeout(() => setNewsletterSuccess(''), 3000);
  };

  const footerLinks = {
    solutions: [
      { label: "Self-Hosted AI", href: "/solutions/self-hosted" },
      { label: "Ready-to-Use", href: "/solutions/ready-to-use" },
      { label: "Custom AI Dev", href: "/solutions/custom-ai-dev" },
      { label: "System Integration", href: "/solutions/system-integration" },
    ],
    resources: [
      { label: "Insights", href: "/resources" },
      { label: "Success Stories", href: "/success-stories" },
      { label: "FAQs", href: "/resources/faqs" },
    ],
    company: [
      { label: "About Us", href: "/about-us" },
      { label: "Careers", href: "/about-us/careers" },
      { label: "Contact Us", href: "/contact" },
    ],
  };

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ];

  return (
    <footer className={cn(
      "bg-background border-t text-foreground",
      className
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 lg:grid-cols-5 gap-x-8 gap-y-12 border-b border-border">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-foreground">Jarwo.ai</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Empowering the Future with Artificial Intelligence. Jarwo.ai is a global leader in AI solutions, helping businesses innovate with secure, scalable, and tailored technologies.
            </p>
            <div className="mt-6">
              <h3 className="text-base font-semibold text-foreground">
                Jarwo.ai Headquarters
              </h3>
              <address className="mt-2 text-sm text-muted-foreground not-italic space-y-1">
                <p>Level 42, Jarwo.ai Tower</p>
                <p>Jl. Jend. Sudirman Kav. 10-11</p>
                <p>Karet Tengsin, Tanah Abang</p>
                <p>Central Jakarta, 10220, Indonesia</p>
                <p className="mt-2 flex items-center">
                  <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                  <a href="tel:+6281234567890" className="hover:text-brand-pink">(+62) 812-3456-7890</a>
                </p>
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                  <a href="mailto:info@jarwo.ai" className="hover:text-brand-pink">info@jarwo.ai</a>
                </p>
              </address>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Stay Ahead with AI Insights</h3>
            <form onSubmit={handleNewsletterSubmit} className="mt-4 space-y-4">
              <div>
                <Label htmlFor="footer-email-address" className="sr-only">Email address</Label>
                <div className="flex space-x-3">
                  <Input
                    type="email"
                    name="footer-email-address"
                    id="footer-email-address"
                    autoComplete="email"
                    value={newsletterEmail}
                    onChange={(e) => {
                      setNewsletterEmail(e.target.value);
                      if (newsletterError) setNewsletterError('');
                    }}
                    className="w-full flex-grow"
                    placeholder="Enter your email"
                  />
                  <Button type="submit" className="flex-shrink-0">
                    Subscribe
                  </Button>
                </div>
                {newsletterError && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{newsletterError}</p>}
                {newsletterSuccess && <p className="mt-1 text-xs text-green-600 dark:text-green-500">{newsletterSuccess}</p>}
              </div>
              <div className="flex items-center space-x-3 p-2 border border-input rounded-md bg-muted/30 dark:bg-muted/20 text-xs">
                <Checkbox
                  id="fake-captcha-footer"
                  checked={fakeCaptchaCheckedFooter}
                  onCheckedChange={setFakeCaptchaCheckedFooter}
                  aria-label="I'm not a robot"
                  className="h-4 w-4"
                />
                <Label htmlFor="fake-captcha-footer" className="text-xs font-medium text-muted-foreground select-none cursor-pointer">
                  I'm not a robot
                </Label>
                <div className="ml-auto flex flex-col items-center text-muted-foreground/60">
                  <ShieldCheck className="h-5 w-5 text-green-600 dark:text-green-500" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Get the latest articles on all things AI delivered straight to your inbox.
              </p>
            </form>
          </div>
        </div>

        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 border-b border-border">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Solutions</h3>
            <ul role="list" className="mt-4 space-y-2">
              {footerLinks.solutions.map(link => (
                <li key={link.label}>
                  <Link
                    href="#"
                    data-original-href={link.href}
                    className="text-sm text-muted-foreground hover:text-brand-pink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Resources</h3>
            <ul role="list" className="mt-4 space-y-2">
              {footerLinks.resources.map(link => (
                <li key={link.label}>
                  <Link
                    href="#"
                    data-original-href={link.href}
                    className="text-sm text-muted-foreground hover:text-brand-pink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Company</h3>
            <ul role="list" className="mt-4 space-y-2">
              {footerLinks.company.map(link => (
                <li key={link.label}>
                  <Link
                    href="#"
                    data-original-href={link.href}
                    className="text-sm text-muted-foreground hover:text-brand-pink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="py-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {socialLinks.map((item) => (
              <Link key={item.name} href={item.href} passHref legacyBehavior>
                <a className="text-muted-foreground hover:text-brand-pink" aria-label={item.name} target="_blank" rel="noopener noreferrer">
                  <item.icon className="h-5 w-5" />
                </a>
              </Link>
            ))}
          </div>
          <div className="mt-8 md:mt-0 md:order-1 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            <span className="text-muted-foreground">© {new Date().getFullYear()} Jarwo.ai. All rights reserved.</span>
            {/* MODIFIED Legal links below */}
            {legalLinks.map(link => (
              <Link
                key={link.label}
                href="#"
                data-original-href={link.href}
                className="text-muted-foreground hover:text-brand-pink"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}