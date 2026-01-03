import React, { memo } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";

interface FadeInWhenVisibleProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = memo(function FadeInWhenVisible({
  children,
  delay = 0,
  duration = 300,
  className,
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 20,
    delay: delay * 1000,
    config: { tension: 280, friction: 60, duration },
  });

  return (
    <animated.div
      ref={ref}
      className={className}
      style={{
        opacity: springProps.opacity,
        transform: springProps.y.to(y => `translateY(${y}px)`),
      }}
    >
      {children}
    </animated.div>
  );
});

export default FadeInWhenVisible;