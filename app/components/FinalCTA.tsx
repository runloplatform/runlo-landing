export default function FinalCTA() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="section-divider mb-0" />

      {/* Background gradient */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(59,130,246,0.1) 0%, rgba(99,102,241,0.06) 40%, transparent 70%)' }} />
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Blue orb center-top */}
      <div
        className="orb"
        style={{
          width: '500px',
          height: '300px',
          background: 'radial-gradient(ellipse, rgba(59,130,246,0.2) 0%, transparent 70%)',
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)'
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-28">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-[#94a3b8] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" style={{ boxShadow: '0 0 6px #22c55e' }} />
          Ready to deploy your first app?
        </div>

        {/* Headline */}
        <h2 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
          <span className="gradient-text block">Ship faster.</span>
          <span className="gradient-text-blue block">Focus on building.</span>
        </h2>

        {/* Subheadline */}
        <p className="text-[#94a3b8] text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
          Let Runlo handle deployment and infrastructure.
          <br className="hidden sm:block" />
          Your first deployment is free — no credit card required.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="#" className="btn-primary w-full sm:w-auto px-10 py-4 text-base font-semibold">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 2.5L13 8L3 13.5V2.5Z" fill="currentColor" />
            </svg>
            Start Deploying
          </a>
          <a href="#" className="btn-secondary w-full sm:w-auto px-10 py-4 text-base font-medium">
            Book a Demo
          </a>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#334155]">
          {['No credit card required', 'Deploy in under 5 minutes', 'Cancel anytime'].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M1.5 6.5l3.5 3.5 6.5-6.5" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
