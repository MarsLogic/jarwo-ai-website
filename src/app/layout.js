// src/app/layout.js
import { Inter, Roboto_Mono as RobotoMono } from 'next/font/google';
import './globals.css';
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton'; // <<<--- IMPORT THE NEW COMPONENT

const fontInter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const fontRobotoMono = RobotoMono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
  weight: ['400', '500', '700'],
});

export const metadata = {
  title: 'Jarwo.ai - Unlock the Power of AI',
  description: 'Transform your business with scalable, secure, and innovative AI solutions tailored to your needs.',
};

export default function RootLayout({ children }) {
  return (
    // It's good practice to have scroll-smooth on the html tag if you want smooth scrolling for anchors and window.scrollTo
    // You already had this in your globals.css or earlier layout.js, so this is just a reminder.
    // If not, you can add className="scroll-smooth" to the <html> tag or ensure html { @apply scroll-smooth; } is in globals.css
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body 
        className={cn(
          "flex flex-col min-h-screen bg-background font-inter antialiased",
          fontInter.variable,
          fontRobotoMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange 
        >
          <Header />
          <main className="flex-grow pt-16">
            {children}
          </main>
          <Footer />
          <ScrollToTopButton /> {/* <<<--- RENDER THE SCROLL TO TOP BUTTON HERE */}
        </ThemeProvider>
      </body>
    </html>
  );
}