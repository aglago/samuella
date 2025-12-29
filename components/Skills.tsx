import { SKILLS } from '@/lib/constants';
import { JSX } from 'react';
import { DiVisualstudio } from 'react-icons/di';
import { 
  FaHtml5, FaReact, FaNodeJs, FaDatabase, FaTools, 
  FaJs, FaServer, FaCode,
  FaGithub,
  FaJava,
} from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiMysql, SiPostman, SiGit, SiSpringboot } from 'react-icons/si';

type SkillCategory = 'frontend' | 'backend' | 'databases' | 'other';

// Map to associate skill names with their icons (grayscale)
const getSkillIcon = (name: string) => {
  const iconMap: {[key: string]: JSX.Element} = {
    'HTML/CSS': <FaHtml5 className="text-gray-600" />,
    'JavaScript': <FaJs className="text-gray-600" />,
    'TypeScript': <SiTypescript className="text-gray-600" />,
    'React': <FaReact className="text-gray-600" />,
    'Next.js': <SiNextdotjs className="text-gray-600" />,
    'Tailwind CSS': <SiTailwindcss className="text-gray-600" />,
    'Node.js': <FaNodeJs className="text-gray-600" />,
    'Express': <FaServer className="text-gray-600" />,
    'MongoDB': <SiMongodb className="text-gray-600" />,
    'PostgreSQL': <SiPostgresql className="text-gray-600" />,
    'MySQL': <SiMysql className="text-gray-600" />,
    'Postman': <SiPostman className='text-gray-600' />,
    'GitHub': <FaGithub className='text-gray-600' />,
    'Git': <SiGit className='text-gray-600' />,
    'Visual Studio Code': <DiVisualstudio className='text-gray-600' />,
    'Responsive Design': <FaCode className="text-gray-600" />,
    'Data Visualization': <FaCode className="text-gray-600" />,
    'API Development': <FaServer className="text-gray-600" />,
    'RESTful Services': <FaServer className="text-gray-600" />,
    'Payment Gateway Integration': <FaCode className="text-gray-600" />,
    'Telecom API Integration': <FaCode className="text-gray-600" />,
    'Financial APIs': <FaCode className="text-gray-600" />,
    'WhatsApp Business API': <FaCode className="text-gray-600" />,
    'Database Design': <FaDatabase className="text-gray-600" />,
    'Data Modeling': <FaDatabase className="text-gray-600" />,
    'Docker': <FaCode className="text-gray-600" />,
    'AWS': <FaCode className="text-gray-600" />,
    'Vercel': <FaCode className="text-gray-600" />,
    'SEO Optimization': <FaCode className="text-gray-600" />,
    'Performance Optimization': <FaCode className="text-gray-600" />,
    'AI/ML Integration': <FaCode className="text-gray-600" />,
    'CI/CD': <FaCode className="text-gray-600" />,
    'User Research': <FaCode className="text-gray-600" />,
    'Java': <FaJava className="text-gray-600" />,
    'Spring Boot': <SiSpringboot className="text-gray-600" />,
  };
  
  return iconMap[name] || <FaCode className="text-gray-600" />;
};

const Skills = () => {
  const renderSkillCategory = (category: SkillCategory, title: string, icon: JSX.Element) => (
    <div className="mb-10">
      <div className="flex items-center mb-6">
        <div className="text-accent mr-3">{icon}</div>
        <p className="text-xl text-primary">{title}</p>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {SKILLS[category].map((skill, index) => (
          <div 
            key={index} 
            className="bg-white px-4 py-2 rounded-lg flex items-center gap-2 border border-gray-100 hover:shadow-md transition-shadow"
          >
            <span className="text-lg">{getSkillIcon(skill.name)}</span>
            <span className="text-secondary">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="pt-16">
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
