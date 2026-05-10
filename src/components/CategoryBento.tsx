import { motion } from 'motion/react';
import { Category } from '../types';

const categories: Category[] = [
  {
    id: 1,
    title: "Outerwear",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800",
    size: "col-span-2 row-span-2",
  },
  {
    id: 2,
    title: "Hardware",
    image: "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&q=80&w=800",
    size: "col-span-2 row-span-1",
  },
  {
    id: 3,
    title: "Base layers",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800",
    size: "col-span-1 row-span-1",
  },
  {
    id: 4,
    title: "Footwear",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800",
    size: "col-span-1 row-span-1",
  },
];

export default function CategoryBento() {
  return (
    <section className="py-24 px-6 md:px-24 bg-midnight">
      <div className="mb-12 flex justify-between items-end">
        <div>
          <h3 className="text-4xl font-black text-white font-display">CATEGORIES</h3>
          <p className="text-cyan-glow text-xs tracking-widest mt-2 uppercase font-bold">Protocol Select // Mode B</p>
        </div>
        <button className="text-white hover:text-magenta-glow transition-colors uppercase text-sm font-bold tracking-widest">
          View All Systems
        </button>
      </div>

      <div className="bento-grid">
        {categories.map((cat) => (
          <motion.div
            key={cat.id}
            whileHover={{ scale: 0.98 }}
            className={`${cat.size} relative group overflow-hidden bg-white/5 border border-white/10`}
          >
            <img 
              src={cat.image} 
              alt={cat.title} 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight to-transparent opacity-80"></div>
            <div className="absolute bottom-6 left-6">
              <h4 className="text-white text-2xl font-black uppercase tracking-tighter font-display mb-1">
                {cat.title}
              </h4>
              <div className="w-8 h-1 bg-cyan-glow group-hover:w-24 transition-all duration-500"></div>
            </div>
            
            {/* Corner Decorative */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-10 h-10 border-t border-r border-magenta-glow"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
