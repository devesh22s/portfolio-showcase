import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // **********************************************
    // TODO: Replace these with your EmailJS IDs
    // Website: https://www.emailjs.com/ (Create Free Account)
    // 1. Service ID
    // 2. Template ID
    // 3. Public Key
    // **********************************************
    
    emailjs.sendForm(
      'service_er4j7n8',    
      'template_44amqwb',   
      formRef.current, 
      'r8tW0tL8RY0zVShUY'     
    )
    .then((result) => {
        setLoading(false);
        setSuccess(true);
        e.target.reset();
        setTimeout(() => setSuccess(false), 5000);
    }, (error) => {
        setLoading(false);
        alert("Failed to send message. Please try again.");
    });
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="bg-[#0F1115] border border-white/5 rounded-[2rem] p-8 md:p-16 overflow-hidden relative">
        <div className="grid md:grid-cols-2 gap-12 relative z-10">
          
          {/* Contact Info */}
          <div>
            <span className="text-blue-400 font-medium tracking-wider text-sm">GET IN TOUCH</span>
            <h2 className="text-4xl font-bold mt-2 mb-6 text-white">Let's Work <br/>Together</h2>
            <p className="text-gray-400 mb-10 text-lg">
              Have a project in mind or want to hire me? I'm available for new opportunities.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Phone</p>
                  <p className="text-white font-medium">+91 6377829537</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-emerald-500/20 group-hover:text-emerald-400 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Email</p>
                  <p className="text-white font-medium">devesh262004@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/5 p-8 rounded-3xl border border-white/5">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs text-gray-400 ml-1">Name</label>
                  <input name="user_name" required type="text" className="w-full p-4 bg-[#0a0a0a] rounded-xl border border-white/10 focus:border-blue-500 focus:outline-none text-white transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-gray-400 ml-1">Email</label>
                  <input name="user_email" required type="email" className="w-full p-4 bg-[#0a0a0a] rounded-xl border border-white/10 focus:border-blue-500 focus:outline-none text-white transition-all" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs text-gray-400 ml-1">Message</label>
                <textarea name="message" required rows="4" className="w-full p-4 bg-[#0a0a0a] rounded-xl border border-white/10 focus:border-blue-500 focus:outline-none text-white transition-all resize-none" placeholder="Tell me about your project..."></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={loading}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                  success 
                  ? "bg-emerald-500 text-white" 
                  : "bg-blue-600 hover:bg-blue-500 text-white"
                }`}
              >
                {loading ? <Loader2 className="animate-spin" /> : success ? <CheckCircle2 /> : <Send size={18} />}
                {loading ? "Sending..." : success ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;