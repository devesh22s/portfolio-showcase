import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
// Skills aur Contact hum baad mein add karenge ya main abhi de dun?

function App() {
  return (
    <div className="bg-dark min-h-screen text-white font-sans selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <Projects />
      
      {/* Placeholder for future sections */}
      <div className="h-40 flex items-center justify-center text-gray-600">
        More sections (Skills, Contact) coming soon...
      </div>
    </div>
  );
}

export default App;