import React, { useState, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  angle: number;
  distance: number;
  size: number;
  delay: number;
}

interface ParticleBurstProps {
  children: React.ReactNode;
  particleCount?: number;
  color?: string;
  disabled?: boolean;
}

const ParticleBurst: React.FC<ParticleBurstProps> = ({
  children,
  particleCount = 12,
  color = "var(--primary)",
  disabled = false,
}) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const shouldReduceMotion = useReducedMotion();

  const createParticles = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled || shouldReduceMotion) return;

      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const newParticles: Particle[] = Array.from({ length: particleCount }, (_, i) => ({
        id: Date.now() + i,
        x,
        y,
        angle: (360 / particleCount) * i + Math.random() * 30 - 15,
        distance: 40 + Math.random() * 30,
        size: 4 + Math.random() * 4,
        delay: Math.random() * 0.1,
      }));

      setParticles(newParticles);

      // Clear particles after animation
      setTimeout(() => setParticles([]), 1800);
    },
    [particleCount, disabled, shouldReduceMotion]
  );

  return (
    <div className="relative inline-block" onMouseDown={createParticles}>
      {children}
      <AnimatePresence>
        {particles.map((particle) => {
          const radians = (particle.angle * Math.PI) / 180;
          const endX = Math.cos(radians) * particle.distance;
          const endY = Math.sin(radians) * particle.distance;

          return (
            <motion.span
              key={particle.id}
              className="absolute pointer-events-none rounded-full"
              style={{
                left: particle.x,
                top: particle.y,
                width: particle.size,
                height: particle.size,
                backgroundColor: color,
                boxShadow: `0 0 ${particle.size * 2}px ${color}`,
              }}
              initial={{ 
                scale: 0, 
                x: 0, 
                y: 0, 
                opacity: 1 
              }}
              animate={{ 
                scale: [0, 1.5, 1.2, 0.8], 
                x: endX, 
                y: endY, 
                opacity: [1, 1, 1, 0] 
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1.5,
                delay: particle.delay,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default ParticleBurst;
