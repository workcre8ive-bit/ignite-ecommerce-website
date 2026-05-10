import { motion } from 'motion/react';
import { ShoppingCart } from 'lucide-react';

export default function QuickBuy() {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="md:hidden fixed bottom-8 right-6 z-40 w-16 h-16 rounded-full glass border-cyan-glow/50 text-white flex items-center justify-center shadow-[0_0_20px_rgba(0,243,255,0.3)] animate-pulse-slow"
    >
      <ShoppingCart size={24} />
    </motion.button>
  );
}
