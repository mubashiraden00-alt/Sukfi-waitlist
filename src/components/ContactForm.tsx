

'use client';
import { useState } from 'react';

export const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      if (response.ok) setStatus('success');
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="bg-[#050B15]/80 backdrop-blur-2xl border border-white/5 p-10 rounded-[24px] shadow-[0_0_50px_rgba(0,255,148,0.05)] max-w-lg mx-auto">
      <h2 className="text-4xl font-bold text-white mb-2 text-center tracking-tight">Get in Touch</h2>
      <p className="text-gray-400 text-center mb-8 text-sm">We're here to help with your purification journey.</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-[0.3em] text-gray-500 ml-1 font-bold">Your Name</label>
          <input 
            name="name" 
            placeholder="Mubashir" 
            className="w-full bg-[#0A101C] border border-white/10 p-4 rounded-xl text-white placeholder:text-gray-700 focus:border-brand-green/50 focus:ring-0 transition-all outline-none" 
          />
        </div>
        {/* MATCHING THE HERO BUTTON */}
        <button 
          disabled={status === 'sending'} 
          className="w-full bg-[#00FF94] text-[#050B15] font-extrabold py-4 rounded-full hover:shadow-[0_0_30px_rgba(0,255,148,0.4)] transition-all active:scale-[0.98] uppercase tracking-widest text-xs"
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};
