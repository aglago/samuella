// components/Services.tsx
import { 
    FaLaptopCode, 
    FaPalette, 
    FaShoppingCart, 
    FaRobot, 
    FaPlug, 
    FaDatabase, 
    FaShieldAlt,
  } from 'react-icons/fa';
  import { SERVICES } from '@/lib/constants';
  import SimpleServiceCard from './SimpleServiceCard';
  
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
        className="rounded-md shadow transition-all duration-200 h-full border border-gray-100 overflow-hidden"
        style={{ animationDelay }}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-start mb-4">
            <div className="bg-light p-3 rounded-lg mr-4 flex-shrink-0">
              {getIcon()}
            </div>
            <h3 className="text-xl font-semibold text-primary pt-2 heading-secondary">{title}</h3>
          </div>
          <p className="text-secondary flex-grow leading-relaxed">{description}</p>
        </div>
      </div>
    );
  };
  
  // Main component with two possible layouts
  interface ServicesProps {
    showHeading?: boolean;
    compact?: boolean;
    showLink?: boolean;
    simple?: boolean;
  }
  
  const Services = ({ showHeading = true, compact = false, simple = false }: ServicesProps) => {
    return (
      <section className={compact ? "py-8" : "py-3 lg:pt-0"}>
        <div className="container mx-auto px-4">
          {showHeading && (
            <div className="flex justify-between items-center mb-12">
              <div className="text-center sm:text-left mb-4 sm:mb-0">
                <h2 className="section-title mb-0">Services</h2>
              </div>
              
              {/* {showLink && (
                <Link 
                  href="/services" 
                  className="inline-flex items-center gap-2 text-primary hover:text-primary transition-colors duration-200"
                >
                  <span>Explore My Process</span>
                  <FaArrowRight />
                </Link>
              )} */}
            </div>
          )}
          
          <div className={`grid gap-6 ${simple ? 'md:grid-cols-1 lg:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
            {SERVICES.map((service, index) => 
              simple ? (
                <SimpleServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                />
              ) : (
                <ServiceCard
                  key={index}
                  index={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              )
            )}
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  