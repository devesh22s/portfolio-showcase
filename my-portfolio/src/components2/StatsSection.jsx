import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Code2, Rocket, TerminalSquare } from 'lucide-react';

const AnimatedCounter = ({ from = 0, to, duration = 2 }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * (to - from) + from));
        if (progress < 1) window.requestAnimationFrame(step);
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}</span>;
};

// Yahan tumhari real stats daal di hain
const realStats = [
  { 
    number: 9, suffix: ".0", label: "CURRENT CGPA", 
    icon: <GraduationCap size={24} className="text-cyan-400" />,
    glow: "hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(0,243,255,0.15)]"
  },
  { 
    number: 3, suffix: "+", label: "PRODUCTION BUILDS", 
    icon: <Rocket size={24} className="text-violet-400" />,
    glow: "hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(167,139,250,0.15)]"
  },
  { 
    number: 1, suffix: " / DAY", label: "DSA PROBLEM SOLVED", 
    icon: <Code2 size={24} className="text-emerald-400" />,
    glow: "hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]"
  },
  { 
    number: 7, suffix: "+", label: "CORE TECH STACK", 
    icon: <TerminalSquare size={24} className="text-amber-400" />,
    glow: "hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)]"
  }
];

const StatsSection = () => {
  return (
    <section className="py-20 relative z-10 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {realStats.map((stat, i) => (
          <motion.div 
            key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
            className={`group relative bg-[#07070a] border border-white/5 rounded-3xl p-8 flex flex-col items-center justify-center text-center transition-all duration-500 cursor-default ${stat.glow}`}
          >
            <div className="mb-6 p-4 bg-white/5 rounded-full border border-white/5 group-hover:scale-110 transition-transform duration-300">
              {stat.icon}
            </div>
            <div className="text-5xl md:text-7xl font-black text-white tracking-tighter drop-shadow-md flex items-baseline">
              <AnimatedCounter to={stat.number} />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white text-3xl md:text-4xl ml-1">
                {stat.suffix}
              </span>
            </div>
            <p className="mt-4 text-gray-400 font-bold tracking-[0.1em] text-xs md:text-sm uppercase">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;