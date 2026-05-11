import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import QuickBuy from './components/QuickBuy';
import Footer from './components/Footer';
import { motion } from 'motion/react';

// Pages
import Home from './pages/Home';
import Collections from './pages/Collections';
import Operations from './pages/Operations';
import Archive from './pages/Archive';
import Account from './pages/Account';
import SearchPage from './pages/Search';
import SettingsPage from './pages/Settings';

export default function App() {
  return (
    <Router>
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
        
        <main className="relative z-10 max-w-[1920px] mx-auto min-h-[calc(100vh-200px)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/operations" element={<Operations />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/account" element={<Account />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>

        <Footer />
        <QuickBuy />
      </div>
    </Router>
  );
}

