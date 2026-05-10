import { ShoppingBag, Search, User, Menu } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 glass px-4 sm:px-8 py-4 md:py-6 flex items-center justify-between border-b border-white/5"
    >
      <div className="flex items-center gap-4 sm:gap-12">
        <h1 className="text-xl sm:text-2xl font-black tracking-tighter text-white font-display">
          IGNITE<span className="text-cyan-glow animate-pulse">.</span>
        </h1>
        <div className="hidden lg:flex gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">
          <a href="#" className="hover:text-cyan-glow transition-all">Collections</a>
          <a href="#" className="hover:text-cyan-glow transition-all">Operations</a>
          <a href="#" className="hover:text-cyan-glow transition-all">Archive</a>
        </div>
      </div>
      
      <div className="flex items-center gap-2 sm:gap-6 text-white text-gray-400">
        <button className="p-2 sm:p-3 hover:text-cyan-glow transition-colors"><Search size={20} /></button>
        <button className="hidden sm:block p-2 sm:p-3 hover:text-magenta-glow transition-colors"><User size={20} /></button>
        <button className="relative p-2 sm:p-3 hover:text-cyan-glow transition-colors">
          <ShoppingBag size={20} />
          <span className="absolute top-1 right-1 bg-magenta-glow text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold text-white">2</span>
        </button>
        <button className="lg:hidden p-2 sm:p-3 hover:text-cyan-glow transition-colors"><Menu size={24} /></button>
      </div>
    </motion.nav>
  );
}
