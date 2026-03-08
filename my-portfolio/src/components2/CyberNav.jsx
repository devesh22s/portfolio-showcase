import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const CyberNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Condensing links for a cleaner, premium UI. 
  // (Education & Grind can be discovered as they scroll through the Journey/About)
  const navItems = ['ABOUT', 'EXPERIENCE', 'ARSENAL', 'WORK'];

  // Mobile menu animation variants
  const menuVars = {
    initial: { opacity: 0, y: -20, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, staggerChildren: 0.1 } },
    exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.2 } }
  };

  const linkVars = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }} 
      animate={{ y: 0 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}
    >
      <div className={`max-w-7xl mx-auto px-6 flex justify-between items-center transition-all duration-500 rounded-full ${scrolled ? 'bg-[#030305]/80 backdrop-blur-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] py-3' : 'bg-transparent py-2'}`}>
        
        {/* LOGO */}
        <a href="#home" className="text-2xl md:text-3xl font-black tracking-tighter text-white drop-shadow-md z-10">
          DEVESH<span className="text-cyan-400">.</span>
        </a>

        {/* DESKTOP LINKS (Floating Glass Pill) */}
        <div className="hidden lg:flex items-center gap-8 bg-white/5 border border-white/10 px-8 py-3 rounded-full backdrop-blur-md shadow-inner">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="relative text-xs font-bold tracking-[0.2em] text-gray-400 hover:text-cyan-400 transition-colors group"
            >
              {item}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-cyan-400 rounded-full transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#00f3ff]" />
            </a>
          ))}
        </div>

        {/* CTA BUTTON & MOBILE TOGGLE */}
        <div className="flex items-center gap-4 z-10">
          <a 
            href="#contact" 
            className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-black font-black text-xs tracking-[0.15em] rounded-full transition-all shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.6)] hover:scale-105"
          >
            HIRE ME <ArrowUpRight size={16} />
          </a>

          <button 
            onClick={() => setMobileOpen(!mobileOpen)} 
            className="lg:hidden p-2 text-white bg-white/5 border border-white/10 rounded-full backdrop-blur-md hover:bg-white/10 transition-colors"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute top-full left-0 w-full px-6 pt-4 lg:hidden"
          >
            <div className="bg-[#0a0a0f]/95 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-6 flex flex-col gap-2 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              {['ABOUT', 'EXPERIENCE', 'EDUCATION', 'ARSENAL', 'WORK', 'ACHIEVEMENTS'].map((item) => (
                <motion.a 
                  variants={linkVars}
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-300 hover:text-cyan-400 hover:bg-white/5 px-4 py-3 rounded-xl text-sm font-bold tracking-[0.2em] transition-all flex items-center justify-between group"
                >
                  {item}
                  <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                </motion.a>
              ))}
              
              <motion.div variants={linkVars} className="mt-4 pt-4 border-t border-white/10">
                <a 
                  href="#contact"
                  onClick={() => setMobileOpen(false)} 
                  className="w-full py-4 bg-cyan-500 text-black font-black text-sm tracking-[0.2em] rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,243,255,0.3)]"
                >
                  INITIATE CONTACT
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default CyberNav;