import React, { useState, useEffect, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { projects, Project } from '../data/mockData';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { cn } from '@/lib/utils';

// Define filter categories
const categories = [
  { id: 'all', label: 'Alles' },
  { id: 'xr', label: 'XR / VR / MR', serviceIds: ['vr-app-dev', 'mr-interfaces', 'data-analytics'] },
  { id: 'web', label: 'Web', serviceIds: ['web-development', 'ui-ux-design'] },
  { id: 'mobile', label: 'Mobile', serviceIds: ['mobile-app-development'] },
];

const ImpactCasesSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');
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

  // Filter projects based on active filter
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    const category = categories.find((c) => c.id === activeFilter);
    if (!category || !('serviceIds' in category)) return projects;
    return projects.filter((p) => p.serviceId && category.serviceIds?.includes(p.serviceId));
  }, [activeFilter]);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                activeFilter === category.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Project Grid with Animation */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard
                  project={project}
                  onClick={() => handleProjectClick(project)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-gray-500 text-lg">Geen projecten gevonden in deze categorie.</p>
          </motion.div>
        )}
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
