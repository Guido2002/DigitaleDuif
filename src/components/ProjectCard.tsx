import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Project } from '../data/mockData';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

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
      className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 cursor-pointer group transition-all duration-300 hover:border-blue-500/30 shadow-sm hover:shadow-md"
      whileHover={{ y: -5 }}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.05), transparent 40%)`,
        }}
      />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-6 overflow-hidden rounded-lg aspect-video">
          <img
            src={project.images[0]}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-4 text-sm line-clamp-2">
            {project.tagline}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded-full bg-blue-50 text-blue-600 border border-blue-100"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600 border border-gray-200">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700">
          Bekijk Case <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
