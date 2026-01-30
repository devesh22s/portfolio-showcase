import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Server, ShoppingCart, TrendingUp } from 'lucide-react';

const projects = [
  {
    title: "Velora E-Commerce",
    desc: "Full-stack e-commerce app with Admin Dashboard, Payment Gateway, and Order Management.",
    tech: ["React", "Node.js", "MongoDB", "Redux"],
    icon: <ShoppingCart className="text-blue-400" size={32} />,
    color: "border-blue-500/50"
  },
  {
    title: "AI Stock Trading Bot",
    desc: "Java-based bot for real-time market analysis, option chain tracking, and automated alerts.",
    tech: ["Java", "Spring Boot", "API Integration"],
    icon: <TrendingUp className="text-emerald-400" size={32} />,
    color: "border-emerald-500/50"
  },
  {
    title: "Restaurant Management",
    desc: "A system for managing orders, inventory, and staff for restaurant chains.",
    tech: ["MERN Stack", "JWT Auth", "Tailwind"],
    icon: <Server className="text-purple-400" size={32} />,
    color: "border-purple-500/50"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-4xl font-bold mb-16 text-center"
      >
        Featured <span className="text-blue-500">Projects</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`bg-white/5 p-8 rounded-2xl border ${project.color} hover:bg-white/10 transition-all group`}
          >
            <div className="mb-6 bg-white/5 w-16 h-16 rounded-full flex items-center justify-center">
              {project.icon}
            </div>
            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
            <p className="text-gray-400 mb-6">{project.desc}</p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a href="#" className="flex items-center gap-2 text-sm font-semibold hover:text-blue-400">
                <Github size={18} /> Code
              </a>
              <a href="#" className="flex items-center gap-2 text-sm font-semibold hover:text-emerald-400">
                <ExternalLink size={18} /> Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;