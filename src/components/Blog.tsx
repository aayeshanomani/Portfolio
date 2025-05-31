import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface BlogPost {
  title: string;
  description: string;
  date: string;
  readTime: string;
  link: string;
  tags: string[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      title: "How I’m Building Alongside Working at Amazon",
      description: "How I manage side projects, grow my personal brand, and stay consistent while working full-time at Amazon...",
      date: "2025-06-01",
      readTime: "7 min read",
      link: "/blog/building-while-working-at-amazon",
      tags: ["Productivity", "Side Projects", "Developer Life"]
    }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-5xl mx-auto pt-20 px-4 sm:px-6 lg:px-8 bg-nomad-background text-nomad-highlight font-heading"
    >
      <div className="relative mb-12">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute -top-2 left-0 h-px bg-gradient-to-r from-nomad-accent/50 to-transparent"
        />
        <h2 className="text-4xl font-bold mb-4 flex items-center gap-4">
          <span className="text-nomad-accent font-mono text-2xl">03.</span>
          <span className="bg-gradient-to-r from-nomad-accent to-nomad-highlight bg-clip-text text-transparent">
            Blog Posts
          </span>
        </h2>
        <p className="text-nomad-highlight/80 max-w-2xl">
          Thoughts, learnings, and insights from my journey as a software engineer.
        </p>
      </div>

      <motion.div 
        className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8"
        variants={containerVariants}
      >
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.title}
            variants={itemVariants}
            className="group relative bg-nomad-primary/80 p-6 rounded-xl backdrop-blur-sm flex flex-col border border-nomad-accent/10 hover:border-nomad-accent/30 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <Link to={post.link} className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4 text-sm text-nomad-highlight/80">
                  <span className="font-mono">{post.date}</span>
                  <span className="text-nomad-accent">•</span>
                  <span className="font-mono">{post.readTime}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-nomad-accent mb-3 group-hover:text-nomad-accent/90 transition-colors duration-300">
                {post.title}
              </h3>
              
              <p className="text-nomad-highlight/90 mb-6 line-clamp-3">{post.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm font-mono text-nomad-accent/90 bg-nomad-accent/10 rounded-full border border-nomad-accent/20 hover:border-nomad-accent/40 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="absolute bottom-6 right-6 text-nomad-accent/50 group-hover:text-nomad-accent transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Blog;
