import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Education from '../components/Education/Education';
import Certifications from '../components/Certification/Certification';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Footer from '../components/Footer/Footer';
import './css/Home.css';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Education />
      <Certifications />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
