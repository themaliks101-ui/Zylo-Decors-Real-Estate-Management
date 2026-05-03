import { motion } from "motion/react";

const PROJECTS = [
  { id: 1, title: "The Obsidian Loft", cat: "Interior Design", img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2664&auto=format&fit=crop" },
  { id: 2, title: "Azure Coast Villa", cat: "Real Estate", img: "https://images.unsplash.com/photo-1600585154526-990dcea4db0d?q=80&w=2670&auto=format&fit=crop" },
  { id: 3, title: "Minimalist Retreat", cat: "Furniture", img: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=2670&auto=format&fit=crop" },
  { id: 4, title: "Golden Hour Suite", cat: "Bespoke Design", img: "https://images.unsplash.com/photo-1618221678235-5020165780f2?q=80&w=2670&auto=format&fit=crop" },
];

export default function PortfolioGallery() {
  return (
    <section id="furniture" className="py-24 bg-soft-cream text-obsidian px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between border-b border-obsidian/10 pb-12">
          <div>
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-gold-muted mb-4 block">Archive</span>
            <h2 className="text-4xl md:text-6xl font-serif">Recent Projects</h2>
          </div>
          <button className="mt-8 md:mt-0 text-[10px] font-black uppercase tracking-[0.2em] border-b-2 border-gold pb-1 hover:border-obsidian transition-colors">
            View All Series
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden mb-6 rounded-sm bg-greige/20">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-gold-muted mb-1">{project.cat}</p>
              <h3 className="text-lg font-serif group-hover:text-gold transition-colors">{project.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
