import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-2">Education</h2>
        <div className="h-1 w-20 bg-sky-500 mx-auto rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {portfolioData.education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <FaGraduationCap size={80} />
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                  {edu.institution}
                </h3>
                <p className="text-sky-400 font-medium">
                  {edu.degree} in {edu.field}
                </p>
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-sm bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700/50 self-start md:self-center">
                <FaCalendarAlt size={12} />
                {edu.period}
              </div>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-sky-500" />
                {edu.location}
              </div>
              {edu.cgpa && (
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white">CGPA:</span>
                  <span className="text-sky-400">{edu.cgpa}</span>
                </div>
              )}
              {edu.percentage && (
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white">Percentage:</span>
                  <span className="text-sky-400">{edu.percentage}</span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
