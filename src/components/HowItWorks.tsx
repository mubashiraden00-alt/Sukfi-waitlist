export const HowItWorks = () => (
  <section className="py-20 px-4 bg-brand-black">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-white mb-12">How we protect your peace of mind</h2>
      <div className="grid md:grid-cols-3 gap-8 text-left">
        <div className="p-6 bg-brand-glass border border-white/5 rounded-xl">
          <div className="text-brand-green mb-4">Read-Only Access</div>
          <p className="text-gray-400 text-sm">We can only view transactions. We can never move money or change settings. Your bank remains in your control.</p>
        </div>
        <div className="p-6 bg-brand-glass border border-white/5 rounded-xl">
          <div className="text-brand-green mb-4">Bank-Level Security</div>
          <p className="text-gray-400 text-sm">We use 256-bit AES encryption via Plaid. Your actual bank credentials never touch our servers.</p>
        </div>
        <div className="p-6 bg-brand-glass border border-white/5 rounded-xl">
          <div className="text-brand-green mb-4">Purely Anonymous</div>
          <p className="text-gray-400 text-sm">We don't store your sensitive identity details. We only care about the numbers that matter for your purification.</p>
        </div>
      </div>
    </div>
  </section>
);
