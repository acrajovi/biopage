import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { Home } from './pages/Home';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsAndConditions } from './pages/TermsAndConditions';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -200, y: -200 });

  // Scroll listener to toggle header Py styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse move listener for premium desktop cursor glow effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Router>
      <div className="app flex flex-col min-h-screen">
        {/* Premium Desktop Cursor Glow */}
        <div 
          className="cursor-glow pointer-events-none fixed w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 transition-[transform,opacity] duration-150 ease-out z-[99] max-md:hidden"
          style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
        />

        {/* Grid and Animation Background */}
        <div className="bg-animation fixed inset-0 -z-20 overflow-hidden pointer-events-none">
          <div className="bg-gradient absolute inset-0 bg-linear-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 transition-colors duration-300"></div>
          <div className="bg-grid absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.06)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          
          {/* Floating Shapes */}
          <div className="floating-shapes absolute inset-0 opacity-40 dark:opacity-20">
            <div className="shape-float absolute w-[400px] h-[400px] bg-primary/20 rounded-full blur-3xl top-1/4 left-1/4"></div>
            <div className="shape-float shape-delay-2 absolute w-[350px] h-[350px] bg-accent/20 rounded-full blur-3xl top-1/2 right-1/4"></div>
            <div className="shape-float shape-delay-4 absolute w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl bottom-10 left-1/3"></div>
          </div>
        </div>

        <Header scrolled={scrolled} />
        
        <main className="relative z-10 flex flex-col flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacidad" element={<PrivacyPolicy />} />
            <Route path="/terminos" element={<TermsAndConditions />} />
          </Routes>
        </main>

        <Footer />
        <FloatingActions />
      </div>
    </Router>
  );
};

export default App;
