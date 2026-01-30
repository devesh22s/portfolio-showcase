import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Terminal } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: "Frontend Architecture",
      icon: <Layout className="text-blue-400" size={24} />,
      skills: ["React.js", "Redux Toolkit", "Tailwind CSS", "Framer Motion", "HTML5/CSS3"]
    },
    {
      title: "Backend Engineering",
      icon: <Server className="text-emerald-400" size={24} />,
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth", "Microservices"]
    },
    {
      title: "Database & Core",
      icon: <Database className="text-purple-400" size={24} />,
      skills: ["MongoDB", "Mongoose", "Java (OOPs)", "SQL", "Data Structures"]
    },
    {
      title: "DevOps & Tools",
      icon: <Terminal className="text-orange-400" size={24} />,
      skills: ["Git & GitHub", "Postman", "Vercel", "VS Code", "Agile/Scrum"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-16 text-center"
      >
        Technical <span className="text-emerald-500">Arsenal</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all"
          >
            <div className="mb-4 bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center">
              {cat.icon}
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map(skill => (
                <span key={skill} className="text-xs px-2 py-1 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
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

export default Skills;