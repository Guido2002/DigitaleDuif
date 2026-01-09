# DigitaleDuif Project Instructions

## Tech Stack
- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS + shadcn/ui (Radix primitives)
- Framer Motion (animations)
- React Spring (scroll animations)
- React Router DOM (routing)

## Performance Optimizations Applied

### Code Splitting
- **Pages**: Lazy loaded via `React.lazy()` in `App.tsx`
- **Sections**: Below-fold sections lazy loaded in `Index.tsx`
- **Vite Chunks**: Manual chunks for `vendor`, `ui`, `framer`, `spring`

### Image Optimization
- `loading="lazy"` for below-fold images
- Explicit `width` and `height` attributes to prevent CLS
- `fetchPriority="high"` for hero images

### Font Loading
- Google Fonts with `display=swap`
- Async loading with print/onload pattern
- Preconnect to fonts.googleapis.com and fonts.gstatic.com

### Animation Performance
- `useReducedMotion` hook respected in animated components
- ParticlesBackground disabled on mobile (`useIsMobile`)
- Video autoplay disabled on mobile devices
- Scroll handlers use `requestAnimationFrame` throttling

### CSS Performance
- `content-visibility: auto` for lazy sections (`.section-lazy`)
- `contain-intrinsic-size` for layout stability
- `@media (prefers-reduced-motion: reduce)` support

### Mobile Optimizations
- Videos don't autoplay on mobile
- Canvas animations skipped on mobile
- Scroll listeners have passive: true

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
