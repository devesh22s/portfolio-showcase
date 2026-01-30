import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowUp, Terminal } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';

function App() {
  // --- 1. Preloader State ---
  const [loading, setLoading] = useState(true);
  const [showButton, setShowButton] = useState(false);

  // --- 2. Scroll Progress Bar Logic ---
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // --- 3. Simulate Loading & Scroll Detection ---
  useEffect(() => {
    // Fake loading time (2 seconds)
    const timer = setTimeout(() => setLoading(false), 2200);

    // Scroll to Top Button Visibility
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <AnimatePresence>
        {loading ? (
          // --- PRELOADER SCREEN ---
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#020617] text-white"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              className="mb-4"
            >
              <Terminal size={64} className="text-blue-500" />
            </motion.div>
            <div className="flex items-center gap-2 font-mono text-xl">
              <span className="text-green-400">root@devesh:~$</span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                initializing_system...
              </motion.span>
            </div>
            
            {/* Loading Bar */}
            <div className="w-48 h-1 bg-white/10 mt-8 rounded-full overflow-hidden">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-blue-500 to-emerald-500"
              />
            </div>
          </motion.div>
        ) : (
          // --- MAIN WEBSITE CONTENT ---
          <div className="bg-[#020617] min-h-screen text-white font-sans selection:bg-blue-500/30 overflow-x-hidden relative">
            
            {/* 1. Scroll Progress Bar (Top Fixed) */}
            <motion.div
              className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 origin-left z-[60]"
              style={{ scaleX }}
            />

            <Navbar />
            
            <main className="relative z-10">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Education />
              <Contact />
            </main>

            {/* Background Texture (Noise Effect) */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" 
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
            </div>
            
            {/* ChatBot Component (Right Corner) */}
            <ChatBot />

            {/* 2. Scroll To Top Button (Shifted Left) */}
            <AnimatePresence>
              {showButton && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  onClick={scrollToTop}
                  // FIX: Changed 'right-8' to 'right-28' to avoid collision with ChatBot
                  // Also changed z-index to 40 so ChatBot (z-50) stays on top if opened
                  className="fixed bottom-8 right-28 z-40 p-4 bg-white/10 hover:bg-blue-600 text-white rounded-full border border-white/20 backdrop-blur-md shadow-lg transition-all"
                >
                  <ArrowUp size={24} />
                </motion.button>
              )}
            </AnimatePresence>

          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;