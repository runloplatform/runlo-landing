const STEPS = [
  {
    number: '01',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
    title: 'Connect GitHub',
    description: 'Authorize Runlo to access your repositories with a single OAuth click. No tokens to manage manually.',
    color: '#3b82f6'
  },
  {
    number: '02',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Select Repository',
    description: 'Pick any repository from your GitHub account. Configure environment variables, branch, and runtime.',
    color: '#8b5cf6'
  },
  {
    number: '03',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Deploy',
    description: 'Runlo clones your repo, installs dependencies, builds your application, and provisions infrastructure automatically.',
    color: '#f59e0b'
  },
  {
    number: '04',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    title: 'Go Live',
    description: 'Your app is live with a public URL, automatic HTTPS, and real-time logs. Share it with the world.',
    color: '#22c55e'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-28 overflow-hidden">
      {/* Divider */}
      <div className="section-divider mb-0" />

      {/* Gradient orb */}
      <div
        className="orb"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)',
          top: '10%',
          left: '-10%'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-[#3b82f6] font-medium mb-4">Simple process</p>
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-5">Deploy in 4 steps</h2>
          <p className="text-[#94a3b8] text-lg max-w-xl mx-auto leading-relaxed">From zero to production in minutes. No DevOps knowledge required.</p>
        </div>

        {/* Steps — desktop: horizontal, mobile: vertical */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div
            className="hidden lg:block absolute top-12 left-0 right-0 h-px z-0"
            style={{ background: 'linear-gradient(90deg, transparent 8%, rgba(59,130,246,0.25) 25%, rgba(139,92,246,0.25) 75%, transparent 92%)' }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {STEPS.map(({ number, icon, title, description, color }, i) => (
              <StepCard key={title} number={number} icon={icon} title={title} description={description} color={color} isLast={i === STEPS.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({ number, icon, title, description, color, isLast }: { number: string; icon: React.ReactNode; title: string; description: string; color: string; isLast: boolean }) {
  return (
    <div className="relative flex flex-col items-center text-center lg:items-center">
      {/* Step icon circle */}
      <div
        className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0"
        style={{
          background: `${color}15`,
          border: `1px solid ${color}35`,
          color,
          boxShadow: `0 0 24px ${color}18`
        }}>
        {icon}
        {/* Step number badge */}
        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: color, boxShadow: `0 0 10px ${color}60` }}>
          {number.replace('0', '')}
        </div>
      </div>

      {/* Arrow (between steps, mobile vertical connector) */}
      {!isLast && <div className="lg:hidden w-px h-8 mb-2" style={{ background: `linear-gradient(180deg, ${color}60, transparent)` }} />}

      <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
      <p className="text-[#64748b] text-sm leading-relaxed max-w-xs">{description}</p>
    </div>
  );
}
