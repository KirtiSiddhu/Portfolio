import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-slate-900/50">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-2">Technical Skills</h2>
        <div className="h-1 w-20 bg-sky-500 mx-auto rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {portfolioData.skills.map((category, idx) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-6"
          >
            <h3 className="text-sky-400 font-bold mb-6 text-lg">{category.name}</h3>
            <div className="space-y-4">
              {category.items.map((skill) => (
                <div key={skill.name} className="flex items-center gap-3 group">
                  {skill.icon && <skill.icon className="text-slate-500 group-hover:text-sky-400 transition-colors" />}
                  <span className="text-slate-400 group-hover:text-slate-200 transition-colors">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
