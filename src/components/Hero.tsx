import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-[600px] w-full pt-20 flex flex-col md:flex-row overflow-hidden">
      {/* Content Area */}
      <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center items-start gap-8 z-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-greige"
        >
          <span className="w-8 h-px bg-gold"></span>
          The Complete Living Experience
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-serif text-white leading-[0.9]"
        >
          The Art of <br /> <span className="italic text-gold">Precision</span> Living.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-md text-sm leading-relaxed text-greige"
        >
          Zylo unifies high-end real estate management, bespoke furniture manufacturing, and architectural interior design into one seamless legacy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mt-4"
        >
          <button className="px-10 py-5 bg-gold text-black font-bold text-xs uppercase tracking-widest hover:bg-white transition-all">
            Explore Collection
          </button>
          <button className="px-10 py-5 border border-white/20 text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            View Properties
          </button>
        </motion.div>
      </div>

      {/* Visual Side */}
      <div className="w-full md:w-1/2 relative bg-charcoal min-h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian to-transparent z-10 hidden md:block"></div>
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop"
          alt="Luxury Interior"
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute bottom-8 right-8 z-20 flex gap-4">
          <div className="px-4 py-2 bg-black/40 backdrop-blur-md border border-white/10 text-[10px] tracking-widest uppercase">
            01 / 03 <span className="ml-4 text-greige">The Chalet Project</span>
          </div>
        </div>
      </div>
    </section>
  );
}
