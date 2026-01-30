import React from 'react';
import { motion } from 'framer-motion';
import { Code, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-20">
      
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-[100px]" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-blue-300 mb-6 inline-block">
          🚀 Available for Hire
        </span>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          Building <span className="text-blue-500">Logic</span> & <br />
          Analyzing <span className="text-emerald-500">Markets</span>
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          Hi, I'm <span className="text-white font-semibold">Devesh</span>. A BCA Final Year Student specializing in 
          <span className="text-blue-400"> MERN Stack</span> & <span className="text-emerald-400">Algorithmic Trading</span>.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="px-8 py-3 bg-blue-600 rounded-lg font-bold hover:bg-blue-700 transition flex items-center gap-2">
            <Code size={20} /> View Projects
          </button>
          <button className="px-8 py-3 border border-white/20 rounded-lg font-bold hover:bg-white/5 transition flex items-center gap-2">
            <TrendingUp size={20} /> Stock Analysis
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;