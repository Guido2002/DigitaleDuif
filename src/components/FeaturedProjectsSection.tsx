import React, { memo, useMemo } from "react";
import SectionHeader from "./SectionHeader";
import FadeInWhenVisible from "./FadeInWhenVisible";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { useCategory } from "@/context/CategoryContext";
import { projects, Project } from "@/data/mockData";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Map category to serviceIds (same as in ImpactCasesSection)
const categoryServiceMap: Record<string, string[]> = {
  'xr': ['vr-app-dev', 'mr-interfaces', 'data-analytics'],
  'websites': ['web-development', 'ui-ux-design'],
  'mobile-apps': ['mobile-app-development'],
};

interface ProjectCardProps {
  project: Project;
  index: number;
  categoryKey?: string | null;
}

const ProjectCard: React.FC<ProjectCardProps> = memo(({ project, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 20,
    delay: index * 100,
    config: { tension: 280, friction: 60 },
  });

  return (
    <animated.div
      ref={ref}
      style={{
        opacity: springProps.opacity,
        transform: springProps.y.to(y => `translateY(${y}px)`),
      }}
      className="group relative h-full"
    >
      <Link
        to={`/projecten?project=${project.id}`}
        className={cn(
          "block h-full rounded-2xl overflow-hidden bg-primary border-none",
          "transition-all duration-200 hover:shadow-xl hover:-translate-y-1 hover:shadow-primary/20",
          "focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
        )}
      >
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Client badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-medium bg-white/90 backdrop-blur-sm text-foreground rounded-full">
              {project.client}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-primary-foreground mb-1 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-primary-foreground/80 mb-4">
            {project.tagline}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-primary-foreground/10 text-primary-foreground rounded"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="px-2 py-1 text-xs bg-primary-foreground/10 text-primary-foreground rounded">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Hover arrow */}
        <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowRight className="w-5 h-5 text-primary-foreground" />
        </div>
      </Link>
    </animated.div>
  );
});

ProjectCard.displayName = "ProjectCard";

const FeaturedProjectsSection: React.FC = () => {
  const { selectedCategory } = useCategory();
  
  // Filter projects based on selected category
  const featuredProjects = useMemo(() => {
    if (!selectedCategory) {
      // Default: show 3 random projects from different categories
      return projects.slice(0, 3);
    }
    
    const serviceIds = categoryServiceMap[selectedCategory];
    if (!serviceIds) return projects.slice(0, 3);
    
    const filtered = projects.filter(
      (p) => p.serviceId && serviceIds.includes(p.serviceId)
    );
    
    // Return up to 3 projects
    return filtered.slice(0, 3);
  }, [selectedCategory]);

  // Don't render if no projects
  if (!featuredProjects || featuredProjects.length === 0) {
    return null;
  }

  return (
    <section id="featured-projects" className="bg-foreground relative">
      <div className="container px-4 md:px-6 py-16 md:py-24">
        <FadeInWhenVisible delay={0.05}>
          <SectionHeader
            title="Uitgelichte projecten"
            subtitle="Bekijk een selectie van mijn werk in deze categorie."
            titleClassName="text-white"
            subtitleClassName="text-white/70"
          />
        </FadeInWhenVisible>

        <div className={cn(
          "grid",
          featuredProjects.length === 1 && "grid-cols-1 max-w-md mx-auto gap-4 md:gap-6",
          featuredProjects.length === 2 && "grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto gap-6 md:gap-10",
          featuredProjects.length >= 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        )}>
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={`${selectedCategory}-${project.id}`}
              project={project}
              index={index}
              categoryKey={selectedCategory}
            />
          ))}
        </div>

        {/* View all CTA */}
        <FadeInWhenVisible delay={0.3}>
          <div className="mt-10 text-center">
            <Button asChild size="lg">
              <Link to="/projecten" className="group">
                Bekijk alle projecten
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
