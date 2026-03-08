import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Youtube, Activity, Zap } from 'lucide-react';

const activities = [
  { 
    icon: <Target size={28} />, 
    title: "Daily DSA Grind", 
    desc: "Solving 1 complex problem every single day to continuously solidify structural logic.", 
    glow: "group-hover:border-cyan-500/50 group-hover:shadow-[0_0_40px_rgba(0,243,255,0.15)]", 
    iconColor: "text-cyan-400" 
  },
  { 
    icon: <TrendingUp size={28} />, 
    title: "Market Trading", 
    desc: "Analyzing financial charts and researching algorithmic trading logic for the stock market.", 
    glow: "group-hover:border-emerald-500/50 group-hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]", 
    iconColor: "text-emerald-400" 
  },
  { 
    icon: <Youtube size={28} />, 
    title: "Content & Tech", 
    desc: "Planning tech-focused content to build a massive YouTube community and share knowledge.", 
    glow: "group-hover:border-rose-500/50 group-hover:shadow-[0_0_40px_rgba(244,63,94,0.15)]", 
    iconColor: "text-rose-400" 
  },
  { 
    icon: <Activity size={28} />, 
    title: "Health & Badminton", 
    desc: "Maintaining physical sharpness on the court to fuel mental endurance and focus.", 
    glow: "group-hover:border-amber-500/50 group-hover:shadow-[0_0_40px_rgba(251,191,36,0.15)]", 
    iconColor: "text-amber-400" 
  },
];

// ==================== PREMIUM NEURAL RADAR (3D REPLACEMENT) ====================
const NeuralRadar = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center scale-75 lg:scale-100">
      {/* Outer Rotating Dashed Ring */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-72 h-72 border border-dashed border-cyan-500/30 rounded-full"
      />
      
      {/* Inner Pulsing Ring */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-56 h-56 border-2 border-violet-500/20 rounded-full bg-violet-500/5"
      />

      {/* Center Neural Core */}
      <div className="relative z-10 w-32 h-32 rounded-full bg-black border border-white/10 flex items-center justify-center shadow-[0_0_50px_rgba(0,243,255,0.1)]">
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-1"
        >
          <Zap size={32} className="text-cyan-400" />
          <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-cyan-400/60 uppercase">Active</span>
        </motion.div>
        
        {/* Orbiting Particles (CSS Only) */}
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-20px]"
        >
          <div className="w-2 h-2 bg-violet-400 rounded-full absolute top-0 left-1/2 -translate-x-1/2 shadow-[0_0_10px_#a855f7]" />
        </motion.div>
      </div>

      {/* Scanning Light Effect */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/10 to-transparent rounded-full origin-center opacity-20"
        style={{ clipPath: 'polygon(50% 50%, 100% 0, 100% 100%)' }}
      />
    </div>
  );
};

const LifestyleGrind = () => {
  return (
    <section id="grind" className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter drop-shadow-lg">
          THE DAILY <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">GRIND</span>
        </h2>
        <p className="text-gray-400 mt-6 text-lg font-medium tracking-wide uppercase">
          Scaling systems, portfolios, and personal growth.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-stretch">
        
        {/* Left: Content Cards (2/3 width) */}
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
          {activities.map((act, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              className={`group relative bg-[#07070a] border border-white/10 p-8 rounded-[2rem] transition-all duration-500 ${act.glow} overflow-hidden`}
            >
              {/* Animated Corner Background Element */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/[0.02] rounded-full group-hover:bg-white/[0.05] transition-all duration-700 blur-2xl" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className={`mb-6 p-4 bg-[#111118] border border-white/5 w-fit rounded-2xl shadow-inner group-hover:scale-110 transition-transform duration-500 ${act.iconColor}`}>
                  {act.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-wide transition-colors group-hover:text-white">
                  {act.title}
                </h3>
                <p className="text-gray-400 font-medium leading-relaxed group-hover:text-gray-300 transition-colors">
                  {act.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right: The Focus Visualizer (1/3 width) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-1 min-h-[450px] bg-[#030305] rounded-[2.5rem] border border-white/5 relative overflow-hidden flex items-center justify-center group shadow-2xl"
        >
          {/* Static Ambient Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,243,255,0.08),transparent_70%)] pointer-events-none" />

          {/* Replacement for 3D Core */}
          <NeuralRadar />

          {/* Overlay Tag */}
          <div className="absolute bottom-8 flex flex-col items-center gap-2">
            <span className="font-black text-2xl text-white tracking-[0.4em] bg-black/60 px-8 py-3 rounded-full border border-white/10 backdrop-blur-xl shadow-2xl group-hover:border-cyan-500/50 transition-all duration-500">
              FOCUS
            </span>
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:-0.3s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-bounce [animation-delay:-0.15s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default LifestyleGrind;