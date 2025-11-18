"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import LottieAnimation from "@/components/LottieAnimation"; // Import LottieAnimation

const AboutSection = () => {
  console.log("AboutSection rendering. Image path:", "/1711446418839.jpeg"); // Added console log

  // Placeholder Lottie animation data for the About section
  // IMPORTANT: Vervang dit placeholder object met de daadwerkelijke JSON-data
  // die je downloadt van LottieFiles.com voor de door jou gekozen animatie.
  // Zoek naar animaties die passen bij 'innovatie', 'teamwork', 'technologie', etc.
  const aboutLottieAnimationData = {
    v: "5.5.2",
    fr: 60,
    ip: 0,
    op: 120,
    w: 100,
    h: 100,
    nm: "Abstract Flow Placeholder",
    ddd: 0,
    assets: [],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "Flow Line",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          rp: { a: 0, k: 0 },
          s: { a: 1, k: [{ t: 0, s: [50, 50, 100] }, { t: 60, s: [100, 100, 100] }, { t: 120, s: [50, 50, 100] }] },
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
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [[-13.3, -13.3], [-13.3, 13.3], [13.3, 13.3], [13.3, -13.3]],
                    o: [[13.3, 13.3], [13.3, -13.3], [-13.3, -13.3], [-13.3, 13.3]],
                    v: [[-25, -25], [-25, 25], [25, 25], [25, -25]],
                    c: true
                  }
                },
                nm: "Rectangle Path 1",
                mn: "ADBE Vector Shape - Rect",
                hd: false
              },
              {
                ty: "st",
                c: { a: 0, k: [0.2, 0.6, 0.4, 1] }, // Groene lijn
                o: { a: 0, k: 100 },
                w: { a: 0, k: 5 },
                lc: 1,
                lj: 1,
                ml: 4,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
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
        op: 120,
        st: 0,
        bm: 0
      }
    ]
  };


  return (
    <section id="about" className="container py-16 md:py-24">
      <SectionHeader
        title="Wie is DigitaleDuif?"
        subtitle="DigitaleDuif is een gespecialiseerde studio die zich richt op de voorhoede van Extended Reality (XR) technologie. Wij combineren diepgaande technische kennis met een passie voor innovatie om impactvolle en meeslepende ervaringen te creëren."
      />

      {/* Nieuwe sectie voor persoonlijke introductie */}
      <div className="mb-16 flex flex-col items-center text-center md:flex-row md:text-left md:gap-8">
        <div className="mb-8 flex justify-center md:mb-0 md:w-1/3">
          <img
            src="/1711446418839.jpeg" // Gebruikt de zojuist geüploade afbeelding
            alt="Persoonlijke foto van de oprichter" // Ensure alt text is present
            className="h-48 w-48 rounded-full object-cover shadow-lg"
          />
        </div>
        <div className="md:w-2/3">
          <h3 className="mb-4 text-2xl font-semibold text-foreground">
            Hallo, ik ben [Uw Naam]!
          </h3>
          <p className="mb-4 text-muted-foreground">
            Als oprichter van DigitaleDuif ben ik gepassioneerd door de kracht van XR om complexe problemen op te lossen en nieuwe werelden te creëren. Mijn reis in de technologie begon met een fascinatie voor interactieve ervaringen, en dat heeft me geleid tot het bouwen van innovatieve VR- en MR-oplossingen.
          </p>
          <p className="text-muted-foreground">
            Ik geloof sterk in een persoonlijke aanpak en werk graag nauw samen met klanten om hun visie te vertalen naar impactvolle digitale realiteiten. Laten we samen iets buitengewoons bouwen!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="relative flex flex-col items-center justify-center p-4">
          <LottieAnimation
            animationData={aboutLottieAnimationData}
            className="absolute inset-0 z-0 opacity-10"
            style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
          />
          <div className="z-10"> {/* Z-index om tekst boven animatie te houden */}
            <h3 className="mb-4 text-2xl font-semibold text-foreground">
              Onze Expertise: XR & VR
            </h3>
            <p className="mb-4 text-muted-foreground">
              Met jarenlange ervaring in de XR-sector, zijn wij experts in het
              ontwikkelen van zowel Virtual Reality als Mixed Reality
              applicaties. Of het nu gaat om complexe simulaties, interactieve
              trainingsmodules of innovatieve visualisatietools, wij leveren
              oplossingen die de grenzen van het mogelijke verleggen.
            </p>
            <p className="text-muted-foreground">
              Onze focus ligt op het benutten van de kracht van XR om concrete
              zakelijke uitdagingen op te lossen en nieuwe kansen te creëren.
            </p>
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center p-4">
          <LottieAnimation
            animationData={aboutLottieAnimationData}
            className="absolute inset-0 z-0 opacity-10"
            style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
          />
          <div className="z-10"> {/* Z-index om tekst boven animatie te houden */}
            <h3 className="mb-4 text-2xl font-semibold text-foreground">
              Unity Development & Co-creatie
            </h3>
            <p className="mb-4 text-muted-foreground">
              Unity is de kern van onze technische stack. Onze ontwikkelaars zijn
              bedreven in het creëren van robuuste, schaalbare en
              hoogwaardige applicaties binnen dit veelzijdige platform. Wij
              geloven sterk in een iteratieve aanpak en co-creatie met onze
              klanten.
            </p>
            <p className="mb-4 text-muted-foreground">
              Vanaf de eerste brainstormsessie tot de uiteindelijke oplevering
              werken we nauw samen, waarbij we prototypes ontwikkelen en continu
              feedback integreren om ervoor te zorgen dat het eindproduct
              perfect aansluit bij uw visie en behoeften.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;