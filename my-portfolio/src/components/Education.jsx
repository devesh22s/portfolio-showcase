import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Code2 } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 max-w-4xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Education & <span className="text-blue-500">History</span>
      </motion.h2>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
        
        {/* Item 1: Degree */}
        <TimelineItem 
          year="2023 - Present"
          title="Bachelor of Computer Applications (BCA)"
          place="Manipal University Jaipur"
          desc="Current CGPA: 9.0/10.0. Specializing in Software Development and Algorithmic Logic."
          icon={<BookOpen size={20} />}
          align="left"
        />

        {/* Item 2: Certification */}
        <TimelineItem 
          year="Verified Certification"
          title="Front-end Development (React V2)"
          place="IBM (Credly Verified)"
          desc="Professional certification validating expertise in building interactive SPAs and component-based architecture."
          icon={<Award size={20} />}
          align="right"
        />

        {/* Item 3: Hackathon */}
        <TimelineItem 
          year="2025"
          title="Anveshan Hackathon Participant"
          place="Organized by Masai"
          desc="Built a functional prototype within a 3-day sprint, demonstrating rapid prototyping and teamwork."
          icon={<Code2 size={20} />}
          align="left"
        />
      </div>
    </section>
  );
};

const TimelineItem = ({ year, title, place, desc, icon, align }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
  >
    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#0a0a0a] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-blue-500 z-10">
      {icon}
    </div>
    
    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-white/10 bg-white/5 hover:border-emerald-500/30 transition-colors">
      <div className="flex items-center justify-between space-x-2 mb-1">
        <div className="font-bold text-white">{title}</div>
        <time className="font-caveat font-medium text-emerald-400 text-sm">{year}</time>
      </div>
      <div className="text-blue-400 text-sm mb-2">{place}</div>
      <div className="text-gray-400 text-sm">{desc}</div>
    </div>
  </motion.div>
);

export default Education;