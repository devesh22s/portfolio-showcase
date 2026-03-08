import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Image as ImageIcon, ShoppingBag } from 'lucide-react';

const projects = [
  { 
    id: "01", 
    title: "Restaurant QR System", 
    desc: "An advanced digital dining solution replacing physical menus. Engineered with real-time order tracking via Socket.io, automated Nodemailer receipts, and secure Razorpay checkouts.", 
    tech: ["MERN Stack", "Socket.io", "Razorpay", "Nodemailer"], 
    icon: <Smartphone className="text-cyan-400" size={40} />,
    glow: "bg-cyan-500/10",
    live: "https://restaurant-qr-scanner.vercel.app/", 
    github: "https://github.com/devesh22s/Restaurant-qr-scanner" 
  },
  { 
    id: "02", 
    title: "Text-to-Image AI", 
    desc: "A modern generative AI application built on the MERN stack. Seamlessly leverages Hugging Face APIs to synthesize high-fidelity images from complex natural language prompts.", 
    tech: ["MERN Stack", "Hugging Face API", "Tailwind CSS"], 
    icon: <ImageIcon className="text-violet-400" size={40} />,
    glow: "bg-violet-500/10",
    live: "#", 
    github: "#" 
  },
  { 
    id: "03", 
    title: "Velora E-Commerce", 
    desc: "A foundational B2C e-commerce platform demonstrating solid full-stack architecture. Features Redux state management and seamless Razorpay payment gateway integration.", 
    tech: ["React", "Node.js", "Redux", "Razorpay"], 
    icon: <ShoppingBag className="text-emerald-400" size={40} />,
    glow: "bg-emerald-500/10",
    live: "https://velora-e-commerce.vercel.app/", 
    github: "https://github.com/devesh22s/Velora-e-commerce-" 
  }
];

const ProjectsShowcase = () => {
  return (
    <section id="work" className="max-w-7xl mx-auto px-6 pt-20">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter drop-shadow-lg">
          SELECTED <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">WORKS</span>
        </h2>
        <p className="text-gray-400 mt-4 text-lg font-medium tracking-wide uppercase">Showcasing Advanced MERN Architecture</p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((proj, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: i * 0.15 }}
            className={`group relative bg-[#0a0a0f] border border-white/10 rounded-[2.5rem] p-8 md:p-12 overflow-hidden hover:border-white/20 transition-all duration-500 flex flex-col justify-between ${i === 2 ? "lg:col-span-2 lg:w-2/3 lg:mx-auto" : ""}`}
          >
            {/* Optimized Background Visual (2D Floating Icon) */}
            <motion.div 
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className={`absolute -top-4 -right-4 w-40 h-40 ${proj.glow} rounded-full blur-3xl group-hover:opacity-40 transition-opacity duration-700 pointer-events-none z-0`} 
            />
            
            <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
              {proj.icon}
            </div>

            <div className="relative z-10 flex-grow">
              <span className="text-7xl font-black text-white/5 absolute -top-8 -left-4 pointer-events-none select-none tracking-tighter">
                {proj.id}
              </span>
              <h3 className="text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-cyan-400 transition-colors uppercase">
                {proj.title}
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed text-base min-h-[80px]">
                {proj.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-10">
                {proj.tech.map(t => (
                  <span key={t} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[11px] font-bold text-gray-300 tracking-widest uppercase">
                    {t}
                  </span>
                ))}
              </div>
            </div>
              
            <div className="relative z-10 flex gap-4 mt-auto">
              {proj.live !== "#" ? (
                <a href={proj.live} target="_blank" rel="noreferrer" className="flex-1 py-4 bg-purple-400 text-white hover:bg-cyan-400 border border-transparent rounded-2xl flex items-center justify-center gap-3 font-bold tracking-widest transition-all shadow-lg">
                  LIVE VIEW <ExternalLink size={18} />
                </a>
              ) : (
                <button disabled className="flex-1 py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center gap-3 font-bold tracking-widest text-gray-500 cursor-not-allowed">
                  BUILDING... <ExternalLink size={18} />
                </button>
              )}

              {proj.github !== "#" ? (
                <a href={proj.github} target="_blank" rel="noreferrer" className="flex-1 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center gap-3 font-bold tracking-widest transition-all text-white shadow-lg">
                  SOURCE <Github size={18} />
                </a>
              ) : (
                <button disabled className="flex-1 py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center gap-3 font-bold tracking-widest text-gray-500 cursor-not-allowed">
                  SOURCE <Github size={18} />
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsShowcase;