const FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    ),
    color: '#3b82f6',
    title: 'GitHub Integration',
    description: 'Connect your repositories in seconds and deploy automatically on every push to any branch.'
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: '#f59e0b',
    title: 'Instant Deployments',
    description: 'Build and deploy applications with a single click. From push to production in under three minutes.'
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" strokeLinecap="round" />
      </svg>
    ),
    color: '#8b5cf6',
    title: 'Managed Infrastructure',
    description: 'Runlo provisions and manages all servers for you. No VPS to configure, no OS to patch.'
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: '#22c55e',
    title: 'Automatic SSL',
    description: 'Every deployment includes HTTPS by default. SSL certificates are provisioned and renewed automatically.'
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
    color: '#06b6d4',
    title: 'Logs & Monitoring',
    description: 'View real-time deployment logs and application status from a single dashboard, no third-party tools needed.'
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    color: '#ec4899',
    title: 'Custom Domains',
    description: 'Connect your own domain in seconds with automatic DNS instructions and instant SSL provisioning.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-28 overflow-hidden">
      {/* Background accent */}
      <div
        className="orb"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
          top: '20%',
          right: '-5%'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-[#3b82f6] font-medium mb-4">Everything you need</p>
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-5">Built for modern teams</h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto leading-relaxed">
            From code to production in minutes. Runlo handles the entire deployment lifecycle so you can focus on shipping features.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map(({ icon, color, title, description }, i) => (
            <FeatureCard key={title} icon={icon} color={color} title={title} description={description} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, color, title, description, delay }: { icon: React.ReactNode; color: string; title: string; description: string; delay: number }) {
  return (
    <div className="glass-card rounded-2xl p-6" style={{ animationDelay: `${delay}ms` }}>
      {/* Icon badge */}
      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: `${color}18`, color }}>
        {icon}
      </div>

      <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
      <p className="text-[#64748b] text-sm leading-relaxed">{description}</p>

      {/* Bottom accent line */}
      <div className="mt-5 h-px" style={{ background: `linear-gradient(90deg, ${color}30, transparent)` }} />
    </div>
  );
}
