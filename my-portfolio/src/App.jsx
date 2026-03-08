import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars, Sparkles } from '@react-three/drei';

import CyberNav from './components2/CyberNav';
import HeroBlack from './components2/HeroBlack';
import AboutProfessional from './components2/AboutProfessional';
import StatsSection from './components2/StatsSection';
import ExperienceTimeline from './components2/ExperienceTimeline';
// import EducationHistory from './components2/EducationHistory'; // Uncomment when ready
import TechnicalArsenal from './components2/TechnicalArsenal';
import ProjectsShowcase from './components2/ProjectsShowcase';
import LifestyleGrind from './components2/LifestyleGrind';
import Achievements from './components2/Achievements';
import ContactFooter from './components2/ContactFooter';
import Chatbot from './components2/Chatbot';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {/* ==================== PREMIUM 3D ENVIRONMENT ==================== */}
      <div className="fixed inset-0 z-[-1] bg-[#030305] overflow-hidden">
        
        {/* Ambient Corner Glows for depth (Cyan Top-Left, Violet Bottom-Right) */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(0,243,255,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(168,85,247,0.05)_0%,transparent_70%)] pointer-events-none" />
        
        <Canvas camera={{ position: [0, 0, 1] }}>
          {/* Slower, denser stars for a cinematic feel */}
          <Stars radius={100} depth={50} count={5000} factor={3} saturation={0} fade speed={0.3} />
          {/* Subtle cyan particles floating */}
          <Sparkles count={150} scale={12} size={1.5} speed={0.2} opacity={0.2} color="#00f3ff" />
        </Canvas>
      </div>

      <AnimatePresence>
        {loading ? (
          <motion.div 
            key="loader" 
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }} 
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-[#030305] flex flex-col items-center justify-center"
          >
            {/* High-End Terminal Loader */}
            <div className="relative flex items-center justify-center">
              <div className="w-24 h-24 border border-white/10 rounded-full absolute" />
              <div className="w-24 h-24 border-[3px] border-transparent border-t-cyan-400 border-r-violet-400 rounded-full animate-spin shadow-[0_0_30px_rgba(0,243,255,0.2)]" />
              <div className="w-2 h-2 bg-cyan-400 rounded-full absolute animate-pulse shadow-[0_0_10px_#00f3ff]" />
            </div>
            
            <motion.div 
              animate={{ opacity: [0.4, 1, 0.4] }} 
              transition={{ repeat: Infinity, duration: 1.5 }} 
              className="mt-8 flex flex-col items-center gap-2"
            >
              <h1 className="text-white font-mono text-sm tracking-[0.4em] font-bold">SYSTEM_BOOT</h1>
              <div className="flex gap-1">
                <span className="w-8 h-1 bg-cyan-500 rounded-full" />
                <span className="w-4 h-1 bg-violet-500 rounded-full" />
                <span className="w-2 h-1 bg-emerald-500 rounded-full" />
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.8 }}
            className="text-white font-sans overflow-x-hidden selection:bg-cyan-500/30 selection:text-black"
          >
            <CyberNav />
            
            {/* GAP REDUCED: Changed gap-40 to gap-12 md:gap-16. Removed max-w restriction so full-width components behave properly */}
            <main className="flex flex-col gap-12 md:gap-16 pb-0 pt-24 relative z-10 w-full">
              <HeroBlack />
              <AboutProfessional />
              <StatsSection />
              <ExperienceTimeline />
              {/* <EducationHistory /> */}
              <TechnicalArsenal />
              <ProjectsShowcase />
              <LifestyleGrind />
              <Achievements />
              <ContactFooter />
            </main>
            
            <Chatbot />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;