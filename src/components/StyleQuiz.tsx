import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { StyleMatch } from "../types";
import { Check, ArrowRight, RefreshCw } from "lucide-react";

const QUESTIONS = [
  {
    id: 1,
    text: "Which architectural environment speaks to you?",
    options: [
      { id: "A", text: "Raw concrete and exposed steel", style: StyleMatch.INDUSTRIAL },
      { id: "B", text: "Natural wood and clean white planes", style: StyleMatch.MINIMALIST },
      { id: "C", text: "Classic proportions with modern comfort", style: StyleMatch.TRANSITIONAL },
    ]
  },
  {
    id: 2,
    text: "Your ideal evening atmosphere is...",
    options: [
      { id: "A", text: "Dim lighting, rich textures, and bold art", style: StyleMatch.INDUSTRIAL },
      { id: "B", text: "Empty space, silence, and moonlight", style: StyleMatch.MINIMALIST },
      { id: "C", text: "Warm candlelight and plush fabrics", style: StyleMatch.TRANSITIONAL },
    ]
  }
];

export default function StyleQuiz() {
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState<StyleMatch[]>([]);
  const [result, setResult] = useState<StyleMatch | null>(null);

  const handleSelect = (style: StyleMatch) => {
    const newSelections = [...selections, style];
    setSelections(newSelections);

    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      // Simple majority logic
      const counts = newSelections.reduce((acc, s) => {
        acc[s] = (acc[s] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);
      
      const winner = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b) as StyleMatch;
      setResult(winner);
    }
  };

  return (
    <section id="consultation" className="py-24 bg-soft-cream px-6">
      <div className="max-w-2xl mx-auto bg-obsidian p-12 md:p-20 text-center rounded-sm shadow-2xl relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/linen.png')]" />

        <AnimatePresence mode="wait">
          {!result ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-gold mb-6 block">The Persona Quiz</span>
              <h2 className="text-3xl font-serif text-soft-cream mb-12">{QUESTIONS[step].text}</h2>
              
              <div className="space-y-4">
                {QUESTIONS[step].options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect(opt.style)}
                    className="w-full border border-soft-cream/10 hover:border-gold p-6 text-xs uppercase tracking-widest text-soft-cream hover:bg-gold/5 transition-all text-left flex items-center justify-between group"
                  >
                    <span>{opt.text}</span>
                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </button>
                ))}
              </div>
              
              <div className="mt-12 flex justify-center space-x-2">
                {QUESTIONS.map((_, i) => (
                  <div key={i} className={`h-1 w-8 ${i === step ? 'bg-gold' : 'bg-soft-cream/20'}`} />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12"
            >
              <div className="w-20 h-20 bg-gold/10 border border-gold rounded-full flex items-center justify-center mx-auto mb-8">
                <Check className="text-gold" size={32} />
              </div>
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-gold mb-4 block">Your Aesthetic is</span>
              <h2 className="text-5xl font-serif text-soft-cream mb-8 italic">{result}</h2>
              <p className="text-greige text-sm max-w-sm mx-auto mb-12 leading-loose">
                Your preferences suggest a deep appreciation for the {result.toLowerCase()} philosophy. Our design studio will curate a personalized moodboard for your next space.
              </p>
              <button 
                onClick={() => { setStep(0); setSelections([]); setResult(null); }}
                className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.2em] text-gold-muted mx-auto hover:text-gold transition-colors"
              >
                <RefreshCw size={14} />
                <span>Restart Session</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
