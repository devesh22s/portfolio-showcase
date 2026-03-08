import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, Float } from '@react-three/drei';
import { Award, Star, Code2 } from 'lucide-react';

// ==================== 3D BACKGROUND CORE ====================
const AchievementCore3D = () => {
  const meshRef = useRef();
  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Icosahedron ref={meshRef} args={[2.5, 1]} scale={1.5}>
        <meshBasicMaterial color="#00f3ff" wireframe transparent opacity={0.03} />
      </Icosahedron>
    </Float>
  );
};

// ==================== INTERACTIVE GLOW CARD ====================
const AchievementCard = ({ data, index }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#07070a] p-10 shadow-2xl transition-all hover:border-white/20 h-full flex flex-col"
    >
      {/* Dynamic Mouse Tracking Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
        style={{
          background: useTransform(
            [x, y],
            ([latestX, latestY]) => `radial-gradient(400px circle at ${latestX}px ${latestY}px, ${data.glow}, transparent 60%)`
          ),
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col flex-grow">
        <div className={`mb-8 inline-flex w-fit p-4 rounded-2xl bg-white/5 border border-white/10 ${data.textColor} shadow-[0_0_20px_rgba(255,255,255,0.02)] group-hover:scale-110 transition-transform duration-500`}>
          {data.icon}
        </div>
        <h3 className="text-2xl font-black text-white mb-4 drop-shadow-md tracking-wide">
          {data.title}
        </h3>
        <p className="text-gray-400 font-medium leading-relaxed mt-auto">
          {data.desc}
        </p>
      </div>
    </motion.div>
  );
};

// ==================== 100% REAL ACHIEVEMENTS DATA ====================
const achievements = [
  { 
    icon: <Award size={36} />, 
    title: "IBM Certified React Dev", 
    desc: "Credly Verified Professional Certification • Validated expertise in building interactive SPAs and component-based UI architecture.",
    glow: "rgba(0, 243, 255, 0.15)", // Cyan glow
    textColor: "text-cyan-400"
  },
  { 
    icon: <Code2 size={36} />, 
    title: "Anveshan Hackathon '25", 
    desc: "Active Participant • Engineered a functional prototype within a rigorous 72-hour development sprint organized by Masai.",
    glow: "rgba(168, 85, 247, 0.15)", // Violet glow
    textColor: "text-violet-400"
  },
  { 
    icon: <Star size={36} />, 
    title: "LeetCode & DSA Focus", 
    desc: "Active participant in the 30-Days of JavaScript challenge. Continuously mastering Data Structures and Algorithmic Logic.",
    glow: "rgba(16, 185, 129, 0.15)", // Emerald glow
    textColor: "text-emerald-400"
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 overflow-hidden">
      {/* 3D Background Element */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-60 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={1} />
          <AchievementCore3D />
        </Canvas>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter drop-shadow-lg">
            MILESTONES & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 drop-shadow-[0_0_20px_rgba(0,243,255,0.2)]">
              RECOGNITION.
            </span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 perspective-[1000px]">
          {achievements.map((a, i) => (
            <AchievementCard key={i} data={a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;