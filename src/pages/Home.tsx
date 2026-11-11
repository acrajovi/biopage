import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { FAQ } from '../components/FAQ';
import { FreeTools } from '../components/FreeTools';
import { Hero } from '../components/Hero';
import { Portfolio } from '../components/Portfolio';
import { Process } from '../components/Process';
import { Products } from '../components/Products';
import { Services } from '../components/Services';
import { TechStack } from '../components/TechStack';
import { scrollToSection } from '../utils/scroll';

export const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const timer = setTimeout(() => scrollToSection(targetId), 100);
      return () => clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [location.hash, location.pathname]);

  return (
    <>
      <Hero />
      <About />
      <Process />
      <Services />
      <Portfolio />
      <TechStack />
      <Products />
      <FreeTools />
      <FAQ />
      <Contact />
    </>
  );
};
