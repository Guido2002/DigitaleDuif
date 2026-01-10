import { useState, useEffect } from "react";

export interface Section {
  id: string;
  label: string;
}

export const homeSections: Section[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "Over mij" },
  { id: "why-us", label: "Waarom wij" },
  { id: "featured-projects", label: "Projecten" },
  { id: "process", label: "Proces" },
  { id: "testimonials", label: "Reviews" },
  { id: "faq", label: "FAQ" },
  { id: "cta", label: "Contact" },
];

export function useActiveSection(sections: Section[] = homeSections) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || "");

  useEffect(() => {
    const elements: HTMLElement[] = [];
    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el instanceof HTMLElement) elements.push(el);
    });

    if (elements.length === 0) return;

    const lastEntriesById = new Map<string, IntersectionObserverEntry>();

    const pickBestActive = () => {
      const viewportCenter = globalThis.innerHeight / 2;

      let bestId: string | null = null;
      let bestDistance = Number.POSITIVE_INFINITY;

      for (const entry of lastEntriesById.values()) {
        if (!entry.isIntersecting) continue;
        const rect = entry.boundingClientRect;
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestId = (entry.target as HTMLElement).id;
        }
      }

      if (bestId) setActiveSection(bestId);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).id;
          if (id) lastEntriesById.set(id, entry);
        }
        pickBestActive();
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    for (const el of elements) observer.observe(el);

    return () => observer.disconnect();
  }, [sections]);

  return activeSection;
}
