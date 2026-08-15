import { FaGithub, FaLinkedinIn, FaEnvelope,FaWhatsapp } from 'react-icons/fa6';
import { portfolioData } from '../data/portfolioData';

const techIcons = [
  { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", bgWhite: true },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", bgWhite: true },
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "Tailwind", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Redux", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" },
  { name: "Flutter", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Azure", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" }
];

const duplicatedIcons = [...techIcons, ...techIcons];

const SocialAndTech = () => {
  const { github, linkedin, email, whatsapp } = portfolioData.contact;

  const socialLinks = [
    { icon: FaGithub, href: github },
    { icon: FaLinkedinIn, href: linkedin },
    { icon: FaEnvelope, href: `mailto:${email}` },
    { icon: FaWhatsapp, href: whatsapp },
  ].filter(link => link.href);

  return (
    <section className="relative w-full bg-slate-950 py-16 overflow-hidden border-t border-slate-900/50">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[200px] bg-indigo-600/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-16">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a 
                key={index} 
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group w-12 h-12 md:w-14 md:h-14 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 bg-slate-800/60 backdrop-blur-sm hover:bg-cyan-500/10 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300"
              >
                <Icon size={22} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
            )
          })}
        </div>

        <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] py-4">
            {duplicatedIcons.map((tech, idx) => (
              <div 
                key={idx} 
                className="w-24 md:w-32 flex justify-center items-center shrink-0 group cursor-pointer"
                title={tech.name}
              >
                <div className={`transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] ${tech.bgWhite ? 'bg-white rounded-full p-1' : ''}`}>
                  <img 
                    src={tech.src} 
                    alt={tech.name} 
                    className="h-12 w-12 md:h-14 md:w-14 object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SocialAndTech;