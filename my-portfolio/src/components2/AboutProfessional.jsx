import React, { useRef, Suspense } from 'react';
import { motion, useInView } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, PerspectiveCamera, Preload } from '@react-three/drei';
import { GraduationCap, Globe, Rocket, Terminal, Cpu, Zap, Code2 } from 'lucide-react';

// ==================== OPTIMIZED 3D PRISM VISUAL ====================
const FloatingPrism = () => {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.2;
      meshRef.current.rotation.y = t * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef}>
        {/* Icosahedron is very light on GPU but looks high-end */}
        <icosahedronGeometry args={[2, 0]} /> 
        <MeshDistortMaterial
          color="#00f3ff"
          emissive="#a855f7"
          emissiveIntensity={0.5}
          speed={2}
          distort={0.4}
          radius={1}
          wireframe
        />
      </mesh>
      {/* Inner Glow Sphere */}
      <Sphere args={[0.8, 16, 16]}>
        <meshStandardMaterial color="#00f3ff" emissive="#00f3ff" emissiveIntensity={2} />
      </Sphere>
    </Float>
  );
};

// ==================== MAIN ABOUT SECTION ====================
const AboutProfessional = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "-100px" });

  return (
    <section id="about" ref={containerRef} className="max-w-7xl mx-auto px-6 py-24 relative overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* ==================== LEFT: FULL DETAILED SUMMARY ==================== */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 shadow-[0_0_20px_rgba(0,243,255,0.1)]">
            <Zap size={14} className="text-cyan-400 animate-pulse" />
            <span className="text-cyan-400 font-mono text-[10px] tracking-[0.3em] uppercase font-bold">Identity_Verified</span>
          </div>

          <h2 className="text-6xl md:text-8xl font-black mb-8 text-white tracking-tighter leading-none">
            THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400">ARCHITECT.</span>
          </h2>
          
          <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed font-medium">
            <p className="p-6 bg-white/[0.02] border-l-2 border-cyan-500 rounded-r-3xl backdrop-blur-sm shadow-xl">
              I am <span className="text-white font-black">Devesh</span>, a 22-year-old high-performance Software Engineer currently in my <span className="text-cyan-400 font-bold">Final Year of BCA</span> at <span className="text-white">Manipal University Jaipur</span>. 
              Maintaining a consistent <span className="text-emerald-400 font-bold">9.0 CGPA</span>, I bridge the gap between academic theory and production-grade engineering.
            </p>

            <p>
              My expertise is rooted in the <span className="text-white font-bold tracking-tight">MERN Stack</span> and <span className="text-white font-bold tracking-tight">Java Backend Architecture</span>. I engineer scalable digital ecosystems using modern tools. From integrating complex payment gateways like <span className="text-violet-400 underline decoration-violet-500/50">Razorpay</span> to real-time communication via <span className="text-cyan-400 underline decoration-cyan-500/50">Socket.io</span>, my focus is on efficiency.
            </p>

            <p>
              Beyond the stack, I am a <span className="text-white font-bold tracking-tight">DSA Specialist</span>. I believe that clean code and optimized algorithms are the backbone of any millionaire-grade company. I am constantly pushing the limits of what's possible with logic to achieve my goal of becoming a <span className="text-white">CEO by age 25</span>.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
               <div className="flex items-center gap-2 text-sm font-mono text-gray-500">
                  <Globe size={16} /> Jaipur, India
               </div>
               
            </div>
          </div>
        </motion.div>

        {/* ==================== RIGHT: 3D PRISM VISUAL (Attractive & Fast) ==================== */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[500px] lg:h-[700px] w-full rounded-[3rem] bg-[#030305] border border-white/5 overflow-hidden shadow-2xl group"
        >
          {/* Static Ambient Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,243,255,0.1),transparent_70%)] pointer-events-none" />

          {isInView ? (
            <Canvas 
              camera={{ position: [0, 0, 8], fov: 35 }} 
              dpr={[1, 1.5]} 
              gl={{ antialias: false, powerPreference: "high-performance" }}
            >
              <Suspense fallback={null}>
                <ambientLight intensity={1} />
                <PerspectiveCamera makeDefault position={[0, 0, 8]} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f3ff" />
                <pointLight position={[-10, -10, -10]} intensity={1.5} color="#a855f7" />
                <FloatingPrism />
                <Preload all />
              </Suspense>
            </Canvas>
          ) : (
            <div className="h-full w-full flex items-center justify-center text-cyan-500/10 font-mono tracking-widest uppercase text-xs">Initializing_Visuals...</div>
          )}
          
          {/* Data HUD Overlay (No logic, just style) */}
          <div className="absolute top-10 right-10 flex flex-col items-end gap-2 text-[10px] font-mono text-white/20 tracking-widest uppercase pointer-events-none">
             <span>OBJ_PRISM_v4</span>
             <span>GEOMETRY_OPTIMIZED</span>
             <span className="text-cyan-400/40">FPS_STABLE_60</span>
          </div>

          <div className="absolute bottom-10 left-10 flex items-center gap-3 bg-black/60 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 z-20">
            <span className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_#00f3ff]" />
            <span className="text-cyan-400 font-mono text-[10px] tracking-[0.3em] font-bold uppercase">Devesh_Engine_Active</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutProfessional;