import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Download, FileText } from 'lucide-react'; // Added icons

const About = () => {
  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto relative">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Animated Visual */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl blur-xl opacity-20" />
          <div className="relative bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
            <Code2 className="text-blue-400 w-12 h-12 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Problem Solver</h3>
            <p className="text-gray-400 leading-relaxed">
              I don't just write code; I architect solutions. With a strong foundation in 
              <span className="text-emerald-400"> Data Structures (50+ DSA Solved)</span> and 
              system design, I build applications that are scalable, secure, and user-centric.
            </p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-blue-500">Me</span>
          </h2>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            I am a final-year <strong>BCA student at Manipal University Jaipur</strong> with a 
            <strong> 9.0 CGPA</strong>. My technical journey is defined by a deep dive into the MERN Stack 
            and Java Development.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-center">
              <h4 className="text-3xl font-bold text-white">9.0</h4>
              <p className="text-sm text-gray-500">CGPA</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-center">
              <h4 className="text-3xl font-bold text-emerald-400">IBM</h4>
              <p className="text-sm text-gray-500">Certified</p>
            </div>
          </div>

          {/* Resume Button */}
          <motion.a 
            href="/Resume.pdf"            
            download="Devesh_Kumar_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full font-bold text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all cursor-pointer"
          >
            <Download size={20} />
            Download Resume
          </motion.a>

        </motion.div>
      </div>
    </section>
  );
};

export default About;