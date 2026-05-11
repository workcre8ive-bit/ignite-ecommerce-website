import { motion } from 'motion/react';
import { Shield, Bell, Eye, Database, Smartphone, Globe } from 'lucide-react';
import BackButton from '../components/BackButton';

export default function Settings() {
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
                    <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">{item}</span>
                    <button className="w-12 h-6 bg-white/10 relative rounded-full p-1 transition-colors hover:bg-white/20">
                      <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
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
