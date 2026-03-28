"use client";

import Hero from "@/components/Hero";
import Services from "@/components/SimpleServices";
import Pricing from "@/components/Pricing";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Home() {
  const servicesAnimation = useScrollAnimation();
  const pricingAnimation = useScrollAnimation();
  const experienceAnimation = useScrollAnimation();
  const projectsAnimation = useScrollAnimation();
  const testimonialsAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Projects Section */}
      <section
        ref={projectsAnimation.ref}
        className={`transition-all duration-700 delay-200 ${
          projectsAnimation.isVisible
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-8"
        }`}
      >
        <Projects limit={3} />
      </section>
      


      {/* Services Section */}
      <section
        ref={servicesAnimation.ref}
        className={`transition-all duration-700 delay-100 ${
          servicesAnimation.isVisible
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-8"
        }`}
      >
        <Services />
      </section>

      {/* Pricing Section */}
      <section
        ref={pricingAnimation.ref}
        className={`transition-all duration-700 ${
          pricingAnimation.isVisible
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-8"
        }`}
      >
        <Pricing />
      </section>

      {/* Experience Section */}
      <section
        ref={experienceAnimation.ref}
        className={`transition-all duration-700 delay-150 ${
          experienceAnimation.isVisible
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-8"
        }`}
      >
        <Experience />
      </section>

      {/* Testimonials Section */}
      <section
        ref={testimonialsAnimation.ref}
        className={`transition-all duration-700 ${
          testimonialsAnimation.isVisible
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-8"
        }`}
      >
        <Testimonials />
      </section>

      {/* CTA Section */}
      <section
        ref={ctaAnimation.ref}
        className={`transition-all duration-700 ${
          ctaAnimation.isVisible
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-8"
        }`}
      >
        <CTA />
      </section>

      {/* Contact Section
      <section
        ref={contactAnimation.ref}
        className={`transition-all duration-700 delay-300 ${
          contactAnimation.isVisible
            ? 'opacity-100 transform translate-y-0'
            : 'opacity-0 transform translate-y-8'
        }`}
      >
        <Contact />
      </section> */}
    </>
  );
}
