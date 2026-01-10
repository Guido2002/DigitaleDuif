import React, { memo } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { useReducedMotion } from "framer-motion";

interface FadeInWhenVisibleProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = memo(function FadeInWhenVisible({
  children,
  delay = 0,
  duration = 250,
  className,
}) {
  const shouldReduceMotion = useReducedMotion();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Skip animations when reduced motion is preferred
  const yOffset = shouldReduceMotion ? 0 : 16;
  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    y: inView ? 0 : yOffset,
    delay: shouldReduceMotion ? 0 : delay * 1000,
    config: { tension: 300, friction: 30, duration: shouldReduceMotion ? 0 : duration },
    immediate: shouldReduceMotion,
  });

  return (
    <animated.div
      ref={ref}
      className={className}
      style={{
        opacity: springProps.opacity,
        transform: springProps.y.to(y => `translate3d(0, ${y}px, 0)`),
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </animated.div>
  );
});

export default FadeInWhenVisible;