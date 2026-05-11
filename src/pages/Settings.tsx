import { motion, AnimatePresence } from 'motion/react';
import { Shield, Bell, Eye, Database, Smartphone, Globe } from 'lucide-react';
import { useState } from 'react';
import BackButton from '../components/BackButton';

export default function Settings() {
  const [toggles, setToggles] = useState<Record<string, boolean>>({
    "Two-Factor Extraction": true,
    "Neural Encryption Keys": true,
    "Authorized Devices": false,
    "Drop Intel Notifications": true,
    "System Status Alerts": true,
    "Operative Comms": false,
    "Dark Mode System": true,
    "High Contrast Scanning": false,
    "Motion Vector Filters": true
  });

  const handleToggle = (item: string) => {
    setToggles(prev => ({ ...prev, [item]: !prev[item] }));
  };

  const sections = [
    {
      title: "Security // Protocol",
      icon: <Shield className="text-magenta-glow" size={20} />,
      items: ["Two-Factor Extraction", "Neural Encryption Keys", "Authorized Devices"]
    },
    {
      title: "Sync // Alerts",
      icon: <Bell className="text-cyan-glow" size={20} />,
      items: ["Drop Intel Notifications", "System Status Alerts", "Operative Comms"]
    },
    {
      title: "Interface // Hud",
      icon: <Eye className="text-white" size={20} />,
      items: ["Dark Mode System", "High Contrast Scanning", "Motion Vector Filters"]
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 sm:px-12 md:px-24 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <BackButton />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <span className="text-magenta-glow font-bold tracking-[0.4em] uppercase text-xs mb-4 block">System // Terminal</span>
          <h2 className="text-5xl md:text-7xl font-black text-white font-display leading-none uppercase mb-6">
            CORE <span className="text-gradient">SETTINGS</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 border border-white/5"
            >
              <div className="flex items-center gap-4 mb-8">
                {section.icon}
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">{section.title}</h3>
              </div>
              
              <div className="space-y-4">
                {section.items.map((item) => (
                  <div key={item} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0 grow">
                    <span className={`${toggles[item] ? 'text-white' : 'text-gray-500'} font-bold uppercase tracking-widest text-xs transition-colors`}>{item}</span>
                    <button 
                      onClick={() => handleToggle(item)}
                      className={`w-12 h-6 relative rounded-full p-1 transition-all duration-300 ${toggles[item] ? 'bg-cyan-glow/20 border border-cyan-glow/50' : 'bg-white/5 border border-white/10'}`}
                    >
                      <motion.div 
                        animate={{ x: toggles[item] ? 24 : 0 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        className={`w-4 h-4 rounded-full ${toggles[item] ? 'bg-cyan-glow shadow-[0_0_10px_#00f3ff]' : 'bg-gray-600'}`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
           <div className="glass p-6 text-center border-b-2 border-cyan-glow">
              <Database size={24} className="mx-auto mb-4 text-cyan-glow" />
              <p className="text-[10px] text-gray-500 font-black tracking-widest mb-1">DATA_USAGE</p>
              <p className="text-white font-bold tracking-widest">12.4 GB</p>
           </div>
           <div className="glass p-6 text-center border-b-2 border-magenta-glow">
              <Smartphone size={24} className="mx-auto mb-4 text-magenta-glow" />
              <p className="text-[10px] text-gray-500 font-black tracking-widest mb-1">VERSION</p>
              <p className="text-white font-bold tracking-widest">V.4.0.2</p>
           </div>
           <div className="glass p-6 text-center border-b-2 border-white">
              <Globe size={24} className="mx-auto mb-4 text-white" />
              <p className="text-[10px] text-gray-500 font-black tracking-widest mb-1">REGION</p>
              <p className="text-white font-bold tracking-widest">GLOBAL</p>
           </div>
        </div>
      </div>
    </div>
  );
}
