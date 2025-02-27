import { Metadata } from 'next';
import ProjectsClient from './projects-client';

export const metadata: Metadata = {
  title: 'Projects | Samuella - Full Stack Web Developer',
  description: 'Explore the projects created by Samuella, a full-stack web developer specializing in JavaScript, TypeScript, React, Node.js, and MongoDB.',
  openGraph: {
    title: 'Web Development Projects | Samuella',
    description: 'Explore my portfolio of web development projects, including e-commerce platforms, task management applications, and custom content management systems.',
    url: 'https://www.samuella.site/projects',
    images: [
      {
        url: 'https://www.samuella.site/images/projects-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Samuella - Web Development Projects',
      },
    ],
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
