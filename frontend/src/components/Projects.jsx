import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'MERN', 'Python', 'PHP'];

  const filteredProjects = filter === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-padding">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-2">Featured Projects</h2>
        <div className="h-1 w-20 bg-sky-500 mx-auto rounded-full" />
      </div>

      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full border transition-all ${
              filter === cat 
                ? 'bg-sky-500 border-sky-500 text-white' 
                : 'border-slate-700 text-slate-400 hover:border-sky-500/50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div 
        layout
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="glass-card overflow-hidden group flex flex-col"
            >
              <div className="h-48 bg-slate-700 overflow-hidden relative">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-slate-600">
                    {project.category}
                  </div>
                )}
                <div className="absolute inset-0 bg-sky-500/10 group-hover:bg-transparent transition-colors" />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] uppercase tracking-widest text-sky-400 font-bold bg-sky-400/10 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between">
                  <a href={project.github} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
                    <FaGithub /> Code
                  </a>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
