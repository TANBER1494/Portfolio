import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
];

const FloatingNav = () => {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id, href) => {
    e.preventDefault();
    setActive(id);
    setMobileMenuOpen(false); 
    
    const targetElement = document.querySelector(href);
    
    if (targetElement) {
      const navOffset = -30; 
      
      if (window.lenis) {
        window.lenis.scrollTo(targetElement, {
          offset: -navOffset, 
          duration: 1.5,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
        });
      } else {
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} 
      className="fixed top-0 inset-x-0 z-50 w-full"
    >
      <div className={`w-full transition-all duration-500 ${
        scrolled 
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/60 py-3 shadow-2xl shadow-cyan-900/10' 
          : 'bg-slate-950/40 backdrop-blur-sm border-b border-transparent py-4 md:py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between w-full">
          
          {/* Left: Mobile Logo & Desktop Spacer */}
          <div className="flex items-center flex-1">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, 'home', '#home')}
              className="text-xl font-bold text-slate-100 tracking-tight block md:hidden"
            >
              Mohamed<span className="text-cyan-400">.</span>
            </a>
          </div>

          {/* Center: Desktop Nav Items Capsule */}
          <div className="hidden md:flex flex-shrink-0 items-center gap-1 md:gap-2 px-1.5 py-1.5 bg-slate-900/50 border border-slate-800/50 rounded-full mx-auto backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = active === item.id;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.id, item.href)}
                  className={`relative group px-4 md:px-5 py-2 md:py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 ${
                    isActive ? 'text-slate-50' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-slate-800/80 rounded-full border border-slate-700/50 shadow-[0_0_10px_rgba(34,211,238,0.05)]"
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} 
                    />
                  )}
                  
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Right: Contact Button & Mobile Hamburger */}
          <div className="flex flex-1 justify-end items-center gap-2 sm:gap-3">
            
            {/* Contact Button (Visible everywhere, scaled slightly for mobile) */}
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact', '#contact')}
              className="group flex items-center gap-2 md:gap-2.5 bg-slate-50 hover:bg-cyan-400 text-slate-950 pl-4 md:pl-5 pr-1 md:pr-1.5 py-1 md:py-1.5 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:-translate-y-0.5"
            >
              <span className="text-xs md:text-sm whitespace-nowrap">Contact Me</span>
              <div className="bg-slate-950 text-slate-50 rounded-full p-1.5 group-hover:bg-slate-900 transition-colors">
                <ArrowUpRight size={16} strokeWidth={2.5} className="md:w-[18px] md:h-[18px] group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </a>

            {/* Mobile Hamburger Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-all focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Animated Dropdown Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden w-full bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800/80 shadow-2xl px-6 py-6 overflow-hidden"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => {
                const isActive = active === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.id, item.href)}
                    className={`px-4 py-3 rounded-xl text-base font-semibold transition-all flex items-center justify-between ${
                      isActive 
                        ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30' 
                        : 'text-slate-300 hover:bg-slate-900/60 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default FloatingNav;