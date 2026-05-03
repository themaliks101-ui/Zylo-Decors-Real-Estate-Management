import { Instagram, Twitter, Facebook, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] border-t border-white/10 px-12 py-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="text-2xl font-serif font-bold tracking-[0.2em] text-gold">ZYLO</div>
          <div className="flex gap-8 text-[9px] uppercase tracking-widest greige opacity-50">
            <span>As seen in</span>
            <span className="text-white">Architectural Digest</span>
            <span className="text-white">Vogue Living</span>
            <span className="text-white">Elle Decor</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto">
          <span className="text-[10px] uppercase tracking-widest text-greige shrink-0">Newsletter</span>
          <div className="flex border-b border-white/30 pb-1 w-full md:w-64 relative group">
            <input
              type="text"
              placeholder="ENTER YOUR EMAIL"
              className="bg-transparent border-none text-xs focus:outline-none w-full uppercase tracking-widest py-2"
            />
            <button className="text-[10px] text-gold uppercase tracking-widest hover:text-white transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[8px] tracking-[0.4em] text-greige uppercase opacity-40">
        <p>© 2026 ZYLO LUXURY GROUP. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-12">
          <span>Sustainability Certified</span>
          <span>Privacy Ethics</span>
        </div>
      </div>
    </footer>
  );
}
