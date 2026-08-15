import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Terminal,
  Server,
  Monitor,
  Smartphone,
  Check,
} from 'lucide-react';
import Ferrofluid from '../components/ui/Ferrofluid';

// === Terminal Tracks Data ===
const terminalTracks = [
  {
    id: 'backend',
    title: 'BACKEND INFRASTRUCTURE',
    color: 'text-amber-400',
    revealTitle: 'BACKEND',
    revealSubtitle: 'DEVELOPER',
    gradient: 'from-amber-300 via-amber-500 to-orange-600',
    shadow: 'drop-shadow-[0_0_15px_rgba(251,191,36,0.4)]',
    icon: (
      <Server
        size={36}
        className="text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]"
      />
    ),
    commands: [
      'init_core_systems --module=backend',
      'Node.js server instances running',
      'SQL database schemas synchronized',
      'Azure cloud environment deployed',
    ],
  },
  {
    id: 'frontend',
    title: 'FRONTEND DEVELOPMENT',
    color: 'text-blue-400',
    revealTitle: 'FRONTEND',
    revealSubtitle: 'DEVELOPER',
    gradient: 'from-blue-300 via-blue-500 to-indigo-600',
    shadow: 'drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]',
    icon: (
      <Monitor
        size={36}
        className="text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
      />
    ),
    commands: [
      'compile_interfaces --framework=react',
      'React virtual DOM mounted successfully',
      'Tailwind CSS utility classes injected',
      'State management synchronized',
      'Responsive layouts optimized',
    ],
  },
  {
    id: 'mobile',
    title: 'MOBILE & REAL-TIME',
    color: 'text-purple-400',
    revealTitle: 'MOBILE APP',
    revealSubtitle: 'DEVELOPER',
    gradient: 'from-purple-300 via-purple-500 to-fuchsia-600',
    shadow: 'drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]',
    icon: (
      <Smartphone
        size={36}
        className="text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]"
      />
    ),
    commands: [
      'build_mobile_engine --target=flutter',
      'Flutter cross-platform engine booted',
      'Firebase cloud messaging verified',
      'Socket.io real-time events listening',
      'Native integrations compiled',
    ],
  },
  {
    id: 'fullstack',
    title: 'SYSTEM INTEGRATION',
    color: 'text-cyan-400',
    revealTitle: 'FULL STACK',
    revealSubtitle: 'DEVELOPER',
    gradient: 'from-cyan-300 via-cyan-500 to-blue-600',
    shadow: 'drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]',
    icon: (
      <div className="flex gap-4">
        <Server size={32} className="text-amber-400" />
        <Monitor size={32} className="text-blue-400" />
        <Smartphone size={32} className="text-purple-400" />
      </div>
    ),
    commands: [
      'system.merge_all_modules()',
      'Architecture layers connected',
      'Security protocols enforced',
      'System ready for production.',
    ],
  },
];

// === Hacker Terminal Component ===
const HackerTerminal = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [phase, setPhase] = useState('typing');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timer;
    const currentTrack = terminalTracks[trackIndex];

    if (phase === 'typing') {
      if (lineIndex < currentTrack.commands.length) {
        const textToType = currentTrack.commands[lineIndex];

        if (charIndex < textToType.length) {
          const randomTypingSpeed = Math.floor(Math.random() * 45) + 15;
          timer = setTimeout(() => {
            setCharIndex((prev) => prev + 1);
          }, randomTypingSpeed);
        } else {
          timer = setTimeout(() => {
            setLineIndex((prev) => prev + 1);
            setCharIndex(0);
          }, 400);
        }
      } else {
        timer = setTimeout(() => setPhase('reveal'), 800);
      }
    } else if (phase === 'reveal') {
      timer = setTimeout(() => {
        const nextTrack = (trackIndex + 1) % terminalTracks.length;
        setTrackIndex(nextTrack);
        setLineIndex(0);
        setCharIndex(0);
        setPhase('typing');
      }, 3500);
    }

    return () => clearTimeout(timer);
  }, [trackIndex, phase, lineIndex, charIndex]);

  const currentTrack = terminalTracks[trackIndex];

  return (
    <div className="relative w-full max-w-lg mx-auto bg-[#0a0a0a]/90 backdrop-blur-xl border border-slate-800 rounded-xl overflow-hidden shadow-2xl font-mono">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-slate-800 z-20 relative">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Terminal size={14} />
          <span>root@abdelkhalek-sys</span>
        </div>
        <div className="w-10"></div>
      </div>

      {/* Terminal Body - Adjusted height for mobile screens */}
      <div className="relative h-[260px] sm:h-[300px] overflow-hidden text-xs sm:text-sm md:text-base">
        <motion.div
          animate={{
            opacity: phase === 'reveal' ? 0.15 : 1,
            filter: phase === 'reveal' ? 'blur(4px)' : 'blur(0px)',
          }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 p-5 sm:p-6 flex flex-col z-0"
        >
          <div
            className={`text-[10px] sm:text-xs font-bold tracking-widest mb-4 flex items-center gap-2 ${currentTrack.color}`}
          >
            <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>
            {currentTrack.title}
          </div>

          <div className="flex flex-col gap-3">
            {currentTrack.commands.map((cmd, i) => {
              if (i > lineIndex) return null;

              const isFirst = i === 0;
              const isCurrentTypingLine = i === lineIndex;
              const displayedText = isCurrentTypingLine
                ? cmd.substring(0, charIndex)
                : cmd;

              return (
                <div
                  key={i}
                  className={`flex items-start gap-2 ${isFirst ? currentTrack.color : 'text-slate-300'}`}
                >
                  {isFirst ? (
                    <span className="mt-0.5">❯</span>
                  ) : (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 20,
                      }}
                      className={`mt-0.5 ${currentTrack.color}`}
                    >
                      <Check size={14} sm:size={16} strokeWidth={3} />
                    </motion.div>
                  )}

                  <span className="break-all leading-relaxed">
                    {displayedText}
                    {isCurrentTypingLine && phase === 'typing' && (
                      <span className="inline-block w-1.5 h-3 sm:h-4 ml-1 align-middle bg-cyan-400 animate-pulse"></span>
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Reveal Overlay */}
        <AnimatePresence>
          {phase === 'reveal' && (
            <motion.div
              key={`reveal-layer-${trackIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a0a0a]/80 backdrop-blur-sm z-10 p-4"
            >
              <div className="relative text-center flex flex-col items-center">
                <motion.div
                  initial={{ y: 20, opacity: 0, scale: 0.9 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="mb-4 sm:mb-6"
                >
                  {currentTrack.icon}
                </motion.div>

                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className={`text-2xl sm:text-4xl md:text-5xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-br ${currentTrack.gradient} mb-2 ${currentTrack.shadow}`}
                >
                  {currentTrack.revealTitle}
                </motion.h2>

                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-sm sm:text-lg md:text-xl font-bold text-slate-200 tracking-[0.2em]"
                >
                  {currentTrack.revealSubtitle}
                </motion.h3>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// === Hero Section ===
const Hero = () => {
  // Smooth scroll handler for the projects button
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector('#projects');
    
    if (targetElement) {
      if (window.lenis) {
        window.lenis.scrollTo(targetElement, {
          offset: -60,
          duration: 1.5,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 60;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section
      id="home"
      // Added padding bottom for mobile so the terminal has space
      className="relative min-h-screen flex items-center pt-28 pb-16 lg:pt-24 lg:pb-0 overflow-hidden bg-slate-950"
    >
      <div className="absolute inset-0 z-0 opacity-60">
        <Ferrofluid
          colors={['#22d3ee', '#3b82f6', '#0f172a']}
          speed={0.3}
          scale={1.2}
          turbulence={1.5}
          fluidity={0.2}
          rimWidth={0.2}
          sharpness={2.5}
          shimmer={1}
          glow={2}
          flowDirection="down"
          opacity={1}
          mouseInteraction={true}
          mouseStrength={1.5}
          mouseRadius={0.4}
        />
      </div>

      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent pointer-events-none"></div>

      {/* Adjusted gap for mobile spacing */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Left Side: Hero Text */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-start text-left pointer-events-auto order-1 lg:order-none"
        >
          {/* Role title */}
          <p className="text-cyan-400 font-mono text-base sm:text-lg md:text-xl tracking-wide font-semibold mb-4 drop-shadow-sm">
            Full-Stack Developer
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight select-none">
            <div className="mb-1">
              {'Building'.split('').map((char, i) => (
                <span
                  key={i}
                  className="text-slate-50 hover:text-cyan-400 transition-colors duration-200 cursor-default"
                >
                  {char}
                </span>
              ))}
            </div>
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {'Digital Products'.split('').map((char, i) => (
                <span
                  key={i}
                  className="hover:text-white transition-colors duration-200 cursor-default"
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </div>
          </h1>

          {/* Typography styled description */}
          <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed mb-10">
            I'm <span className="font-serif italic font-bold text-[1.2rem] sm:text-[1.4rem] text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-300 drop-shadow-sm mr-1.5">Mohamed Abdelkhalek</span>, a Full-Stack Developer with a strong focus on backend development. I build web and mobile applications using Node.js, Express, MongoDB, React, and Flutter, with a focus on well-designed APIs, secure backend systems, and practical digital products.
          </p>

          {/* Action Buttons - Fully responsive stacking on tiny screens */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 w-full sm:w-auto">
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="group relative flex items-center justify-center w-full sm:w-auto gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-8 py-3.5 rounded-full transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
            >
              View Projects
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Mohamed_Abdelkhalek_CV.pdf"
              className="group flex items-center justify-center w-full sm:w-auto gap-2 bg-slate-900/50 hover:bg-slate-800 backdrop-blur-sm border border-slate-700 text-slate-300 px-8 py-3.5 rounded-full transition-all"
            >
              <Download
                size={18}
                className="group-hover:-translate-y-1 transition-transform"
              />
              Resume
            </a>
          </div>
        </motion.div>

        {/* Right Side: Hacker Terminal - Now visible on mobile, ordered below text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="relative w-full pointer-events-auto mt-8 lg:mt-0 order-2 lg:order-none"
        >
          <HackerTerminal />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;