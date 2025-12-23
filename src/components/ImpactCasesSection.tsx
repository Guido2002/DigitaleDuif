import React, { useState, useEffect, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { projects, Project } from '../data/mockData';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

// Define filter categories
const categories = [
  { id: 'all', label: 'Alles' },
  { id: 'xr', label: 'XR / VR / MR', serviceIds: ['vr-app-dev', 'mr-interfaces', 'data-analytics'] },
  { id: 'web', label: 'Web', serviceIds: ['web-development', 'ui-ux-design'] },
  { id: 'mobile', label: 'Mobile', serviceIds: ['mobile-app-development'] },
];

// Featured Hero Card Component
const FeaturedProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      role="button"
      tabIndex={0}
      aria-label={`Featured project: ${project.title}`}
      className="group relative w-full overflow-hidden rounded-2xl bg-card border border-border cursor-pointer mb-10 shadow-lg hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Image Side */}
        <div className="relative w-full lg:w-1/2 aspect-video lg:aspect-auto lg:min-h-[400px] overflow-hidden flex-shrink-0">
          <img
            src={project.images[0]}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/10" />
          
          {/* Featured Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-primary text-primary-foreground shadow-lg">
              Uitgelicht
            </span>
          </div>
        </div>

        {/* Content Side */}
        <div className="w-full lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
          <div className="mb-3">
            <span className="text-sm text-muted-foreground font-medium">{project.client}</span>
          </div>
          
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          
          <p className="text-muted-foreground mb-6 line-clamp-3 lg:line-clamp-none">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground border border-border">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>
          
          <div className="flex items-center text-primary font-medium group-hover:text-primary/80 transition-colors">
            Bekijk volledige case
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ImpactCasesSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Random seed generated once on mount for featured project selection
  const [randomSeed] = useState(() => Math.random());

  // Get filter from URL or default to 'all'
  const activeFilter = searchParams.get('filter') || 'all';

  const setActiveFilter = (filter: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (filter === 'all') {
      newParams.delete('filter');
    } else {
      newParams.set('filter', filter);
    }
    setSearchParams(newParams);
  };

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
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('project');
    setSearchParams(newParams);
  };

  const handleProjectClick = (project: Project) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('project', project.id);
    setSearchParams(newParams);
    setSelectedProject(project);
  };

  // Filter projects based on active filter
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    const category = categories.find((c) => c.id === activeFilter);
    if (!category || !('serviceIds' in category)) return projects;
    return projects.filter((p) => p.serviceId && category.serviceIds?.includes(p.serviceId));
  }, [activeFilter]);

  // Pick a random featured project based on the seed (changes on refresh)
  const featuredIndex = useMemo(() => {
    return Math.floor(randomSeed * filteredProjects.length);
  }, [randomSeed, filteredProjects.length]);

  const featuredProject = filteredProjects[featuredIndex];
  const remainingProjects = filteredProjects.filter((_, i) => i !== featuredIndex);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" role="tablist" aria-label="Filter projecten op categorie">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              role="tab"
              aria-selected={activeFilter === category.id}
              aria-controls="projects-grid"
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2",
                activeFilter === category.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Featured Project */}
        <AnimatePresence mode="wait">
          {featuredProject && (
            <FeaturedProjectCard
              key={featuredProject.id}
              project={featuredProject}
              onClick={() => handleProjectClick(featuredProject)}
            />
          )}
        </AnimatePresence>

        {/* Remaining Projects Grid */}
        {remainingProjects.length > 0 && (
          <div className="mt-24">
            <div className="flex items-center gap-4 mb-10">
              <div className="flex-1 h-px bg-border" />
              <h3 className="text-2xl font-bold text-primary">Meer projecten</h3>
              <div className="flex-1 h-px bg-border" />
            </div>
            
            <motion.div 
              layout
              id="projects-grid"
              role="tabpanel"
              aria-label={`Projecten in categorie: ${categories.find(c => c.id === activeFilter)?.label}`}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {remainingProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <ProjectCard
                      project={project}
                      onClick={() => handleProjectClick(project)}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16 px-4"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
              <svg className="w-8 h-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-muted-foreground text-lg mb-4">Geen projecten gevonden in deze categorie.</p>
            <button
              onClick={() => setActiveFilter('all')}
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Bekijk alle projecten →
            </button>
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
