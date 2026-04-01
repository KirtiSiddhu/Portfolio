import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="h-1 w-20 bg-sky-500 mx-auto rounded-full mb-8" />
          
          <div className="space-y-2 mb-10">
            {portfolioData.about.highlights.map((highlight, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="text-sky-400 font-bold text-xl md:text-2xl tracking-wider uppercase"
              >
                {highlight}
              </motion.p>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12"
        >
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 text-lg leading-relaxed whitespace-pre-wrap text-center">
              {portfolioData.about.description}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          {['Adaptability', 'Teamwork', 'Quick Learner', 'Problem Solver'].map((item) => (
            <div key={item} className="flex items-center justify-center gap-2 text-sm text-slate-400 bg-slate-800/50 py-3 rounded-full border border-slate-700/50">
              <span className="text-sky-500 text-lg">▹</span> {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
