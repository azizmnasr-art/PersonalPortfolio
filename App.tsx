import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Articles } from './components/Articles';
import { Contact } from './components/Contact';
import { AIChat } from './components/AIChat';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Articles />
        <Contact />
      </main>
      <AIChat />
    </div>
  );
};

export default App;
