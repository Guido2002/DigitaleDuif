import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  type: "circle" | "square" | "triangle";
  color: string;
  tempTranslateX?: number; // Added for mouse interaction
  tempTranslateY?: number; // Added for mouse interaction
  pushedAt?: number; // Added for mouse interaction reset
}

interface ParticlesBackgroundProps {
  particleCount?: number;
  className?: string;
}

function applyMousePush(
  prevParticles: Particle[],
  rect: DOMRect,
  mouseX: number,
  mouseY: number,
): Particle[] {
  let changed = false;
  const next = prevParticles.map((p) => {
    const particleX = (p.x / 100) * rect.width;
    const particleY = (p.y / 100) * rect.height;

    const dx = mouseX - particleX;
    const dy = mouseY - particleY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    const maxPushDistance = 200;
    const pushForce = 0.05;

    if (distance < maxPushDistance) {
      const forceMagnitude = (1 - distance / maxPushDistance) * pushForce;
      const angle = Math.atan2(dy, dx);
      changed = true;
      return {
        ...p,
        tempTranslateX: -Math.cos(angle) * forceMagnitude * 50,
        tempTranslateY: -Math.sin(angle) * forceMagnitude * 50,
        pushedAt: Date.now(),
      };
    }

    return p;
  });

  return changed ? next : prevParticles;
}

function resetExpiredPush(prevParticles: Particle[], now: number): Particle[] {
  let changed = false;
  const next = prevParticles.map((p) => {
    if (p.pushedAt && now - p.pushedAt > 800) {
      if ((p.tempTranslateX ?? 0) !== 0 || (p.tempTranslateY ?? 0) !== 0) {
        changed = true;
      }
      return { ...p, tempTranslateX: 0, tempTranslateY: 0, pushedAt: undefined };
    }
    return p;
  });

  return changed ? next : prevParticles;
}

const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({
  particleCount = 50,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const rafRef = useRef<number | null>(null);
  const lastMouseRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = Array.from({ length: particleCount }).map((_, i) => {
        const size = Math.random() * 10 + 5; // 5-15px
        const x = Math.random() * 100; // 0-100vw
        const y = Math.random() * 100; // 0-100vh
        const delay = Math.random() * 5; // 0-5s delay
        const duration = Math.random() * 10 + 10; // 10-20s duration
        const type: Particle['type'] =
          Math.random() < 0.33
            ? "circle"
            : Math.random() < 0.66
            ? "square"
            : "triangle";
        const colors = [
          "bg-white/20",
          "bg-cyan-accent/20",
          "bg-primary/20",
          "bg-purple-accent/20",
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];

        return { id: i, x, y, size, delay, duration, type, color };
      });
      setParticles(newParticles);
    };

    generateParticles();
  }, [particleCount]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    lastMouseRef.current = { x: e.clientX, y: e.clientY };

    if (rafRef.current !== null) return;
    rafRef.current = globalThis.requestAnimationFrame(() => {
      rafRef.current = null;
      if (!containerRef.current || !lastMouseRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const mouseX = lastMouseRef.current.x - rect.left;
      const mouseY = lastMouseRef.current.y - rect.top;

      setParticles((prevParticles) => applyMousePush(prevParticles, rect, mouseX, mouseY));
    });
  };

  // Reset temporary transforms after a short delay (only when needed)
  useEffect(() => {
    const hasPushedParticles = particles.some((p) => p.pushedAt);
    if (!hasPushedParticles) return;

    const interval = globalThis.setInterval(() => {
      const now = Date.now();
      setParticles((prevParticles) => resetExpiredPush(prevParticles, now));
    }, 200);

    return () => globalThis.clearInterval(interval);
  }, [particles]);

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) {
        globalThis.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, []);


  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 overflow-hidden", className)}
      onMouseMove={handleMouseMove}
      style={{ willChange: "transform" }}
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={cn(
            "absolute rounded-full", // Default to circle, adjust for other types
            p.color,
            p.type === "square" && "rounded-md",
            p.type === "triangle" && "clip-path-polygon-[50%_0%,_0%_100%,_100%_100%]", // Tailwind doesn't have triangle, use clip-path
          )}
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}vw`,
            top: `${p.y}vh`,
            filter: `blur(${p.size / 10}px)`, // Subtle blur for glow effect
            boxShadow: `0 0 ${p.size / 4}px rgba(255,255,255,0.4)`, // Subtle white glow
            willChange: "transform, opacity",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.2, 0.3, 0.2, 0],
            scale: [0, 1, 0.8, 1.2, 1],
            x: p.tempTranslateX || 0,
            y: p.tempTranslateY || 0,
          }}
          transition={{
            opacity: { duration: p.duration / 2, repeat: Infinity, ease: "easeInOut", delay: p.delay },
            scale: { duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay },
            x: { type: "spring", stiffness: 100, damping: 10, duration: 0.8 }, // Smooth return for mouse push
            y: { type: "spring", stiffness: 100, damping: 10, duration: 0.8 },
          }}
        />
      ))}
    </div>
  );
};

export default ParticlesBackground;