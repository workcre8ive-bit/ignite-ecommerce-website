import { motion } from 'motion/react';
import { User, MessageSquare, Package, Settings, LogOut, Mail, Calendar, MapPin, Activity, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';

type Tab = 'profile' | 'messages' | 'orders';

export default function Account() {
  const [activeTab, setActiveTab] = useState<Tab>('profile');
  const navigate = useNavigate();

  const messages = [
    { id: 1, sender: "System", text: "Welcome to IGNITE. Operation Vanguard is now live.", time: "2h ago", unread: true },
    { id: 2, sender: "Support", text: "Your extraction (Order #IG-492) is in transit.", time: "1d ago", unread: false },
    { id: 3, sender: "Vanguard HQ", text: "New blueprints detected in your sector.", time: "3d ago", unread: false },
  ];

  const stats = [
    { label: "Successful Extractions", value: "14" },
    { label: "Vanguard Points", value: "2,450" },
    { label: "System Uptime", value: "99.8%" },
  ];

  return (
    <div className="pt-32 pb-24 px-6 sm:px-12 md:px-24 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <BackButton />
        
        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar */}
          <div className="w-full md:w-1/4">
             <div className="glass p-8 flex flex-col gap-2 border border-white/5">
                <button 
                  onClick={() => setActiveTab('profile')}
                  className={`flex items-center gap-4 px-4 py-3 text-sm font-bold uppercase tracking-widest transition-all ${activeTab === 'profile' ? 'text-cyan-glow bg-white/5 shadow-[inset_4px_0_0_0_#00f3ff]' : 'text-gray-400 hover:text-white'}`}
                >
                  <User size={18} /> Profile
                </button>
                <button 
                  onClick={() => setActiveTab('messages')}
                  className={`flex items-center gap-4 px-4 py-3 text-sm font-bold uppercase tracking-widest transition-all relative ${activeTab === 'messages' ? 'text-magenta-glow bg-white/5 shadow-[inset_4px_0_0_0_#ff00ff]' : 'text-gray-400 hover:text-white'}`}
                >
                  <MessageSquare size={18} /> Messages
                  {messages.some(m => m.unread) && <span className="absolute top-3 right-4 w-2 h-2 bg-magenta-glow rounded-full animate-pulse"></span>}
                </button>
                <button 
                  onClick={() => setActiveTab('orders')}
                  className={`flex items-center gap-4 px-4 py-3 text-sm font-bold uppercase tracking-widest transition-all ${activeTab === 'orders' ? 'text-cyan-glow bg-white/5 shadow-[inset_4px_0_0_0_#00f3ff]' : 'text-gray-400 hover:text-white'}`}
                >
                  <Package size={18} /> Operations
                </button>
                <div className="h-px bg-white/10 my-4"></div>
                <button 
                  onClick={() => navigate('/settings')}
                  className="flex items-center gap-4 px-4 py-3 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-all"
                >
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
               <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                  <div className="glass p-12 border border-white/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-glow/5 blur-[60px] group-hover:bg-cyan-glow/10 transition-colors"></div>
                    <div className="flex flex-col sm:flex-row items-center gap-8 mb-12 relative z-10 text-center sm:text-left">
                       <div className="w-24 h-24 bg-gradient-to-br from-cyan-glow to-magenta-glow p-1 rounded-none">
                          <div className="w-full h-full bg-midnight flex items-center justify-center">
                             <User size={48} className="text-white" />
                          </div>
                       </div>
                       <div>
                          <h2 className="text-4xl font-black text-white uppercase tracking-tighter">OPERATOR_ID</h2>
                          <p className="text-cyan-glow font-mono text-xs tracking-widest mt-1">RANK: VANGUARD_ELITE // SECTOR_7</p>
                       </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 text-white relative z-10">
                       <div className="space-y-1">
                          <div className="flex items-center gap-2 text-gray-500 mb-1">
                            <User size={14} /><label className="text-[10px] uppercase tracking-widest font-black">Comms Alias</label>
                          </div>
                          <p className="text-lg font-bold border-b border-white/10 pb-2">Neon_Ghost</p>
                       </div>
                       <div className="space-y-1">
                          <div className="flex items-center gap-2 text-gray-500 mb-1">
                            <Mail size={14} /><label className="text-[10px] uppercase tracking-widest font-black">Secure Email</label>
                          </div>
                          <p className="text-lg font-bold border-b border-white/10 pb-2">ghost@ignite.system</p>
                       </div>
                       <div className="space-y-1">
                          <div className="flex items-center gap-2 text-gray-500 mb-1">
                            <MapPin size={14} /><label className="text-[10px] uppercase tracking-widest font-black">Current Sector</label>
                          </div>
                          <p className="text-lg font-bold border-b border-white/10 pb-2">EU-WEST-2 // LONDON</p>
                       </div>
                       <div className="space-y-1">
                          <div className="flex items-center gap-2 text-gray-500 mb-1">
                            <Calendar size={14} /><label className="text-[10px] uppercase tracking-widest font-black">Induction Date</label>
                          </div>
                          <p className="text-lg font-bold border-b border-white/10 pb-2">JAN_12_2024</p>
                       </div>
                    </div>

                    <div className="mt-12 pt-12 border-t border-white/5 flex flex-wrap gap-4 relative z-10">
                       <div className="flex items-center gap-2 bg-white/5 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-cyan-glow border border-cyan-glow/20">
                          <ShieldCheck size={14} /> Identity_Verified
                       </div>
                       <div className="flex items-center gap-2 bg-white/5 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-magenta-glow border border-magenta-glow/20">
                          <Activity size={14} /> Active_Deployment
                       </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {stats.map(stat => (
                      <div key={stat.label} className="glass p-8 border border-white/5 text-center group hover:border-white/10 transition-colors">
                        <p className="text-white text-3xl font-black mb-2 font-display">{stat.value}</p>
                        <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">{stat.label}</p>
                      </div>
                    ))}
                  </div>
               </motion.div>
             )}

             {activeTab === 'messages' && (
               <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-4">
                  {messages.map((m) => (
                    <div key={m.id} className={`glass p-8 border-l-4 ${m.unread ? 'border-magenta-glow' : 'border-white/10'} hover:bg-white/5 transition-colors cursor-pointer group`}>
                       <div className="flex justify-between items-start mb-4">
                          <h4 className="text-2xl font-black text-white uppercase tracking-tighter group-hover:text-magenta-glow transition-colors">{m.sender}</h4>
                          <span className="text-[10px] text-gray-500 font-mono tracking-widest mt-1">{m.time}</span>
                       </div>
                       <p className="text-gray-400 text-base leading-relaxed">{m.text}</p>
                       {m.unread && (
                         <div className="mt-4 flex items-center gap-2 text-magenta-glow text-[10px] font-black uppercase tracking-widest">
                            <div className="w-1.5 h-1.5 bg-magenta-glow rounded-full"></div> New Message
                         </div>
                       )}
                    </div>
                  ))}
               </motion.div>
             )}

             {activeTab === 'orders' && (
               <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="glass p-20 text-center border border-white/5">
                  <div className="w-32 h-32 bg-white/5 flex items-center justify-center mx-auto mb-8 border border-white/10">
                    <Package size={48} className="text-gray-600" />
                  </div>
                  <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">No Active Deployments</h3>
                  <p className="text-gray-400 max-w-sm mx-auto text-sm leading-relaxed mb-8">All previous captures have been extracted successfully. Check the archive for past operations.</p>
                  <button 
                    onClick={() => navigate('/collections')}
                    className="px-10 py-4 border border-white/20 text-white font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-midnight transition-all"
                  >
                    Initiate New Capture
                  </button>
               </motion.div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
}

