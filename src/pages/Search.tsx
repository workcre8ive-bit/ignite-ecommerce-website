import { motion } from 'motion/react';
import { Search as SearchIcon, X } from 'lucide-react';
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';
import BackButton from '../components/BackButton';

const allProducts: Product[] = [
  { id: 1, name: "Apex Tactical Shell", price: "$450.00", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800", tag: "Hard-shell" },
  { id: 2, name: "Neon-Dusk Joggers", price: "$280.00", image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=800", tag: "Core" },
  { id: 3, name: "Glitch-Matrix Hoodie", price: "$195.00", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800", tag: "Limited" },
  { id: 4, name: "Cyber-Strike Boots", price: "$520.00", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800", tag: "New" },
  { id: 101, name: "Vanguard Shell v.1", price: "$550.00", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800", tag: "Hard-shell" },
  { id: 102, name: "Sector Cargo Pants", price: "$320.00", image: "https://images.unsplash.com/photo-1624372927054-8fe6666ba728?auto=format&fit=crop&q=80&w=800", tag: "Tech" },
];

export default function Search() {
  const [query, setQuery] = useState('');
  
  const filteredProducts = allProducts.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) || 
    p.tag.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="pt-32 pb-24 px-6 sm:px-12 md:px-24 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <BackButton />
      </div>
      <div className="max-w-4xl mx-auto mb-20">
         <div className="relative group">
            <SearchIcon className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-glow transition-colors" size={32} />
            <input 
              autoFocus
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="SEARCH_THE_DATABASE..." 
              className="w-full bg-white/5 border-2 border-white/10 px-20 py-8 text-4xl font-black text-white focus:outline-none focus:border-cyan-glow transition-all uppercase font-display placeholder:text-gray-800"
            />
            {query && (
              <button 
                onClick={() => setQuery('')}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
              >
                <X size={32} />
              </button>
            )}
         </div>
      </div>

      <div className="mb-12">
         <p className="text-gray-500 text-[10px] uppercase tracking-[0.4em] font-bold">
           Scan Results // {filteredProducts.length} Entries Found
         </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
         <div className="text-center py-24">
            <h3 className="text-3xl font-black text-white uppercase tracking-tighter opacity-20">No Matches Found</h3>
         </div>
      )}
    </div>
  );
}
