import { EXPERIENCE } from '@/lib/constants';

interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  description: string;
}

const ExperienceCard = ({ role, company, period, description }: ExperienceCardProps) => {
  return (
    <div className="rounded-md shadow border border-gray-50 p-6 transition-all duration-200 hover:border-primary">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-primary heading-secondary mb-1">
          {role}
        </h3>
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-sm">
          <span className="text-dark font-medium">{company}</span>
          <span className="hidden sm:block text-accent">•</span>
          <span className="text-accent">{period}</span>
        </div>
      </div>
      
      <p className="text-secondary leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
};

const Experience = () => {
  return (
    <section className="pt-16">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="section-title mb-0">Experience</h2>
        </div>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
          {EXPERIENCE.map((exp, index) => (
            <ExperienceCard
              key={index}
              role={exp.role}
              company={exp.company}
              period={exp.period}
              description={exp.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;