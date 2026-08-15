import { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  // Mobile flip state management
  const [flippedCard, setFlippedCard] = useState(null);

  const { frontend, backend, mobile, cloudAndTools } = portfolioData.skills;
  const combinedUIAndMobile = [...frontend, ...mobile];
  const softSkills = [
    "Git", 
    "GitHub",
    "Pull Requests", 
    "Code Reviews", 
    "Team Leadership"
  ];

  // Skills track data
  const skillTracks = [
    {
      id: '01',
      title: 'Web & Mobile',
      subtitle: 'Modern Interfaces & Cross-Platform Apps',
      image: '/front.png', 
      skills: combinedUIAndMobile,
      textColor: 'from-blue-400 to-cyan-300',
      dotColor: 'bg-blue-400',
      glow: 'group-hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] group-hover:border-blue-500/50'
    },
    {
      id: '02',
      title: 'Backend',
      subtitle: 'APIs & Security',
      image: '/back.png', 
      skills: backend,
      textColor: 'from-emerald-400 to-green-300',
      dotColor: 'bg-emerald-400',
      glow: 'group-hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] group-hover:border-emerald-500/50'
    },
    {
      id: '03',
      title: 'Data & Tools',
      subtitle: 'Real-Time & Cloud Services',
      image: '/cloud.png', 
      skills: cloudAndTools,
      textColor: 'from-cyan-400 to-blue-300',
      dotColor: 'bg-cyan-400',
      glow: 'group-hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] group-hover:border-cyan-500/50'
    },
    {
      id: '04',
      title: 'Development Workflow',
      subtitle: 'Collaboration & Delivery',
      image: '/soft.png', 
      skills: softSkills,
      textColor: 'from-purple-400 to-fuchsia-300',
      dotColor: 'bg-purple-400',
      glow: 'group-hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] group-hover:border-purple-500/50'
    }
  ];

  // Handle card click for mobile devices
  const handleCardClick = (id) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  return (
    <section id="skills" className="relative w-full bg-slate-950 py-12 md:py-16 overflow-hidden border-t border-slate-900/50 flex flex-col justify-center">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight">
              Core <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Skills</span>
            </h2>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {skillTracks.map((track, index) => (
            <motion.div 
              key={track.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className="group h-[320px] w-full [perspective:1000px] cursor-pointer"
              onClick={() => handleCardClick(track.id)}
            >
              {/* Inner wrapper handling the 3D flip. Uses hover on desktop, state on mobile */}
              <div className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] lg:group-hover:[transform:rotateY(180deg)] ${flippedCard === track.id ? '[transform:rotateY(180deg)]' : ''}`}>
                
                {/* 1. Front Face */}
                <div className={`absolute inset-0 w-full h-full bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden [backface-visibility:hidden] transition-all duration-500 ${track.glow}`}>
                  
                  <img 
                    src={track.image} 
                    alt={track.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent"></div>

                  <div className="relative z-10 flex flex-col justify-between h-full p-5 md:p-6">
                    
                    <div className="text-slate-400/80 font-mono text-base md:text-lg font-medium tracking-widest">
                      {track.id}
                    </div>
                    
                    <div className="flex flex-col mt-auto mb-4">
                      <h3 className="text-lg md:text-xl font-bold text-white tracking-widest uppercase mb-1 drop-shadow-md">
                        {track.title}
                      </h3>
                      <span className="text-slate-300/90 font-serif italic text-sm drop-shadow-sm">
                        {track.subtitle}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-[1px] bg-gradient-to-r ${track.textColor}`}></div>
                      <span className={`text-[10px] font-mono uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${track.textColor}`}>
                        {/* Show Hover on desktop, Tap on mobile */}
                        <span className="hidden lg:inline">Hover</span>
                        <span className="lg:hidden">Tap</span>
                      </span>
                    </div>

                  </div>
                </div>

                {/* 2. Back Face */}
                <div className={`absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-950 border border-slate-700/50 rounded-2xl p-5 md:p-6 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] ${track.glow}`}>
                  
                  <h4 className={`text-[10px] md:text-xs font-mono uppercase tracking-widest mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r ${track.textColor}`}>
                    Stack Details
                  </h4>
                  
                  <ul className="flex flex-col gap-1.5 md:gap-2">
                    {track.skills.map((skill, i) => (
                      <li key={i} className="flex items-center gap-2.5">
                        <div className={`w-1 h-1 rounded-full ${track.dotColor} shrink-0`}></div>
                        <span className="text-slate-200 font-medium text-xs md:text-sm tracking-wide leading-tight">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;