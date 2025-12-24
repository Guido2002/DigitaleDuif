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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotate images on hover
  useEffect(() => {
    if (!isHovered || project.images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isHovered, project.images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setCurrentImageIndex(0); }}
      role="button"
      tabIndex={0}
      aria-label={`Featured project: ${project.title}`}
      className="group relative w-full overflow-hidden rounded-3xl bg-card/80 backdrop-blur-md border border-border/50 cursor-pointer mb-10 shadow-xl hover:shadow-2xl hover:border-primary/30 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
    >
      {/* Animated gradient border effect */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      
      <div className="flex flex-col lg:flex-row">
        {/* Image Side */}
        <div className="relative w-full lg:w-1/2 aspect-video lg:aspect-auto lg:min-h-[420px] overflow-hidden flex-shrink-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={project.images[currentImageIndex]}
              alt={project.title}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-black/5 lg:to-black/30" />
          
          {/* Featured Badge with pulse animation */}
          <div className="absolute top-4 left-4 z-10">
            <motion.span
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative px-4 py-2 text-xs font-bold rounded-full bg-primary text-primary-foreground shadow-lg flex items-center gap-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-foreground" />
              </span>
              Uitgelicht
            </motion.span>
          </div>

          {/* Image carousel indicators */}
          {project.images.length > 1 && (
            <div className="absolute bottom-4 left-4 z-10 flex gap-1.5">
              {project.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    idx === currentImageIndex 
                      ? "w-6 bg-white" 
                      : "w-1.5 bg-white/50 hover:bg-white/75"
                  )}
                  aria-label={`Bekijk afbeelding ${idx + 1}`}
                />
              ))}
            </div>
          )}

          {/* Client logo/name on mobile */}
          <div className="absolute bottom-4 right-4 lg:hidden">
            <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-black/40 backdrop-blur-sm text-white border border-white/10">
              {project.client}
            </span>
          </div>
        </div>

        {/* Content Side */}
        <div className="w-full lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center relative">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }} />
          
          <div className="relative z-10">
            <div className="mb-4 hidden lg:block">
              <span className="inline-flex items-center gap-2 text-sm text-muted-foreground font-medium px-3 py-1 rounded-full bg-muted/50">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {project.client}
              </span>
            </div>
            
            <h3 className="text-2xl lg:text-4xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            
            <p className="text-muted-foreground mb-6 line-clamp-3 lg:line-clamp-none text-base lg:text-lg leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.techStack.slice(0, 4).map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
              {project.techStack.length > 4 && (
                <span className="px-3 py-1.5 text-xs rounded-full bg-muted text-muted-foreground border border-border">
                  +{project.techStack.length - 4}
                </span>
              )}
            </div>
            
            <motion.div 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-sm shadow-lg shadow-primary/20 group-hover:shadow-xl group-hover:shadow-primary/30 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Bekijk volledige case
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.div>
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
    <section className="pt-4 pb-20 relative">
      <div className="container mx-auto px-4">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-6" role="tablist" aria-label="Filter projecten op categorie">
          {categories.map((category) => {
            const count = category.id === 'all' 
              ? projects.length 
              : projects.filter(p => p.serviceId && category.serviceIds?.includes(p.serviceId)).length;
            
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                role="tab"
                aria-selected={activeFilter === category.id}
                aria-controls="projects-grid"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2",
                  activeFilter === category.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-card/80 backdrop-blur-sm text-muted-foreground border border-border/50 hover:border-primary/30 hover:text-foreground hover:bg-card"
                )}
              >
                <span className="flex items-center gap-2">
                  {category.label}
                  <span className={cn(
                    "text-xs px-1.5 py-0.5 rounded-full transition-colors",
                    activeFilter === category.id
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  )}>
                    {count}
                  </span>
                </span>
              </motion.button>
            );
          })}
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
