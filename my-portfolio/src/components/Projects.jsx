import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Server, ShoppingCart, Cpu, Lock } from 'lucide-react';

const projects = [
  {
    title: "Velora E-Commerce",
    status: "Live",
    desc: "A scalable B2C platform handling 50+ users. Features Redux state management and Stripe payments.",
    tech: ["React", "Node.js", "MongoDB", "Redux"],
    // Updated Link
    liveLink: "https://velora-e-commerce.vercel.app/",
    repoLink: "https://github.com/devesh22s/Velora-e-commerce-", 
    icon: <ShoppingCart className="text-blue-400" size={32} />,
    color: "border-blue-500/30 shadow-blue-500/10"
  },
  {
    title: "Restaurant QR System",
    status: "Live",
    desc: "Digital management system reducing order time. Includes RBAC and JWT security for staff.",
    tech: ["MERN Stack", "Tailwind", "JWT Auth"],
    // Updated Link
    liveLink: "https://restaurant-qr-scanner.vercel.app/",
    repoLink: "https://github.com/devesh22s/Restaurant-qr-scanner", 
    icon: <Server className="text-emerald-400" size={32} />,
    color: "border-emerald-500/30 shadow-emerald-500/10"
  },
  {
    title: "AI Stock Trading Bot",
    status: "Coming Soon",
    desc: "Future Project: Java-based bot for real-time market analysis and automated alerts.",
    tech: ["Java", "Spring Boot", "AI/ML"],
    liveLink: null,
    repoLink: null,
    icon: <Cpu className="text-purple-400" size={32} />,
    color: "border-purple-500/30 shadow-purple-500/10"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-medium tracking-wider text-sm uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Featured <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Works</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`bg-[#0F1115] p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all group relative overflow-hidden shadow-2xl ${project.color}`}
            >
              <div className="absolute top-6 right-6">
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                  project.status === "Live" 
                    ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" 
                    : "bg-purple-500/10 text-purple-400 border-purple-500/20"
                }`}>
                  {project.status === "Live" ? "● Live Now" : "🚧 In Progress"}
                </span>
              </div>

              <div className="mb-8 p-4 bg-white/5 w-fit rounded-2xl">
                {project.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm h-16">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 font-medium">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-6 border-t border-white/5">
                {project.status === "Live" ? (
                  <>
                    <a 
                      href={project.repoLink} 
                      target="_blank" rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-semibold transition-colors"
                    >
                      <Github size={18} /> Source
                    </a>
                    <a 
                      href={project.liveLink} 
                      target="_blank" rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors shadow-lg shadow-blue-900/20"
                    >
                      <ExternalLink size={18} /> Visit Site
                    </a>
                  </>
                ) : (
                  <button disabled className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 text-gray-500 text-sm font-semibold cursor-not-allowed">
                    <Lock size={16} /> Coming Soon
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;