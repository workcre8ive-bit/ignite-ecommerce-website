import { motion } from 'motion/react';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';
import BackButton from '../components/BackButton';

const collectionProducts: Product[] = [
  { id: 101, name: "Vanguard Shell v.1", price: "$550.00", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800", tag: "Hard-shell" },
  { id: 102, name: "Sector Cargo Pants", price: "$320.00", image: "https://images.unsplash.com/photo-1624372927054-8fe6666ba728?auto=format&fit=crop&q=80&w=800", tag: "Tech" },
  { id: 103, name: "Neural Neck Gaiter", price: "$85.00", image: "https://images.unsplash.com/photo-1574015974293-817f0efebb1b?auto=format&fit=crop&q=80&w=800", tag: "Accessory" },
  { id: 104, name: "Pulse Runner One", price: "$420.00", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800", tag: "Footwear" },
  { id: 105, name: "Matrix Tactical Vest", price: "$290.00", image: "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&q=80&w=800", tag: "Hardware" },
];

export default function Collections() {
  return (
    <div className="pt-32 pb-24 px-6 sm:px-12 md:px-24 min-h-screen">
      <BackButton />
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-16"
      >
        <span className="text-cyan-glow font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Archive // Collections</span>
        <h2 className="text-5xl md:text-7xl font-black text-white font-display leading-none uppercase mb-6">
          CURRENT <span className="text-gradient">OPERATIONS</span>
        </h2>
        <p className="text-gray-400 max-w-2xl text-lg">
          A modular system designed for urban exploration and environmental resistance. 
          Engineered to perform, styled to vanish.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {collectionProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
