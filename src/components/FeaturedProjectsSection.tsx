import React, { memo } from "react";
import SectionHeader from "./SectionHeader";
import FadeInWhenVisible from "./FadeInWhenVisible";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { useCategory } from "@/context/CategoryContext";
import { getCategoryConfig, defaultConfig, type FeaturedProjectContent } from "@/data/categoryConfig";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  project: FeaturedProjectContent;
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
        to={`/projecten#${project.id}`}
        className={cn(
          "block h-full rounded-2xl overflow-hidden border border-border bg-card",
          "transition-all duration-200 hover:shadow-xl hover:-translate-y-1 hover:border-primary/50",
          "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        )}
      >
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={project.image}
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
          <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            {project.tagline}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Hover arrow */}
        <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowRight className="w-5 h-5 text-primary" />
        </div>
      </Link>
    </animated.div>
  );
});

ProjectCard.displayName = "ProjectCard";

const FeaturedProjectsSection: React.FC = () => {
  const { selectedCategory } = useCategory();
  const config = selectedCategory ? getCategoryConfig(selectedCategory) : defaultConfig;
  const { featuredProjects } = config;

  // Don't render if no projects
  if (!featuredProjects || featuredProjects.length === 0) {
    return null;
  }

  return (
    <section id="featured-projects" className="bg-background relative">
      <div className="container px-4 md:px-6 py-16 md:py-24">
        <FadeInWhenVisible delay={0.05}>
          <SectionHeader
            title="Uitgelichte projecten"
            subtitle="Bekijk een selectie van ons werk in deze categorie."
          />
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
            <Button asChild variant="outline" size="lg">
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
