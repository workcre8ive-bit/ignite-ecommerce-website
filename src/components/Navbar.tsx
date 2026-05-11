import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Collections', href: '/collections' },
    { name: 'Operations', href: '/operations' },
    { name: 'Archive', href: '/archive' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 glass px-4 sm:px-8 py-4 md:py-6 flex items-center justify-between border-b border-white/5"
      >
        <div className="flex items-center gap-4 sm:gap-12">
          <Link to="/" className="flex items-center">
            <h1 className="text-xl sm:text-2xl font-black tracking-tighter text-white font-display">
              IGNITE<span className="text-cyan-glow animate-pulse">.</span>
            </h1>
          </Link>
          <div className="hidden lg:flex gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href} className="hover:text-cyan-glow transition-all">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-6 text-white text-gray-400">
          <button 
            onClick={() => navigate('/search')}
            className="p-2 sm:p-3 hover:text-cyan-glow transition-colors"
          >
            <Search size={20} />
          </button>
          <button 
            onClick={() => navigate('/account')}
            className="hidden sm:block p-2 sm:p-3 hover:text-magenta-glow transition-colors"
          >
            <User size={20} />
          </button>
          <button className="relative p-2 sm:p-3 hover:text-cyan-glow transition-colors">
            <ShoppingBag size={20} />
            <span className="absolute top-1 right-1 bg-magenta-glow text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold text-white">2</span>
          </button>
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden p-2 sm:p-3 hover:text-cyan-glow transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-midnight/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col h-full p-8">
              <div className="flex justify-between items-center mb-16">
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                  <h1 className="text-2xl font-black tracking-tighter text-white font-display">
                    IGNITE<span className="text-cyan-glow">.</span>
                  </h1>
                </Link>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-white hover:text-magenta-glow transition-colors"
                >
                  <X size={32} />
                </button>
              </div>

              <div className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-4xl font-black text-white hover:text-cyan-glow transition-colors uppercase tracking-tighter font-display"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                {/* Mobile Search and Account links */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                >
                  <Link
                    to="/search"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-4xl font-black text-white hover:text-magenta-glow transition-colors uppercase tracking-tighter font-display"
                  >
                    Search
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: (navLinks.length + 1) * 0.1 }}
                >
                  <Link
                    to="/account"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-4xl font-black text-white hover:text-magenta-glow transition-colors uppercase tracking-tighter font-display"
                  >
                    Account
                  </Link>
                </motion.div>
              </div>

              <div className="mt-auto pt-12 border-t border-white/10 flex flex-col gap-6">
                <div className="flex gap-4">
                  <button className="flex-1 py-4 bg-white text-midnight font-black uppercase tracking-widest text-xs">
                    Sign In
                  </button>
                  <button className="flex-1 py-4 border border-white/20 text-white font-black uppercase tracking-widest text-xs">
                    Support
                  </button>
                </div>
                <p className="text-[10px] text-gray-500 uppercase tracking-[0.4em] font-bold">
                  © 2026 IGNITE SYSTEMS // GLOBAL URBAN VANGUARD
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
