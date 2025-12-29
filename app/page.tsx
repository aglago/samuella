"use client";

import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Services from "@/components/SimpleServices";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Home() {
  const skillsAnimation = useScrollAnimation();
  const servicesAnimation = useScrollAnimation();
  const experienceAnimation = useScrollAnimation();
  const projectsAnimation = useScrollAnimation();
  // const contactAnimation = useScrollAnimation();

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

      {/* Skills Section */}
      <section
        ref={skillsAnimation.ref}
        className={`transition-all duration-700 ${
          skillsAnimation.isVisible
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-8"
        }`}
      >
        <Skills />
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
