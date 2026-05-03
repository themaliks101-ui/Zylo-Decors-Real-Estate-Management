import { motion } from "motion/react";
import { SERVICE_PILLARS } from "../constants";
import { ArrowRight } from "lucide-react";

export default function TrinityGrid() {
  return (
    <section id="studio" className="py-24 bg-obsidian px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-serif text-soft-cream mb-6">Our Core Pillars</h2>
          <div className="h-1 w-24 bg-gold mx-auto" />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10">
          {SERVICE_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group relative h-[500px] border-r border-white/10 p-12 flex flex-col justify-end gap-4 hover:bg-charcoal transition-all cursor-pointer overflow-hidden"
            >
              <span className="absolute top-12 left-12 text-[10px] font-black text-gold tracking-widest uppercase">
                0{idx + 1}
              </span>
              
              <h3 className="text-2xl font-serif text-white z-10">{pillar.title}</h3>
              
              <p className="text-xs text-greige leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 z-10">
                {pillar.description}
              </p>
              
              {/* Bottom accent bar */}
              <div className="w-full h-1 bg-white/5 mt-2 group-hover:bg-gold transition-all duration-700"></div>
              
              {/* Subtle background image reveal on hover */}
              <img
                src={pillar.image}
                alt={pillar.title}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-opacity duration-1000 grayscale"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
