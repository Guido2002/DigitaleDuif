# DigitaleDuif Project Instructions

## Tech Stack
- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS + shadcn/ui (Radix primitives)
- Framer Motion (animations)
- React Spring (scroll animations)
- React Router DOM (routing with basename for GitHub Pages)

## GitHub Pages Deployment

### Asset Path Handling
All public assets (images, videos in `/public` folder) must use `getAssetPath()` utility:
```tsx
import { getAssetPath } from "@/utils/assets";

// Correct:
<img src={getAssetPath("/media/hero.jpg")} />
videoUrl: getAssetPath("/media/projects/demo.webm")

// Wrong:
<img src="/media/hero.jpg" /> // Will break on GitHub Pages
```

### Vite Configuration
- Base path: `/DigitaleDuif/` in production, `/` in development
- Automatic via `import.meta.env.BASE_URL`
- BrowserRouter uses `basename={import.meta.env.BASE_URL}` for proper routing

### Deployment Commands
```bash
pnpm build        # Build for production
pnpm run deploy   # Deploy to gh-pages branch
```

### Assets: Bundled vs Public
- **Bundled (src/assets/)**: Imported in components, optimized by Vite
  ```tsx
  import logo from "../assets/logo.png"; // ✓ No getAssetPath needed
  ```
- **Public (public/)**: Referenced by path, needs getAssetPath()
  ```tsx
  src={getAssetPath("/media/hero.jpg")} // ✓ Required for GitHub Pages
  ```

## Performance Optimizations Applied

### Code Splitting
- **Pages**: Lazy loaded via `React.lazy()` in `App.tsx`
- **Sections**: Below-fold sections lazy loaded in `Index.tsx`
- **Vite Chunks**: Manual chunks for `vendor`, `ui`, `framer`, `spring`

### Image Optimization
- `loading="lazy"` for below-fold images
- Explicit `width` and `height` attributes to prevent CLS
- `fetchPriority="high"` for hero images
- All images optimized with proper dimensions in:
  - GuidoIntroSection
  - CallToActionSection
  - TestimonialCard
  - VrHeadsetIllustration
  - ProjectCard (with shimmer loading effect)

### Font Loading
- Google Fonts with `display=swap`
- Async loading with print/onload pattern
- Preconnect to fonts.googleapis.com and fonts.gstatic.com

### Animation Performance
- `useReducedMotion` hook respected in animated components
- ParticlesBackground disabled on mobile (`useIsMobile`)
- Video autoplay disabled on mobile devices
- Scroll handlers use `requestAnimationFrame` throttling
- `will-change: transform` on:
  - Navbar (sticky positioning)
  - ScrollProgressBar
  - ParticlesBackground container
  - ParticlesBackground particles (transform, opacity)
  - OfferingsSection cards
  - FeaturedProjectsSection carousel
  - ProjectCard motion div

### CSS Performance
- `content-visibility: auto` for lazy sections (`.section-lazy`)
- `contain-intrinsic-size` for layout stability
- `@media (prefers-reduced-motion: reduce)` support
- Shimmer loading animation for images

### Mobile Optimizations
- Videos don't autoplay on mobile
- Canvas animations skipped on mobile
- Scroll listeners have passive: true

### Scroll Optimization
- All scroll handlers use `requestAnimationFrame` throttling:
  - BackToTopButton (already optimized)
  - FloatingCTA (already optimized)
  - ScrollProgressBar (uses framer-motion's optimized useScroll)

### Project Preview Video Behavior
- All devices (desktop + tablet/mobile): play preview video when the card/hero is ≥20% in viewport; pause when out of view.
- Prefer observing the card/container (not the `<video>` element) for in-view logic; this avoids Chrome edge cases where the first card can fail to pause.

## Component Patterns

### Category UX mapping
- The “WAT MAKEN WE?” 3-option chooser is implemented in `src/components/CategorySelectionModal.tsx`.
- `src/components/WhatWeDoSection.tsx` currently exists but is empty (likely unused).

### Memoization
Components wrapped with `React.memo`:
- `Footer`
- `SectionHeader`
- `FadeInWhenVisible`
- `ProjectCard`
- All page components

### Animation Best Practices
Always use `useReducedMotion` from framer-motion:
```tsx
const shouldReduceMotion = useReducedMotion();
// Skip animations when true
```

### Scroll Handlers
Use rAF throttling pattern:
```tsx
const rafRef = useRef<number | null>(null);
const handleScroll = useCallback(() => {
  if (rafRef.current !== null) return;
  rafRef.current = globalThis.requestAnimationFrame(() => {
    // scroll logic
    rafRef.current = null;
  });
}, []);
```

## Build Output
Target: ES2020 for modern browser support
CSS: Code-split enabled
Minification: esbuild (fast)
