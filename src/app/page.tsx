"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import { HowItWorks } from "../components/HowItWorks";
import { Mission } from "../components/Mission";
import { Footer } from "../components/Footer";

export default function SukfiWaitlist() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);
  const [waitlistCount, setWaitlistCount] = useState<number | null>(null);
  const [position, setPosition] = useState(4821);

  // form submission handler for the waitlist API route
  const handleJoinWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailInput = (e.target as any).email.value;

    const response = await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: emailInput }),
    });

    if (response.ok) {
      alert("Welcome, Founding Member! Check your email.");
      setJoined(true);
      // randomize position as before
      const randomPos = Math.floor(Math.random() * (5000 - 4000 + 1) + 4000);
      setPosition(randomPos);
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  // fetch total waitlist count on mount (uses anon key client)
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const { count, error: countError } = await supabase
          .from('waitlist')
          .select('*', { count: 'exact', head: true });

        if (!countError && mounted) {
          setWaitlistCount(count || 4821); // Uses real count, or 4821 as a base
        }
      } catch (err) {
        console.error('count fetch failed', err);
      }
    })();

    return () => { mounted = false };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0f172a] text-white px-4 overflow-hidden relative font-sans selection:bg-[#10B981] selection:text-black">
      
      {/* Background Glow - "Fintech Green" */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#10B981] rounded-full opacity-10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#10B981] rounded-full opacity-5 blur-[100px] pointer-events-none" />
      
      <div className="z-10 max-w-2xl w-full text-center space-y-8">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 mb-8 relative group"
        >
          {/* The Neon Glow Layer */}
          <div className="absolute inset-0 bg-[#10B981] opacity-20 blur-xl rounded-full" />
          
          {/* The Content */}
          <div className="relative flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#10B981]/30 bg-[#0f172a]/50 backdrop-blur-sm shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <ShieldCheck size={16} className="text-[#10B981] drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            <span className="text-sm font-medium tracking-wide text-[#10B981] drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]">
              Halal Compliance Engine
            </span>
          </div>
        </motion.div>

        {/* Hero Text */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60"
        >
          Is your portfolio <br />
          <span className="text-[#10B981] drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">truly pure?</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-400 leading-relaxed max-w-lg mx-auto"
        >
          The first <strong>Spiritual Wealth Manager</strong>. We scan your bank, 
          detect impure transactions, and calculate your <span className="text-white font-semibold">Spiritual Net Worth</span>.
        </motion.p>

        {/* Value Grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 text-sm text-slate-400">
          <div className="bg-white/5 border border-white/10 p-3 rounded-lg flex flex-col items-center">
            <span className="text-emerald-500 font-bold mb-1">FREE ACCESS</span>
            <span>First 500 users only</span>
          </div>
          <div className="bg-white/5 border border-white/10 p-3 rounded-lg flex flex-col items-center">
            <span className="text-emerald-500 font-bold mb-1">INFLUENCE</span>
            <span>Shape the Roadmap</span>
          </div>
        </div>

        {/* Input Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col gap-4 sm:flex-row max-w-md mx-auto mt-8"
        >
          {!joined ? (
            <div className="flex flex-col items-center w-full max-w-xl mx-auto mt-16 gap-8">
              
              {/* 1. Centered Form Group */}
              <form 
                className="flex flex-col sm:flex-row w-full gap-3 justify-center items-center" 
                onSubmit={handleJoinWaitlist}
              >
                <input 
                  name="email"
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 w-full sm:w-80 outline-none focus:border-emerald-500/50 transition-all text-white text-center sm:text-left"
                  required
                />
                <button 
                  type="submit"
                  className="bg-[#00FF85] text-[#050505] font-bold px-10 py-4 rounded-xl hover:shadow-[0_0_20px_rgba(0,255,133,0.4)] transition-all whitespace-nowrap w-full sm:w-auto"
                >
                  Join Waitlist
                </button>
              </form>

              {/* 2. High-Visibility Trust Line (Aligned & Brighter) */}
              <div className="flex items-center justify-center gap-3 text-slate-300">
                <span className="text-emerald-500 text-lg shrink-0">🔒</span>
                <p className="text-[11px] uppercase tracking-[0.15em] font-semibold text-center leading-tight">
                  Bank-level encryption <span className="mx-2 text-slate-600">•</span> Read-only access <span className="mx-2 text-slate-600">•</span> No transactions stored
                </p>
              </div>
              
            </div>
          ) : (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-full bg-[#10B981]/10 border border-[#10B981]/20 rounded-lg p-6 text-center backdrop-blur-sm"
            >
              <p className="text-[#10B981] font-medium mb-2 uppercase tracking-widest text-xs">Position Secured</p>
              <p className="text-4xl font-bold text-white mb-1">#{position.toLocaleString()}</p>
              <p className="text-sm text-slate-400 mt-2">Refer 3 friends to unlock <span className="text-[#10B981]">Early Access</span>.</p>
            </motion.div>
          )}
        </motion.div>
        
        {/* Footer */}
        <motion.div
       initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}

           className="pt-12 flex items-center justify-center gap-6 text-slate-600 text-sm"
        >
            <span>Compatible with</span>
            <div className="flex gap-4 opacity-50 grayscale">
               <span className="font-bold text-slate-400">PLAID</span>
               <span className="font-bold text-slate-400">ZOYA</span>
            </div>
        </motion.div>

      </div>
      {/* Security & How It Works Section */}
      <HowItWorks />
      {/* Founder's Mission Note */}
      <Mission />
      {/* Human Footer & Legal Links */}
      <Footer />
    </main>
  );
}

