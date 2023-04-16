import React, { useState } from 'react';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import About from './components/about/about';
import Portfolio from './components/portfolio/portfolio';
import Skills from './components/skills/skills';
import Testimonials from './components/testimonials/testimonials';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './App.css';
library.add(fab);

function App() {
  const [theme, setTheme] = useState('day');

  const toggleTheme = () => {
    setTheme(theme === 'day' ? 'night' : 'day');
  };

  return (
    <div className="AaronFolio2.0" data-theme={theme}>
      <Header />
      <button onClick={toggleTheme} style={{ position: 'absolute', top: 10, right: 10 }}>
        Toggle Night Mode
      </button>
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
