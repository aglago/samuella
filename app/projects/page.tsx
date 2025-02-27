import { Metadata } from 'next';
import ProjectsClient from './projects-client';

export const metadata: Metadata = {
  title: 'Projects | Samuella - Full Stack Web Developer',
  description: 'Explore the projects created by Samuella, a full-stack web developer specializing in JavaScript, TypeScript, React, Node.js, and MongoDB.',
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
