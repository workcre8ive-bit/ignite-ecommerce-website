import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[90vh] md:h-screen w-full flex flex-col md:flex-row overflow-hidden bg-midnight">
      {/* Left Side: Content */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-6 sm:px-12 md:px-24 pt-32 pb-20 md:py-0 z-10 text-center md:text-left items-center md:items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="text-magenta-glow font-bold tracking-[0.3em] uppercase text-xs sm:text-sm mb-4 block">
            System Online // New Drop
          </span>
          <h2 className="text-6xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-[0.9] font-display mb-8">
            SHIFT <br />
            <span className="text-gradient">REALITY</span>
          </h2>
          <p className="text-gray-400 max-w-md text-base sm:text-lg mb-10 leading-relaxed mx-auto md:mx-0">
            Engineered for the urban vanguard. High-performance textiles meet cyber-noir aesthetics. 
            Experience the next evolution of tactical apparel.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button 
              onClick={() => navigate('/collections')}
              className="group relative px-8 py-4 sm:px-10 sm:py-5 btn-gradient text-midnight font-black uppercase tracking-widest rounded-none overflow-hidden transition-all hover:scale-105 active:scale-95 animate-pulse-slow"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Explore Drop <ArrowRight size={20} />
              </span>
            </button>
            <button 
              onClick={() => navigate('/archive')}
              className="px-8 py-4 sm:px-10 sm:py-5 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/5 transition-all"
            >
              Lookbook
            </button>
          </div>
        </motion.div>
      </div>

      {/* Hero Image Container */}
      <div className="absolute inset-y-0 right-0 w-full md:w-1/2 h-full md:relative md:block">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full h-full relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1600" 
            alt="Hero Techwear"
            className="w-full h-full object-cover grayscale brightness-[0.25] md:brightness-100"
          />
          {/* Overlay for mobile reading */}
          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-transparent md:bg-gradient-to-r md:from-midnight md:via-transparent md:to-transparent"></div>
          
          {/* Decorative neon lines - Hidden on mobile for clutter reduction */}
          <div className="hidden sm:block absolute bottom-1/4 left-0 w-px h-1/2 bg-cyan-glow/5 blur-[2px]"></div>
          <div className="hidden sm:block absolute top-1/4 right-10 w-px h-1/4 bg-magenta-glow/5 blur-[2px]"></div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 uppercase tracking-[0.5em] text-[10px]"
      >
        <span className="hidden sm:block">Scroll</span>
        <div className="w-[1px] h-8 sm:h-12 bg-gradient-to-b from-white/30 to-transparent"></div>
      </motion.div>
    </section>
  );
}
