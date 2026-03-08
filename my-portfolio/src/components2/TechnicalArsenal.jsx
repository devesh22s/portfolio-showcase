import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, TerminalSquare } from 'lucide-react';

const arsenal = [
  { title: "Frontend Architecture", icon: <Layout className="text-cyan-400" size={32} />, color: "border-cyan-500/30", skills: ["React.js", "Redux Toolkit", "Tailwind CSS", "Framer Motion", "HTML5/CSS3"] },
  { title: "Backend Engineering", icon: <Server className="text-emerald-400" size={32} />, color: "border-emerald-500/30", skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth", "Microservices"] },
  { title: "Database & Core", icon: <Database className="text-purple-400" size={32} />, color: "border-purple-500/30", skills: ["MongoDB", "Mongoose", "Java (OOPs)", "SQL", "Data Structures"] },
  { title: "DevOps & Tools", icon: <TerminalSquare className="text-orange-400" size={32} />, color: "border-orange-500/30", skills: ["Git & GitHub", "Postman", "Vercel", "VS Code", "Agile/Scrum"] }
];

const TechnicalArsenal = () => {
  return (
    <section id="arsenal" className="max-w-7xl mx-auto px-6 pt-32 pb-20">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter drop-shadow-lg">
          TECHNICAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">ARSENAL</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {arsenal.map((cat, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: i * 0.1 }}
            className="group relative bg-[#07070a] border border-white/10 rounded-[2rem] p-8 overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col h-full shadow-lg"
          >
            {/* Ambient Background Glow (Non-3D) */}
            <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full border-[12px] ${cat.color} opacity-10 group-hover:scale-110 transition-transform duration-500`} />
            
            <div className="relative z-10 w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-300">
              {cat.icon}
            </div>
            
            <h3 className="relative z-10 text-2xl font-black text-white mb-6 drop-shadow-md">
              {cat.title}
            </h3>

            <div className="relative z-10 flex flex-wrap gap-2.5 mt-auto">
              {cat.skills.map((skill, index) => (
                <span key={index} className="px-4 py-2 bg-[#111118] border border-white/5 rounded-xl text-xs font-bold tracking-wider text-gray-300 hover:text-white hover:bg-white/10 transition-all shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalArsenal;