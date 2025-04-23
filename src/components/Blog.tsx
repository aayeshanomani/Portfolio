import React from 'react';
import { motion } from 'framer-motion';

interface BlogPost {
  title: string;
  description: string;
  date: string;
  readTime: string;
  link: string;
  tags: string[];
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      title: "Building Scalable Systems at Amazon",
      description: "Insights and lessons learned from designing and implementing large-scale distributed systems...",
      date: "2025-03-15",
      readTime: "8 min read",
      link: "/blog/building-scalable-systems",
      tags: ["System Design", "AWS", "Architecture"]
    },
    {
      title: "Modern React Best Practices",
      description: "A comprehensive guide to writing clean, efficient, and maintainable React code...",
      date: "2025-02-28",
      readTime: "6 min read",
      link: "/blog/react-best-practices",
      tags: ["React", "JavaScript", "Web Development"]
    },
    // Add more blog posts as needed
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto pt-20 bg-nomad-background text-nomad-highlight font-heading"
    >
      <h2 className="text-3xl font-bold mb-8 flex items-center">
        <span className="text-nomad-accent font-mono mr-2">03.</span>
        Blog Posts
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-nomad-primary/80 p-6 rounded-xl shadow-glow flex flex-col"
            whileHover={{ y: -5, boxShadow: '0 0 20px #38bdf8' }}
          >
            <a href={post.link} className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4 text-sm text-nomad-highlight">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-nomad-accent mb-2">{post.title}</h3>
              
              <p className="text-nomad-highlight mb-4">{post.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm font-mono text-nomad-accent bg-nomad-accent/10 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
};

export default Blog;
