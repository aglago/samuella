"use client";

import { useState, useEffect } from "react";
import { CURRENT_PROJECT, FEATURED_PROJECTS } from "@/lib/constants";
import { IProject } from "@/models/Project";
import axios from "axios";
import ProjectCard from "@/components/ProjectCard";
import { FaCode } from "react-icons/fa";
import CurrentProjectCard from "@/components/CurrentProjectCard";


export default function ProjectsClient() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Try to fetch from API (if database is set up)
        const { data } = await axios.get("/api/projects");
        if (data && data.length > 0) {
          setProjects(data);
        } else {
          // Fallback to constants
          setProjects(FEATURED_PROJECTS as unknown as IProject[]);
        }
      } catch (error) {
        // Fallback to constants on error
        setProjects(FEATURED_PROJECTS as unknown as IProject[]);
        console.log(error);
        
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-2 text-primary">Projects</h1>
        <p className="text-secondary mb-16">
          Explore some of my recent work. Each project represents a unique
          challenge and solution.
        </p>

        {/* Currently Working On Section */}
        <CurrentProjectCard {...CURRENT_PROJECT} />

        {/* Other Projects Section */}
        <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
          <FaCode className="mr-2 text-accent" /> All Projects
        </h2>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                imageUrl={project.imageUrl}
                projectUrl={project.projectUrl}
                githubUrl={project.githubUrl}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
