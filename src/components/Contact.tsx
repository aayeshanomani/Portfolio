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
      className="max-w-2xl mx-auto pt-20"
    >
      <h2 className="text-3xl font-bold mb-8 flex items-center">
        <span className="text-secondary font-mono mr-2">04.</span>
        Get In Touch
      </h2>

      <p className="text-textSecondary mb-8 text-center">
        I'm currently open to new opportunities and collaborations. Whether you have
        a question or just want to say hi, I'll try my best to get back to you!
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-textSecondary mb-2 font-mono"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-primary/30 border border-textSecondary/20 rounded-lg px-4 py-2 text-textPrimary focus:outline-none focus:border-secondary transition-colors duration-300"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-textSecondary mb-2 font-mono"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-primary/30 border border-textSecondary/20 rounded-lg px-4 py-2 text-textPrimary focus:outline-none focus:border-secondary transition-colors duration-300"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-textSecondary mb-2 font-mono"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full bg-primary/30 border border-textSecondary/20 rounded-lg px-4 py-2 text-textPrimary focus:outline-none focus:border-secondary transition-colors duration-300"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-8 py-3 bg-secondary/10 border border-secondary text-secondary rounded-lg hover:bg-secondary/20 transition-colors duration-300"
          >
            Send Message
          </button>
        </div>
      </form>

      <div className="mt-16 text-center">
        <p className="text-textSecondary mb-4">Or reach out directly:</p>
        <a
          href="mailto:your.email@example.com"
          className="text-secondary hover:underline"
        >
          your.email@example.com
        </a>
      </div>
    </motion.div>
  );
};

export default Contact;
