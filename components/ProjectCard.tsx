import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  projectUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  imageUrl, 
  projectUrl, 
  githubUrl 
}: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-200 flex flex-col h-full hover-lift">
      {imageUrl && (
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-200 flex items-end justify-between p-4">
            <div className="flex gap-3">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/90 hover:bg-white text-primary p-2 rounded-full transition-colors"
                  title="View on GitHub"
                >
                  <FaGithub size={20} />
                </a>
              )}
              {projectUrl && (
                <a
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/90 hover:bg-white text-primary p-2 rounded-full transition-colors"
                  title="View Live Project"
                >
                  <FaExternalLinkAlt size={20} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-primary heading-secondary">{title}</h3>
        <p className="text-secondary mb-4 flex-grow leading-relaxed">{description}</p>
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-light text-secondary px-3 py-1 rounded-md text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-4 mt-2 pt-4 border-t border-gray-100">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-primary transition-colors duration-200"
            >
              <FaGithub size={18} />
              <span className="text-sm font-medium">Source</span>
            </a>
          )}
          {projectUrl && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-primary transition-colors duration-200 ml-auto"
            >
              <span className="text-sm font-medium">Live Demo</span>
              <FaExternalLinkAlt size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
