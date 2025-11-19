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
        // New colors for extended palette
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warm: { // For secondary CTA's
          DEFAULT: "hsl(var(--warm))",
          foreground: "hsl(var(--warm-foreground))",
        },
        neutral: { // Extended grays
          50: "hsl(var(--neutral-50))",
          100: "hsl(var(--neutral-100))",
          200: "hsl(var(--neutral-200))",
          300: "hsl(var(--neutral-300))",
          400: "hsl(var(--neutral-400))",
          500: "hsl(var(--neutral-500))",
          600: "hsl(var(--neutral-600))",
          700: "hsl(var(--neutral-700))",
          800: "hsl(var(--neutral-800))",
          900: "hsl(var(--neutral-900))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "12px", // Custom for buttons
      },
      fontSize: { // Custom typography hierarchy
        'h1': ['72px', { lineHeight: '80px', fontWeight: '900', letterSpacing: '-0.02em' }], // Extra bold for hero
        'h2': ['40px', { lineHeight: '48px', fontWeight: '700', letterSpacing: '-0.02em' }], // Bold for section headers
        'h3': ['36px', { lineHeight: '44px', fontWeight: '500', letterSpacing: '-0.02em' }], // Semibold for subsections (changed to 36px, medium)
        'body-lg': ['18px', { lineHeight: '1.8', fontWeight: '400' }], // Regular for body text (line-height 1.8)
        'body-base': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'mobile-h1': ['48px', { lineHeight: '56px', fontWeight: '900', letterSpacing: '-0.02em' }], // Mobile H1
        'mobile-h3': ['36px', { lineHeight: '44px', fontWeight: '500', letterSpacing: '-0.02em' }], // Mobile H3 (Increased from 32px to 36px)
        'mobile-body': ['16px', { lineHeight: '1.7', fontWeight: '400' }], // Mobile Body
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
        "float": { // Keyframe for floating UI elements
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "25%": { transform: "translateY(-5px) translateX(5px)" },
          "50%": { transform: "translateY(0) translateX(10px)" },
          "75%": { transform: "translateY(5px) translateX(5px)" },
        },
        "rotate-y-360": { // Keyframe for 3D headset rotation
          "from": { transform: "rotateY(0deg)" },
          "to": { transform: "rotateY(360deg)" },
        },
        "particle-move": { // Keyframe for particle movement
          "0%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(10vw, 5vh) scale(1.1)" },
          "50%": { transform: "translate(0, 10vh) scale(0.9)" },
          "75%": { transform: "translate(-10vw, 5vh) scale(1.2)" },
          "100%": { transform: "translate(0, 0) scale(1)" },
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
        "float": "float 5s ease-in-out infinite alternate", // New animation
        "rotate-y-360": "rotate-y-360 30s linear infinite", // New animation
        "particle-move": "particle-move var(--animation-duration) ease-in-out infinite alternate", // New animation
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
        '.no-scrollbar': { // Utility to hide scrollbar
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
} satisfies Config;