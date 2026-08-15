import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import FloatingNav from './components/layout/FloatingNav';
import Hero from './sections/Hero';
import SocialAndTech from './sections/SocialAndTech';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });
    
    window.lenis = lenis;
    
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-950 selection:bg-cyan-500/30">
      <FloatingNav />

      <main className="flex flex-col">
        <Hero />
        <SocialAndTech />
        <About />
        <Skills />
        <Projects />
        <Contact /> 

      </main>
    </div>
  );
}

export default App;