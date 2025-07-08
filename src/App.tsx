import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Languages from './components/Languages';
import Tools from './components/Tools';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-900 dark:bg-slate-900 text-white font-['Poppins',sans-serif] overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Languages />
          <Tools />
          <Projects />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;