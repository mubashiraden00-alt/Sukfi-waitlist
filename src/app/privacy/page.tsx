export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#050B15] text-slate-300 p-8 md:p-24 font-sans leading-relaxed">
      <div className="max-w-3xl mx-auto bg-[#0A101C] p-10 rounded-[32px] border border-white/5 shadow-2xl">
        {/* THE ANCHOR: Real Date + Real Entity */}
        <div className="mb-12 border-b border-white/5 pb-8">
          <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">Privacy Policy</h1>
          <p className="text-emerald-400 font-bold text-xs uppercase tracking-widest">
            Sukfi Technologies — October 2024 Update
          </p>
        </div>

        <section className="mb-10">
          <h2 className="text-white font-bold mb-3">1. Our Relationship with Plaid</h2>
          <p className="text-sm leading-7">
            To provide our purification analysis, we use **Plaid** to connect to your financial institution. **Sukfi never sees or stores your bank credentials.** You log in directly through Plaid's secure portal. We only receive a secure, **read-only** token to analyze transaction data for Shariah compliance.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-white font-bold mb-3">2. Data Security & Encryption</h2>
          <p className="text-sm leading-7">
            All data is encrypted using **AES-256 (Bank-Level)** encryption. We do not sell, rent, or trade your personal information to third parties. Our business model is based on premium automation features, not data monetization.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-white font-bold mb-3">3. Contact & Location</h2>
          <p className="text-sm leading-7">
            Sukfi Technologies is based in **[Your City, State/Country]**. For any questions regarding your data or our purification logic, please contact our team at:
            <br />
            <span className="text-emerald-400 font-mono mt-2 block italic">hello@sukfi.com</span>
          </p>
        </section>

        <div className="pt-8 border-t border-white/5 flex justify-between items-center">
          <a href="/" className="text-xs font-bold text-slate-500 hover:text-emerald-400 transition uppercase tracking-widest">
            Back to Home
          </a>
          <p className="text-[10px] text-slate-600 italic uppercase">
            Sukfi is a technology platform, not a licensed financial advisor.
          </p>
        </div>
      </div>
    </div>
  );
}
