"use client";

import React from "react";
import { projects } from "@/data/mockData";
import SectionHeader from "@/components/SectionHeader";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";
import ProjectCard3D from "@/components/ProjectCard3D"; // Import the new 3D card component
import styles from "@/components/ProjectCard3D.module.css"; // Import the CSS module for the slideshow container

const ProjectsPage = () => {
  return (
    <div className="container bg-background py-12 flex flex-col items-center">
      <FadeInWhenVisible delay={0.1}>
        <SectionHeader
          title="Onze Projecten"
          subtitle="Ontdek een selectie van onze innovatieve digitale projecten, variërend van XR-oplossingen tot maatwerk websites en mobiele applicaties. Wij combineren technische diepgang met creativiteit om unieke en impactvolle oplossingen te leveren."
          align="center" // Center align header for Projects page
        />
      </FadeInWhenVisible>

      <div className={styles.slideshowContainer}>
        {projects.map((project, index) => (
          <ProjectCard3D
            key={index}
            project={project}
            index={index}
            totalProjects={projects.length}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;