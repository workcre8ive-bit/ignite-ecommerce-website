import { motion } from 'motion/react';
import BackButton from '../components/BackButton';

const archiveItems = [
  { id: 1, title: "001 // The Catalyst", date: "Q1 2024", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800" },
  { id: 2, title: "002 // Shadow Protocol", date: "Q3 2024", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800" },
  { id: 3, title: "003 // Neon Genesis", date: "Q4 2024", image: "https://images.unsplash.com/photo-1539109132314-3477524c8d35?auto=format&fit=crop&q=80&w=800" },
  { id: 4, title: "004 // Void Runner", date: "Q1 2025", image: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&q=80&w=800" },
];

export default function Archive() {
  return (
    <div className="pt-32 pb-24 px-6 sm:px-12 md:px-24 min-h-screen">
      <BackButton />
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-16"
      >
        <span className="text-cyan-glow font-bold tracking-[0.4em] uppercase text-xs mb-4 block">System // Archive</span>
        <h2 className="text-5xl md:text-7xl font-black text-white font-display leading-none uppercase mb-6">
          PREVIOUS <span className="text-gradient">DROPS</span>
        </h2>
        <p className="text-gray-400 max-w-2xl text-lg">
          Decommissioned systems and realized legacies. These units are no longer available for public extraction.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {archiveItems.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="group relative h-[400px] overflow-hidden border border-white/5"
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-midnight/40 group-hover:bg-midnight/20 transition-colors"></div>
            <div className="absolute bottom-10 left-10">
               <span className="text-cyan-glow font-mono text-[10px] tracking-widest block mb-2">{item.date}</span>
               <h3 className="text-3xl font-black text-white uppercase tracking-tighter">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
