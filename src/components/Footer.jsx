// src/components/ui/Footer.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, ShieldCheck, MapPin
} from 'lucide-react';

// --- DATA DEFINITIONS ---
const footerLinks = {
  solutions: [
    { label: "Self-Hosted AI", href: "/solutions/self-hosted-ai" },
    { label: "Ready-to-Use Products", href: "/solutions/ready-to-use" },
    { label: "Custom Development", href: "/solutions/custom-ai-dev" },
    { label: "System Integration", href: "/solutions/system-integration" },
  ],
  resources: [
    { label: "Our Insights Hub", href: "/resources" },
    { label: "Case Studies", href: "/success-stories" },
    { label: "Client Testimonials", href: "/success-stories/testimonials" },
    { label: "FAQs", href: "/resources/faqs" },
  ],
  company: [
    { label: "About Us", href: "/about-us" },
    { label: "Careers", href: "/about-us/careers" },
    { label: "Contact Us", href: "/contact" },
    { label: "Demo", href: "/demo" },
  ]
};

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

const socialLinks = [
  { name: 'Facebook', href: 'https://facebook.com/jarwoai', icon: Facebook },
  { name: 'Twitter', href: 'https://twitter.com/jarwoai', icon: Twitter },
  { name: 'Instagram', href: 'https://instagram.com/jarwoai', icon: Instagram },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/jarwoai', icon: Linkedin },
  { name: 'YouTube', href: 'https://youtube.com/jarwoai', icon: Youtube },
];

// Basic email validation (can be expanded)
const validateFooterEmail = (email) => {
  if (!email) return "Email address is required.";
  if (!/\S+@\S+\.\S+/.test(email)) return "Email address is invalid.";
  return "";
};


export default function Footer({ className }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterError, setNewsletterError] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState('');
  const [fakeCaptchaCheckedFooter, setFakeCaptchaCheckedFooter] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setNewsletterError('');
    setNewsletterSuccess('');

    const emailError = validateFooterEmail(newsletterEmail);
    if (emailError) {
      setNewsletterError(emailError);
      return;
    }

    if (!fakeCaptchaCheckedFooter) {
      setNewsletterError("Please complete the CAPTCHA.");
      return;
    }

    console.log("Newsletter submitted:", newsletterEmail);
    setNewsletterSuccess("Thank you for subscribing!");
    setNewsletterEmail('');
    setFakeCaptchaCheckedFooter(false);
  };

  return (
    <footer className={cn(
      "bg-background border-t text-foreground",
      className
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION 1: Brand Identity & Newsletter */}
        <div className="py-12 grid grid-cols-1 lg:grid-cols-5 gap-x-8 gap-y-12 border-b border-border">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
                <Image
                    src="/images/logo-jarwo-pink.png"
                    alt="Jarwo.ai Logo"
                    width={100}
                    height={38}
                    className="h-8 sm:h-9 w-auto"
                />
            </Link>
            <p className="text-sm text-muted-foreground mb-3">
              Empowering businesses with intelligent AI solutions. Jarwo.ai delivers cutting-edge technology to optimize your workflows and drive innovation.
            </p>
            <div className="space-y-2 text-sm">
                <div className="flex items-start text-muted-foreground">
                    <a
                      href="https://maps.app.goo.gl/gFDyFwcFrDuCjSFw7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start hover:text-brand-pink group"
                    >
                      <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-brand-pink group-hover:text-brand-pink" />
                      <span>AIA Central Jl. Jend. Sudirman No.Kav. 48A, Karet Semanggi, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12930</span>
                    </a>
                </div>
                <div className="flex items-center text-muted-foreground">
                    <a href="tel:+6281234567890" className="flex items-center hover:text-brand-pink group">
                      <Phone className="h-4 w-4 mr-2 text-brand-pink group-hover:text-brand-pink" />
                      <span>(+62) 81234567890</span>
                    </a>
                </div>
                <div className="flex items-center text-muted-foreground">
                    <a href="mailto:businessinquiries@jarwo.ai" className="flex items-center hover:text-brand-pink group">
                      <Mail className="h-4 w-4 mr-2 text-brand-pink group-hover:text-brand-pink" />
                      <span>businessinquiries@jarwo.ai</span>
                    </a>
                </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-base font-semibold text-foreground mb-1">Stay Ahead with AI Insights</h3>
            <p className="text-sm text-muted-foreground mb-4">Subscribe to our newsletter for the latest updates, articles, and special offers.</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div>
                <Label htmlFor="newsletter-email-footer" className="sr-only">Email address</Label>
                <Input
                  type="email"
                  id="newsletter-email-footer"
                  name="newsletter-email-footer"
                  placeholder="Enter your business email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full"
                  aria-describedby="newsletter-error-footer newsletter-success-footer"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="fake-captcha-footer"
                  checked={fakeCaptchaCheckedFooter}
                  onCheckedChange={setFakeCaptchaCheckedFooter}
                  aria-labelledby="fake-captcha-label-footer"
                />
                <Label htmlFor="fake-captcha-footer" id="fake-captcha-label-footer" className="text-sm font-medium leading-none text-muted-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center">
                  <ShieldCheck className="h-4 w-4 mr-1.5 text-muted-foreground" /> I am not a robot
                </Label>
              </div>
              {newsletterError && <p id="newsletter-error-footer" className="text-sm text-destructive">{newsletterError}</p>}
              {newsletterSuccess && <p id="newsletter-success-footer" className="text-sm text-green-600 dark:text-green-500">{newsletterSuccess}</p>}
              <Button type="submit" className="w-full sm:w-auto bg-brand-pink hover:bg-brand-pink/90 text-brand-light-text">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* SECTION 2: Site Navigation Links */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 border-b border-border">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Solutions</h3>
            <ul role="list" className="mt-4 space-y-2">
              {footerLinks.solutions.map(link => (
                <li key={link.label}>
                  <Link
                    href={link.href}
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
                    href={link.href}
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
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-brand-pink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SECTION 3: Legal & Social Presence */}
        <div className="py-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {socialLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-brand-pink"
                aria-label={item.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <item.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
          <div className="mt-8 md:mt-0 md:order-1 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            <span className="text-muted-foreground">© {new Date().getFullYear()} Jarwo.ai. All rights reserved.</span>
            {legalLinks.map(link => (
              <Link
                key={link.label}
                href={link.href}
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