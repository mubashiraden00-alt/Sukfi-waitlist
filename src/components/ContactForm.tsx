
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
    <div className="bg-zinc-950/50 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Contact Support</h2>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Input */}
        <div>
          <label className="text-xs uppercase tracking-widest text-gray-500 mb-2 block">Full Name</label>
          <input 
            name="name" 
            placeholder="Mubashir" 
            required 
            className="w-full bg-white/5 border border-white/10 p-3 rounded-lg text-white placeholder:text-gray-600 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all" 
          />
        </div>

        {/* Email Input */}
        <div>
          <label className="text-xs uppercase tracking-widest text-gray-500 mb-2 block">Email Address</label>
          <input 
            name="email" 
            type="email" 
            placeholder="servantofallah@gmail.com" 
            required 
            className="w-full bg-white/5 border border-white/10 p-3 rounded-lg text-white placeholder:text-gray-600 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all" 
          />
        </div>

        {/* Message Input */}
        <div>
          <label className="text-xs uppercase tracking-widest text-gray-500 mb-2 block">Message</label>
          <textarea 
            name="message" 
            placeholder="How can we help with your purification journey?" 
            required 
            rows={4} 
            className="w-full bg-white/5 border border-white/10 p-3 rounded-lg text-white placeholder:text-gray-600 focus:border-brand-green focus:ring-1 focus:ring-brand-green outline-none transition-all resize-none" 
          />
        </div>

        {/* Submit Button */}
        <button 
          disabled={status === 'sending'} 
          className="w-full bg-brand-green text-black font-bold py-4 rounded-lg hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-tighter"
        >
          {status === 'sending' ? 'Sending...' : status === 'success' ? '✓ Message Received' : 'Send Message'}
        </button>

        {status === 'error' && (
          <p className="text-red-400 text-xs text-center font-medium animate-pulse">
            Error sending message. Please try again.
          </p>
        )}
      </form>
    </div>
  );
};
