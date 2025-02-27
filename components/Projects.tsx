import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { FEATURED_PROJECTS } from '@/lib/constants';
import ProjectCard from './ProjectCard';

interface ProjectsProps {
  limit?: number;
}

const Projects = ({ limit }: ProjectsProps) => {
  const projects = limit ? FEATURED_PROJECTS.slice(0, limit) : FEATURED_PROJECTS;

  return (
    <section className="pt-16">
      <div className="container mx-auto px-4">
        {/* Header with title and "View all" link using justify-between */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <h2 className="section-title mb-0">Featured Projects</h2>
              </div>
          
          {limit && FEATURED_PROJECTS.length > limit && (
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mt-4 sm:mt-0"
            >
              <span>View all projects</span>
              <FaArrowRight />
            </Link>
          )}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              imageUrl={project.imageUrl}
              projectUrl={project.projectUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
