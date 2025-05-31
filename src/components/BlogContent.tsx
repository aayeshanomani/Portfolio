import React from 'react';
import { motion } from 'framer-motion';

const BlogContent: React.FC = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-nomad-background to-nomad-primary/30">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto pt-20 px-4 pb-16 text-nomad-highlight relative"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-96 bg-nomad-accent/10 blur-3xl rounded-full opacity-30 -z-10" />
        <div className="absolute top-40 right-0 w-72 h-72 bg-nomad-accent/5 blur-3xl rounded-full opacity-30 -z-10" />
        <div className="absolute top-80 left-0 w-60 h-60 bg-nomad-accent/5 blur-3xl rounded-full opacity-30 -z-10" />
        
        {/* Header Section */}
        <motion.div 
          variants={itemVariants}
          className="mb-16 backdrop-blur-sm bg-nomad-primary/10 p-8 rounded-2xl border border-nomad-accent/10 shadow-lg"
        >
          {/* Back button */}
          <motion.a
            href="/blog"
            className="inline-flex items-center text-sm text-nomad-accent hover:text-nomad-highlight transition-colors mb-8 group bg-nomad-primary/30 px-4 py-2 rounded-lg"
            whileHover={{ x: -4 }}
          >
            <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </motion.a>

          {/* Meta information */}
          <div className="flex items-center space-x-4 text-sm mb-6 text-nomad-highlight/80 border-b border-nomad-accent/10 pb-4">
            <span className="font-mono">2025-06-01</span>
            <span>•</span>
            <span>7 min read</span>
          </div>

          {/* Title */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl font-bold bg-gradient-to-r from-nomad-accent to-nomad-highlight bg-clip-text text-transparent mb-6 leading-tight"
          >
            How I'm Building While Working Full-Time at Amazon
          </motion.h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {["Productivity", "Side Projects", "Developer Life", "Amazon", "DevNomad"].map(tag => (
              <span
                key={tag}
                className="px-4 py-2 text-sm font-mono text-nomad-accent bg-nomad-primary/30 rounded-lg border border-nomad-accent/20 hover:bg-nomad-accent/20 transition-all duration-300 cursor-default hover:scale-105"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-xl leading-relaxed text-nomad-highlight/90"
          >
            Balancing a full-time job at Amazon with personal projects, content creation, and learning isn't easy — but it's possible. Here's how I'm managing it, what I'm building, and what keeps me going.
          </motion.p>
        </motion.div>

        {/* Content Section */}
        <motion.div 
          variants={itemVariants}
          className="prose prose-lg prose-invert max-w-none backdrop-blur-sm bg-nomad-primary/10 p-8 rounded-2xl border border-nomad-accent/10 shadow-lg space-y-6"
        >
          <p>
            Working at Amazon as an SDE II is intense. There are weekly sprints, ownership reviews, design docs, and deep tech challenges — all of which demand focus and time. But I also wanted to build something of my own. So I started DevNomad — a personal brand and a suite of tools, projects, and experiments I work on outside my 9 to 5.
          </p>

          <h2>Why build outside work?</h2>
          <p>Because work is for ownership. But side projects? That's for creativity. I don't need approval, alignment, or roadmap consensus. I just build.</p>

          <h2>My focus areas:</h2>
          <ul>
            <li><strong>Developer tools:</strong> Like the DevNomad CLI — a command-line portfolio built in Node.js and published on npm.</li>
            <li><strong>Open design:</strong> My portfolio site is open source. Every feature, blog, or experiment is designed to be public.</li>
            <li><strong>YouTube and writing:</strong> I started documenting what I build, why I build it, and how I do it — through videos, blog posts, and tweets.</li>
          </ul>

          <h2>How I balance it with Amazon</h2>
          <p>There's no hack. I use weekends and a few evenings. I aggressively say no to distraction — no binge-watching, no mindless scrolling. I block time for content, side project commits, and DSA prep.</p>

          <p>Here's a rough schedule that works for me:</p>
          <ul>
            <li><strong>Weekdays (post work):</strong> 1–2 hours max for light work — writing, editing, or quick tasks.</li>
            <li><strong>Weekends:</strong> 4–6 hours for deep work — coding, recording, or designing.</li>
          </ul>

          <p>Tools I rely on: Notion, Linear, VSCode, Figma, and GitHub Projects for task tracking.</p>

          <h2>What I've learned</h2>
          <ul>
            <li><strong>Start small.</strong> Your side project doesn't have to be a unicorn idea. DevNomad started as a CLI command that showed my name.</li>
            <li><strong>Ship fast.</strong> Don't wait to perfect it — launch, learn, iterate.</li>
            <li><strong>Talk about it.</strong> Documenting your journey builds visibility, community, and feedback loops.</li>
          </ul>

          <h2>What's next</h2>
          <p>I'm building a real-time model training dashboard for ML projects, and planning a few YouTube videos on how I use GenAI in developer workflows. I also want to write more about system design and my experience leading the ingestion team for AWS Q.</p>

          <p>If you're also working full-time and dreaming of shipping your own thing — start today. One hour a day is 365 hours a year. That's a full-time side hustle.</p>

          <p className="text-lg font-medium text-nomad-accent">See you in the terminal.<br />– Aayesha (DevNomad)</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BlogContent;
