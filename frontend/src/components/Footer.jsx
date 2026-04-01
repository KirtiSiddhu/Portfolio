import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-800 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-slate-500 text-sm mb-4">
          Built with React, Tailwind CSS, and Framer Motion by Kirti Siddhu
        </p>
        <p className="text-slate-500 text-xs">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
