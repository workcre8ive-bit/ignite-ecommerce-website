import { motion } from 'motion/react';
import { MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function FloatingMessage() {
  const navigate = useNavigate();

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => navigate('/account', { state: { activeTab: 'messages' } })}
      className="fixed bottom-8 left-6 z-40 w-16 h-16 rounded-none glass border border-magenta-glow/50 text-white flex items-center justify-center shadow-[0_0_20px_rgba(255,0,255,0.2)] group"
    >
      <MessageSquare size={24} className="group-hover:text-magenta-glow transition-colors" />
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-magenta-glow rounded-full animate-pulse shadow-[0_0_10px_#ff00ff]"></div>
    </motion.button>
  );
}
