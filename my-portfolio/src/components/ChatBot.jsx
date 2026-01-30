import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Bot } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Devesh's AI Assistant. How can I help you today? 👋", sender: 'bot' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const options = [
    { label: "Download Resume 📄", answer: "Sure! I'm downloading the resume for you now. You can also find it in the 'About' section." },
    { label: "Tech Stack? 💻", answer: "My core stack includes MERN (MongoDB, Express, React, Node.js), Java, and Redux Toolkit." },
    { label: "Contact Info 📞", answer: "You can reach Devesh at +91 6377829537 or devesh262004@gmail.com." },
    { label: "Hire Me! 🚀", answer: "That's great! Please fill out the contact form below or email me directly." },
  ];

  const handleOptionClick = (option) => {
    setMessages(prev => [...prev, { text: option.label, sender: 'user' }]);
    setIsTyping(true);

    setTimeout(() => {
      setMessages(prev => [...prev, { text: option.answer, sender: 'bot' }]);
      setIsTyping(false);

      // --- AUTO DOWNLOAD LOGIC ---
      if (option.label.includes("Resume")) {
        const link = document.createElement('a');
        link.href = '/resume.pdf'; // Public folder path
        link.download = 'Devesh_Kumar_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      
      // --- AUTO SCROLL TO CONTACT ---
      if (option.label.includes("Hire Me")) {
         const contactSection = document.getElementById('contact');
         if(contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
      }

    }, 1000);
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsOpen(true)}
        className={`${isOpen ? 'hidden' : 'flex'} fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full shadow-lg shadow-blue-500/30 text-white`}
      >
        <MessageCircle size={28} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50 w-full max-w-sm bg-[#0F1115] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px]"
          >
            <div className="bg-gradient-to-r from-blue-600 to-emerald-600 p-4 flex justify-between items-center">
              <div className="flex items-center gap-2 text-white">
                <Bot size={20} />
                <span className="font-bold">Devesh AI</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#0a0a0a]">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-xl text-sm ${
                    msg.sender === 'user' 
                      ? 'bg-blue-600 text-white rounded-br-none' 
                      : 'bg-white/10 text-gray-200 rounded-bl-none border border-white/5'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/10 p-3 rounded-xl rounded-bl-none flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-[#0F1115] border-t border-white/10">
              <p className="text-xs text-gray-500 mb-3 text-center">Select a question:</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(opt)}
                    className="text-xs px-3 py-2 bg-white/5 hover:bg-blue-600/20 hover:text-blue-400 border border-white/10 rounded-full transition-colors text-gray-300"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;