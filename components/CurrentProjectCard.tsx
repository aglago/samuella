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
        <div className="md:flex">
          <div className="md:w-2/5 relative h-64 md:h-auto">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 md:w-3/5">
            <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
            <p className="text-secondary mb-4">{description}</p>

            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-light text-secondary px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center text-sm text-secondary mb-5">
              <FaClock className="mr-1 text-accent" />
              <span>Estimated completion: {estimatedCompletion}</span>
            </div>

            <div className="flex gap-4">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
                >
                  <FaGithub size={16} />
                  <span>Source Code</span>
                </a>
              )}
              {projectUrl && (
                <a
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
                >
                  <FaExternalLinkAlt size={14} />
                  <span>Preview</span>
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
