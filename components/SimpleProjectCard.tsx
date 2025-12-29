import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

interface SimpleProjectCardProps {
  title: string;
  description: string;
  projectUrl?: string;
}

const SimpleProjectCard = ({
  title,
  description,
  projectUrl,
}: SimpleProjectCardProps) => {
  return (
    projectUrl && (
      <Link href={projectUrl} target="_blank" rel="noopener noreferrer" title="View Project">
        <div className="group shadow rounded-md border border-gray-100 p-6 hover:border hover:border-primary transition-all duration-200">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-semibold text-primary heading-secondary flex-1 pr-4">
              {title}
            </h3>
            {projectUrl && (
              <div
                className="flex-shrink-0 w-8 h-8 flex items-center justify-center group-hover:scale-120 transform"
                title="View Project"
              >
                <LuArrowUpRight size={20} />
              </div>
            )}
          </div>

          <p className="text-secondary leading-relaxed text-sm">
            {description}
          </p>
        </div>
      </Link>
    )
  );
};

export default SimpleProjectCard;
