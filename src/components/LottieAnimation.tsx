"use client";

import React from 'react';
import Lottie from 'lottie-react';

interface LottieAnimationProps {
  animationData: object; // The Lottie JSON data
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,
  loop = true,
  autoplay = true,
  className,
  style,
}) => {
  return (
    <div className={className} style={style}>
      <Lottie animationData={animationData} loop={loop} autoplay={autoplay} />
    </div>
  );
};

export default LottieAnimation;