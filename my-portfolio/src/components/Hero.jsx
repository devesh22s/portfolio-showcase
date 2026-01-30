import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Github, Linkedin, ArrowRight, Download, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-6 relative overflow-hidden pt-20">
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px]" />
        {/* Tech Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-wider uppercase">
              Available for Hire
            </span>
            <span className="h-px w-20 bg-gradient-to-r from-blue-500/50 to-transparent"></span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">
            Transforming Logic into <br />
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Scalable Systems
            </span>
          </h1>

          <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
            Hi, I'm <span className="text-white font-semibold">Devesh Kumar</span>. A MERN Stack Developer specialized in building 
            high-performance web applications and algorithmic trading tools.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <Link to="projects" smooth={true} offset={-50}>
              <button className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-600/25 flex items-center gap-2">
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            
            <a 
              href="https://www.linkedin.com/in/devesh-kumar-26b10a286/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold transition-all flex items-center gap-2"
            >
              <Linkedin size={18} className="text-blue-400" /> Let's Connect
            </a>
          </div>

          <div className="flex items-center gap-6 text-gray-500">
            <a href="https://github.com/devesh22s" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <div className="h-8 w-px bg-white/10"></div>
            <div className="flex gap-4 text-sm font-medium">
              <span className="flex items-center gap-2"><Terminal size={16} className="text-emerald-400"/> MERN Stack</span>
              <span className="flex items-center gap-2"><Terminal size={16} className="text-blue-400"/> Java & DSA</span>
            </div>
          </div>
        </motion.div>

        {/* Right Visual (Abstract Code Block) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:block relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-emerald-500 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
          <div className="relative bg-[#0F1115] border border-white/10 rounded-2xl p-6 shadow-2xl">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"/>
              <div className="w-3 h-3 rounded-full bg-yellow-500"/>
              <div className="w-3 h-3 rounded-full bg-green-500"/>
            </div>
            <div className="space-y-3 font-mono text-sm">
              <div className="flex">
                <span className="text-purple-400 mr-2">const</span>
                <span className="text-yellow-200">developer</span>
                <span className="text-white mr-2"> = </span>
                <span className="text-white">{`{`}</span>
              </div>
              <div className="pl-4">
                <span className="text-blue-300">name</span>: <span className="text-green-300">'Devesh Kumar'</span>,
              </div>
              <div className="pl-4">
                <span className="text-blue-300">skills</span>: [<span className="text-green-300">'MERN'</span>, <span className="text-green-300">'Java'</span>, <span className="text-green-300">'System Design'</span>],
              </div>
              <div className="pl-4">
                <span className="text-blue-300">status</span>: <span className="text-green-300">'Hiring Open'</span>,
              </div>
              <div className="pl-4">
                <span className="text-blue-300">github</span>: <span className="text-green-300">'@devesh22s'</span>
              </div>
              <div className="text-white">{`};`}</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;