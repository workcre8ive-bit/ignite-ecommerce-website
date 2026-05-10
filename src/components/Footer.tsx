export default function Footer() {
  return (
    <footer className="bg-midnight border-t border-white/10 py-24 px-6 md:px-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h1 className="text-4xl font-black tracking-tighter text-white font-display mb-8">
            IGNITE<span className="text-cyan-glow">.</span>
          </h1>
          <p className="text-gray-500 max-w-sm mb-8">
            Join the collective. Recieve intel on new drops, secret archives, and exclusive urban operations.
          </p>
          <div className="flex gap-4">
            <input 
              type="email" 
              placeholder="ENTER_INTEL_ID" 
              className="bg-white/5 border border-white/10 px-6 py-4 text-white focus:outline-none focus:border-cyan-glow transition-colors w-full uppercase text-xs tracking-widest"
            />
            <button className="px-8 btn-gradient text-midnight font-black uppercase text-xs tracking-tighter">
              Join
            </button>
          </div>
        </div>

        <div>
          <h5 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Navigation</h5>
          <ul className="space-y-4 text-gray-500 text-sm font-medium uppercase tracking-widest">
            <li><a href="#" className="hover:text-cyan-glow transition-colors">Archive</a></li>
            <li><a href="#" className="hover:text-magenta-glow transition-colors">Operations</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Logistics</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Metadata</h5>
          <ul className="space-y-4 text-gray-500 text-sm font-medium uppercase tracking-widest">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Coockie Preferences</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 uppercase tracking-[0.4em] font-bold">
        <span>© 2026 IGNITE SYSTEMS // GLOBAL URBAN VANGUARD</span>
        <span className="mt-4 md:mt-0">EST. IN THE SHADOWS // 35.6762° N, 139.6503° E</span>
      </div>
    </footer>
  );
}
