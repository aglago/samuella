// app/services/page.tsx
import Services from '@/components/Services';
import { Metadata } from 'next';
import Link from 'next/link';
import { FaCheck } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Services | Samuella - Full Stack Web Developer',
  description: 'Discover the web development services offered by Samuella, including custom web application development, website design, e-commerce solutions, and more.',
};

export default function ServicesPage() {
    const processSteps = [
        {
          title: "Discovery",
          year: "Step 1",
          description: "I start by understanding your business, goals, and requirements through in-depth consultation. This helps me gain insights into your vision and what you're trying to achieve with your digital presence."
        },
        {
          title: "Planning",
          year: "Step 2",
          description: "Together we develop a strategic plan with timelines, milestones, and deliverables. This roadmap guides the entire development process and ensures we stay on track to meet your goals."
        },
        {
          title: "Design & Development",
          year: "Step 3",
          description: "I create user-friendly designs and develop robust, scalable solutions using the latest technologies. Each element is crafted with attention to detail, ensuring your project is both beautiful and functional."
        },
        {
          title: "Testing & Launch",
          year: "Step 4",
          description: "Rigorous testing ensures everything works perfectly before launching your project to the world. I meticulously check for bugs, performance issues, and compatibility across different devices and browsers."
        },
        {
          title: "Support & Maintenance",
          year: "Step 5",
          description: "I provide ongoing support and maintenance to keep your digital solutions running smoothly. This includes regular updates, security patches, and performance optimizations as needed."
        }
      ];

  const benefits = [
    "Custom solutions tailored to your specific needs",
    "Modern, responsive designs that work on all devices",
    "Clean, efficient code that's easy to maintain",
    "SEO-friendly development practices",
    "Ongoing support and timely updates",
    "Transparent communication throughout the process"
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="bg-primary pt-5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Services</h1>
            <p className="text-xl opacity-90 mb-8">
              I deliver high-quality web development services that help businesses establish a strong online presence and achieve their digital goals.
            </p>
          </div>
        </div>
      </div>
      
      {/* Main Services Section */}
      <Services showHeading={false} />
      
      {/* My Process Section */}
      <section className="py-8 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="section-title mx-auto text-center mb-16">My Process</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-gray-200"></div>
              
              {/* Timeline items */}
              {processSteps.map((step, index) => (
                <div key={index} className="mb-16 last:mb-0 pl-10 relative">
                  {/* Circle marker */}
                  <div className="absolute left-0 top-1">
                    <div className="w-4 h-4 rounded-full border-2 border-accent bg-light"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col">
                    <div className="flex items-baseline mb-2">
                      <h3 className="text-xl font-bold text-primary mr-3">{step.title}</h3>
                      <span className="text-sm text-accent font-medium">{step.year}</span>
                    </div>
                    <p className="text-secondary">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-8 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="section-title mx-auto text-center mb-12">Why Work With Me</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-accent mr-3 mt-1">
                    <FaCheck />
                  </div>
                  <p className="text-secondary">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your ideas and create something amazing together.
          </p>
          <Link 
  href="/contact" 
  className="inline-flex items-center justify-center gap-2 bg-primary text-light font-medium px-8 py-3 rounded hover:bg-dark transition-colors"
>
  <span>Get in Touch</span>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-4 w-4" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M14 5l7 7m0 0l-7 7m7-7H3" 
    />
  </svg>
</Link>

        </div>
      </section>
    </>
  );
}
