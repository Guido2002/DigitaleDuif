"use client";

import React from "react";
import { Project } from "@/data/mockData";
import { cn } from "@/lib/utils";
import styles from "./ProjectCard3D.module.css"; // Import CSS module
import { Badge } from "@/components/ui/badge"; // Import Badge component

interface ProjectCard3DProps {
  project: Project;
  index: number;
  totalProjects: number;
}

const ProjectCard3D: React.FC<ProjectCard3DProps> = ({ project, index, totalProjects }) => {
  return (
    <div
      className={cn(styles.slide)}
      style={{ "--i": index } as React.CSSProperties} // Pass index as CSS variable
    >
      <img src={project.imageUrl} alt={project.title} />
      <div className={styles.slideContent}>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className={styles.techStack}>
          {project.techStack.map((tech, techIndex) => (
            <Badge key={techIndex} className={styles.badge}>
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard3D;