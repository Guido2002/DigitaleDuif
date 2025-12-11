import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { projects, Project } from '../data/mockData';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const ImpactCasesSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const projectId = searchParams.get('project');
    if (projectId) {
      const project = projects.find((p) => p.id === projectId);
      if (project) {
        setSelectedProject(project);
      }
    }
  }, [searchParams]);

  const handleClose = () => {
    setSelectedProject(null);
    setSearchParams({});
  };

  const handleProjectClick = (project: Project) => {
    setSearchParams({ project: project.id });
    setSelectedProject(project);
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ImpactCasesSection;
