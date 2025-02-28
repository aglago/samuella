// components/Services.tsx
import { 
    FaLaptopCode, 
    FaPalette, 
    FaShoppingCart, 
    FaRobot, 
    FaPlug, 
    FaDatabase, 
    FaShieldAlt,
    FaArrowRight
  } from 'react-icons/fa';
  import { SERVICES } from '@/lib/constants';
  import Link from 'next/link';
  
  interface ServiceCardProps {
    title: string;
    description: string;
    icon: string;
    index: number;
  }
  
  const ServiceCard = ({ title, description, icon, index }: ServiceCardProps) => {
    const getIcon = () => {
      switch (icon) {
        case 'FaLaptopCode':
          return <FaLaptopCode size={28} className="text-accent" />;
        case 'FaPalette':
          return <FaPalette size={28} className="text-accent" />;
        case 'FaShoppingCart':
          return <FaShoppingCart size={28} className="text-accent" />;
        case 'FaRobot':
          return <FaRobot size={28} className="text-accent" />;
        case 'FaPlug':
          return <FaPlug size={28} className="text-accent" />;
        case 'FaDatabase':
          return <FaDatabase size={28} className="text-accent" />;
        case 'FaShieldAlt':
          return <FaShieldAlt size={28} className="text-accent" />;
        default:
          return <FaLaptopCode size={28} className="text-accent" />;
      }
    };
  
    // Animation delay for staggered appearance
    const animationDelay = `${index * 0.1}s`;
  
    return (
      <div 
        className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-full border border-gray-100 overflow-hidden"
        style={{ animationDelay }}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-start mb-4">
            <div className="bg-light p-3 rounded-lg mr-4 flex-shrink-0">
              {getIcon()}
            </div>
            <h3 className="text-xl font-semibold text-primary pt-2">{title}</h3>
          </div>
          <p className="text-secondary flex-grow">{description}</p>
        </div>
      </div>
    );
  };
  
  // Main component with two possible layouts
  interface ServicesProps {
    showHeading?: boolean;
    compact?: boolean;
    showLink?: boolean;
  }
  
  const Services = ({ showHeading = true, compact = false, showLink = true }: ServicesProps) => {
    return (
      <section className={compact ? "py-8 bg-light" : "py-3 lg:pt-0 bg-light"}>
        <div className="container mx-auto px-4">
          {showHeading && (
            <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
              <div className="text-center sm:text-left mb-4 sm:mb-0">
                <h2 className="section-title mb-0">Services</h2>
              </div>
              
              {showLink && (
                <Link 
                  href="/services" 
                  className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
                >
                  <span>Explore My Process</span>
                  <FaArrowRight />
                </Link>
              )}
            </div>
          )}
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
              <ServiceCard
                key={index}
                index={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  