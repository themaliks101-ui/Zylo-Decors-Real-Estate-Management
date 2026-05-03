import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, User, Mail, ShieldCheck } from "lucide-react";
import { useAuth } from "../context/AppContext";

export default function AuthModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { login, register } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      login(email, "Zylo Member"); // Mock name for login
    } else {
      register(email, name);
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-obsidian/95 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-charcoal border border-white/10 p-12 overflow-hidden shadow-2xl"
          >
            <button onClick={onClose} className="absolute top-8 right-8 text-greige hover:text-white">
              <X size={20} />
            </button>

            <div className="text-center mb-10">
              <h2 className="text-3xl font-serif text-white mb-2">{isLogin ? "Welcome Back" : "Begin Your Legacy"}</h2>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gold">Access the Zylo Private Office</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div className="relative group">
                  <User size={16} className="absolute left-0 top-1/2 -translate-y-1/2 text-greige group-focus-within:text-gold" />
                  <input
                    type="text"
                    required
                    placeholder="FULL NAME"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-transparent border-b border-white/10 py-4 pl-10 text-[10px] tracking-widest text-white focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              )}
              <div className="relative group">
                <Mail size={16} className="absolute left-0 top-1/2 -translate-y-1/2 text-greige group-focus-within:text-gold" />
                <input
                  type="email"
                  required
                  placeholder="EMAIL ADDRESS"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b border-white/10 py-4 pl-10 text-[10px] tracking-widest text-white focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              
              <div className="flex items-center space-x-2 text-[9px] text-greige pt-4 italic">
                <ShieldCheck size={12} className="text-gold" />
                <span>Your data is secured with AES-256 luxury-tier encryption.</span>
              </div>

              <button className="w-full bg-gold py-5 text-[10px] font-black uppercase tracking-[0.3em] text-black hover:bg-white transition-all mt-6">
                {isLogin ? "Authenticate" : "Create Account"}
              </button>
            </form>

            <button
              onClick={() => setIsLogin(!isLogin)}
              className="w-full text-center text-[10px] uppercase tracking-widest text-greige hover:text-white mt-10"
            >
              {isLogin ? "New to Zylo? Join the Inner Circle" : "Existing Member? Return to Office"}
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
