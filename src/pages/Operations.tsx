import { motion } from 'motion/react';
import { Truck, ShieldCheck, MapPin, Radio } from 'lucide-react';
import BackButton from '../components/BackButton';

export default function Operations() {
  const missions = [
    { icon: <Truck className="text-cyan-glow" />, title: "Logistics", desc: "Global rapid deployment. 48hr turnaround in major sectors." },
    { icon: <ShieldCheck className="text-magenta-glow" />, title: "Secure Protocol", desc: "Advanced encryption on all transactions and data streams." },
    { icon: <MapPin className="text-cyan-glow" />, title: "Neutral Zones", desc: "Strategic pickup locations available in Tokyo, NYC, and Berlin." },
    { icon: <Radio className="text-magenta-glow" />, title: "Comms Link", desc: "Direct feedback channel for field operators." },
  ];

  return (
    <div className="pt-32 pb-24 px-6 sm:px-12 md:px-24 min-h-screen">
      <BackButton />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20 text-center md:text-left"
      >
        <span className="text-magenta-glow font-bold tracking-[0.4em] uppercase text-xs mb-4 block">System // Operations</span>
        <h2 className="text-5xl md:text-7xl font-black text-white font-display leading-none uppercase mb-6">
          FIELD <span className="text-gradient">GUIDE</span>
        </h2>
        <p className="text-gray-400 max-w-2xl text-lg mx-auto md:mx-0">
          Essential data for the modern vanguard. Understanding the protocol ensures successful extraction.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {missions.map((m, i) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="glass p-8 border-l-4 border-l-cyan-glow"
          >
            <div className="mb-6">{m.icon}</div>
            <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">{m.title}</h3>
            <p className="text-gray-400">{m.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="glass p-12 relative overflow-hidden border border-white/10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-magenta-glow/10 blur-[100px]"></div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex-1">
             <h4 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">Track Package</h4>
             <p className="text-gray-400 mb-8 lowercase tracking-widest font-mono">ENTER_TRACKING_ID_BELOW</p>
             <div className="flex gap-4">
                <input 
                  type="text" 
                  placeholder="IG-XXXX-XXXX" 
                  className="bg-white/5 border border-white/20 px-6 py-4 text-white focus:outline-none focus:border-cyan-glow transition-colors w-full uppercase font-mono tracking-widest"
                />
                <button className="px-10 btn-gradient text-midnight font-black uppercase text-xs tracking-tighter hover:scale-105 transition-transform">
                  Sync
                </button>
             </div>
          </div>
          <div className="flex-1 text-gray-500 text-[10px] uppercase tracking-[0.3em] font-bold">
             <p className="mb-4">Live Status: Nominal</p>
             <p className="mb-4">Global Network: 99.9% Uptime</p>
             <p>Data Integrity: Verified</p>
          </div>
        </div>
      </div>
    </div>
  );
}
