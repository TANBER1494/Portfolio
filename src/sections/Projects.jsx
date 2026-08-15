import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Code,
  ChevronDown,
  ChevronUp,
  Download,
} from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'CareerPro',
    category: 'Full Stack',
    description:
      'A career platform built around a Node.js backend, with MongoDB, REST APIs, authentication, authorization, validation, and security practices. The backend integrates with an AI microservice developed by the project’s AI team and is deployed with a custom domain.',
    image: '/careerpro-mockup.png',
    tags: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
    ribbonColor: 'from-cyan-400 to-blue-500',
    links: {
      github: 'https://github.com/TANBER1494',
      live: 'https://careerpro.me',
    },
  },
  {
    id: 2,
    title: 'Supervisor',
    category: 'Mobile App',
    description:
      'A real-world management platform with a complete Node.js backend and Flutter mobile application. Built with REST APIs, Socket.io for real-time updates, Firebase Cloud Messaging for push notifications, and Hive for local data storage.',
    image: '/supervisor-mockup.png',
    tags: ['Node.js', 'Express', 'Flutter', 'Socket.io', 'Firebase'],
    ribbonColor: 'from-purple-400 to-fuchsia-500',
    links: {
      github: 'https://github.com/TANBER1494',
      apk: 'https://www.mediafire.com/file/7l316kykiok08z2/%25D8%25AA%25D8%25B7%25D8%25A8%25D9%258A%25D9%2582_%25D8%25A7%25D9%2584%25D9%2585%25D8%25B4%25D8%25B1%25D9%2581_V1.0.2.apk/file',
    },
  },
  {
    id: 3,
    title: 'Dokkany',
    category: 'Full Stack',
    description:
      'A full-stack business management system built with Node.js, Express, MongoDB, React, and Tailwind CSS. It includes authentication, dashboards, inventory management, sales workflows, reporting, and role-based access across the application.',
    image: '/dokkany-mockup.png',
    tags: ['Node.js', 'Express', 'MongoDB', 'React', 'Tailwind CSS'],
    ribbonColor: 'from-emerald-400 to-green-500',
    links: {
      github: 'https://github.com/TANBER1494',
      live: 'https://dokkany.tech',
    },
  },
  {
    id: 4,
    title: 'TaskToDo-App',
    category: 'Mobile',
    description:
      'A freelance Flutter application designed for personal task management, featuring task organization, priorities, lists, search, authentication, and offline local storage with SQLite.',
    image: '/tasktodo-mockup.png',
    tags: ['Flutter', 'Dart', 'Firebase', 'SQLite'],
    ribbonColor: 'from-purple-400 to-fuchsia-500',
    links: {
      github: 'https://github.com/TANBER1494',
      apk: 'https://www.mediafire.com/file/your-tasktodo-apk-link/file',
    },
  },
];

const categories = ['All', 'Full Stack', 'Mobile'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(3);

  const filteredProjects = projectsData.filter((project) =>
    activeCategory === 'All' ? true : project.category === activeCategory
  );

  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const handleShowMore = () => {
    if (hasMore) {
      setVisibleCount((prev) => prev + 3);
    } else {
      setVisibleCount(3);
    }
  };

  return (
    <section
      id="projects"
      className="relative w-full bg-slate-950 py-24 overflow-hidden border-t border-slate-900/50"
    >
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-slate-900/40 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight">
              Featured{' '}
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Projects
              </span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-3 bg-slate-900/50 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setVisibleCount(3);
                }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-slate-100 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {cat}
                {cat === 'All' && (
                  <span
                    className={`ml-2 px-2 py-0.5 rounded-full text-[10px] ${activeCategory === cat ? 'bg-slate-300 text-slate-900' : 'bg-slate-800 text-slate-400'}`}
                  >
                    {projectsData.length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                key={project.id}
                className="group flex flex-col bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:-translate-y-3 hover:border-slate-700 hover:shadow-[0_15px_30px_-10px_rgba(34,211,238,0.15)]"
              >
                <div className="relative h-48 w-full bg-slate-950 overflow-hidden">
                  <div className="absolute top-0 right-6 z-20">
                    <div
                      className={`relative w-6 h-10 bg-gradient-to-b ${project.ribbonColor} shadow-lg`}
                      style={{
                        clipPath:
                          'polygon(100% 0, 100% 100%, 50% 80%, 0 100%, 0 0)',
                      }}
                    ></div>
                  </div>

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100 block"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${project.title}&background=0D1117&color=22d3ee&size=500`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                </div>

                {/* إضافة سالب مارجن خفيف (-mt-[1px]) لسد أي ثغرة بكسل قد تظهر بين الصورة والنص */}
                <div className="flex flex-col flex-grow p-5 bg-slate-950 relative z-10 -mt-[1px]">
                  <span
                    className={`text-[10px] font-mono tracking-widest uppercase mb-2 text-transparent bg-clip-text bg-gradient-to-r ${project.ribbonColor}`}
                  >
                    {project.category} category
                  </span>

                  <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-md text-xs font-medium text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 mt-auto">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300 text-sm font-semibold hover:bg-slate-800 hover:text-white transition-all"
                    >
                      <Code size={16} />
                      Code
                    </a>

                    {project.category === 'Mobile' ? (
                      <a
                        href={project.links.apk}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full bg-cyan-500 text-slate-950 text-sm font-bold hover:bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all"
                      >
                        Download APK
                        <Download size={16} />
                      </a>
                    ) : (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full bg-cyan-500 text-slate-950 text-sm font-bold hover:bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all"
                      >
                        Live Preview
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length > 3 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={handleShowMore}
              className="group flex items-center gap-3 px-8 py-3 rounded-full border border-slate-700 bg-slate-900/50 text-slate-200 text-sm font-semibold hover:bg-slate-800 hover:border-slate-600 transition-all backdrop-blur-sm"
            >
              {hasMore ? (
                <>
                  Show More Projects ({filteredProjects.length - visibleCount}{' '}
                  More)
                  <ChevronDown
                    size={18}
                    className="group-hover:translate-y-1 transition-transform"
                  />
                </>
              ) : (
                <>
                  Show Less
                  <ChevronUp
                    size={18}
                    className="group-hover:-translate-y-1 transition-transform"
                  />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
