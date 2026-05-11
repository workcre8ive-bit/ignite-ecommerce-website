import { motion } from 'motion/react';
import { User, MessageSquare, Package, Settings, LogOut } from 'lucide-react';
import { useState } from 'react';

type Tab = 'profile' | 'messages' | 'orders';

export default function Account() {
  const [activeTab, setActiveTab] = useState<Tab>('profile');

  const messages = [
    { id: 1, sender: "System", text: "Welcome to IGNITE. Operation Vanguard is now live.", time: "2h ago", unread: true },
    { id: 2, sender: "Support", text: "Your extraction (Order #IG-492) is in transit.", time: "1d ago", unread: false },
    { id: 3, sender: "Vanguard HQ", text: "New blueprints detected in your sector.", time: "3d ago", unread: false },
  ];

  return (
    <div className="pt-32 pb-24 px-6 sm:px-12 md:px-24 min-h-screen">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Sidebar */}
        <div className="w-full md:w-1/4">
           <div className="glass p-8 flex flex-col gap-2">
              <button 
                onClick={() => setActiveTab('profile')}
                className={`flex items-center gap-4 px-4 py-3 text-sm font-bold uppercase tracking-widest transition-all ${activeTab === 'profile' ? 'text-cyan-glow bg-white/5' : 'text-gray-400 hover:text-white'}`}
              >
                <User size={18} /> Profile
              </button>
              <button 
                onClick={() => setActiveTab('messages')}
                className={`flex items-center gap-4 px-4 py-3 text-sm font-bold uppercase tracking-widest transition-all relative ${activeTab === 'messages' ? 'text-magenta-glow bg-white/5' : 'text-gray-400 hover:text-white'}`}
              >
                <MessageSquare size={18} /> Messages
                {messages.some(m => m.unread) && <span className="absolute top-3 right-4 w-2 h-2 bg-magenta-glow rounded-full animate-pulse"></span>}
              </button>
              <button 
                onClick={() => setActiveTab('orders')}
                className={`flex items-center gap-4 px-4 py-3 text-sm font-bold uppercase tracking-widest transition-all ${activeTab === 'orders' ? 'text-cyan-glow bg-white/5' : 'text-gray-400 hover:text-white'}`}
              >
                <Package size={18} /> Operations
              </button>
              <div className="h-px bg-white/10 my-4"></div>
              <button className="flex items-center gap-4 px-4 py-3 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-all">
                <Settings size={18} /> Settings
              </button>
              <button className="flex items-center gap-4 px-4 py-3 text-sm font-bold uppercase tracking-widest text-red-500 hover:text-red-400 transition-all">
                <LogOut size={18} /> Disconnect
              </button>
           </div>
        </div>

        {/* Content Area */}
        <div className="flex-1">
           {activeTab === 'profile' && (
             <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="glass p-12">
                <div className="flex items-center gap-8 mb-12">
                   <div className="w-24 h-24 bg-gradient-to-br from-cyan-glow to-magenta-glow p-1">
                      <div className="w-full h-full bg-midnight flex items-center justify-center">
                         <User size={48} className="text-white" />
                      </div>
                   </div>
                   <div>
                      <h2 className="text-4xl font-black text-white uppercase tracking-tighter">OPERATOR_ID</h2>
                      <p className="text-cyan-glow font-mono text-xs tracking-widest">RANK: VANGUARD_ELITE</p>
                   </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-white">
                   <div>
                      <label className="block text-gray-500 text-[10px] uppercase tracking-widest mb-2">Comms Alias</label>
                      <p className="text-lg font-bold border-b border-white/10 pb-2">Neon_Ghost</p>
                   </div>
                   <div>
                      <label className="block text-gray-500 text-[10px] uppercase tracking-widest mb-2">Sector</label>
                      <p className="text-lg font-bold border-b border-white/10 pb-2">EU-WEST-2 // LONDON</p>
                   </div>
                </div>
             </motion.div>
           )}

           {activeTab === 'messages' && (
             <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-4">
                {messages.map((m) => (
                  <div key={m.id} className={`glass p-6 border-l-4 ${m.unread ? 'border-magenta-glow' : 'border-white/10'} hover:bg-white/5 transition-colors cursor-pointer`}>
                     <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-black text-white uppercase tracking-tighter">{m.sender}</h4>
                        <span className="text-[10px] text-gray-500 font-mono">{m.time}</span>
                     </div>
                     <p className="text-gray-400 text-sm">{m.text}</p>
                  </div>
                ))}
             </motion.div>
           )}

           {activeTab === 'orders' && (
             <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="glass p-12 text-center">
                <Package size={64} className="mx-auto text-gray-600 mb-6" />
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">No Active Deployments</h3>
                <p className="text-gray-400">All previous captures have been extracted successfully.</p>
             </motion.div>
           )}
        </div>
      </div>
    </div>
  );
}
