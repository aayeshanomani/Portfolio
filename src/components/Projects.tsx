import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Smart Traffic Management System",
      description: "Led the development of a system focused on efficiently managing traffic at intersections. Integrated sensor networks and artificial intelligence algorithms to optimize traffic flow and reduce congestion.",
      technologies: ["Sensors", "AI", "IoT", "Optimization"]
    },
    {
      title: "School ERP System",
      description: "Developed a comprehensive application for school management, encompassing student-teacher management, faculty administration, and finance management. Implemented features such as live online classes, homework diaries, hostel management, library management, and more.",
      technologies: ["Full Stack", "Live Classes", "Admin Panel", "Finance"]
    },
    {
      title: "One Piece Shooting Game",
      description: "A shooting game based on the theme of the One Piece anime, created in 2021.",
      technologies: ["Game Development", "C#"],
      demo: "https://aayeshanomani.itch.io/one-piece-shoot",
      image: "/assets/one%20piece%20shoot.png"
    },
    {
      title: "DevNomad CLI",
      description: "An open-source command-line portfolio that introduces me in your terminal. Type `npx devnomad` to see an interactive summary of my work, projects, socials, and current focus — without opening a browser.",
      technologies: ["Node.js", "TypeScript", "CLI", "Open Source"],
      github: "https://github.com/Aayeshanomani/devnomad-cli",
      demo: "https://www.npmjs.com/package/devnomad",
      image: "/assets/devnomad%20cli.png"
    }
  ];

  return (
    <motion.div
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto pt-20 bg-nomad-background text-nomad-highlight font-heading"
    >
      <h2 className="text-3xl font-bold mb-8 flex items-center">
        <span className="text-nomad-accent font-mono mr-2">02.</span>
        Some Things I've Built
      </h2>

      <div className="flex flex-col gap-16">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            className="bg-nomad-primary/70 rounded-xl shadow-glow p-8 flex flex-col md:flex-row md:items-center md:gap-10"
          >
            {/* Project Image (if any) */}
            {project.image && (
              <div className="flex-shrink-0 mb-6 md:mb-0 md:w-64 md:h-48 w-full h-48 rounded-lg overflow-hidden bg-nomad-background flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            )}

            {/* Project Info */}
            <div className={project.image ? "md:flex-1" : "w-full"}>
              <p className="font-mono text-nomad-accent mb-2">Featured Project</p>
              <h3 className="text-2xl font-bold mb-3 text-nomad-highlight">{project.title}</h3>
              <p className="text-nomad-highlight mb-4 leading-relaxed">{project.description}</p>
              <ul className="flex flex-wrap gap-3 mb-5">
                {project.technologies.map((tech) => (
                  <li key={tech} className="font-mono text-nomad-accent text-xs bg-nomad-accent/10 px-3 py-1 rounded-full">
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 mt-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-nomad-highlight hover:text-nomad-accent underline font-mono"
                  >
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-nomad-highlight hover:text-nomad-accent underline font-mono"
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
