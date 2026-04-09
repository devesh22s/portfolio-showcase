import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle2, Github, Linkedin, Mail, Phone, ArrowUpRight } from 'lucide-react';

const ContactFooter = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('idle');

  const sendEmail = (e) => {
    e.preventDefault(); 
    setStatus('loading');
    emailjs.sendForm('service_er4j7n8', 'template_44amqwb', formRef.current, 'r8tW0tL8RY0zVShUY')
    .then(() => { 
      setStatus('success'); 
      e.target.reset(); 
      setTimeout(() => setStatus('idle'), 5000); 
    })
    .catch(() => { 
      setStatus('idle'); 
      alert("Error. Direct email: devesh262004@gmail.com"); 
    });
  };

  return (
    // Adjusted top margin for mobile
    <div className="relative mt-20 md:mt-32">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Adjusted horizontal padding and bottom margin for mobile */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 mb-12 md:mb-20">
        {/* Adjusted padding for smaller screens */}
        <div className="bg-[#07070a] border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-16 shadow-2xl overflow-hidden relative">
          
          {/* Adjusted gap between left and right sections for mobile */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* ==================== LEFT SIDE: INFO & NUMBER ==================== */}
            <div className="space-y-6 md:space-y-8 z-10">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                {/* Adjusted heading size for better mobile fit */}
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 md:mb-6 tracking-tighter">
                  LET'S BUILD THE <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">FUTURE.</span>
                </h2>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md font-medium">
                  Whether you need a robust MERN architecture, a scalable Java backend, or a custom AI integration. Let's discuss your project.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                className="space-y-4 pt-2 md:pt-4"
              >
                {/* Email Card - Adjusted gap and padding */}
                <a href="mailto:devesh262004@gmail.com" className="group flex items-center gap-4 sm:gap-6 p-4 rounded-2xl border border-white/5 bg-[#111118] hover:border-cyan-400/50 hover:bg-cyan-500/5 transition-all">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-full bg-white/5 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] sm:text-xs font-bold tracking-widest text-gray-500 mb-1">EMAIL ME</p>
                    <p className="text-white font-mono text-sm sm:text-base font-medium truncate">devesh262004@gmail.com</p>
                  </div>
                  <ArrowUpRight size={20} className="ml-auto text-gray-600 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                </a>

                {/* Phone Card - Adjusted gap and padding */}
                <a href="tel:+916377829537" className="group flex items-center gap-4 sm:gap-6 p-4 rounded-2xl border border-white/5 bg-[#111118] hover:border-emerald-400/50 hover:bg-emerald-500/5 transition-all">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-full bg-white/5 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <Phone size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs font-bold tracking-widest text-gray-500 mb-1">CALL ME</p>
                    <p className="text-white font-mono text-sm sm:text-base font-medium">+91 6377829537</p>
                  </div>
                  <ArrowUpRight size={20} className="ml-auto text-gray-600 group-hover:text-emerald-400 transition-colors flex-shrink-0" />
                </a>
              </motion.div>
            </div>

            {/* ==================== RIGHT SIDE: FORM ==================== */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="bg-[#111118] border border-white/10 p-6 sm:p-8 md:p-10 rounded-[1.5rem] md:rounded-[2rem] shadow-xl z-10"
            >
              <form ref={formRef} onSubmit={sendEmail} className="space-y-4 md:space-y-5">
                <div className="space-y-1">
                  <label className="text-[10px] md:text-xs font-bold tracking-widest text-cyan-400/80 ml-2">NAME</label>
                  <input name="user_name" required type="text" placeholder="John Doe" className="w-full p-3 md:p-4 bg-[#0a0a0f] border border-white/5 rounded-xl focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,243,255,0.2)] focus:outline-none text-white transition-all font-medium text-sm md:text-base" />
                </div>
                
                <div className="space-y-1">
                  <label className="text-[10px] md:text-xs font-bold tracking-widest text-cyan-400/80 ml-2">EMAIL</label>
                  <input name="user_email" required type="email" placeholder="john@example.com" className="w-full p-3 md:p-4 bg-[#0a0a0f] border border-white/5 rounded-xl focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,243,255,0.2)] focus:outline-none text-white transition-all font-medium text-sm md:text-base" />
                </div>
                
                <div className="space-y-1">
                  <label className="text-[10px] md:text-xs font-bold tracking-widest text-cyan-400/80 ml-2">MESSAGE</label>
                  <textarea name="message" required rows="4" placeholder="Tell me about your project..." className="w-full p-3 md:p-4 bg-[#0a0a0f] border border-white/5 rounded-xl focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,243,255,0.2)] focus:outline-none text-white transition-all resize-none font-medium text-sm md:text-base" />
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} disabled={status !== 'idle'}
                  className={`w-full py-3 md:py-4 mt-2 rounded-xl text-sm md:text-base font-black tracking-[0.15em] flex items-center justify-center gap-2 md:gap-3 transition-all shadow-lg ${status === 'success' ? 'bg-emerald-500 text-black' : 'bg-cyan-500 text-black hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(0,243,255,0.4)]'}`}
                >
                  {status === 'loading' ? <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-black border-t-transparent rounded-full animate-spin" /> : status === 'success' ? <CheckCircle2 size={18} /> : <Send size={18}/>}
                  {status === 'loading' ? "TRANSMITTING..." : status === 'success' ? "RECEIVED!" : "SEND MESSAGE"}
                </motion.button>
              </form>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-[#050505] py-8 md:py-12 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tighter mb-1">DEVESH<span className="text-cyan-400">.</span></h3>
            <p className="text-gray-500 text-xs md:text-sm font-medium">Final Year BCA, Manipal University Jaipur.</p>
          </div>

          {/* Changed from hidden to visible on mobile, nicely stacked */}
          <div className="text-gray-600 text-xs md:text-sm font-mono order-3 md:order-2">
            © {new Date().getFullYear()} All Rights Reserved.
          </div>
          
          <div className="flex gap-4 order-2 md:order-3">
            <a href="https://github.com/devesh22s" target="_blank" rel="noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#111118] border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:border-white/20">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/devesh-kumar-26b10a286" target="_blank" rel="noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#111118] border border-white/5 flex items-center justify-center text-gray-400 hover:text-[#0a66c2] hover:bg-white/10 transition-all hover:border-white/20">
              <Linkedin size={18} />
            </a>
          </div>
          
        </div>
      </footer>
    </div>
  );
};

export default ContactFooter;