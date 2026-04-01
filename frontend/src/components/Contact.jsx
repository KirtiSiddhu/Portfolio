import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      await axios.post('https://portfolio-k0vs.onrender.com/api/contact', formData);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('Failed to send message. Please try again.');
    }
  };

  const contactInfo = [
    { icon: FaEnvelope, label: 'Email', value: portfolioData.email, href: `mailto:${portfolioData.email}` },
    { icon: FaPhone, label: 'Phone', value: `+91 ${portfolioData.phone}`, href: `tel:+91${portfolioData.phone}` },
    { icon: FaMapMarkerAlt, label: 'Location', value: 'Lovely Professional University, Punjab', href: '#' },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
        <div className="h-1 w-20 bg-sky-500 mx-auto rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">Let's connect</h3>
          <p className="text-slate-400 mb-8">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>

          <div className="space-y-6">
            {contactInfo.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">{item.label}</p>
                  <p className="text-slate-300 font-medium group-hover:text-sky-400 transition-colors">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="flex gap-4 mt-10">
            <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-sky-500 hover:border-sky-500 transition-all">
              <FaLinkedin />
            </a>
            <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-sky-500 hover:border-sky-500 transition-all">
              <FaGithub />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Name</label>
              <input
                type="text"
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-sky-500 transition-colors"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-sky-500 transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Message</label>
              <textarea
                rows="4"
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-sky-500 transition-colors resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            <button className="w-full py-4 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-lg transition-all shadow-lg shadow-sky-500/20">
              Send Message
            </button>
            {status && <p className="text-center text-sm font-medium text-sky-400 mt-4">{status}</p>}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
