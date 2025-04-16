import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-secondary mb-4">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Aayesha Nomani
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-textSecondary mb-6">
            Software Development Engineer at AWS
          </h2>
          <p className="text-textSecondary text-lg mb-8 max-w-xl">
            Results-driven Software Development Engineer II (SDE II) at AWS with a robust background 
            in software development. Over 5 years of experience, including 2 years in freelancing, 
            demonstrating a strong ability to deliver high-quality, scalable solutions across web, 
            mobile, and cloud platforms.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-secondary/10 border border-secondary text-secondary rounded hover:bg-secondary/20 transition-colors duration-300 text-center"
            >
              View My Work
            </a>
            <a
              href="mailto:aayeshanomani@gmail.com"
              className="px-6 py-3 border border-textSecondary text-textSecondary rounded hover:bg-textSecondary/10 transition-colors duration-300 text-center"
            >
              Get In Touch
            </a>
          </div>
          <div className="mt-8 flex items-center text-textSecondary">
            <span>Bangalore, India</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
