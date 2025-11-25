import React, { useState } from 'react';
import { PROJECTS, SKILLS_DATA } from '../constants';
import { SkillCategory } from '../types';
import { Code, Layout, PenTool, Zap, Settings, Camera, Layers, ExternalLink } from 'lucide-react';

const iconMap: Record<string, React.FC<any>> = {
  'Code': Code,
  'Layout': Layout,
  'PenTool': PenTool,
  'Zap': Zap,
  'Settings': Settings,
  'Camera': Camera,
};

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | 'All'>('All');

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Selected Works</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A curation of technical, creative, and industrial projects from my career.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === 'All' 
                ? 'bg-white text-slate-900 shadow-lg' 
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            All
          </button>
          {SKILLS_DATA.map((skill) => {
            const Icon = iconMap[skill.icon] || Layers;
            return (
              <button
                key={skill.id}
                onClick={() => setActiveCategory(skill.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                  activeCategory === skill.id
                    ? `${skill.bg} ${skill.color} border-${skill.color.split('-')[1]}-500`
                    : 'bg-slate-800 border-transparent text-slate-400 hover:bg-slate-700'
                }`}
              >
                <Icon size={14} />
                {skill.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-slate-500 transition-all hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-2 py-1 text-xs font-semibold bg-blue-500/20 text-blue-300 rounded border border-blue-500/30 backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs text-slate-500 bg-slate-900/50 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>

                <button className="text-sm font-medium text-white flex items-center gap-1 hover:gap-2 transition-all">
                  View Case Study <ExternalLink size={14} className="text-slate-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
