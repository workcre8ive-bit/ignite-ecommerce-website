import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryBento from './components/CategoryBento';
import ProductCard from './components/ProductCard';
import QuickBuy from './components/QuickBuy';
import Footer from './components/Footer';
import { motion } from 'motion/react';
import { Product } from './types';

const products: Product[] = [
  {
    id: 1,
    name: "Apex Tactical Shell",
    price: "$450.00",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800",
    tag: "Hard-shell"
  },
  {
    id: 2,
    name: "Neon-Dusk Joggers",
    price: "$280.00",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=800",
    tag: "Core"
  },
  {
    id: 3,
    name: "Glitch-Matrix Hoodie",
    price: "$195.00",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800",
    tag: "Limited"
  },
  {
    id: 4,
    name: "Cyber-Strike Boots",
    price: "$520.00",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
    tag: "New"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-midnight selection:bg-cyan-glow selection:text-midnight overflow-x-hidden font-sans">
      {/* Background Layering */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Mesh Gradients */}
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="mesh-blob mesh-cyan" 
        />
        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, 60, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="mesh-blob mesh-magenta" 
        />
        
        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>
      
      <Navbar />
      
      <main className="relative z-10 max-w-[1920px] mx-auto">
        <Hero />
        
        <CategoryBento />

        {/* Product Section */}
        <section className="py-16 md:py-24 px-6 sm:px-12 md:px-24 bg-transparent text-gray-400">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
          >
            <h3 className="text-3xl sm:text-4xl font-black text-white font-display uppercase tracking-tight">Essential_Gear</h3>
            <div className="flex items-center gap-4 mt-4">
              <div className="h-[1px] w-12 sm:w-24 bg-magenta-glow"></div>
              <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase font-bold">Standard_Issue // V.04</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Decorative Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

        {/* High Intensity Feature Callout */}
        <section className="py-20 md:py-40 px-6 sm:px-12 md:px-24 flex flex-col items-center text-center relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl relative z-10"
          >
            <span className="text-cyan-glow font-bold tracking-[0.4em] uppercase text-[10px] sm:text-xs mb-6 sm:mb-8 block">Project // Vanguard</span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white font-display mb-10 sm:mb-12 leading-none uppercase">
              RECODE THE <br />
              <span className="text-gradient">CITYSCAPE</span>
            </h2>
            <button className="group relative px-10 py-5 sm:px-16 sm:py-6 border-2 border-cyan-glow text-cyan-glow font-black uppercase tracking-[0.3em] sm:tracking-[0.5em] text-[10px] sm:text-xs transition-all duration-500 hover:bg-cyan-glow hover:text-midnight hover:shadow-[0_0_50px_rgba(0,243,255,0.4)] overflow-hidden">
              <span className="relative z-10">Enter The Archives</span>
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0, 0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-cyan-glow/20"
              />
            </button>
          </motion.div>
        </section>
      </main>

      <Footer />
      <QuickBuy />
    </div>
  );
}

