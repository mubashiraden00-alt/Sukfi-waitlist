export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#050B15] text-gray-300 p-8 md:p-24 font-sans leading-relaxed">
      <div className="max-w-3xl mx-auto bg-[#0A101C] p-10 rounded-[32px] border border-white/5">
        <h1 className="text-4xl font-bold text-white mb-8 tracking-tight">Privacy Policy</h1>
        <p className="mb-6 text-sm text-gray-400 italic">Last Updated: February 27, 2026</p>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-brand-green mb-4 uppercase tracking-widest text-[12px]">1. Data Collection</h2>
          <p className="mb-4">Sukfi uses **Plaid** to connect to your financial institutions. We do not see or store your bank login credentials (username or password). Your credentials are encrypted and handled directly by Plaid.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-brand-green mb-4 uppercase tracking-widest text-[12px]">2. How We Use Your Data</h2>
          <p className="mb-4">We only access your transaction history to provide the **Purification Engine** service. This is a **Read-Only** connection. We cannot move money, make transfers, or change any settings on your bank account.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-brand-green mb-4 uppercase tracking-widest text-[12px]">3. Data Storage & Encryption</h2>
          <p className="mb-4">All transaction data analyzed is encrypted at rest and in transit. We do not sell your personal data or financial history to third parties. Our goal is spiritual clarity, not data brokerage.</p>
        </section>

        <section className="mb-10 text-xs text-gray-500 border-t border-white/5 pt-8">
          <p className="mb-2">Sukfi is a financial tool, not a licensed financial advisor. By using this service, you agree to our terms of service.</p>
          <p>For inquiries, contact us at <span className="text-brand-green">hello@sukfi.com</span></p>
        </section>

        <a href="/" className="inline-block mt-8 text-brand-green font-bold hover:underline">Back to Home</a>
      </div>
    </div>
  );
}
