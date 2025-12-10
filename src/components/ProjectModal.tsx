import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';
import { Project } from '../data/mockData';
import { Link } from 'react-router-dom';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl custom-scrollbar"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/80 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="relative h-64 sm:h-80 md:h-96 w-full">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
          
          <div className="absolute bottom-0 left-0 p-6 sm:p-10 w-full">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                {project.client}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
              {project.title}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl">
              {project.tagline}
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-red-500 rounded-full" />
                De Uitdaging
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {project.challenge}
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-500 rounded-full" />
                De Oplossing
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {project.solution}
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-green-500 rounded-full" />
                De Impact
              </h3>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className="text-gray-300 font-medium leading-relaxed">
                  {project.impact}
                </p>
              </div>
            </section>

            <div className="pt-6">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 text-sm rounded-lg bg-white/5 text-gray-300 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              <div className="bg-blue-600/10 border border-blue-500/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">
                  Interesse in een soortgelijk project?
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  Laten we bespreken hoe we jouw bedrijf kunnen helpen met innovatieve digitale oplossingen.
                </p>
                <Link
                  to={`/contact${project.serviceId ? `?service=${project.serviceId}` : ''}`}
                  className="flex items-center justify-center w-full px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors group"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Plan een gesprek
                </Link>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">
                  Project Highlights
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-gray-400">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    <span>Custom development</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-400">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    <span>Schaalbare architectuur</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-400">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    <span>Focus op ROI</span>
                  </li>
                </ul>
              </div>
              
              <button
                onClick={onClose}
                className="w-full px-4 py-3 bg-transparent hover:bg-white/5 text-gray-400 hover:text-white border border-white/10 hover:border-white/20 rounded-lg font-medium transition-all flex items-center justify-center"
              >
                Bekijk meer cases
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
