import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Process } from '../components/Process';
import { Services } from '../components/Services';
import { Portfolio } from '../components/Portfolio';
import { TechStack } from '../components/TechStack';
import { Products } from '../components/Products';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Contact';

export const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      // Small timeout to ensure DOM is rendered before scrolling
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const header = document.querySelector('.header') as HTMLElement;
          const headerHeight = header ? header.offsetHeight : 70;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
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
      <FAQ />
      <Contact />
    </>
  );
};
