import React, { useState } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Work', href: '#projects' },
    { name: 'Articles', href: '#articles' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Hexagon className="w-8 h-8 text-blue-500" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Polymath</span>
          </a>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-600 text-slate-400"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden w-full md:block md:w-auto">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-slate-700 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="block py-2 px-3 text-slate-300 rounded hover:bg-slate-800 md:hover:bg-transparent md:hover:text-blue-500 md:p-0 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Dropdown */}
          {isOpen && (
            <div className="w-full md:hidden mt-4">
               <ul className="flex flex-col font-medium p-4 border border-slate-700 rounded-lg bg-slate-800/50">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="block py-2 px-3 text-white rounded hover:bg-slate-700"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
