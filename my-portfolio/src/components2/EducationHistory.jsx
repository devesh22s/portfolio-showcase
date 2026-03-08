import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Code2 } from 'lucide-react';

const historyData = [
  {
    title: "Bachelor of Computer Applications (BCA)",
    date: "2023 - Present",
    subtitle: "Manipal University Jaipur",
    desc: "Current CGPA: 9.0/10.0. Specializing in Software Development and Algorithmic Logic. Final year student.",
    icon: <BookOpen size={18} className="text-blue-400" />
  },
  {
    title: "Front-end Development (React V2)",
    date: "Verified Certification",
    subtitle: "IBM (Credly Verified)",
    desc: "Professional certification validating expertise in building interactive SPAs and component-based architecture.",
    icon: <Award size={18} className="text-emerald-400" />
  },
  {
    title: "Anveshan Hackathon Participant",
    date: "2025",
    subtitle: "Organized by Masai",
    desc: "Built a functional prototype within a 3-day sprint, demonstrating rapid prototyping and teamwork.",
    icon: <Code2 size={18} className="text-cyan-400" />
  }
];

const EducationHistory = () => {
  return (
    <section id="education" className="max-w-5xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-black text-white">Education & <span className="text-blue-500">History</span></h2>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

        <div className="space-y-12 md:space-y-0">
          {historyData.map((item, i) => (
            <motion.div 
              key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
            >
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-[#050505] border border-white/20 rounded-full items-center justify-center z-10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                {item.icon}
              </div>

              <div className={`w-full md:w-[45%] bg-[#0a0a0f] border border-white/10 p-8 rounded-2xl hover:border-white/20 transition-colors shadow-lg`}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white max-w-[70%]">{item.title}</h3>
                  <span className="text-sm font-bold text-emerald-400 text-right">{item.date}</span>
                </div>
                <p className="text-blue-400 text-sm mb-4">{item.subtitle}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationHistory;