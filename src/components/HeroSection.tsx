"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import LottieAnimation from "@/components/LottieAnimation"; // Import the new LottieAnimation component

const HeroSection = () => {
  // IMPORTANT: Vervang dit placeholder object met de daadwerkelijke JSON-data
  // die je downloadt van LottieFiles.com voor de door jou gekozen animatie.
  // Bijvoorbeeld: const myLottieAnimationData = require('./path/to/your-animation.json');
  // Zoek op LottieFiles.com naar animaties zoals "flying bird", "abstract flow", of "innovation".
  const lottieAnimationData = {
    // Dit is een minimale placeholder-animatie (een pulserende cirkel).
    // Download je gewenste animatie JSON van LottieFiles.com
    // en plak de volledige inhoud hier.
    v: "5.5.2",
    fr: 60,
    ip: 0,
    op: 180,
    w: 100,
    h: 100,
    nm: "Minimal Placeholder",
    ddd: 0,
    assets: [],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "Circle",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          rp: { a: 0, k: 0 },
          s: { a: 1, k: [{ t: 0, s: [0, 0, 100] }, { t: 90, s: [100, 100, 100] }, { t: 180, s: [0, 0, 100] }] },
          p: { a: 0, k: [50, 50, 0] },
          a: { a: 0, k: [50, 50, 0] },
          r: { a: 0, k: 0 }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "el",
                ix: 1,
                s: { a: 0, k: [50, 50] },
                p: { a: 0, k: [0, 0] },
                r: 1,
                nm: "Ellipse Path 1",
                mn: "ADBE Vector Shape - Ellipse",
                hd: false
              },
              {
                ty: "fl",
                c: { a: 0, k: [1, 1, 1, 0.1] }, // Zeer subtiele witte vulling
                o: { a: 0, k: 100 },
                r: 1,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: false
              },
              {
                ty: "tr",
                mn: "ADBE Vector Transform Group",
                hd: false
              }
            ],
            nm: "Group 1",
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 0,
        op: 180,
        st: 0,
        bm: 0
      }
    ]
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gradient-to-br from-primary to-emerald-800 py-20 text-white overflow-hidden"
    >
      {/* Lottie Animation als subtiele achtergrondlaag */}
      <LottieAnimation
        animationData={lottieAnimationData}
        className="absolute inset-0 z-[1] opacity-20" // Z-index 1 om boven de gradient te zijn, maar onder de tekst
        style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
      />

      {/* Animated background overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-lime-500/20 bg-[length:400%_400%] animate-gradient-move"></div>
      
      <div className="container z-10 text-center"> {/* Z-index 10 voor de tekst en knoppen */}
        <h1 className="mb-4 text-5xl font-extrabold leading-tight md:text-6xl">
          DigitaleDuif
        </h1>
        <p className="mb-6 text-2xl font-semibold md:text-3xl">
          Innovatieve XR-oplossingen die écht vliegen.
        </p>
        <p className="mx-auto mb-10 max-w-3xl text-lg md:text-xl">
          Wij zijn DigitaleDuif, uw partner in de ontwikkeling van baanbrekende
          Virtual Reality (VR), Mixed Reality (MR) en interactieve applicaties.
          Met een focus op Unity development creëren we data-gedreven
          XR-experiences die uw visie tot leven brengen.
        </p>
        <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Link to="/projecten">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Bekijk projecten
            </Button>
          </Link>
          <Link to="/contact">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary transition-all duration-300 hover:scale-105"
            >
              Plan een gesprek
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;