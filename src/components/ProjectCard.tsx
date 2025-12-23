import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Eye } from 'lucide-react';
import { Project } from '../data/mockData';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

// Skeleton loader component
const ProjectCardSkeleton: React.FC = () => (
  <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6">
    <div className="mb-6 rounded-xl aspect-video bg-muted animate-pulse" />
    <div className="space-y-3">
      <div className="h-6 bg-muted rounded-lg w-3/4 animate-pulse" />
      <div className="h-4 bg-muted rounded-lg w-full animate-pulse" />
      <div className="h-4 bg-muted rounded-lg w-2/3 animate-pulse" />
      <div className="flex gap-2 mt-4">
        <div className="h-6 w-16 bg-muted rounded-full animate-pulse" />
        <div className="h-6 w-20 bg-muted rounded-full animate-pulse" />
        <div className="h-6 w-14 bg-muted rounded-full animate-pulse" />
      </div>
    </div>
  </div>
);

export { ProjectCardSkeleton };

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const isMobile = useIsMobile();
  const isInView = useInView(divRef, { margin: "-10% 0px -10% 0px", amount: 0.4 });
  const isActive = isMobile && isInView;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      role="button"
      tabIndex={0}
      aria-label={`Bekijk project: ${project.title}`}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border/50 bg-card/80 backdrop-blur-md p-6 cursor-pointer group transition-all duration-500 shadow-lg",
        "hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2",
        isActive && "border-primary/40 shadow-2xl shadow-primary/5 is-active"
      )}
      whileHover={{ y: -8, scale: 1.01 }}
      animate={isActive ? { y: -8, scale: 1.01 } : { y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {/* Animated gradient border effect */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 group-[.is-active]:opacity-100 transition-opacity duration-500 -z-10" />
      
      {/* Cursor glow effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 group-[.is-active]:opacity-100"
        style={{
          background: isActive 
            ? `radial-gradient(600px circle at 50% 50%, hsl(var(--primary) / 0.08), transparent 40%)`
            : `radial-gradient(600px circle at ${position.x}px ${position.y}px, hsl(var(--primary) / 0.08), transparent 40%)`,
        }}
      />
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Image container with enhanced effects */}
        <div className="relative mb-6 overflow-hidden rounded-xl aspect-video bg-muted">
          {/* Skeleton while loading */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-muted animate-pulse" />
          )}
          
          <img
            src={project.images[0]}
            alt={project.title}
            loading="lazy"
            decoding="async"
            onLoad={() => setImageLoaded(true)}
            className={cn(
              "h-full w-full object-cover transition-all duration-700",
              "group-hover:scale-110 group-[.is-active]:scale-110",
              imageLoaded ? "opacity-100" : "opacity-0"
            )}
          />
          
          {/* Image overlay with view icon */}
          <div className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-4 transition-opacity duration-300",
            (isHovered || isActive) ? "opacity-100" : "opacity-0"
          )}>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={(isHovered || isActive) ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium"
            >
              <Eye className="w-3.5 h-3.5" />
              Bekijk project
            </motion.div>
          </div>
          
          {/* Client badge */}
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-black/40 backdrop-blur-sm text-white border border-white/10">
              {project.client}
            </span>
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary group-[.is-active]:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-4 text-sm line-clamp-2 flex-1 leading-relaxed">
            {project.tagline}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 3).map((tech, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
            {project.techStack.length > 3 && (
              <span className="px-2.5 py-1 text-xs rounded-full bg-muted text-muted-foreground border border-border">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between text-primary text-sm font-medium mt-6 pt-4 border-t border-border/50">
          <span className="group-hover:text-primary/80 group-[.is-active]:text-primary/80 transition-colors">Bekijk Case</span>
          <motion.div 
            className="p-2 rounded-full bg-primary/10 group-hover:bg-primary group-[.is-active]:bg-primary transition-colors"
            animate={(isHovered || isActive) ? { x: 4 } : { x: 0 }}
          >
            <ArrowRight className="w-4 h-4 group-hover:text-primary-foreground group-[.is-active]:text-primary-foreground transition-colors" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
