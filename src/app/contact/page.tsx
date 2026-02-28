'use client';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md bg-slate-900 border border-white/5 p-10 rounded-3xl shadow-2xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Get in Touch</h1>
          <p className="text-slate-500 text-sm">We are here to help with your purification journey.</p>
        </div>
        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-slate-500 ml-1 font-bold">Your Name</label>
            <input 
              name="name"
              placeholder="Name" 
              className="w-full bg-slate-950 border border-white/10 p-4 rounded-2xl text-white placeholder:text-slate-800 focus:border-emerald-400 outline-none transition-all" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-slate-500 ml-1 font-bold">Email Address</label>
            <input 
              name="email"
              type="email"
              placeholder="name@email.com" 
              className="w-full bg-slate-950 border border-white/10 p-4 rounded-2xl text-white placeholder:text-slate-800 focus:border-emerald-400 outline-none transition-all" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-slate-500 ml-1 font-bold">Your Question</label>
            <textarea 
              name="message"
              rows={4}
              placeholder="How can we help?" 
              className="w-full bg-slate-950 border border-white/10 p-4 rounded-2xl text-white placeholder:text-slate-800 focus:border-emerald-400 outline-none transition-all resize-none" 
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-emerald-400 text-slate-950 font-black py-4 rounded-full hover:brightness-110 active:scale-95 transition-all uppercase tracking-widest text-xs mt-4"
          >
            Send Message
          </button>
        </form>
      </div>
      {/* NEON BUBBLE: Removed the arrow symbol to prevent Unicode errors */}
      <a href="/" className="mt-12 flex items-center gap-2 px-8 py-3 bg-emerald-400/10 border border-emerald-400/20 rounded-full hover:bg-emerald-400/20 transition-all">
        <span className="text-emerald-400 text-xs uppercase tracking-widest font-black">
          Back to Sukfi
        </span>
      </a>
    </div>
  );
}
