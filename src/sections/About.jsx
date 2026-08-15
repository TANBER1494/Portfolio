import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import ProfileCard from '../components/ui/ProfileCard';

const About = () => {
  const { name, role } = portfolioData.personalInfo;
  const { github, email } = portfolioData.contact;
  
  const handle = github.split('/').pop(); 

  return (
    <section id="about" className="relative w-full bg-slate-950 py-12 lg:py-16 overflow-hidden border-t border-slate-900/50">
      
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-900/10 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-start text-left w-full"
          >
            <p className="text-slate-500 font-mono text-[11px] md:text-xs tracking-[0.2em] uppercase mb-2.5">
              About Me
            </p>
            
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-50 tracking-tight mb-6 leading-tight w-full">
               Full-Stack Development <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Built Around the Backend
              </span>
            </h2>

            <div className="flex flex-col gap-4 lg:gap-5 w-full">
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate-400 text-sm md:text-base leading-relaxed"
              >
                I'm <span className="font-semibold text-slate-200">Mohamed Abdelkhalek</span>, a Full-Stack Developer with a strong focus on backend development. I enjoy understanding how an entire system works, from APIs and databases to the applications that consume them. My primary experience is with <span className="text-cyan-400 font-medium">Node.js, Express, and MongoDB</span>, while I also build web interfaces with React and mobile applications with Flutter.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-slate-400 text-sm md:text-base leading-relaxed"
              >
                I care about building well-structured backend systems, designing reliable APIs, and following secure development practices. Through team-based and freelance projects, I've worked with real development workflows including Git, pull requests, code reviews, and collaborative development. One of my projects is currently being used by real users, which has given me a perspective beyond building projects solely for demonstration.
              </motion.p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 lg:col-span-5 w-full flex justify-center lg:justify-end mb-10 lg:mb-0"
          >
            {/* 
            */}
            <div className="w-full max-w-[260px] lg:max-w-[250px] -translate-x-3 lg:translate-x-0">
              <ProfileCard
                name={name}
                title={role}
                handle={handle}
                status="Available for work"
                contactText="Contact Me"
                avatarUrl="/profile.jpg"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => window.location.href = `mailto:${email}`}
                behindGlowEnabled={true}
                behindGlowColor="rgba(34, 211, 238, 0.15)"
                innerGradient="linear-gradient(145deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.4) 100%)"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;