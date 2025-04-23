import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-xl mx-auto pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-nomad-background text-nomad-highlight font-heading"
    >
      <h2 className="text-3xl font-bold mb-10 flex items-center justify-center">
        <span className="text-nomad-accent font-mono mr-2">04.</span>
        Get In Touch
      </h2>
      <p className="text-nomad-highlight mb-8 text-center text-lg">
        I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      <form onSubmit={handleSubmit} className="bg-nomad-primary/80 p-8 rounded-xl shadow-glow flex flex-col gap-6">
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-nomad-background text-nomad-highlight border border-nomad-highlight focus:ring-2 focus:ring-nomad-accent outline-none font-mono"
          />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-nomad-background text-nomad-highlight border border-nomad-highlight focus:ring-2 focus:ring-nomad-accent outline-none font-mono"
          />
        </div>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Your Message"
          className="w-full p-3 rounded-lg bg-nomad-background text-nomad-highlight border border-nomad-highlight focus:ring-2 focus:ring-nomad-accent outline-none font-mono"
        />
        <div className="text-center">
          <button
            type="submit"
            className="px-8 py-3 bg-nomad-accent text-nomad-background rounded-xl font-bold font-mono shadow-glow hover:bg-nomad-accent/80 transition-colors duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
      <div className="mt-16 text-center flex flex-col items-center gap-2">
        <p className="text-nomad-highlight mb-4">Or reach out directly:</p>
        <a
          href="mailto:aayeshanomani@gmail.com"
          className="text-nomad-accent hover:underline font-mono text-base"
        >
          aayeshanomani@gmail.com
        </a>
        <a
          href="https://github.com/aayeshanomani"
          className="text-nomad-accent hover:underline font-mono text-base"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/aayeshanomani
        </a>
        <a
          href="https://www.linkedin.com/in/aayesha-nomani-09031016b/"
          className="text-nomad-accent hover:underline font-mono text-base"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/aayesha-nomani-09031016b
        </a>
      </div>
    </motion.div>
  );
};

export default Contact;
