import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import BlogSection from './components/BlogSection';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState('glass');

  return (
    <div className={`app theme-${theme}`}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header theme={theme} onThemeChange={setTheme} />
      <main id="main-content">
        <Hero />
        <Projects />
        <BlogSection />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
