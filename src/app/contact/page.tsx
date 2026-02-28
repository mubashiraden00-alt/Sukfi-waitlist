'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState('idle');

  return (
    <div className="min-h-screen bg-[#050B15] flex flex-col items-center justify-center p-6 font-sans">
      <div className="w-full max-w-md bg-[#0A101C] border border-white/5 p-10 rounded-[32px] shadow-2xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Get in Touch</h1>
          <p className="text-gray-500 text-sm">We're here to help with your purification journey.</p>
        </div>
        <form className="space-y-6">
          {/* BOX 1: NAME */}
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-gray-500 ml-1 font-bold">Your Name</label>
            <input 
              name="name"
              placeholder="Mubashir" 
              className="w-full bg-[#050B15] border border-white/10 p-4 rounded-2xl text-white placeholder:text-gray-700 focus:border-[#00FF94] outline-none transition-all" 
            />
          </div>
          {/* BOX 2: EMAIL */}
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-gray-500 ml-1 font-bold">Email Address</label>
            <input 
              name="email"
              type="email"
              placeholder="name@email.com" 
              className="w-full bg-[#050B15] border border-white/10 p-4 rounded-2xl text-white placeholder:text-gray-700 focus:border-[#00FF94] outline-none transition-all" 
            />
          </div>
          {/* BOX 3: THE QUESTION */}
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-gray-500 ml-1 font-bold">Your Question</label>
            <textarea 
              name="message"
              rows={4}
              placeholder="How can we help?" 
              className="w-full bg-[#050B15] border border-white/10 p-4 rounded-2xl text-white placeholder:text-gray-700 focus:border-[#00FF94] outline-none transition-all resize-none" 
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-[#00FF94] text-[#050B15] font-black py-4 rounded-full hover:opacity-90 transition-all uppercase tracking-widest text-xs mt-4 active:scale-95"
          >
            Send Message
          </button>
        </form>
      </div>
      <a href="/" className="mt-8 text-gray-600 text-xs hover:text-white transition uppercase tracking-widest">
        Back to Sukfi
      </a>
    </div>
  );
}
