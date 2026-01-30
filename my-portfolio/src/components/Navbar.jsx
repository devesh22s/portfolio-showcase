import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll Detection for Glass Effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'];

  // Mobile Menu Animation Variants
  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "100vh",
      transition: { duration: 0.5, ease: "easeInOut", when: "beforeChildren", staggerChildren: 0.1 }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut", when: "afterChildren", staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5 py-4 shadow-lg shadow-blue-500/5' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* --- LOGO --- */}
        <Link to="home" smooth={true} className="cursor-pointer group flex items-center gap-2 z-50">
          <div className="p-2 bg-gradient-to-tr from-blue-600 to-emerald-500 rounded-lg group-hover:rotate-12 transition-transform duration-300">
            <Code2 size={24} className="text-white" />
          </div>
          <div className="text-2xl font-bold tracking-tighter text-white">
            DEVESH<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">.DEV</span>
          </div>
        </Link>

        {/* --- DESKTOP MENU --- */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-400 items-center">
          {menuItems.map((item) => (
            <li key={item}>
              <Link 
                to={item.toLowerCase()} 
                smooth={true} 
                offset={-50} 
                className="relative cursor-pointer hover:text-white transition-colors group py-2"
              >
                {item}
                {/* Hover Underline Animation */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                {/* Glow Effect */}
                <span className="absolute -inset-2 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></span>
              </Link>
            </li>
          ))}
          {/* Hire Me Button */}
          <Link to="contact" smooth={true}>
            <button className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-blue-600 hover:border-blue-500 text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
              Hire Me
            </button>
          </Link>
        </ul>

        {/* --- MOBILE TOGGLE --- */}
        <div className="md:hidden z-50 text-white cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <motion.div animate={isOpen ? "open" : "closed"} className="relative">
                {isOpen ? <X size={32} className="text-blue-400" /> : <Menu size={32} />}
            </motion.div>
        </div>

        {/* --- MOBILE MENU OVERLAY --- */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-[#020617] flex flex-col items-center justify-center space-y-8 md:hidden z-40 overflow-hidden"
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]" />

              {menuItems.map((item) => (
                <motion.div key={item} variants={itemVariants}>
                    <Link 
                        to={item.toLowerCase()} 
                        smooth={true} 
                        offset={-50} 
                        onClick={() => setIsOpen(false)}
                        className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 hover:to-blue-400 transition-all cursor-pointer tracking-tight"
                    >
                        {item}
                    </Link>
                </motion.div>
              ))}

              <motion.div variants={itemVariants} className="mt-8">
                 <Link to="contact" smooth={true} onClick={() => setIsOpen(false)}>
                    <button className="px-8 py-3 rounded-full bg-blue-600 text-white font-bold text-lg shadow-xl shadow-blue-600/30">
                        Let's Talk
                    </button>
                 </Link>
              </motion.div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;