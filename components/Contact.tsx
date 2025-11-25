import React from 'react';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Collaborate</h2>
        <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
          Whether you have a project in mind involving complex control systems, need a brand refresh, or just want to discuss the latest tech, I'm open to chatting.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <a href="mailto:hello@polymath.dev" className="group p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20">
              <Mail className="text-blue-400" />
            </div>
            <h3 className="text-white font-semibold mb-1">Email Me</h3>
            <p className="text-slate-400 text-sm">hello@polymath.dev</p>
          </a>
          
          <a href="#" className="group p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-purple-500 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/20">
              <Linkedin className="text-purple-400" />
            </div>
            <h3 className="text-white font-semibold mb-1">Connect</h3>
            <p className="text-slate-400 text-sm">LinkedIn Profile</p>
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a href="#" className="text-slate-500 hover:text-white transition-colors">
            <Github size={24} />
          </a>
          <a href="#" className="text-slate-500 hover:text-white transition-colors">
            <Twitter size={24} />
          </a>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-800 text-slate-500 text-sm">
          © {new Date().getFullYear()} Polymath Portfolio. All rights reserved.
        </div>
      </div>
    </section>
  );
};
