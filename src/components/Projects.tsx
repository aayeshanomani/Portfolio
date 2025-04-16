import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Project One",
      description: "A full-stack web application that [description]. Implemented features including real-time updates, authentication, and data visualization.",
      technologies: ["React", "Node.js", "MongoDB", "WebSocket"],
      github: "https://github.com/yourusername/project-one",
      demo: "https://project-one.com",
      image: "/project1.jpg"
    },
    {
      title: "Project Two",
      description: "An AWS-based microservices architecture that [description]. Handles millions of requests per day with 99.99% uptime.",
      technologies: ["AWS Lambda", "DynamoDB", "API Gateway", "CloudFormation"],
      github: "https://github.com/yourusername/project-two",
      image: "/project2.jpg"
    },
    // Add more projects as needed
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto pt-20"
    >
      <h2 className="text-3xl font-bold mb-12 flex items-center">
        <span className="text-secondary font-mono mr-2">02.</span>
        Some Things I've Built
      </h2>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`relative grid md:grid-cols-2 gap-8 ${
              index % 2 === 0 ? '' : 'md:text-right'
            }`}
          >
            {/* Project Image */}
            <div className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover filter brightness-50 hover:brightness-100 transition-all duration-300"
                />
              </div>
            </div>

            {/* Project Info */}
            <div className={`flex flex-col justify-center ${
              index % 2 === 1 ? 'md:order-1 md:items-end' : ''
            }`}>
              <p className="font-mono text-secondary mb-2">Featured Project</p>
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <div className="bg-primary/90 p-6 rounded-lg shadow-xl mb-4">
                <p className="text-textSecondary">{project.description}</p>
              </div>
              <ul className={`flex flex-wrap gap-4 mb-8 ${
                index % 2 === 1 ? 'md:justify-end' : ''
              }`}>
                {project.technologies.map((tech) => (
                  <li key={tech} className="font-mono text-textSecondary text-sm">
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textPrimary hover:text-secondary"
                  >
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textPrimary hover:text-secondary"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
