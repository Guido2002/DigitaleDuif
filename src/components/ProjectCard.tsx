import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Project } from '../data/mockData';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
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
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      role="button"
      tabIndex={0}
      aria-label={`Bekijk project: ${project.title}`}
      className={cn(
        "relative overflow-hidden rounded-xl border border-border bg-card p-6 cursor-pointer group transition-all duration-300 shadow-md",
        "hover:border-primary/40 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2",
        isActive && "border-primary/40 shadow-xl is-active"
      )}
      whileHover={{ y: -5 }}
      animate={isActive ? { y: -5 } : { y: 0 }}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 group-[.is-active]:opacity-100"
        style={{
          background: isActive 
            ? `radial-gradient(600px circle at 50% 50%, hsl(var(--primary) / 0.05), transparent 40%)`
            : `radial-gradient(600px circle at ${position.x}px ${position.y}px, hsl(var(--primary) / 0.05), transparent 40%)`,
        }}
      />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-6 overflow-hidden rounded-lg aspect-video">
          <img
            src={project.images[0]}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 group-[.is-active]:scale-110"
          />
        </div>

        <div className="flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary group-[.is-active]:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-4 text-sm line-clamp-2 flex-1">
            {project.tagline}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground border border-border">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center text-primary text-sm font-medium group-hover:text-primary/80 group-[.is-active]:text-primary/80 mt-6 pt-4 border-t border-border">
          Bekijk Case <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-[.is-active]:translate-x-1" />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
