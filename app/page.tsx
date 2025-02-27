import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Samuella | Full Stack Web Developer',
  description: 'Professional portfolio of Samuella, a Full Stack Web Developer specializing in creating innovative, user-friendly web applications.',
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Skills Section */}
      <Skills />

      {/* Services Section */}
      <Services />

      {/* Featured Projects Section (limited to 3) */}
      <Projects limit={3} />

      {/* Contact Section */}
      <Contact />
    </>
  );
}
