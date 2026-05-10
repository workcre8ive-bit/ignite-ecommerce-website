import { motion } from 'motion/react';
import { Plus, Heart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  key?: number | string;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative group "
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-white/5 border border-white/10 neon-border-hover">
        <motion.img 
          whileHover={{ scale: 1.1, rotate: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100"
        />
        
        {/* Hover Overlay - Always visible icons on mobile for usability */}
        <div className="absolute inset-0 bg-midnight/40 opacity-0 lg:group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          <button className="bg-white text-midnight p-3 rounded-none hover:bg-cyan-glow transition-colors">
            <Plus size={24} />
          </button>
          <button className="bg-white/10 backdrop-blur-md text-white p-3 border border-white/20 hover:text-magenta-glow transition-colors">
            <Heart size={24} />
          </button>
        </div>
        
        {/* Mobile Action Bar - Visible only on small/medium screens */}
        <div className="lg:hidden absolute bottom-0 left-0 w-full p-4 flex justify-between items-center bg-gradient-to-t from-midnight/80 to-transparent">
           <div className="flex gap-2">
            <button className="bg-white/10 backdrop-blur-md text-white p-2 border border-white/10"><Plus size={18} /></button>
            <button className="bg-white/10 backdrop-blur-md text-white p-2 border border-white/10"><Heart size={18} /></button>
           </div>
        </div>

        {/* Tag */}
        <div className="absolute top-4 left-4">
          <span className="bg-magenta-glow text-midnight font-black text-[10px] px-3 py-1 uppercase tracking-widest">
            {product.tag}
          </span>
        </div>
      </div>

      <div className="mt-6 flex justify-between items-start">
        <div>
          <h4 className="text-white font-bold uppercase tracking-wide group-hover:text-cyan-glow transition-colors">
            {product.name}
          </h4>
          <p className="text-gray-500 text-xs mt-1 uppercase tracking-widest">Available Units: 42</p>
        </div>
        <span className="text-magenta-glow font-black text-lg font-display">
          {product.price}
        </span>
      </div>
    </motion.div>
  );
}
