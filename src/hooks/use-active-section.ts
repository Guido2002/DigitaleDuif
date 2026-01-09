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
    const observers: IntersectionObserver[] = [];
    const sectionElements: Map<string, Element> = new Map();

    // Find all section elements
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        sectionElements.set(section.id, element);
      }
    });

    // Create intersection observer for each section
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions: IntersectionObserverOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Trigger when section is in middle 20% of viewport
      threshold: 0,
    };

    sectionElements.forEach((element, id) => {
      const observer = new IntersectionObserver(observerCallback, observerOptions);
      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sections]);

  return activeSection;
}
