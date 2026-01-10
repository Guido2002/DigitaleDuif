import { defineConfig } from "vite";
import dyadComponentTagger from "@dyad-sh/react-vite-component-tagger";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(() => {
  const getPackageName = (moduleId: string): string | null => {
    const parts = moduleId.split('node_modules/');
    let subpath = parts.at(-1) ?? '';

    // pnpm stores deps under: node_modules/.pnpm/<pkg>@<ver>/node_modules/<pkg>/...
    if (subpath.startsWith('.pnpm/')) {
      const nestedIndex = subpath.indexOf('/node_modules/');
      if (nestedIndex === -1) {
        subpath = subpath.slice('.pnpm/'.length);
      } else {
        subpath = subpath.slice(nestedIndex + '/node_modules/'.length);
      }
    }

    if (!subpath) return null;
    if (subpath.startsWith('@')) {
      const [scope, name] = subpath.split('/');
      if (!scope || !name) return null;
      return `${scope}/${name}`;
    }
    return subpath.split('/')[0] ?? null;
  };

  return {
    base: process.env.NODE_ENV === 'production' ? '/' : '/',
    server: {
      host: '::',
      port: 8080,
    },
    plugins: [dyadComponentTagger(), react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    optimizeDeps: {
      exclude: ['pdfjs-dist', 'react-pdf'],
      esbuildOptions: {
        supported: {
          bigint: true,
        },
      },
    },
    ssr: {
      noExternal: ['pdfjs-dist'],
    },
    build: {
      target: 'es2020',
      minify: 'esbuild',
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks(id: string) {
            if (!id.includes('node_modules')) return;

            const pkg = getPackageName(id);
            if (!pkg) return;

            // Core framework - combine React and Radix to avoid circular deps
            if (pkg === 'react' || pkg === 'react-dom' || pkg === 'scheduler' || pkg.startsWith('@radix-ui/')) return 'vendor-react';
            if (pkg === 'react-router' || pkg === 'react-router-dom') return 'vendor-router';
            if (pkg === 'lucide-react') return 'vendor-icons';
            if (pkg === 'cmdk') return 'vendor-cmdk';
            if (pkg === 'class-variance-authority' || pkg === 'clsx' || pkg === 'tailwind-merge') return 'vendor-ui-utils';

            // Data + forms
            if (pkg === '@tanstack/react-query' || pkg.startsWith('@tanstack/')) return 'vendor-query';
            if (pkg === 'react-hook-form' || pkg === '@hookform/resolvers' || pkg === 'zod') return 'vendor-forms';

            // Animations
            if (pkg === 'framer-motion') return 'framer';
            if (pkg.startsWith('@react-spring/')) return 'spring';

            // Charts (only if/when used)
            if (pkg === 'recharts' || pkg.startsWith('d3-')) return 'vendor-charts';

            // Everything else: let Rollup decide.
          },
        },
      },
    },
  };
});
