import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CursorGlow } from './components/CursorGlow';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './pages/Home';

const PrivacyPolicy = lazy(() =>
  import('./pages/PrivacyPolicy').then((m) => ({ default: m.PrivacyPolicy }))
);
const TermsAndConditions = lazy(() =>
  import('./pages/TermsAndConditions').then((m) => ({ default: m.TermsAndConditions }))
);

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const next = window.scrollY > 40;
      setScrolled((prev) => (prev !== next ? next : prev));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="app flex flex-col min-h-screen">
        <CursorGlow />

        {/* Architectural Grid & Radial Mesh Background */}
        <div className="bg-animation fixed inset-0 -z-20 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-linear-to-b from-slate-50 via-white to-slate-100 dark:from-[#060913] dark:via-[#0a0f1e] dark:to-[#060913] transition-colors duration-300" />
          <div
            className="absolute inset-0 opacity-60 dark:opacity-35"
            style={{
              backgroundImage:
                'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(99,102,241,0.16), transparent), radial-gradient(ellipse 60% 40% at 85% 20%, rgba(14,165,233,0.09), transparent)',
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.045)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          {/* Subtle ambient nodes (desktop only for peak mobile FPS) */}
          <div className="floating-shapes absolute inset-0 opacity-30 dark:opacity-15 max-md:hidden">
            <div className="shape-float absolute w-[360px] h-[360px] bg-primary/15 rounded-full blur-3xl top-1/5 left-1/5" />
            <div className="shape-float shape-delay-2 absolute w-[320px] h-[320px] bg-secondary/15 rounded-full blur-3xl top-1/2 right-1/5" />
          </div>
        </div>

        <Header scrolled={scrolled} />

        <main className="relative z-10 flex flex-col flex-grow">
          <Suspense fallback={<div className="min-h-screen" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/privacidad" element={<PrivacyPolicy />} />
              <Route path="/terminos" element={<TermsAndConditions />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
        <FloatingActions />
      </div>
    </Router>
  );
};

export default App;
