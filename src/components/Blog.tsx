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
      className="max-w-4xl mx-auto pt-20"
    >
      <h2 className="text-3xl font-bold mb-12 flex items-center">
        <span className="text-secondary font-mono mr-2">03.</span>
        Blog Posts
      </h2>

      <div className="space-y-8">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <a
              href={post.link}
              className="block bg-primary/30 rounded-lg p-6 hover:bg-primary/50 transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4 text-sm text-textSecondary">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors duration-300">
                {post.title}
              </h3>
              
              <p className="text-textSecondary mb-4">
                {post.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm font-mono text-secondary bg-secondary/10 rounded-full"
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
