import React, { useRef, useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
// Yahan Box aur Cylinder add kar diye hain
import { Sphere, Capsule, Cone, Torus, Box, Cylinder, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { Download, Eye } from 'lucide-react';

// ==================== ADVANCED PROCEDURAL ANIME-STYLE CYBER MAN ====================
const AnimeCyberMan = () => {
  const groupRef = useRef();
  const rightArmRef = useRef();
  const headRef = useRef();
  
  // Animation states
  const [isWaving, setIsWaving] = useState(false);

  // Auto-greeting sequence on load
  useEffect(() => {
    setTimeout(() => {
      setIsWaving(true);
      setTimeout(() => setIsWaving(false), 3000);
    }, 1000);
  }, []);

  // Complex animation loop
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    
    // Gentle breathing motion
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 0.8) * 0.05 - 1.2;
    }

    // Head slightly follows mouse
    if (headRef.current) {
      const mouseX = state.mouse.x * 0.2;
      const mouseY = state.mouse.y * 0.1;
      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, mouseX, 0.1);
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, -mouseY, 0.1);
    }

    // Advanced Arm Animation (Waving)
    if (rightArmRef.current) {
      if (isWaving) {
        // Sophisticated wave (Lifting and shaking)
        rightArmRef.current.rotation.z = THREE.MathUtils.lerp(rightArmRef.current.rotation.z, -Math.PI / 2, 0.1);
        rightArmRef.current.rotation.x = THREE.MathUtils.lerp(rightArmRef.current.rotation.x, -0.5 + Math.sin(t * 10) * 0.3, 0.1);
      } else {
        // Natural professional resting pose
        rightArmRef.current.rotation.z = THREE.MathUtils.lerp(rightArmRef.current.rotation.z, -Math.PI / 1.4, 0.05);
        rightArmRef.current.rotation.x = THREE.MathUtils.lerp(rightArmRef.current.rotation.x, 0.2, 0.05);
      }
    }
  });

  // Premium Materials Definition
  const materials = useMemo(() => ({
    skin: <meshStandardMaterial color="#fff0e5" roughness={0.3} metalness={0.1} />,
    armorDark: <meshStandardMaterial color="#050505" roughness={0.1} metalness={1} />,
    armorWhite: <meshPhysicalMaterial color="#ffffff" roughness={0.2} metalness={0.9} clearcoat={1} clearcoatRoughness={0.1} />,
    glowCyan: <meshStandardMaterial color="#00f3ff" emissive="#00f3ff" emissiveIntensity={4} />,
    glowViolet: <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={3} />,
    hair: <meshPhysicalMaterial color="#111" roughness={0.5} metalness={0.8} clearcoat={1} />
  }), []);

  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
      <group ref={groupRef} scale={0.75} rotation={[0, -0.2, 0]}>
        
        {/* Shadow Plane */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]} receiveShadow>
          <planeGeometry args={[10, 10]} />
          <shadowMaterial opacity={0.3} />
        </mesh>

        {/* ----- HEAD SECTION (Anime Proportions) ----- */}
        <group ref={headRef} position={[0, 4.2, 0]}>
          {/* Main Face Structure */}
          <Sphere args={[0.65, 32, 32]} position={[0, 0, 0]} castShadow>
            {materials.skin}
          </Sphere>
          {/* Defined Anime Jawline */}
          <Cone args={[0.65, 1, 4]} position={[0, -0.45, 0.05]} rotation={[0, Math.PI / 4, 0]} castShadow>
            {materials.skin}
          </Cone>
          
          {/* ANIME EYES (Layered for depth and glow) */}
          <group position={[0, 0.1, 0.55]}>
            {/* Eye Sockets/Outlines */}
            <Box args={[0.25, 0.35, 0.1]} position={[-0.32, 0, 0]} rotation={[0,0, 0.1]}>
              <meshStandardMaterial color="#000" roughness={1} />
            </Box>
            <Box args={[0.25, 0.35, 0.1]} position={[0.32, 0, 0]} rotation={[0,0, -0.1]}>
              <meshStandardMaterial color="#000" roughness={1} />
            </Box>
            {/* Glowing Pupils */}
            <Sphere args={[0.07, 16, 16]} position={[-0.32, 0, 0.06]}>
              {materials.glowCyan}
            </Sphere>
            <Sphere args={[0.07, 16, 16]} position={[0.32, 0, 0.06]}>
              {materials.glowCyan}
            </Sphere>
          </group>

          {/* Futuristic Headset/Sensors */}
          <Torus args={[0.7, 0.04, 16, 100]} rotation={[Math.PI / 2, 0, 0]} position={[0, 0.1, 0]}>
             {materials.armorDark}
          </Torus>
          <Sphere args={[0.15, 16, 16]} position={[-0.75, 0.1, 0]}>
             {materials.glowCyan}
          </Sphere>
          <Sphere args={[0.15, 16, 16]} position={[0.75, 0.1, 0]}>
             {materials.glowViolet}
          </Sphere>

          {/* ANIME HAIR ASSEMBLY (Procedural Spikes) */}
          <group position={[0, 0.5, -0.1]}>
            {/* Base hair mass */}
            <Sphere args={[0.7, 16, 16]} scale={[1, 0.8, 1]}>
              {materials.hair}
            </Sphere>
            {/* Spikes */}
            {[...Array(12)].map((_, i) => (
              <Cone 
                key={i} 
                args={[0.2, 1.2, 4]} 
                position={[
                  Math.sin(i * Math.PI / 3) * 0.6, 
                  0.5 + Math.random() * 0.3, 
                  Math.cos(i * Math.PI / 3) * 0.5 - 0.2
                ]}
                rotation={[
                  -Math.PI / 4 + Math.random() * 0.5, 
                  i * Math.PI / 3, 
                  Math.random() * 0.2
                ]}
                castShadow
              >
                {materials.hair}
              </Cone>
            ))}
            {/* Front Bangs */}
            <Cone args={[0.15, 0.8, 4]} position={[-0.3, 0, 0.6]} rotation={[0.4, 0.2, 0.5]} castShadow>{materials.hair}</Cone>
            <Cone args={[0.15, 0.9, 4]} position={[0.1, -0.1, 0.65]} rotation={[0.5, -0.1, 0.2]} castShadow>{materials.hair}</Cone>
          </group>
        </group>

        {/* ----- TORSO & BODY (Sleek Cybernetic Armor) ----- */}
        <group position={[0, 2.2, 0]}>
          {/* Neck Joint */}
          <Cylinder args={[0.2, 0.2, 0.8, 16]} position={[0, 1.4, 0]}>
            {materials.armorDark}
          </Cylinder>
          
          {/* Main Torso Block */}
          <Capsule args={[0.8, 2, 16]} position={[0, 0, 0]} castShadow>
             {materials.armorWhite}
          </Capsule>
          
          {/* Armored Chest Plates */}
          <Box args={[0.7, 1, 0.3]} position={[-0.4, 0.6, 0.6]} rotation={[0.2, 0.1, 0]} castShadow>
             {materials.armorDark}
          </Box>
          <Box args={[0.7, 1, 0.3]} position={[0.4, 0.6, 0.6]} rotation={[0.2, -0.1, 0]} castShadow>
             {materials.armorDark}
          </Box>
          
          {/* Glowing Center 'Reactor' */}
          <group position={[0, 0.5, 0.85]} scale={0.5}>
            <Torus args={[0.4, 0.05, 16, 100]}>
               {materials.glowCyan}
            </Torus>
            <Sphere args={[0.2, 16, 16]}>
               {materials.glowViolet}
            </Sphere>
          </group>
        </group>

        {/* ----- ARMS ----- */}
        {/* Left Arm (Resting Professional Pose) */}
        <group position={[-1.3, 3.2, 0]} rotation={[0.2, 0, 0.3]}>
          <Sphere args={[0.3, 16, 16]}>{materials.armorDark}</Sphere> {/* Shoulder */}
          <Capsule args={[0.18, 1.2, 16]} position={[0, -0.8, 0]} castShadow>
             {materials.armorWhite}
          </Capsule>
          <Torus args={[0.2, 0.04, 12, 50]} position={[0, -1.5, 0]} rotation={[Math.PI/2, 0, 0]}>{materials.glowCyan}</Torus> {/* Elbow */}
          <Capsule args={[0.16, 1, 16]} position={[0, -2.1, 0]} castShadow>
             {materials.armorWhite}
          </Capsule>
          <Sphere args={[0.2, 16, 16]} position={[0, -2.8, 0]}>{materials.armorDark}</Sphere> {/* Hand */}
        </group>

        {/* Right Arm (Waving 'Hi'!) */}
        <group ref={rightArmRef} position={[1.3, 3.2, 0]}>
          <Sphere args={[0.3, 16, 16]}>{materials.armorDark}</Sphere> {/* Shoulder */}
          <Capsule args={[0.18, 1.2, 16]} position={[0, -0.8, 0]} castShadow>
             {materials.armorWhite}
          </Capsule>
          <Torus args={[0.2, 0.04, 12, 50]} position={[0, -1.5, 0]} rotation={[Math.PI/2, 0, 0]}>{materials.glowViolet}</Torus> {/* Elbow */}
          <Capsule args={[0.16, 1, 16]} position={[0, -2.1, 0]} castShadow>
             {materials.armorWhite}
          </Capsule>
          {/* Futuristic Palm Projector */}
          <Sphere args={[0.25, 16, 16]} position={[0, -2.8, 0]}>
             <meshStandardMaterial color="#00f3ff" emissive="#00f3ff" emissiveIntensity={5} />
          </Sphere>
        </group>
      </group>
    </Float>
  );
};

// ==================== MAIN HERO SECTION ====================
const HeroBlack = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full relative z-10">
        
        {/* ==================== LEFT SIDE - INTRO TEXT ==================== */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className="text-center lg:text-left"
        >
          <div className="inline-block px-6 py-2.5 rounded-3xl border border-cyan-400/30 bg-white/5 backdrop-blur-2xl mb-8 shadow-[0_0_40px_rgba(0,243,255,0.15)]">
            <span className="text-cyan-400 font-mono text-sm tracking-[0.35em] uppercase">SYSTEM ARCHITECT • MERN ENGINEER</span>
          </div>

          <h1 className="text-[4.8rem] md:text-[7rem] lg:text-[8.5rem] font-black leading-none tracking-[-4px] text-white mb-6 drop-shadow-[0_0_80px_rgba(0,243,255,0.6)]">
            DEVESH
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400">.</span>
          </h1>

          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-violet-200 mb-8">
            ARCHITECTING SCALABLE FUTURES
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed mb-12 relative z-10">
            Full-Stack MERN Developer • Java DSA Expert • Building production-grade AI &amp; trading systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start relative z-10">
            <a 
              href="/Resume.pdf" 
              download="Devesh_Resume.pdf"
              className="group px-10 py-5 bg-gradient-to-r from-cyan-400 to-emerald-400 text-black font-bold text-lg rounded-3xl flex items-center justify-center gap-4 hover:scale-105 transition-all shadow-[0_0_40px_rgba(0,243,255,0.4)]"
            >
              <Download size={22} /> DOWNLOAD CV
            </a>

            <a 
              href="/Resume.pdf" 
              target="_blank"
              rel="noreferrer"
              className="group px-10 py-5 border-2 border-white/40 hover:border-white backdrop-blur-xl rounded-3xl font-bold text-lg flex items-center justify-center gap-4 transition-all hover:bg-white/5"
            >
              <Eye size={22} /> VIEW RESUME
            </a>
          </div>
        </motion.div>

        {/* ==================== RIGHT SIDE - ADVANCED ANIME SCENE ==================== */}
        <div className="relative h-[550px] lg:h-[750px] w-full rounded-[2.5rem] border border-white/10 bg-[#020202] overflow-hidden shadow-2xl">
          
          <Canvas  camera={{ position: [0, 1.5, 9], fov: 40 }} className="absolute inset-0" shadows>
            <ambientLight intensity={1.5} />
            
            {/* Studio lighting for premium materials */}
            <directionalLight 
              position={[5, 10, 5]} 
              intensity={4} 
              color="#ffffff" 
              castShadow 
              shadow-mapSize={[2048, 2048]} 
            />
            <directionalLight position={[-8, 5, -5]} intensity={2.5} color="#00f3ff" />
            <spotLight position={[0, 15, 2]} intensity={3} color="#a855f7" angle={0.3} penumbra={1} />
            
            <AnimeCyberMan />
            
            {/* Professional Environment map for reflections */}
            <Environment preset="city" />
          </Canvas>

          {/* Premium Terminal Overlay */}
          <div className="absolute top-8 left-8 flex gap-2.5 z-10">
            <div className="w-3.5 h-3.5 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
            <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
            <div className="w-3.5 h-3.5 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
          </div>
          <div className="absolute bottom-8 right-8 text-cyan-400/80 font-mono text-sm tracking-[0.2em] z-10 flex items-center gap-3 bg-black/50 px-4 py-2 rounded-full border border-white/10">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_#00f3ff]" />
            DEVESH_CYBER_AVATAR_v2.0
          </div>

          {/* Inner shadow for depth */}
          <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.9)] pointer-events-none rounded-[2.5rem]" />
        </div>
      </div>
    </section>
  );
};

export default HeroBlack;