export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#050B15] text-slate-300 p-8 md:p-24 font-sans leading-relaxed">
      <div className="max-w-3xl mx-auto bg-[#0A101C] p-10 rounded-[32px] border border-white/5 shadow-2xl">
        {/* HEADER: No more placeholders */}
        <div className="mb-12 border-b border-white/5 pb-8">
          <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">Privacy Policy</h1>
          <p className="text-emerald-400 font-bold text-xs uppercase tracking-widest">
            Sukfi Technologies — Official Update: October 2024
          </p>
        </div>

        {/* SECTION 1: TECHNICAL AUTHENTICATION */}
        <section className="mb-10">
          <h2 className="text-white font-bold mb-3 text-lg">1. Data Integration & Plaid Protocol</h2>
          <p className="text-sm leading-7 text-slate-400">
            Sukfi Technologies utilizes the **Plaid API** for secure financial institution connectivity. **We do not collect, see, or store your bank login credentials.** Authentication occurs via Plaid’s encrypted portal. Sukfi receives a restricted, **read-only** digital token which allows our engine to analyze transaction metadata solely for Shariah-compliance categorization.
          </p>
        </section>

        {/* SECTION 2: ENCRYPTION STANDARDS */}
        <section className="mb-10">
          <h2 className="text-white font-bold mb-3 text-lg">2. Security & Data Retention</h2>
          <p className="text-sm leading-7 text-slate-400">
            All data processed by Sukfi is protected by **AES-256 (Bank-Level) encryption**. We enforce strict data minimization: we do not sell, rent, or monetize user data. Our revenue is derived from premium automation features, ensuring our incentives are aligned with user privacy.
          </p>
        </section>

        {/* SECTION 3: LEGAL JURISDICTION */}
        <section className="mb-12">
          <h2 className="text-white font-bold mb-3 text-lg">3. Contact & Jurisdiction</h2>
          <p className="text-sm leading-7 text-slate-400">
            Sukfi Technologies is headquartered in **Saint Paul, Minnesota, USA**. For data inquiries, rights requests, or technical support, contact our compliance team:
            <br />
            <span className="text-emerald-400 font-mono mt-2 block font-bold">hello@sukfi.com</span>
          </p>
        </section>

        {/* FOOTER: The Anti-Contradiction Shield */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <a href="/" className="text-xs font-bold text-slate-500 hover:text-emerald-400 transition uppercase tracking-widest">
            Back to Home
          </a>
          <div className="text-[10px] text-slate-600 uppercase leading-tight max-w-xs">
            SUKFI TECHNOLOGIES IS A TECHNOLOGY PLATFORM, NOT A LICENSED FINANCIAL ADVISOR OR REGISTERED INVESTMENT FIRM (RIA).
          </div>
        </div>
      </div>
    </div>
  );
}
