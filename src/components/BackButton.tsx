import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <motion.button
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 text-gray-500 hover:text-cyan-glow transition-colors uppercase text-[10px] sm:text-xs font-black tracking-[0.2em] mb-8 group"
    >
      <div className="p-1 border border-white/10 group-hover:border-cyan-glow/50 transition-colors">
        <ChevronLeft size={16} />
      </div>
      <span>Return_Sequence</span>
    </motion.button>
  );
}
