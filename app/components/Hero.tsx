// Hero — server component, no JS state needed

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16">
      {/* ── Background layers (overflow contained here) ── */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />

        {/* Blue orb — top-left */}
        <div
          className="orb animate-glow"
          style={{
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
            top: '-15%',
            left: '-8%'
          }}
        />
        {/* Purple orb — bottom-right */}
        <div
          className="orb animate-glow delay-500"
          style={{
            width: '700px',
            height: '700px',
            background: 'radial-gradient(circle, rgba(139,92,246,0.09) 0%, transparent 70%)',
            bottom: '-15%',
            right: '-8%'
          }}
        />
        {/* Subtle center orb */}
        <div
          className="orb animate-glow delay-300"
          style={{
            width: '600px',
            height: '400px',
            background: 'radial-gradient(ellipse, rgba(99,102,241,0.05) 0%, transparent 70%)',
            top: '30%',
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        />
      </div>
      {/* end overflow-hidden bg wrapper */}

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full flex-1 flex items-center">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
          {/* ── Left — copy ── */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-slate-500 mb-8 animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" style={{ boxShadow: '0 0 6px #22c55e' }} />
              Now supporting ASP.NET Core &amp; .NET Worker Services
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold tracking-tight leading-[1.06] mb-6">
              <span className="gradient-text block animate-fade-in-up delay-100">Deploy your</span>
              <span className="gradient-text block animate-fade-in-up delay-200">applications</span>
              <span className="gradient-text-blue block animate-fade-in-up delay-300">in minutes.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 animate-fade-in-up delay-400">
              Connect GitHub, select a repository, and deploy instantly. No servers, no SSH, no DevOps headaches.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-12 animate-fade-in-up delay-500">
              <a href="#" className="btn-primary w-full sm:w-auto px-8 py-3 text-base font-medium">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M3 2.5L13 7.5L3 12.5V2.5Z" fill="currentColor" />
                </svg>
                Start Deploying
              </a>
              <a href="#" className="btn-secondary w-full sm:w-auto px-8 py-3 text-base font-medium">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <rect x="1.5" y="2.5" width="12" height="11" rx="1.5" />
                  <path d="M5 2.5V1M10 2.5V1M1.5 6.5h12" />
                </svg>
                Book a Demo
              </a>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 justify-center lg:justify-start animate-fade-in-up delay-600 mb-10">
              {[
                { value: '500+', label: 'Deployments' },
                { value: '99.9%', label: 'Uptime SLA' },
                { value: '< 3min', label: 'Avg. deploy time' }
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="text-2xl font-bold gradient-text-blue">{value}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{label}</div>
                </div>
              ))}
            </div>

            {/* Trusted by — inline on left column */}
            <div className="animate-fade-in-up delay-700 hidden lg:block">
              <TrustedBy />
            </div>
          </div>

          {/* ── Right — deployment visual ── */}
          <div className="flex-1 w-full max-w-lg lg:max-w-[560px] animate-fade-in delay-400">
            <div className="animate-float">
              <DeploymentCard />
            </div>
          </div>
        </div>
      </div>

      {/* ── Trusted by — mobile (below card) ── */}
      <div className="relative z-10 w-full animate-fade-in delay-800 lg:hidden pb-10 px-6">
        <TrustedBy />
      </div>

      {/* ── Scroll indicator ── */}
      <div className="relative z-10 pb-10 flex flex-col items-center gap-2 animate-fade-in delay-800">
        <span className="text-slate-400 text-xs tracking-widest uppercase">Scroll to explore</span>
        <div className="scroll-indicator">
          <div className="scroll-dot" />
        </div>
      </div>

      {/* ── Bottom gradient fade ── */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent, #050d1a)' }} />
    </section>
  );
}

// ─── Trusted by strip ──────────────────────────────────────────────────────

function TrustedBy() {
  return (
    <div>
      <p className="text-xs text-slate-400 uppercase tracking-widest mb-4 text-center lg:text-left">Trusted by developers at</p>
      <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start">
        {[
          { name: 'Acme Corp', abbr: 'acme' },
          { name: 'Buildstack', abbr: 'build' },
          { name: 'DataPilot', abbr: 'data' },
          { name: 'TechFlow', abbr: 'tech' },
          { name: 'NovaSaaS', abbr: 'nova' }
        ].map(({ name, abbr }) => (
          <span key={abbr} className="text-sm font-semibold tracking-tight" style={{ color: '#94a3b8' }}>
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Deployment pipeline card ──────────────────────────────────────────────

function DeploymentCard() {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: 'rgba(8,18,36,0.95)',
        border: '1px solid rgba(255,255,255,0.09)',
        boxShadow: '0 0 100px rgba(59,130,246,0.14), 0 40px 80px rgba(0,0,0,0.6)'
      }}>
      {/* macOS title bar */}
      <div className="flex items-center gap-2 px-5 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="flex-1 text-center text-xs font-mono" style={{ color: '#3b5070' }}>
          Runlo — Deployment Pipeline
        </span>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-0 px-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        {[
          { label: 'Pipeline', active: true },
          { label: 'Logs', active: false },
          { label: 'Metrics', active: false }
        ].map(({ label, active }) => (
          <div key={label} className="px-4 py-2.5 text-xs font-medium relative" style={{ color: active ? '#60a5fa' : '#334155', cursor: 'default' }}>
            {label}
            {active && <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #3b82f6, transparent)' }} />}
          </div>
        ))}
      </div>

      {/* Pipeline content */}
      <div className="p-5 space-y-4 font-mono text-sm">
        {/* Source block */}
        <PipelineBlock icon={<GithubIcon />} label="Source">
          <div className="rounded-xl p-3.5" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <span style={{ color: '#60a5fa' }}>●</span>
                <span className="text-xs" style={{ color: '#e2e8f0' }}>
                  acme / my-saas-app
                </span>
              </div>
              <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(34,197,94,0.1)', color: '#22c55e', border: '1px solid rgba(34,197,94,0.2)' }}>
                push detected
              </span>
            </div>
            <p className="text-xs" style={{ color: '#475569' }}>
              main · <span style={{ color: '#60a5fa' }}>3f9ab12</span> · feat: add user dashboard
            </p>
          </div>
        </PipelineBlock>

        <Connector />

        {/* Build steps */}
        <PipelineBlock icon={<RunloIconSmall />} label="Build">
          <div className="rounded-xl p-3.5 space-y-2.5" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}>
            {[
              { dot: '✓', label: 'Clone repository', time: '0.8s', state: 'done' },
              { dot: '✓', label: 'Install dependencies', time: '14.2s', state: 'done' },
              { dot: '◉', label: 'Build application', time: 'running…', state: 'active' },
              { dot: '○', label: 'Deploy to production', time: 'waiting', state: 'pending' }
            ].map(({ dot, label, time, state }) => (
              <div key={label} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <span className={state === 'active' ? 'animate-blink' : ''} style={{ color: state === 'done' ? '#22c55e' : state === 'active' ? '#60a5fa' : '#2d3e55' }}>
                    {dot}
                  </span>
                  <span style={{ color: state === 'done' ? '#94a3b8' : state === 'active' ? '#e2e8f0' : '#2d3e55' }}>{label}</span>
                </div>
                <span style={{ color: state === 'done' ? '#22c55e' : state === 'active' ? '#60a5fa' : '#2d3e55' }}>{time}</span>
              </div>
            ))}
            {/* Progress bar */}
            <div className="mt-2 h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
              <div className="h-full rounded-full animate-progress-fill" style={{ background: 'linear-gradient(90deg, #3b82f6, #6366f1)' }} />
            </div>
          </div>
        </PipelineBlock>

        <Connector />

        {/* Production block */}
        <PipelineBlock icon={<GlobeIcon />} label="Production">
          <div className="rounded-xl p-3.5" style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs" style={{ color: '#e2e8f0' }}>
                https://my-saas-app.runlo.app
              </span>
              <span className="flex items-center gap-1.5 text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(34,197,94,0.1)', color: '#22c55e', border: '1px solid rgba(34,197,94,0.2)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" style={{ animation: 'blink 1.8s ease-in-out infinite' }} />
                Live
              </span>
            </div>
            <div className="flex gap-4 text-xs" style={{ color: '#475569' }}>
              <span>🔒 SSL active</span>
              <span>⚡ 2ms</span>
              <span>● Healthy</span>
            </div>
          </div>
        </PipelineBlock>
      </div>

      {/* ── Metrics footer strip ── */}
      <div
        className="px-5 py-3.5 grid grid-cols-4 gap-4"
        style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          background: 'rgba(255,255,255,0.018)'
        }}>
        {[
          { label: 'Build time', value: '48s', color: '#60a5fa' },
          { label: 'Deploys', value: '124', color: '#a78bfa' },
          { label: 'Uptime', value: '99.9%', color: '#34d399' },
          { label: 'Regions', value: '3', color: '#fb923c' }
        ].map(({ label, value, color }) => (
          <div key={label} className="text-center">
            <div className="text-xs font-semibold font-mono" style={{ color }}>
              {value}
            </div>
            <div className="text-[10px] mt-0.5" style={{ color: '#2d3e55' }}>
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* ── Mini terminal logs strip ── */}
      <div
        className="px-5 py-3.5 font-mono"
        style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          background: 'rgba(0,0,0,0.25)'
        }}>
        <div className="flex items-center gap-2 mb-2">
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#1d2d3e]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#1d2d3e]" />
          </div>
          <span className="text-[10px]" style={{ color: '#2d3e55' }}>
            deployment logs
          </span>
        </div>
        {[
          { prefix: '$', text: 'dotnet publish -c Release', color: '#60a5fa' },
          { prefix: '›', text: 'Build succeeded. (12.4s)', color: '#22c55e' },
          { prefix: '›', text: 'Uploading artifact… 100%', color: '#94a3b8' },
          { prefix: '›', text: 'Container ready. Routing traffic ✓', color: '#34d399' }
        ].map(({ prefix, text, color }, i) => (
          <div key={i} className="flex items-start gap-2 text-[11px] leading-5">
            <span style={{ color: '#2d3e55' }}>{prefix}</span>
            <span style={{ color }}>{text}</span>
          </div>
        ))}
        {/* Blinking cursor */}
        <div className="flex items-center gap-2 text-[11px] mt-0.5">
          <span style={{ color: '#2d3e55' }}>$</span>
          <span className="animate-blink" style={{ color: '#3b82f6' }}>
            █
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Sub-components ────────────────────────────────────────────────────────

function PipelineBlock({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2.5">
        {icon}
        <span className="text-[10px] uppercase tracking-widest font-sans" style={{ color: '#334155' }}>
          {label}
        </span>
      </div>
      {children}
    </div>
  );
}

function Connector() {
  return (
    <div className="flex items-center gap-3 py-0.5">
      <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.25), transparent)' }} />
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
        <path d="M8 2v12M2 8l6 6 6-6" stroke="#3b82f6" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.25), transparent)' }} />
    </div>
  );
}

function GithubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="#334155">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function RunloIconSmall() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
      <rect width="14" height="14" rx="3" fill="rgba(59,130,246,0.15)" />
      <path d="M7 2.5L11.5 11H2.5L7 2.5Z" fill="#3b82f6" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="1.8">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}
