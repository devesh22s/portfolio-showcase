import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, Mic, MicOff, TerminalSquare } from 'lucide-react';

const knowledgeBase = {
  greeting: "Hello! I'm NEXUS, Devesh's AI companion. How can I assist you today?",
  about: "Devesh is a 22-year-old Final Year BCA student at Manipal University Jaipur (9.0 CGPA). He builds scalable MERN apps and Java backend architectures.",
  skills: "His core tech stack includes React.js, Redux, Node.js, Express, MongoDB, Java (DSA), and Spring Boot.",
  projects: "His main projects are: \n1. Velora E-Commerce (MERN+Razorpay) \n2. Restaurant QR System (Socket.io) \n3. Text-to-Image AI (Hugging Face)",
  contact: "You can email him directly at devesh262004@gmail.com or call him at +91 6377829537.",
  default: "I'm still learning! You can ask me about his 'projects', 'skills', 'education', or say 'hire him'."
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ id: 1, type: 'bot', text: knowledgeBase.greeting }]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Voice Recognition Setup
  useEffect(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.lang = 'en-IN';

      recognitionRef.current.onresult = (event) => {
        const voiceText = event.results[0][0].transcript;
        setInput(voiceText);
        sendMessage(voiceText); 
      };

      recognitionRef.current.onerror = () => setIsListening(false);
      recognitionRef.current.onend = () => setIsListening(false);
    }
  }, []);

  const toggleVoice = () => {
    if (!recognitionRef.current) {
      alert("Your browser doesn't support voice input. Try using Google Chrome!");
      return;
    }
    if (isListening) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const getSmartReply = (text) => {
    const lowerText = text.toLowerCase();
    if (lowerText.includes('project') || lowerText.includes('work')) return knowledgeBase.projects;
    if (lowerText.includes('skill') || lowerText.includes('tech') || lowerText.includes('stack')) return knowledgeBase.skills;
    if (lowerText.includes('about') || lowerText.includes('who') || lowerText.includes('education')) return knowledgeBase.about;
    if (lowerText.includes('contact') || lowerText.includes('hire') || lowerText.includes('email') || lowerText.includes('phone')) return knowledgeBase.contact;
    if (lowerText.includes('hi') || lowerText.includes('hello')) return "Hi there! Want to know about Devesh's projects or skills?";
    return knowledgeBase.default;
  };

  const sendMessage = (textToSend = input) => {
    if (typeof textToSend !== 'string' || !textToSend.trim()) return;

    const userMsg = { id: Date.now(), type: 'user', text: textToSend };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const replyText = getSmartReply(textToSend);
      const botMsg = { id: Date.now() + 1, type: 'bot', text: replyText };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1200);
  };

  const suggestions = ["What are his skills?", "Tell me about his projects", "How to contact him?"];

  return (
    <>
      {/* Floating Trigger Button */}
      <motion.button 
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }} 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)} 
        className="fixed bottom-8 right-8 z-[999] w-16 h-16 bg-gradient-to-br from-cyan-400 to-violet-500 rounded-[2rem] flex items-center justify-center shadow-[0_10px_40px_rgba(0,243,255,0.4)] border border-white/20 group"
      >
        <Bot size={32} className="text-black group-hover:scale-110 transition-transform" />
        <div className="absolute inset-0 rounded-[2rem] border border-cyan-400 animate-ping opacity-50" />
      </motion.button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-28 right-8 z-[999] w-[calc(100vw-40px)] md:w-[400px] h-[550px] bg-[#050508]/95 backdrop-blur-3xl border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="bg-black/50 border-b border-white/10 px-6 py-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-cyan-500/20 border border-cyan-500/50 rounded-xl flex items-center justify-center">
                  <TerminalSquare size={20} className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-black text-lg text-white tracking-widest">NEXUS AI</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <p className="text-emerald-400 text-xs font-mono font-bold tracking-widest uppercase">System Online</p>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10">
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
              {messages.map((msg) => (
                <motion.div 
                  key={msg.id} 
                  initial={{ opacity: 0, x: msg.type === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-4 text-[15px] font-medium leading-relaxed ${
                    msg.type === 'user' 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-black rounded-2xl rounded-tr-sm shadow-lg' 
                      : 'bg-white/5 border border-white/10 text-gray-200 rounded-2xl rounded-tl-sm'
                  }`}>
                    {/* Render newlines properly for projects list */}
                    {msg.text.split('\n').map((line, i) => (
                      <span key={i}>{line}<br/></span>
                    ))}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-sm flex gap-2 items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }} />
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {messages.length === 1 && (
              <div className="px-6 pb-4 flex flex-wrap gap-2">
                {suggestions.map((text, i) => (
                  <button 
                    key={i} onClick={() => sendMessage(text)}
                    className="text-xs font-bold tracking-wider px-4 py-2 bg-white/5 border border-white/10 text-cyan-400 rounded-full hover:bg-cyan-500/20 transition-all"
                  >
                    {text}
                  </button>
                ))}
              </div>
            )}

            {/* Input Box */}
            <div className="p-5 bg-black/40 border-t border-white/10 flex gap-3 items-center">
              <button 
                onClick={toggleVoice} 
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${isListening ? 'bg-rose-500/20 border border-rose-500 text-rose-500 animate-pulse' : 'bg-[#111118] border border-white/10 text-cyan-400 hover:bg-white/5'}`}
              >
                {isListening ? <MicOff size={20} /> : <Mic size={20} />}
              </button>
              
              <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()} 
                placeholder={isListening ? "Listening..." : "Ask NEXUS..."} 
                className="flex-1 bg-[#111118] border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors font-medium placeholder-gray-600" 
              />
              
              <button 
                onClick={() => sendMessage()} 
                disabled={!input.trim() && !isListening}
                className="w-12 h-12 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 disabled:hover:bg-cyan-500 text-black rounded-xl flex items-center justify-center transition-all shadow-lg"
              >
                <Send size={18} className="ml-1" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;