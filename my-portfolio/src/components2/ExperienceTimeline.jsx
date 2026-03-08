import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Cpu, Code2, Database } from 'lucide-react';

const experiences = [
  {
    role: "AI & Real-Time Systems Architect",
    company: "Independent Projects",
    desc: "Currently building a Text-to-Image generator using Hugging Face APIs. Architecting a full-scale Restaurant QR ordering system featuring real-time synchronization with Socket.io and Razorpay integration.",
    icon: <Cpu className="text-cyan-400" size={24} />,
    glow: "hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(0,243,255,0.1)]"
  },
  {
    role: "Full-Stack MERN Developer",
    company: "Velora Production",
    desc: "Developed Velora, a comprehensive E-commerce platform. Implemented complex state management using Redux Toolkit, secure JWT authentication, and automated mailing systems with Nodemailer.",
    icon: <Rocket className="text-violet-400" size={24} />,
    glow: "hover:border-violet-500/50 hover:shadow-[0_0_40px_rgba(167,139,250,0.1)]"
  },
  {
    role: "Algorithmic Logic (Java)",
    company: "Core DSA Grind",
    desc: "Deep-diving into Data Structures and Algorithms with Java. Maintaining a daily streak of problem-solving to ensure optimal logic in backend architectures and system design.",
    icon: <Code2 className="text-emerald-400" size={24} />,
    glow: "hover:border-emerald-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.1)]"
  },
  {
    role: "Bachelor of Computer Applications",
    company: "Manipal University Jaipur",
    desc: "Pursuing formal education in Computer Science. Focusing on Database Management (SQL), Software Engineering principles, and Advanced Java. Current CGPA: 9.0.",
    icon: <Database className="text-blue-400" size={24} />,
    glow: "hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]"
  }
];

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
          THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">JOURNEY.</span>
        </h2>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`group flex gap-8 items-start p-8 rounded-[2rem] bg-[#07070a] border border-white/5 transition-all duration-500 ${exp.glow}`}
          >
            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/10 group-hover:scale-110 transition-transform">
              {exp.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
              <p className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-4">{exp.company}</p>
              <p className="text-gray-400 leading-relaxed font-medium">{exp.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;