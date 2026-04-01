import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Certifications', to: 'certifications' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="hero" smooth={true} className="text-2xl font-bold gradient-text cursor-pointer">
          KS.
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              spy={true}
              activeClass="text-sky-400 font-semibold"
              className="text-slate-300 hover:text-sky-400 cursor-pointer transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-sky-400 transition-colors">
            <FaGithub size={20} />
          </a>
          <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-sky-400 transition-colors">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
