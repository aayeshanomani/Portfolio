import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full bg-nomad-primary/90 backdrop-blur-sm z-50 font-heading">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-mono text-nomad-accent text-xl">
            <span className="font-bold">{'<'}</span>
            Portfolio
            <span className="font-bold">{'/>'}</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-nomad-highlight hover:text-nomad-accent font-mono transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              className="block px-3 py-2 text-nomad-accent hover:text-nomad-highlight transition-colors duration-300 font-mono"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            {/* YouTube Channel Link */}
            <a
              href="https://www.youtube.com/channel/UCxr6oN6wGDOGzvTZxXqXxfA"
              className="ml-2 text-nomad-accent hover:text-nomad-highlight transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              title="My YouTube Channel (theme inspired!)"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline w-6 h-6 align-text-bottom">
                <path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.117C19.393 3.5 12 3.5 12 3.5s-7.393 0-9.386.569A2.994 2.994 0 0 0 .502 6.186C0 8.19 0 12 0 12s0 3.81.502 5.814a2.994 2.994 0 0 0 2.112 2.117C4.607 20.5 12 20.5 12 20.5s7.393 0 9.386-.569a2.994 2.994 0 0 0 2.112-2.117C24 15.81 24 12 24 12s0-3.81-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-nomad-highlight"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-3 py-2 text-nomad-highlight hover:text-nomad-accent transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="/resume.pdf"
                className="block px-3 py-2 text-nomad-accent hover:text-nomad-highlight transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
