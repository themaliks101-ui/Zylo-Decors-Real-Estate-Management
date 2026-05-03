import { MOCK_PROPERTIES, MOCK_FURNITURE } from "../constants";
import { motion } from "motion/react";
import { ShoppingCart, Heart } from "lucide-react";
import { useWishlist } from "../context/AppContext";

export default function ShopTheLook() {
  const { toggleWishlist, isInWishlist } = useWishlist();
  
  // Logic: When viewing a property, show linked furniture
  const activeProperty = MOCK_PROPERTIES[0]; 
  const matchedFurniture = MOCK_FURNITURE.filter(f => f.style === activeProperty.style);

  return (
    <section id="properties" className="py-24 bg-[#111111] px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-24">
        {/* Left: Featured Property */}
        <div className="lg:col-span-2">
          <span className="text-[10px] font-black tracking-[0.4em] uppercase text-gold mb-6 block">Featured Estate</span>
          <h2 className="text-4xl md:text-7xl serif text-white mb-12">{activeProperty.title}</h2>
          <div className="aspect-video overflow-hidden relative group">
            <img
              src={activeProperty.image}
              alt={activeProperty.title}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-obsidian/40 pointer-events-none" />
            
            {/* Wishlist Button for Property */}
            <button 
              onClick={() => toggleWishlist(activeProperty.id)}
              className="absolute top-6 right-6 z-30 p-4 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:text-gold transition-colors"
            >
              <Heart size={20} fill={isInWishlist(activeProperty.id) ? "currentColor" : "none"} />
            </button>

            <div className="absolute bottom-12 left-12 bg-black/60 backdrop-blur-xl p-8 border border-white/10">
              <p className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-2">{activeProperty.location}</p>
              <p className="text-white text-3xl serif">${activeProperty.price.toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Right: Curated Shop the Look */}
        <div className="flex flex-col justify-center">
          <span className="text-[10px] font-black tracking-[0.4em] uppercase text-gold mb-12 block">Shop the look</span>
          <div className="space-y-12">
            {matchedFurniture.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.2 }}
                className="flex items-center space-x-8 group"
              >
                <div className="w-32 h-32 bg-obsidian flex-shrink-0 overflow-hidden border border-white/5 relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Quick-add toggle for furniture */}
                  <button 
                    onClick={() => toggleWishlist(item.id)}
                    className="absolute bottom-2 right-2 p-2 bg-black/60 text-white hover:text-gold transition-colors"
                  >
                    <Heart size={12} fill={isInWishlist(item.id) ? "currentColor" : "none"} />
                  </button>
                </div>
                <div>
                  <h4 className="text-white serif text-xl mb-2">{item.name}</h4>
                  <p className="text-gold text-[10px] uppercase font-bold tracking-widest mb-4">${item.price.toLocaleString()}</p>
                  <button className="text-[10px] uppercase tracking-[0.2em] font-black text-greige border-b border-white/20 pb-1 hover:text-gold hover:border-gold transition-all">
                    Inquire Piece
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
