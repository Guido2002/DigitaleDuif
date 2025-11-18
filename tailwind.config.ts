import type { Config } from "tailwindcss";

export default {
  // Removed darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
        sans: ["Inter", "Helvetica Neue", "Arial", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "hero-gradient-start": "hsl(var(--hero-gradient-start))", // New
        "hero-gradient-mid": "hsl(var(--hero-gradient-mid))",     // New
        "hero-gradient-end": "hsl(var(--hero-gradient-end))",
        "light-accent": "hsl(var(--light-accent))",
        "deep-blue": "hsl(var(--deep-blue))", // New
        "electric-blue": "hsl(var(--electric-blue))", // New
        "cyan-accent": "hsl(var(--cyan-accent))", // New
        "purple-accent": "hsl(var(--purple-accent))", // New
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontSize: { // Custom typography hierarchy
        'h1': ['56px', { lineHeight: '64px', fontWeight: '800' }], // Extra bold for hero
        'h2': ['40px', { lineHeight: '48px', fontWeight: '700' }], // Bold for section headers
        'h3': ['28px', { lineHeight: '36px', fontWeight: '600' }], // Semibold for subsections
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }], // Regular for body text
        'body-base': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '20px', fontWeight: '400' }],
      },
      textShadow: { // Custom text shadow utility
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        md: '0 4px 6px var(--tw-shadow-color)',
        lg: '0 10px 15px var(--tw-shadow-color)',
        xl: '0 20px 25px var(--tw-shadow-color)',
        'hero-title': '0px 4px 20px rgba(37, 99, 235, 0.4)',
        'hero-body': '0px 1px 2px rgba(0,0,0,0.1)',
        'scroll-indicator': '0px 0px 10px rgba(255, 255, 255, 0.5)',
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "gradient-move": {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
        "pulse-fade": {
          "0%, 100%": { transform: "scale(0.8)", opacity: "0.2" },
          "50%": { transform: "scale(1.1)", opacity: "0.4" },
        },
        "gradient-text": { // New keyframe for animated text gradient
          "0%": { "background-position": "0% 50%" },
          "100%": { "background-position": "100% 50%" },
        },
        "shimmer": { // New keyframe for button shimmer effect
          "0%": { "background-position": "-200% 0" },
          "100%": { "background-position": "200% 0" },
        },
        "bounce-y-slow": { // New keyframe for slow vertical bounce
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gradient-move": "gradient-move 15s ease infinite",
        "pulse-fade": "pulse-fade 4s ease-in-out infinite",
        "gradient-text": "gradient-text 5s ease infinite alternate", // New animation
        "shimmer": "shimmer 1.5s infinite linear", // New animation
        "bounce-y-slow": "bounce-y-slow 2s infinite cubic-bezier(0.4, 0, 0.6, 1)", // New animation
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities, theme }: { addUtilities: Function, theme: Function }) {
      const newUtilities = {
        '.text-shadow-hero-title': {
          'text-shadow': theme('textShadow.hero-title'),
        },
        '.text-shadow-hero-body': {
          'text-shadow': theme('textShadow.hero-body'),
        },
        '.text-shadow-scroll-indicator': {
          'text-shadow': theme('textShadow.scroll-indicator'),
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
} satisfies Config;