import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';
import Education from './components/Education';
import { portfolioData } from './data/portfolioData';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-sky-500 z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        
        <section id="certifications" className="section-padding bg-slate-900/50">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest text-sky-500">Certifications</h2>
              <ul className="space-y-4">
                {portfolioData.certifications.map((cert, idx) => (
                   <li key={idx} className="glass-card p-4 border-l-4 border-sky-500">
                     <p className="text-white font-medium">{cert.name}</p>
                     <p className="text-xs text-slate-500">{cert.issuer}</p>
                   </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest text-sky-500">Achievements</h2>
              <ul className="space-y-4">
                {portfolioData.achievements.map((ach, idx) => (
                  <li key={idx} className="glass-card p-4 border-l-4 border-indigo-500">
                     <p className="text-white font-medium">{ach.title}</p>
                     {ach.platforms && <p className="text-xs text-slate-500">{ach.platforms.join(', ')}</p>}
                     {ach.skills && <p className="text-xs text-slate-500">{ach.skills.join(', ')}</p>}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        <Education />
        <Contact />
      </main>
      
      <Footer />

      {/* Scroll to Top */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white shadow-xl hover:bg-sky-600 transition-all z-40"
      >
        ↑
      </button>
    </div>
  )
}

export default App
