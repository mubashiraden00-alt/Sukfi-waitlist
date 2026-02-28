'use client';
import { useState } from 'react';

export const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const formData = new FormData(e.currentTarget);
    
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    if (response.ok) setStatus('success');
    else setStatus('error');
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto bg-brand-glass p-8 rounded-2xl border border-white/10">
      <input name="name" placeholder="Name" required className="w-full bg-black/50 border border-white/10 p-3 rounded-lg text-white focus:border-brand-green outline-none" />
      <input name="email" type="email" placeholder="Email" required className="w-full bg-black/50 border border-white/10 p-3 rounded-lg text-white focus:border-brand-green outline-none" />
      <textarea name="message" placeholder="How can we help?" required rows={4} className="w-full bg-black/50 border border-white/10 p-3 rounded-lg text-white focus:border-brand-green outline-none" />
      <button disabled={status === 'sending'} className="w-full bg-brand-green text-black font-bold py-3 rounded-lg hover:opacity-90 transition disabled:opacity-50">
        {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
      </button>
      {status === 'error' && <p className="text-red-500 text-sm text-center">Something went wrong. Try again.</p>}
    </form>
  );
};
