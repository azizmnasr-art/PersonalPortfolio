import React from 'react';
import { ARTICLES } from '../constants';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const Articles: React.FC = () => {
  return (
    <section id="articles" className="py-24 bg-slate-950">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Latest Insights</h2>
            <p className="text-slate-400">Thoughts on engineering, design, and technology.</p>
          </div>
          <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center gap-2 font-medium transition-colors">
            Read all articles <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <article key={article.id} className="flex flex-col p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-600 transition-colors">
              <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                <span className="flex items-center gap-1">
                  <Calendar size={12} /> {article.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} /> {article.readTime}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-100 mb-3 hover:text-blue-400 transition-colors cursor-pointer">
                {article.title}
              </h3>
              
              <p className="text-slate-400 text-sm mb-6 flex-grow">
                {article.excerpt}
              </p>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs font-medium px-2 py-1 rounded bg-slate-800 text-slate-300">
                  {article.category}
                </span>
                <a href="#" className="text-sm font-medium text-blue-400 hover:underline">
                  Read more
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
