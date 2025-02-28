import Image from 'next/image';
import { FaClock, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface CurrentProjectCardProps {
  title: string;
  description: string;
  progress: number;
  imageUrl: string;
  technologies: string[];
  estimatedCompletion: string;
  githubUrl?: string;
  projectUrl?: string;
}

const CurrentProjectCard = ({
  title,
  description,
  progress,
  imageUrl,
  technologies,
  estimatedCompletion,
  githubUrl,
  projectUrl,
}: CurrentProjectCardProps) => {
  return (
    <div className="mb-16">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-primary flex items-center">
          <FaClock className="mr-2 text-accent" /> Currently Working On
        </h2>
        <div className="flex items-center mt-2 sm:mt-0">
          <span className="text-sm font-medium text-secondary mr-2">
            Progress:
          </span>
          <div className="w-32 bg-gray-200 rounded-full h-2.5">
            <div
              className="h-2.5 rounded-full"
              style={{
                width: `${progress}%`,
                backgroundColor: "#888888", // Replace with your accent color hex code
              }}
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
              role="progressbar"
            ></div>
          </div>
          <span className="ml-2 text-sm font-medium text-secondary">
            {progress}%
          </span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
        {/* On small screens, stack the layout (image above, content below). On larger screens, keep it side-by-side. */}
        <div className="flex flex-col sm:flex-row">
          {/* Image Section: Full width on small screens, 2/5 width on larger screens */}
          <div className="relative w-full sm:w-2/5 h-64 sm:h-auto">
            <Image
              src={imageUrl}
              alt={title}
              layout="fill"
              className="object-cover"
            />
          </div>

          {/* Card Content Section */}
          <div className="p-6 flex flex-col sm:w-3/5">
            <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
            <p className="text-secondary mb-4 flex-grow">{description}</p>

            {/* Technologies Section */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-secondary px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Estimated Completion Section */}
            <div className="flex items-center text-sm text-secondary mb-5">
              <FaClock className="mr-1 text-accent" />
              <span>Estimated completion: {estimatedCompletion}</span>
            </div>

            {/* Action Buttons Section: Stack vertically on small screens, horizontally on large */}
            <div className="flex gap-4 mt-2 pt-4 border-t border-gray-100">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
            >
              <FaGithub size={20} />
              <span className="text-sm font-medium">Source Code</span>
            </a>
          )}
          {projectUrl && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-accent transition-colors ml-auto"
            >
              <span className="text-sm font-medium">Preview</span>
              <FaExternalLinkAlt size={16} />
            </a>
          )}
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentProjectCard;
