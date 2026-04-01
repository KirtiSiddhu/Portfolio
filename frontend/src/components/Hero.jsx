import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />

      <div className="section-padding relative z-10 w-full max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <span className="text-sky-400 font-mono mb-4 block text-lg">Hi, my name is</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              {portfolioData.name}
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-6">
              {portfolioData.title}
            </h2>
            <p className="max-w-xl text-slate-400 text-lg mb-10 leading-relaxed">
              {portfolioData.tagline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Link
                to="contact"
                smooth={true}
                className="px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-full transition-all cursor-pointer shadow-lg shadow-sky-500/20 text-center"
              >
                Get In Touch
              </Link>
              <a
                href="/resume.pdf"
                download="Kirti_Siddhu_Resume.pdf"
                className="px-8 py-3 border border-slate-700 hover:border-sky-500 text-slate-300 hover:text-sky-400 font-semibold rounded-full transition-all text-center"
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative group">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden glass-card p-3 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                <img
                  src="/profile.jpg"
                  alt="Kirti Siddhu"
                  className="w-full h-full object-cover object-top rounded-xl"
                />
              </div>
              <div className="absolute -z-10 inset-0 border-2 border-sky-500 rounded-2xl -rotate-3 group-hover:rotate-0 transition-transform duration-500" />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <div className="w-1 h-12 bg-gradient-to-b from-sky-500 to-transparent rounded-full" />
      </motion.div>
    </section>
  );
};

export default Hero;
