// tailwind.config.mjs

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
	  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	prefix: "",
	theme: {
	  container: {
		center: true,
		padding: "2rem",
		screens: {
		  "2xl": "1400px",
		},
	  },
	  extend: {
		fontFamily: {
		  // These use CSS variables defined in layout.js via next/font
		  inter: ['var(--font-inter)', 'sans-serif'],
		  'roboto-mono': ['var(--font-roboto-mono)', 'monospace'],
		},
		colors: {
		  // --- CORE BRAND COLORS for direct Tailwind class usage ---
		  'brand-pink': {
			DEFAULT: '#F92D77', // Main brand pink
			'500': '#F92D77',   // Explicit -500 shade
			// You could add a '600' for a slightly darker pink if needed for hovers or borders:
			// '600': '#E0286A', // Example darker pink
		  },
		  'brand-light': '#FCFCFE', // For the light button default background
  
		  // These are general text colors we planned, useful for direct application if needed
		  // though mostly they'll come from --foreground CSS variable.
		  'brand-dark-text': '#030712',   // Our chosen dark text (Tailwind gray-950)
		  'brand-light-text': '#F8FAFC', // Our chosen light text (Tailwind slate-50)
		  // --- END CORE BRAND COLORS ---
  
		  // Shadcn UI HSL placeholders (these will get their actual values from globals.css)
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  card: {
			  DEFAULT: 'hsl(var(--card))',
			  foreground: 'hsl(var(--card-foreground))'
		  },
		  popover: {
			  DEFAULT: 'hsl(var(--popover))',
			  foreground: 'hsl(var(--popover-foreground))'
		  },
		  primary: { // This will be PINK via --primary in globals.css
			  DEFAULT: 'hsl(var(--primary))',
			  foreground: 'hsl(var(--primary-foreground))'
		  },
		  secondary: { // Neutral grays via --secondary in globals.css
			  DEFAULT: 'hsl(var(--secondary))',
			  foreground: 'hsl(var(--secondary-foreground))'
		  },
		  muted: { // Neutral grays via --muted in globals.css
			  DEFAULT: 'hsl(var(--muted))',
			  foreground: 'hsl(var(--muted-foreground))'
		  },
		  accent: { // This will be PINK via --accent in globals.css
			  DEFAULT: 'hsl(var(--accent))',
			  foreground: 'hsl(var(--accent-foreground))'
		  },
		  destructive: {
			  DEFAULT: 'hsl(var(--destructive))',
			  foreground: 'hsl(var(--destructive-foreground))'
		  },
		  border: 'hsl(var(--border))',
		  input: 'hsl(var(--input))',
		  ring: 'hsl(var(--ring))', // This will be PINK via --ring in globals.css
		  chart: { // Keep your existing chart colors if they are used
			  '1': 'hsl(var(--chart-1))',
			  '2': 'hsl(var(--chart-2))',
			  '3': 'hsl(var(--chart-3))',
			  '4': 'hsl(var(--chart-4))',
			  '5': 'hsl(var(--chart-5))'
		  }
		},
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)'
		},
		keyframes: {
		  'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
		  'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } }
		},
		animation: {
		  'accordion-down': 'accordion-down 0.2s ease-out',
		  'accordion-up': 'accordion-up 0.2s ease-out'
		}
	  }
	},
	plugins: [require("tailwindcss-animate")],
  };