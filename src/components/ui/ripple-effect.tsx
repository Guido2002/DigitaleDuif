import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RippleProps {
  x: number;
  y: number;
  size: number;
  id: number;
}

interface RippleEffectProps {
  children: React.ReactNode;
  className?: string;
  color?: string; // Ripple color (default: white with opacity)
  duration?: number; // Animation duration in seconds
  disabled?: boolean;
}

/**
 * RippleEffect - Wraps any element to give it a ripple click effect
 * Creates an expanding circle from the click point
 */
const RippleEffect: React.FC<RippleEffectProps> = ({
  children,
  className = "",
  color = "rgba(255, 255, 255, 0.4)",
  duration = 0.6,
  disabled = false,
}) => {
  const [ripples, setRipples] = useState<RippleProps[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate ripple size to cover the entire button
    const size = Math.max(rect.width, rect.height) * 2;
    
    const newRipple: RippleProps = {
      x: x - size / 2,
      y: y - size / 2,
      size,
      id: Date.now(),
    };

    setRipples((prev) => [...prev, newRipple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, duration * 1000);
  };

  if (disabled) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onClick={handleClick}
    >
      {children}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration, ease: "easeOut" }}
            style={{
              position: "absolute",
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size,
              borderRadius: "50%",
              backgroundColor: color,
              pointerEvents: "none",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default RippleEffect;
