export const Footer = () => (
  <footer className="border-t border-white/10 py-12 bg-brand-black">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-left">
        <div className="text-brand-green font-bold text-xl mb-2">Sukfi</div>
        <p className="text-gray-500 text-sm max-w-xs">Empowering the Ummah with spiritual financial clarity.</p>
      </div>
      
      <div className="flex gap-8 text-gray-400 text-sm">
        <a href="/privacy" className="hover:text-brand-green transition">Privacy Policy</a>
        <a href="/terms" className="hover:text-brand-green transition">Terms of Service</a>
        <a href="mailto:hello@sukfi.com" className="hover:text-brand-green transition">Contact</a>
      </div>

      <div className="text-xs text-gray-600 text-center md:text-right">
        <p>© 2024 Sukfi. All rights reserved.</p>
        <p className="mt-1 italic">Sukfi is a financial tool, not a licensed investment advisor.</p>
      </div>
    </div>
  </footer>
);
