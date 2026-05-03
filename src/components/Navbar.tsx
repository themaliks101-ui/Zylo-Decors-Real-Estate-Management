import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Heart, User, LogOut, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useAuth, useWishlist } from "../context/AppContext";
import AuthModal from "./AuthModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user, logout } = useAuth();
  const { wishlist } = useWishlist();

  const navLinks = [
    { name: "Properties", href: "#properties" },
    { name: "Furniture Collection", href: "#furniture" },
    { name: "Design Studio", href: "#studio" },
    { name: "Consultation", href: "#consultation" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-obsidian/80 backdrop-blur-md border-b border-white/10 h-20">
      <div className="max-w-7xl mx-auto px-12 h-full flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-serif font-bold tracking-[0.2em] text-gold cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ZYLO
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-widest text-greige hover:text-white transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Icons / Account */}
        <div className="hidden md:flex items-center space-x-8">
          {user ? (
            <div className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-3 text-white group"
              >
                <div className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-[10px] text-gold font-bold">
                  {user.name.charAt(0)}
                </div>
                <span className="text-[10px] uppercase tracking-widest text-greige group-hover:text-gold transition-colors">{user.name.split(' ')[0]}</span>
                <ChevronDown size={14} className={`text-greige transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-4 w-64 bg-charcoal border border-white/10 p-6 shadow-2xl"
                  >
                    <div className="mb-6 pb-4 border-b border-white/5">
                      <p className="text-[8px] uppercase tracking-widest text-gold mb-1">Status</p>
                      <p className="text-xs text-white serif font-bold">Private Office Member</p>
                    </div>
                    <ul className="space-y-4 mb-6">
                      <li className="flex items-center justify-between text-greige hover:text-gold transition-colors cursor-pointer text-[10px] uppercase tracking-widest">
                        <div className="flex items-center space-x-3">
                          <Heart size={14} /> <span>Wishlist</span>
                        </div>
                        <span className="bg-gold/10 text-gold px-2 py-0.5 rounded-full text-[8px]">{wishlist.length}</span>
                      </li>
                    </ul>

                    {user.consultations.length > 0 && (
                      <div className="mb-6 pt-4 border-t border-white/5">
                        <p className="text-[8px] uppercase tracking-widest text-gold mb-3">Recent Consultations</p>
                        <div className="space-y-2">
                          {user.consultations.map((c, i) => (
                            <div key={i} className="text-[9px] text-soft-cream/60 serif italic border-l border-gold/30 pl-3">
                              {c}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <button 
                      onClick={logout}
                      className="w-full flex items-center justify-center space-x-2 text-[8px] uppercase tracking-widest font-black text-white/40 hover:text-white transition-colors border-t border-white/5 pt-4"
                    >
                      <LogOut size={14} /> <span>Logout</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <button 
              onClick={() => setIsAuthOpen(true)}
              className="px-6 py-2 border border-gold text-gold text-[10px] uppercase tracking-widest hover:bg-gold hover:text-black transition-all"
            >
              Sign In
            </button>
          )}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-soft-cream" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-charcoal p-10 space-y-8 flex flex-col items-center"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest text-soft-cream font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="w-full bg-gold py-4 text-xs uppercase tracking-widest font-bold text-obsidian">
            Inquire Now
          </button>
        </motion.div>
      )}
    </nav>
  );
}
