const TRADITIONAL = [
  { text: 'Days of server setup & configuration' },
  { text: 'SSH access required for every deploy' },
  { text: 'Manual SSL certificate management' },
  { text: 'You provision & patch all servers' },
  { text: 'Third-party monitoring tools required' },
  { text: 'Manual scaling — risk of downtime' }
];

const RUNLO = [
  { text: 'Connect GitHub and deploy in minutes' },
  { text: 'One click — no SSH, no terminal' },
  { text: 'Automatic HTTPS on every deployment' },
  { text: 'Fully managed infrastructure' },
  { text: 'Built-in logs & monitoring dashboard' },
  { text: 'Auto-scaling, zero downtime deploys' }
];

const STATS = [
  { value: '10×', label: 'Faster than traditional hosting', color: '#3b82f6' },
  { value: '< 3m', label: 'Average time to production', color: '#6366f1' },
  { value: '99.9%', label: 'Uptime SLA guaranteed', color: '#059669' }
];

export default function Comparison() {
  return (
    <section id="why-runlo" className="relative py-28 overflow-hidden">
      <div className="section-divider mb-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-28">
        {/* ── Header ── */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-[#3b82f6] font-medium mb-4">Why Runlo</p>
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-5">
            Stop fighting infrastructure.
            <br />
            <span className="gradient-text-blue">Start shipping faster.</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">See what developers give up vs. what they gain with Runlo.</p>
        </div>

        {/* ── Cards ── */}
        <div className="relative flex flex-col lg:flex-row items-stretch gap-4 lg:gap-0 mb-10 lg:items-center">
          {/* ─ Traditional — muted, de-emphasized ─ */}
          <div
            className="flex-1 rounded-2xl lg:rounded-r-none p-8 flex flex-col lg:pr-10"
            style={{
              background: '#f8fafc',
              border: '1px solid rgba(0,0,0,0.07)',
              borderRight: '0'
            }}>
            {/* Label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.08)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.7">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <p className="text-slate-500 font-semibold text-sm">Traditional Hosting</p>
                <p className="text-slate-400 text-xs">VPS · bare metal · DIY</p>
              </div>
            </div>

            {/* Items */}
            <ul className="space-y-3 flex-1">
              {TRADITIONAL.map(({ text }) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(239,68,68,0.09)' }}>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1.5 1.5l5 5M6.5 1.5l-5 5" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span className="text-slate-400 text-sm leading-relaxed line-through decoration-slate-300">{text}</span>
                </li>
              ))}
            </ul>

            {/* Bottom tag */}
            <div className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
              <div className="inline-flex items-center gap-2 text-xs text-slate-400">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#94a3b8" strokeWidth="1.5">
                  <circle cx="6" cy="6" r="5" />
                  <path d="M6 4v2.5L7.5 8" strokeLinecap="round" />
                </svg>
                Days lost to DevOps every sprint
              </div>
            </div>
          </div>

          {/* ─ Runlo — larger, elevated, overlapping ─ */}
          <div
            className="flex-1 rounded-2xl p-9 py-12 flex flex-col relative overflow-hidden lg:-ml-12"
            style={{
              background: 'linear-gradient(160deg, #0f172a 0%, #1e1b4b 100%)',
              border: '1px solid rgba(99,102,241,0.45)',
              boxShadow: '0 0 0 1px rgba(99,102,241,0.12), 0 32px 80px rgba(99,102,241,0.28), 0 8px 32px rgba(0,0,0,0.2)'
            }}>
            {/* Glow spot top-right */}
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)' }} />
            {/* Top border glow */}
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent 10%, #6366f1 50%, transparent 90%)' }} />

            {/* Label */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)' }}>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M8 2L14 13H2L8 2Z" fill="white" fillOpacity="0.9" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Runlo</p>
                  <p className="text-[11px]" style={{ color: '#818cf8' }}>
                    Cloud deployment platform
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full" style={{ background: 'rgba(34,197,94,0.15)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.25)' }}>
                ✓ Recommended
              </span>
            </div>

            {/* Items */}
            <ul className="space-y-3 flex-1">
              {RUNLO.map(({ text }) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(34,197,94,0.18)', border: '1px solid rgba(34,197,94,0.25)' }}>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1 4l2.2 2.5L7 1.5" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-slate-200 text-sm leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>

            {/* Bottom CTA */}
            <div className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <a href="#" className="btn-primary w-full py-3 text-sm font-semibold justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M7 2.5L11.5 7 7 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Start Deploying — It&apos;s Free
              </a>
            </div>
          </div>
        </div>

        {/* ── Stats ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {STATS.map(({ value, label, color }) => (
            <div key={label} className="rounded-2xl p-5 text-center bg-white" style={{ border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
              <div className="text-3xl font-bold mb-1" style={{ color }}>
                {value}
              </div>
              <div className="text-slate-500 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
