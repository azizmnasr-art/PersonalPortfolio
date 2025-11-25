import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HERO_TITLE, HERO_SUBTITLE } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-purple-600/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] left-[60%] w-[20%] h-[20%] bg-teal-500/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium mb-6">
          <span className="flex w-2 h-2 bg-blue-400 rounded-full mr-2 animate-ping"></span>
          Available for new opportunities
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
          {HERO_TITLE}
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          {HERO_SUBTITLE}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#projects" 
            className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
          >
            View Work
            <ArrowRight size={18} />
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-3.5 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-medium rounded-lg transition-all flex items-center justify-center"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};
