const TRADITIONAL = [
  'Manual server setup (hours)',
  'SSH access & configuration',
  'SSL certificate management',
  'Custom deployment scripts',
  'Server monitoring & alerts',
  'OS patching & updates',
  'Manual scaling configuration'
];

const RUNLO = [
  'GitHub connected — deploy in minutes',
  'One-click deployment, no SSH needed',
  'Automatic SSL on every deployment',
  'Managed infrastructure, zero ops',
  'Built-in logs & monitoring dashboard',
  'Automatic updates & security patches',
  'Auto-scaling out of the box'
];

export default function Comparison() {
  return (
    <section id="why-runlo" className="relative py-28 overflow-hidden">
      <div className="section-divider mb-0" />

      {/* Orb */}
      <div
        className="orb"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)',
          bottom: '-10%',
          left: '-5%'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-[#3b82f6] font-medium mb-4">Why Runlo</p>
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-5">Traditional hosting vs. Runlo</h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">Stop spending days on DevOps. Ship features instead.</p>
        </div>

        {/* Comparison grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Traditional side */}
          <div
            className="rounded-2xl p-8"
            style={{
              background: '#ffffff',
              border: '1px solid rgba(0,0,0,0.07)',
              boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 20px rgba(0,0,0,0.05)'
            }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.2)' }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#ef4444" strokeWidth="1.6">
                  <rect x="1" y="3" width="16" height="12" rx="2" />
                  <path d="M5 7h8M5 11h5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h3 className="text-slate-900 font-semibold">Traditional Hosting</h3>
                <p className="text-slate-400 text-xs">VPS, bare metal, DIY</p>
              </div>
            </div>

            <ul className="space-y-3.5">
              {TRADITIONAL.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(239,68,68,0.12)' }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 2l6 6M8 2L2 8" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span className="text-slate-500 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Runlo side */}
          <div
            className="rounded-2xl p-8 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #eff6ff 0%, #f5f3ff 100%)',
              border: '1px solid rgba(59,130,246,0.25)',
              boxShadow: '0 0 40px rgba(59,130,246,0.08), 0 4px 24px rgba(0,0,0,0.06)'
            }}>
            {/* Inner glow */}
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent)' }} />

            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.3), rgba(99,102,241,0.3))', border: '1px solid rgba(99,102,241,0.3)' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L14.5 13H1.5L8 1Z" fill="#60a5fa" />
                </svg>
              </div>
              <div>
                <h3 className="text-slate-900 font-semibold">Runlo</h3>
                <p className="text-[#3b82f6] text-xs">Cloud deployment platform</p>
              </div>
            </div>

            <ul className="space-y-3.5">
              {RUNLO.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(34,197,94,0.15)' }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom stat bar */}
        <div
          className="mt-10 max-w-4xl mx-auto rounded-2xl p-6"
          style={{
            background: '#ffffff',
            border: '1px solid rgba(0,0,0,0.07)',
            boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 20px rgba(0,0,0,0.05)'
          }}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { value: '10x', label: 'Faster deployments', color: '#3b82f6' },
              { value: '0', label: 'Servers to manage', color: '#6366f1' },
              { value: '100%', label: 'Automated infrastructure', color: '#059669' }
            ].map(({ value, label, color }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <span className="text-3xl font-bold" style={{ color }}>
                  {value}
                </span>
                <span className="text-slate-500 text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
