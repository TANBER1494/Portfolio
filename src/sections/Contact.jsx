import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Copy, Check, Send, Code, Briefcase, MessageCircle, FileText, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [selectedService, setSelectedService] = useState('Full Stack Project');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const email = "mohamedabdelkhalek404@gmail.com"; 

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  const services = ["Full Stack Project", "Mobile App", "Backend API", "Frontend UI"];

  // Social links with individual hover styles for a premium feel
  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: Code, 
      link: 'https://github.com/TANBER1494',
      hoverStyle: 'hover:text-slate-100 hover:border-slate-500/80 hover:bg-slate-800 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]'
    },
    { 
      name: 'LinkedIn', 
      icon: Briefcase, 
      link: 'https://www.linkedin.com/in/mohamed-a-abdelaty/',
      hoverStyle: 'hover:text-blue-400 hover:border-blue-500/60 hover:bg-blue-500/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]'
    },
    { 
      name: 'Resume', 
      icon: FileText, 
      link: 'https://drive.google.com/file/d/18qkMLVxgVYJeZGUk4SotcBSpQTjhaklS/view?usp=sharing',
      hoverStyle: 'hover:text-amber-400 hover:border-amber-500/60 hover:bg-amber-500/10 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]'
    },
    { 
      name: 'WhatsApp', 
      icon: MessageCircle, 
      link: 'https://wa.me/201112793953',
      hoverStyle: 'hover:text-emerald-400 hover:border-emerald-500/60 hover:bg-emerald-500/10 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]'
    }
  ];

  return (
    <section id="contact" className="relative w-full bg-slate-950 pt-24 pb-8 overflow-hidden border-t border-slate-900/50">
      
      {/* Soft Background Glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-900/10 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        
        {/* Section Divider / Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/50 pb-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight">
              Get in <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Touch</span>
            </h2>
          </div>
        </div>

        {/* Top CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-slate-800/60 rounded-3xl p-8 md:p-12 mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-2xl backdrop-blur-sm"
        >
          <div className="flex flex-col gap-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 w-fit">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Available for New Opportunities</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight leading-tight">
              Have a project in mind? <br/>
              Let's build something <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">extraordinary.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a href={`mailto:${email}`} className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300 whitespace-nowrap">
              <Mail size={18} />
              Email Me Directly
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-24">
          
          <div className="lg:col-span-2 flex flex-col gap-4">
            
            {/* Email Card - Fixed Overflow */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-900/80 to-slate-950/40 border border-slate-800/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] backdrop-blur-md rounded-2xl p-4 sm:p-6 flex items-center justify-between gap-3 group hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                {/* Added shrink-0 to prevent icon from squishing */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Mail size={18} className="sm:w-5 sm:h-5" />
                </div>
                {/* Added min-w-0 and truncate to handle long emails gracefully */}
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1 truncate">Direct Email</p>
                  <p className="text-slate-200 font-medium text-xs sm:text-sm md:text-base truncate" title={email}>
                    {email}
                  </p>
                </div>
              </div>
              {/* Added shrink-0 to prevent button from being pushed out */}
              <button 
                onClick={handleCopyEmail}
                className="shrink-0 p-2 sm:p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                title="Copy Email"
              >
                {isCopied ? <Check size={16} className="sm:w-[18px] sm:h-[18px] text-emerald-400" /> : <Copy size={16} className="sm:w-[18px] sm:h-[18px]" />}
              </button>
            </motion.div>

            {/* Location Card - Fixed Overflow */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-slate-900/80 to-slate-950/40 border border-slate-800/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] backdrop-blur-md rounded-2xl p-4 sm:p-6 flex items-center gap-3 sm:gap-4 group hover:border-slate-700 transition-colors"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <MapPin size={18} className="sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1 truncate">Location</p>
                <p className="text-slate-200 font-medium text-xs sm:text-sm md:text-base truncate">
                  Egypt <span className="text-slate-500 text-[10px] sm:text-xs hidden sm:inline">(Available Remote Worldwide)</span>
                </p>
              </div>
            </motion.div>

            {/* Social Links Grid */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-slate-900/80 to-slate-950/40 border border-slate-800/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] backdrop-blur-md rounded-2xl p-6"
            >
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-4">Connect Across Platforms</p>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a 
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-between p-3.5 rounded-xl bg-slate-950/50 border border-slate-800/80 text-slate-400 transition-all duration-300 ease-out hover:-translate-y-1 group ${social.hoverStyle}`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon size={18} className="group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-sm font-semibold">{social.name}</span>
                      </div>
                      <ExternalLink size={14} className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </a>
                  )
                })}
              </div>
            </motion.div>

          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-gradient-to-br from-slate-900/80 to-slate-950/40 border border-slate-800/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] backdrop-blur-md rounded-3xl p-6 md:p-10"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-100 mb-2">Send Me A Message</h3>
              <p className="text-slate-400 text-sm">Select the service you're looking for and fill out the details below.</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              <div>
                <label className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-3">I'm interested in...</label>
                <div className="flex flex-wrap gap-2">
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                        selectedService === service 
                          ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.15)]' 
                          : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2">Your Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Osman Dembele" 
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3.5 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all shadow-inner"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2">Your Email</label>
                  <input 
                    type="email" 
                    required
                    placeholder="e.g. osman@example.com" 
                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3.5 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all shadow-inner"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2">Project Details / Message</label>
                <textarea 
                  required
                  rows="4" 
                  placeholder="Describe your project, goals, timeline, or inquiries..." 
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3.5 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none shadow-inner"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full mt-2 flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 font-bold text-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:scale-[1.01] transition-all disabled:opacity-70 disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>

            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="w-full border-t border-slate-800/60 pt-8 mt-12 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold text-slate-100 tracking-tight">
              Mohamed<span className="text-cyan-500">.</span>
            </h2>
            <p className="text-slate-400 text-sm mt-1">Full-Stack Software Developer</p>
          </div>

          <div className="text-slate-500 text-sm text-center md:text-right">
            © 2026 Mohamed Abdelkhalek. Built with React & Tailwind CSS.
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;