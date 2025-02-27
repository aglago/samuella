import { SKILLS } from '@/lib/constants';
import { JSX } from 'react';
import { DiVisualstudio } from 'react-icons/di';
import { 
  FaHtml5, FaReact, FaNodeJs, FaDatabase, FaTools, 
  FaJs, FaServer, FaCode,
  FaGithub,
} from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiMysql, SiPostman, SiGit } from 'react-icons/si';

type SkillCategory = 'frontend' | 'backend' | 'databases' | 'other';

// Map to associate skill names with their icons
const getSkillIcon = (name: string) => {
  const iconMap: {[key: string]: JSX.Element} = {
    'HTML/CSS': <FaHtml5 className="text-[#E34F26]" />,
    'JavaScript': <FaJs className="text-[#F7DF1E]" />,
    'TypeScript': <SiTypescript className="text-[#3178C6]" />,
    'React': <FaReact className="text-[#61DAFB]" />,
    'Next.js': <SiNextdotjs className="text-dark" />,
    'Tailwind CSS': <SiTailwindcss className="text-[#06B6D4]" />,
    'Node.js': <FaNodeJs className="text-[#339933]" />,
    'Express': <FaServer className="text-gray-600" />,
    'MongoDB': <SiMongodb className="text-[#47A248]" />,
    'PostgreSQL': <SiPostgresql className="text-[#4169E1]" />,
    'MySQL': <SiMysql className="text-[#4479A1]" />,
    'Postman': <SiPostman className='text-[#E75924]' />,
    'GitHub': <FaGithub className='text-[#1D1C1B]' />,
    'Git': <SiGit className='text-[#F1563A]' />,
    'Visual Studio Code': <DiVisualstudio className='text-[#2C9FF0]' />
  };
  
  return iconMap[name] || <FaCode className="text-accent" />;
};

const Skills = () => {
  const renderSkillCategory = (category: SkillCategory, title: string, icon: JSX.Element) => (
    <div className="mb-10">
      <div className="flex items-center mb-6">
        <div className="text-accent mr-3">{icon}</div>
        <h3 className="text-xl font-semibold text-primary">{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {SKILLS[category].map((skill, index) => (
          <div 
            key={index} 
            className="bg-white px-4 py-2 rounded-lg shadow-sm flex items-center gap-2 border border-gray-100 hover:shadow-md transition-shadow"
          >
            <span className="text-lg">{getSkillIcon(skill.name)}</span>
            <span className="text-secondary">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="pt-16 bg-light">
      <div className="container mx-auto px-4">
        <h2 className="section-title mx-auto text-center">Technical Expertise</h2>
        
        <div className="mt-12 max-w-5xl mx-auto">
          {renderSkillCategory('frontend', 'Frontend Development', <FaCode size={24} />)}
          {renderSkillCategory('backend', 'Backend Development', <FaServer size={24} />)}
          {renderSkillCategory('databases', 'Database Technologies', <FaDatabase size={24} />)}
          {renderSkillCategory('other', 'Tools & Methodologies', <FaTools size={24} />)}
        </div>
      </div>
    </section>
  );
};

export default Skills;
