import { FEATURED_PROJECTS } from "@/lib/constants";
import ProjectCard from "./ProjectCard";
import SimpleProjectCard from "./SimpleProjectCard";

interface ProjectsProps {
  limit?: number;
}

const Projects = ({ limit }: ProjectsProps) => {
  const projects = FEATURED_PROJECTS;
  // const projects = limit ? FEATURED_PROJECTS.slice(0, limit) : FEATURED_PROJECTS;

  return (
    <section className="pt-16">
      <div className="container mx-auto px-4">
        {/* Header with title and "View all" link using justify-between */}
        <div className="flex flex-row justify-between items-center mb-12">
          <div className="text-left">
            <h2 className="section-title mb-0">Projects</h2>
          </div>
          {/* <div className="hidden sm:block">
            {limit && FEATURED_PROJECTS.length > limit && (
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-primary hover:text-primary transition-colors duration-200 mt-4 sm:mt-0"
              >
                <span>View all projects</span>
                <FaArrowRight />
              </Link>
            )}
          </div> */}
        </div>

        <div
          className={`grid gap-6 ${
            limit
              ? "md:grid-cols-1 lg:grid-cols-2"
              : "md:grid-cols-2 lg:grid-cols-3 gap-8"
          }`}
        >
          {projects.map((project, index) =>
            limit ? (
              <SimpleProjectCard
                key={index}
                title={project.title}
                description={project.description}
                projectUrl={project.projectUrl}
              />
            ) : (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                imageUrl={project.imageUrl}
                projectUrl={project.projectUrl}
                githubUrl={project.githubUrl}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
