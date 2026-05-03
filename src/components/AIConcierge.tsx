import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Send, X, Loader2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: "user" | "model";
  text: string;
}

export default function AIConcierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "model", text: "Welcome to Zylo Concierge. How may I assist you with your luxury living requirements today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-latest",
        contents: [...messages, { role: "user", text: userMsg }].map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: "You are the AI Concierge for Zylo, a ultra-luxury brand for Real Estate, Bespoke Furniture, and Interior Design. Your tone is sophisticated, professional, and slightly poetic. Assist users in finding properties or discussing design aesthetics. Keep responses concise and high-end.",
        }
      });

      setMessages(prev => [...prev, { role: "model", text: response.text || "I apologize, I am unable to process that at the moment." }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: "model", text: "My apologies, my connection to our design network has been interrupted." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-10 right-10 z-50 bg-gold p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center text-obsidian"
      >
        <MessageSquare size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="fixed bottom-28 right-10 z-50 w-80 md:w-96 h-[500px] bg-charcoal border border-soft-cream/10 shadow-2xl flex flex-col rounded-sm"
          >
            {/* Header */}
            <div className="p-4 border-b border-soft-cream/10 flex items-center justify-between bg-obsidian">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-[10px] font-bold text-obsidian italic">Z</div>
                <div>
                  <h3 className="text-xs font-serif font-bold text-soft-cream">Zylo Concierge</h3>
                  <p className="text-[8px] uppercase tracking-widest text-gold">Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-soft-cream/50 hover:text-soft-cream">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 font-sans text-xs custom-scrollbar">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-sm leading-relaxed ${
                    m.role === 'user' 
                      ? 'bg-gold/10 text-gold border border-gold/20 italic' 
                      : 'bg-white/5 text-soft-cream'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-3 rounded-sm">
                    <Loader2 size={16} className="animate-spin text-gold" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-obsidian border-t border-soft-cream/10">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Inquire about property or design..."
                  className="w-full bg-charcoal text-soft-cream text-xs px-4 py-3 pr-12 focus:outline-none focus:ring-1 focus:ring-gold/30 rounded-none border border-soft-cream/5"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gold disabled:opacity-30"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
